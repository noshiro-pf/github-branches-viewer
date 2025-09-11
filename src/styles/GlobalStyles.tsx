import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        /* Z-index layers */
        --z-index-base: 1;
        --z-index-dropdown: 10;
        --z-index-navigation: 50;
        --z-index-overlay: 100;
        --z-index-modal: 1000;
        --z-index-tooltip: 10000;

        /* Light theme colors */
        --color-bg-primary: #ffffff;
        --color-bg-secondary: #f6f8fa;
        --color-bg-tertiary: #e1e4e8;
        --color-text-primary: #24292e;
        --color-text-secondary: #586069;
        --color-text-tertiary: #6a737d;
        --color-text-link: #0366d6;
        --color-border: #d1d5da;
        --color-border-secondary: #e1e4e8;
        --color-success: #28a745;
        --color-warning: #ffa500;
        --color-danger: #cb2431;
        --color-info: #0366d6;

        /* Base font styles from index.css */
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial,
          sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light;
        color: #24292e;
        background-color: #ffffff;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
        background-color: #f6f8fa;
      }

      #root {
        width: 100%;
        min-height: 100vh;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      a {
        color: #0366d6;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      button {
        font-family: inherit;
      }

      /* Dark mode variables and styles */
      .dark {
        color-scheme: dark;
        --color-bg-primary: #0d1117;
        --color-bg-secondary: #161b22;
        --color-bg-tertiary: #21262d;
        --color-text-primary: #c9d1d9;
        --color-text-secondary: #8b949e;
        --color-text-tertiary: #6e7681;
        --color-text-link: #58a6ff;
        --color-border: #30363d;
        --color-border-secondary: #21262d;
        --color-success: #3fb950;
        --color-warning: #d29922;
        --color-danger: #f85149;
        --color-info: #58a6ff;
      }

      .dark body {
        background-color: #0d1117 !important;
        color: #c9d1d9 !important;
      }

      .dark *,
      .dark *::before,
      .dark *::after {
        box-sizing: border-box;
      }

      /* Override any remaining white backgrounds */
      .dark div:not([class*='skeleton']) {
        background-color: inherit;
      }

      .dark section,
      .dark article,
      .dark aside,
      .dark main,
      .dark nav,
      .dark header,
      .dark footer {
        background-color: inherit;
      }

      /* Ensure all text inherits dark mode colors */
      .dark h1,
      .dark h2,
      .dark h3,
      .dark h4,
      .dark h5,
      .dark h6,
      .dark p,
      .dark span:not([class*='skeleton']),
      .dark div:not([class*='skeleton']) {
        color: inherit;
      }
    `}
  />
);