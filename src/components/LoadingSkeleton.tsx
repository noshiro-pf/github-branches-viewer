import { memo } from 'react';

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

type Props = Readonly<{
  count?: number;
}>

const BranchesLoadingSkeleton = memo<Props>(
  ({ count = 3 }) => (
      <div className={"github-branches"}>
        <div className={"github-header"}>
          <span className={"github-section-title skeleton-title"} />
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
