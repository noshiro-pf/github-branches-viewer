# GitHub Branches & README Viewer

A React-based web application that displays GitHub repository branches, pull requests, CI status, and README files in a clean, tabbed interface. Built with modern web technologies including React 19, TypeScript, and Vite.

## Features

- **Multi-Repository Support**: View multiple GitHub repositories in a tabbed interface
- **Branch Information**: Display all branches with commit details, timestamps, and author information
- **CI Status Integration**: Show GitHub Actions check status for each branch
- **Pull Request Links**: Direct links to associated pull requests
- **Branch Comparison**: Compare branches against the default branch with file change counts
- **README Rendering**: Syntax-highlighted README files with GitHub-flavored markdown
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **URL State Management**: Shareable URLs with tab and theme state
- **Rate Limit Monitoring**: GitHub API rate limit status display
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7.x
- **HTTP Client**: Axios
- **Syntax Highlighting**: @wooorm/starry-night
- **Styling**: CSS modules with custom properties for theming
- **Testing**: Playwright for visual regression testing
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/noshiro-pf/github-branches-viewer.git
    cd github-branches-viewer
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create environment file:

    ```bash
    cp .env.example .env
    ```

4. Configure GitHub API access in `.env`:

    ```
    # Optional: GitHub Personal Access Token for higher rate limits
    VITE_GITHUB_TOKEN=your_github_token_here

    # Optional: Additional repositories to display (comma-separated)
    VITE_ADDITIONAL_REPOS=owner1/repo1,owner2/repo2
    ```

5. Start development server:
    ```bash
    npm run dev
    ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run type checking and linting
- `npm run lint` - Run ESLint
- `npm run fmt` - Format code with Prettier
- `npm run test:visual` - Run Playwright visual tests
- `npm run tsc` - Type check without emitting

## Configuration

### Adding Repositories

Repositories can be added by modifying the `buildRepositoriesList` function in `src/App.tsx` or by setting the `VITE_ADDITIONAL_REPOS` environment variable.

### GitHub API Token

While the app works without authentication, providing a GitHub token increases the API rate limit from 60 to 5000 requests per hour.

## Project Structure

```
src/
├── components/          # React components
│   ├── GitHubBranches.tsx      # Main branch listing component
│   ├── RepositoryViewer.tsx    # Repository container component
│   ├── ReadmeSectionBody.tsx   # README renderer
│   ├── CheckStatus.tsx         # CI status display
│   ├── RateLimitStatus.tsx     # API rate limit monitor
│   └── LoadingSkeleton.tsx     # Loading placeholders
├── types/               # TypeScript type definitions
├── utils/               # API utilities and helpers
├── styles/              # Global styles and themes
└── App.tsx              # Main application component
```

## License

This project is open source and available under the MIT License.
