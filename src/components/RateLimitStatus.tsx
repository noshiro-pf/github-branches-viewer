import { memo, useCallback, useEffect, useState } from 'react';
import { type RateLimit } from '../types';
import { checkRateLimit } from '../utils/api';
import {
  RateLimitStatusContainer,
  RateLimitToggle,
  RateIndicator,
  RateLimitDetails,
  RateInfo,
  RateBar,
  RateBarFill,
  ResetTime,
  RateWarning,
} from './RateLimitStatus.styles';

const RateLimitStatus = memo(() => {
  const [rateLimit, setRateLimit] = useState<RateLimit | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const loadRateLimit = useCallback(async () => {
    const limit = await checkRateLimit();
    if (limit !== null) {
      setRateLimit(limit);
      // Show warning if rate limit is low
      if (limit.remaining < 10) {
        setShowDetails(true);
      }
    }
  }, []);

  const toggleDetails = useCallback(() => {
    setShowDetails(!showDetails);
  }, [showDetails]);

  useEffect(() => {
    let mut_interval: NodeJS.Timeout | undefined = undefined;

    (async () => {
      await loadRateLimit();
      // Check rate limit every 30 seconds
      mut_interval = setInterval(() => {
        loadRateLimit().catch(() => {});
      }, 30_000);
    })().catch(() => {});

    return () => {
      clearInterval(mut_interval);
    };
  }, [loadRateLimit]);

  if (rateLimit === null) return null;

  const resetTime = new Date(rateLimit.reset * 1000);
  const percentage = (rateLimit.remaining / rateLimit.limit) * 100;

  return (
    <RateLimitStatusContainer>
      <RateLimitToggle
        type={'button'}
        title={'GitHub API Rate Limit'}
        onClick={toggleDetails}
      >
        <RateIndicator $isLow={percentage < 20}>
          {rateLimit.remaining}
          {'/'}
          {rateLimit.limit}
        </RateIndicator>
      </RateLimitToggle>

      {showDetails ? (
        <RateLimitDetails>
          <h3>{'GitHub API Rate Limit'}</h3>
          <RateInfo>
            <RateBar>
              <RateBarFill $width={percentage} />
            </RateBar>
            <p>
              <strong>{rateLimit.remaining}</strong>
              {' of'} <strong>{rateLimit.limit}</strong> {'requests remaining'}
            </p>
            <ResetTime>
              {'Resets at '}
              {resetTime.toLocaleTimeString()}
            </ResetTime>
            {percentage < 20 ? (
              <RateWarning>
                {
                  '⚠️ Rate limit is low. Consider adding a GitHub token to increase'
                }
                {'limits.'}
                <br />
                <small>{'See .env.example for instructions'}</small>
              </RateWarning>
            ) : null}
          </RateInfo>
        </RateLimitDetails>
      ) : null}
    </RateLimitStatusContainer>
  );
});

RateLimitStatus.displayName = 'RateLimitStatus';

export default RateLimitStatus;
