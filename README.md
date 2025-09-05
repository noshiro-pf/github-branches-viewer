# GitHub Branches Viewer

A static website to view GitHub branches and NPM package information for multiple repositories in a single page with tabbed navigation.

## Features

- Tabbed navigation for easy switching between repositories
- Embedded GitHub branches view for each repository
- NPM package information display
- Responsive design
- Static site - can be hosted on GitHub Pages, Netlify, Vercel, etc.

## Repositories Included

1. typescript-monorepo-template
2. typescript-template
3. eslint-config-typed
4. ts-repo-utils
5. ts-type-forge
6. ts-data-forge
7. ts-fortress
8. mono

## Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (install http-server globally first: npm i -g http-server)
http-server

# Using PHP
php -S localhost:8000
```

## Deployment

This is a static site that can be deployed to:

### GitHub Pages
1. Push this repository to GitHub
2. Go to Settings ’ Pages
3. Select source branch and folder
4. Your site will be available at `https://[username].github.io/[repository-name]/`

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy with default settings

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy with default settings

## Note about iframe limitations

Some features of GitHub pages may not work perfectly within iframes due to security restrictions. For full functionality, clicking the links to open in new tabs is recommended.

## License

MIT