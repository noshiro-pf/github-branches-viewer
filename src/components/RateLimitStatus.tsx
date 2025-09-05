import { memo, useCallback, useEffect, useState } from 'react';
import { type RateLimit } from '../types';
import { checkRateLimit } from '../utils/api';
import './RateLimitStatus.css';

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
    <div className={'rate-limit-status'}>
      <button
        type={'button'}
        className={'rate-limit-toggle'}
        title={'GitHub API Rate Limit'}
        onClick={toggleDetails}
      >
        <span
          className={`rate-indicator ${percentage < 20 ? 'low' : 'normal'}`}
        >
          {rateLimit.remaining}
          {'/'}
          {rateLimit.limit}
        </span>
      </button>

      {showDetails ? (
        <div className={'rate-limit-details'}>
          <h3>{'GitHub API Rate Limit'}</h3>
          <div className={'rate-info'}>
            <div className={'rate-bar'}>
              <div
                className={'rate-bar-fill'}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p>
              <strong>{rateLimit.remaining}</strong>
              {' of'} <strong>{rateLimit.limit}</strong> {'requests remaining'}
            </p>
            <p className={'reset-time'}>
              {'Resets at '}
              {resetTime.toLocaleTimeString()}
            </p>
            {percentage < 20 ? (
              <div className={'rate-warning'}>
                {
                  '⚠️ Rate limit is low. Consider adding a GitHub token to increase'
                }
                {'limits.'}
                <br />
                <small>{'See .env.example for instructions'}</small>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
});

RateLimitStatus.displayName = 'RateLimitStatus';

export default RateLimitStatus;
