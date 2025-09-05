import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { memo, useCallback, useState } from 'react';
import { type GitHubCheckRun } from '../types';
import './CheckStatus.css';

type CheckStatusProps = Readonly<{
  checks?: {
    total: number;
    passing: number;
    failing: number;
    pending: number;
    successful?: number;
    failed?: number;
    runs: GitHubCheckRun[];
  };
  checkStatus?: string;
}>;

const CheckStatus = memo(({ checks, checkStatus }: CheckStatusProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift({ padding: 5 }),
    ],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const getStatusIcon = useCallback((checkStatus: string): string => {
    switch (checkStatus) {
      case 'success':
        return '✓';
      case 'failure':
        return '✗';
      case 'pending':
        return '⋯';
      default:
        return '—';
    }
  }, []);

  const getStatusText = useCallback((run: GitHubCheckRun): string => {
    if (run.conclusion) {
      return run.conclusion.charAt(0).toUpperCase() + run.conclusion.slice(1);
    }
    if (run.status) {
      return run.status.charAt(0).toUpperCase() + run.status.slice(1);
    }
    return 'Unknown';
  }, []);

  const formatDuration = useCallback(
    (
      startedAt: string | undefined,
      completedAt: string | undefined,
    ): string => {
      if (startedAt === undefined) return '';
      if (completedAt === undefined) return 'Running...';

      const start = new Date(startedAt);
      const end = new Date(completedAt);
      const duration = Math.round((end.getTime() - start.getTime()) / 1000); // seconds

      if (duration < 60) return `${duration}s`;
      if (duration < 3600)
        return `${Math.floor(duration / 60)}m ${duration % 60}s`;
      return `${Math.floor(duration / 3600)}h ${Math.floor((duration % 3600) / 60)}m`;
    },
    [],
  );

  const hideDetails = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (!checks || checks.total === 0) {
    return null;
  }

  return (
    <>
      <button
        ref={refs.setReference}
        className={`check-summary checks-${checkStatus}`}
        title={`${checks.successful ?? checks.passing}/${checks.total} checks passing`}
        type="button"
        {...getReferenceProps()}
      >
        <span className={'check-icon'}>{getStatusIcon(checkStatus ?? '')}</span>
        <span className={'check-count'}>
          {checks.successful ?? checks.passing}
          {'/'}
          {checks.total}
        </span>
      </button>

      {isOpen ? (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={'check-details'}
            {...getFloatingProps()}
          >
          <div className={'check-details-header'}>
            <h4>{'Checks'}</h4>
            <button className={'check-details-close'} type="button" onClick={hideDetails}>
              {'✕'}
            </button>
          </div>

          <div className={'check-runs-list'}>
            {checks.runs.map((run, index) => (
              <div key={index} className={'check-run-item'}>
                <div className={'check-run-main'}>
                  <span
                    className={`check-run-icon status-${run.conclusion ?? run.status}`}
                  >
                    {getStatusIcon(run.conclusion ?? run.status)}
                  </span>
                  <div className={'check-run-info'}>
                    <div className={'check-run-name'}>{run.name}</div>
                    <div className={'check-run-status'}>
                      {getStatusText(run)}
                      {run.started_at !== undefined ? (
                        <span className={'check-run-duration'}>
                          {'— '}
                          {formatDuration(run.started_at, run.completed_at)}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                {run.html_url !== '' ? (
                  <a
                    className={'check-run-link'}
                    href={run.html_url}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
                  >
                    {'View details'}
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          {(checks.failed ?? 0) > 0 ? (
            <div className={'check-summary-info failure'}>
              {checks.failed ?? 0}
              {' failing, '}
              {checks.successful ?? 0}
              {' successful,'} {checks.pending} {'pending'}
            </div>
          ) : null}
          {(checks.failed ?? 0) === 0 && checks.pending > 0 ? (
            <div className={'check-summary-info pending'}>
              {checks.successful ?? 0}
              {' successful, '}
              {checks.pending} {'pending'}
            </div>
          ) : null}
          {(checks.failed ?? 0) === 0 && checks.pending === 0 ? (
            <div className={'check-summary-info success'}>
              {'All checks have passed'}
            </div>
          ) : null}
          </div>
        </FloatingPortal>
      ) : null}
    </>
  );
});

CheckStatus.displayName = 'CheckStatus';

export default CheckStatus;
