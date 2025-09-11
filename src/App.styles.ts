import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding-top: 71px;
`;

export const AppHeader = styled.header`
  background-color: #24292e;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 71px;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const TabNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #d1d5da;
  padding: 0 1rem;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04);
  position: sticky;
  top: 71px;
  z-index: var(--z-index-navigation);

  .dark & {
    background-color: #161b22;
    border-bottom-color: #30363d;
  }
`;

export const TabButton = styled.a<{ $active?: boolean }>`
  padding: 0.75rem 1.25rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.$active ? '#f9826c' : 'transparent'};
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.$active ? '#24292e' : '#586069'};
  transition: all 0.2s ease;
  white-space: nowrap;
  font-weight: ${props => props.$active ? '600' : '500'};
  text-decoration: none;
  display: inline-block;

  &:hover {
    color: #24292e;
    background-color: #f6f8fa;
    text-decoration: none;
  }

  .dark & {
    color: ${props => props.$active ? '#c9d1d9' : '#8b949e'};
    border-bottom-color: ${props => props.$active ? '#f78166' : 'transparent'};

    &:hover {
      color: #c9d1d9;
      background-color: #21262d;
    }
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const TabContent = styled.div`
  display: block;
`;

// Vertical Layout Styles
export const AppBodyVertical = styled.div`
  display: flex;
  flex: 1;
`;

export const SidebarNavigation = styled.nav`
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #d1d5da;
  padding: 1rem 0;
  position: sticky;
  top: 71px;
  height: calc(100vh - 71px);
  overflow-y: auto;
  flex-shrink: 0;

  .dark & {
    background-color: #161b22;
    border-right-color: #30363d;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 60px;
    padding: 0.5rem 0;
  }
`;

export const SidebarTab = styled.a<{ $active?: boolean }>`
  display: block;
  padding: 0.75rem 1.5rem;
  color: ${props => props.$active ? '#24292e' : '#586069'};
  text-decoration: none;
  font-size: 14px;
  font-weight: ${props => props.$active ? '600' : '500'};
  background-color: ${props => props.$active ? '#f6f8fa' : 'transparent'};
  border-left: 3px solid ${props => props.$active ? '#f9826c' : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    background-color: #f6f8fa;
    color: #24292e;
    text-decoration: none;
  }

  .dark & {
    color: ${props => props.$active ? '#c9d1d9' : '#8b949e'};
    background-color: ${props => props.$active ? '#21262d' : 'transparent'};
    border-left-color: ${props => props.$active ? '#f78166' : 'transparent'};

    &:hover {
      background-color: #21262d;
      color: #c9d1d9;
    }
  }

  @media (max-width: 600px) {
    padding: 0.75rem 0.5rem;
    font-size: 12px;
    
    .sidebar-tab-text {
      display: none;
    }
  }
`;

export const MainContentVertical = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  max-width: 100%;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;