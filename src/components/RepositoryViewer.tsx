import { memo, useCallback } from 'react';
import  { type Repository } from '../types';
import GitHubBranches from './GitHubBranches';
import ReadmeSectionBody from './ReadmeSectionBody';

type Props = Readonly<{
  repository: Repository;
}>

const RepositoryViewer = memo<Props>(({ repository }) => {
  const handleGitHubRefresh = useCallback(() => {
    console.log('GitHub data refreshed');
  }, []);

  const handleReadmeRefresh = useCallback(() => {
    console.log('README data refreshed');
  }, []);

  return (
    <div className={"repository-viewer"}>
      <section className={"github-section"} id={"github-branches"}>
        <GitHubBranches
          repository={repository}
          onRefresh={handleGitHubRefresh}
        />
      </section>

      <section className={"readme-section"} id={"readme"}>
        <ReadmeSectionBody
          repository={repository}
          onRefresh={handleReadmeRefresh}
        />
      </section>
    </div>
  );
});

RepositoryViewer.displayName = 'RepositoryViewer';

export default RepositoryViewer;
