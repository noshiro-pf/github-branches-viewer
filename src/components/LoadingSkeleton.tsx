import { memo } from 'react';
import './LoadingSkeleton.css';

const BranchSkeleton = memo(() => (
    <tr className={"branch-row"}>
      <td className={"branch-name-col"}>
        <div className={"branch-name-wrapper"}>
          <div className={"skeleton-branch-name"} />
          <div className={"skeleton-icon"} />
          <div className={"skeleton-badge"} />
        </div>
      </td>
      <td className={"branch-updated-col"}>
        <div className={"skeleton-date"} />
      </td>
      <td className={"branch-status-col"}>
        <div className={"skeleton-icon"} />
      </td>
      <td className={"branch-ahead-behind-col"}>
        <div className={"skeleton-stats"} />
      </td>
      <td className={"branch-pr-col"}>
        <div className={"skeleton-pr"} />
      </td>
      <td className={"branch-actions-col"}>
        <div className={"skeleton-icon"} />
      </td>
    </tr>
  ));

BranchSkeleton.displayName = 'BranchSkeleton';

type BranchesLoadingSkeletonProps = Readonly<{
  count?: number;
}>

const BranchesLoadingSkeleton = memo(
  ({ count = 3 }: BranchesLoadingSkeletonProps) => (
      <div className={"github-branches"}>
        <div className={"github-header"}>
          <div className={"github-section-links"}>
            <span className={"github-section-title skeleton-title"} />
            <span className={"github-settings-link skeleton-link"} />
          </div>
          <div className={"skeleton-button-small"} />
        </div>

        <div className={"branches-table-container"}>
          <table className={"branches-table"}>
            <thead>
              <tr className={"branches-header-row"}>
                <td className={"branch-count-cell"} colSpan={6}>
                  <span className={"skeleton-count"} />
                </td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: count }, (_, i) => (
                <BranchSkeleton key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
);

BranchesLoadingSkeleton.displayName = 'BranchesLoadingSkeleton';

export default BranchesLoadingSkeleton;
