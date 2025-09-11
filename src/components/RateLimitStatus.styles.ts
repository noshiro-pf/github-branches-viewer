import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const RateLimitStatusContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: var(--z-index-overlay);
`;

export const RateLimitToggle = styled.button`
  background-color: white;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(27, 31, 35, 0.12);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 3px 6px rgba(27, 31, 35, 0.15);
  }

  .dark & {
    background-color: #21262d;
    border-color: #30363d;
    color: #c9d1d9;
    box-shadow: 0 1px 3px rgba(1, 4, 9, 0.12);

    &:hover {
      box-shadow: 0 3px 6px rgba(1, 4, 9, 0.25);
    }
  }
`;

export const RateIndicator = styled.span<{ $isLow?: boolean }>`
  font-weight: 600;
  color: ${props => props.$isLow ? '#ffa500' : '#28a745'};
  animation: ${props => props.$isLow ? pulse : 'none'} 2s infinite;

  .dark & {
    color: ${props => props.$isLow ? '#d29922' : '#3fb950'};
  }
`;

export const RateLimitDetails = styled.div`
  position: absolute;
  bottom: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  padding: 1rem;
  min-width: 300px;
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);

  .dark & {
    background-color: #161b22;
    border-color: #30363d;
    box-shadow: 0 3px 12px rgba(1, 4, 9, 0.25);
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 14px;
    color: #24292e;

    .dark & {
      color: #c9d1d9;
    }
  }
`;

export const RateInfo = styled.div`
  font-size: 13px;
  color: #586069;

  .dark & {
    color: #8b949e;
  }
`;

export const RateBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e1e4e8;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;

  .dark & {
    background-color: #30363d;
  }
`;

export const RateBarFill = styled.div<{ $width: number }>`
  height: 100%;
  background-color: #28a745;
  transition: width 0.3s ease;
  width: ${props => props.$width}%;

  .dark & {
    background-color: #3fb950;
  }
`;

export const ResetTime = styled.p`
  font-size: 12px;
  color: #6a737d;
  margin-top: 0.5rem;

  .dark & {
    color: #8b949e;
  }
`;

export const RateWarning = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #fffbdd;
  border: 1px solid #ffdf5d;
  border-radius: 4px;
  font-size: 12px;
  color: #735c0f;

  .dark & {
    background-color: #1c2128;
    border-color: #d29922;
    color: #d29922;
  }

  small {
    display: block;
    margin-top: 0.25rem;
    color: #6a737d;

    .dark & {
      color: #8b949e;
    }
  }
`;