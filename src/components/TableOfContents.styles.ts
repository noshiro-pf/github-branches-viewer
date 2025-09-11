import styled from '@emotion/styled';

export const TableOfContentsNav = styled.nav`
  position: fixed;
  top: 100px;
  right: 20px;
  width: 200px;
  background-color: white;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(27, 31, 35, 0.12);
  z-index: var(--z-index-navigation);
  max-height: calc(100vh - 120px);
  overflow-y: auto;

  .dark & {
    background-color: #161b22;
    border-color: #30363d;
    box-shadow: 0 1px 3px rgba(1, 4, 9, 0.12);
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const TocHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e1e4e8;
  font-weight: 600;
  font-size: 14px;
  color: #24292e;

  .dark & {
    border-bottom-color: #30363d;
    color: #c9d1d9;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TocList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TocItem = styled.li`
  margin-bottom: 0.25rem;
`;

export const TocLink = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  color: ${props => props.$active ? '#0366d6' : '#586069'};
  font-weight: ${props => props.$active ? '600' : '400'};
  background-color: ${props => props.$active ? '#f6f8fa' : 'transparent'};
  transition: all 0.2s ease;
  text-align: left;

  &:hover {
    background-color: #f6f8fa;
    color: #0366d6;
  }

  .dark & {
    color: ${props => props.$active ? '#58a6ff' : '#8b949e'};
    background-color: ${props => props.$active ? '#21262d' : 'transparent'};

    &:hover {
      background-color: #21262d;
      color: #58a6ff;
    }
  }
`;

export const TocIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TocLabel = styled.span`
  flex: 1;
`;