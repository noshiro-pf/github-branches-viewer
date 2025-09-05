// Repository configurations with NPM package mappings
const repoConfig = {
    'typescript-monorepo-template': {
        github: 'noshiro-pf/typescript-monorepo-template',
        npm: null // This repo might not have an npm package
    },
    'typescript-template': {
        github: 'noshiro-pf/typescript-template',
        npm: null // This repo might not have an npm package
    },
    'eslint-config-typed': {
        github: 'noshiro-pf/eslint-config-typed',
        npm: '@noshiro/eslint-config-base' // Based on common naming patterns
    },
    'ts-repo-utils': {
        github: 'noshiro-pf/ts-repo-utils',
        npm: 'ts-repo-utils'
    },
    'ts-type-forge': {
        github: 'noshiro-pf/ts-type-forge',
        npm: '@noshiro/ts-type-utils' // Based on common naming patterns
    },
    'ts-data-forge': {
        github: 'noshiro-pf/ts-data-forge',
        npm: '@noshiro/ts-utils' // Based on common naming patterns
    },
    'ts-fortress': {
        github: 'noshiro-pf/ts-fortress',
        npm: '@noshiro/fast-check-wrapper' // Based on common naming patterns
    },
    'mono': {
        github: 'noshiro-pf/mono',
        npm: null // This is likely a monorepo with multiple packages
    }
};

// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const repoName = button.dataset.repo;
            
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active content
            tabContents.forEach(content => {
                if (content.dataset.repo === repoName) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
    
    // Load NPM package information
    loadNpmPackages();
});

// Function to fetch README and extract NPM package URL
async function fetchNpmUrlFromReadme(repoName) {
    const githubRepo = repoConfig[repoName].github;
    const readmeUrl = `https://api.github.com/repos/${githubRepo}/readme`;
    
    try {
        const response = await fetch(readmeUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3.raw'
            }
        });
        
        if (!response.ok) {
            console.error(`Failed to fetch README for ${repoName}`);
            return null;
        }
        
        const readmeContent = await response.text();
        
        // Search for npm package URL in README
        const npmUrlPattern = /https:\/\/www\.npmjs\.com\/package\/([^\s\)]+)/g;
        const matches = [...readmeContent.matchAll(npmUrlPattern)];
        
        if (matches.length > 0) {
            // Return the first npm package found
            return matches[0][1];
        }
        
        return null;
    } catch (error) {
        console.error(`Error fetching README for ${repoName}:`, error);
        return null;
    }
}

// Function to load NPM package information
async function loadNpmPackages() {
    for (const [repoName, config] of Object.entries(repoConfig)) {
        const npmSection = document.getElementById(`npm-${repoName}`);
        
        if (!npmSection) continue;
        
        // First try to get NPM package name from README
        const npmPackageFromReadme = await fetchNpmUrlFromReadme(repoName);
        const npmPackageName = npmPackageFromReadme || config.npm;
        
        if (npmPackageName) {
            // Create iframe for NPM page
            npmSection.innerHTML = `
                <div class="npm-iframe-container">
                    <a href="https://www.npmjs.com/package/${npmPackageName}" 
                       target="_blank" 
                       class="npm-link">
                        View on NPM: ${npmPackageName}
                    </a>
                    <iframe src="https://www.npmjs.com/package/${npmPackageName}" 
                            frameborder="0"
                            loading="lazy">
                    </iframe>
                </div>
            `;
        } else {
            npmSection.innerHTML = '<p class="no-npm">No NPM package found for this repository</p>';
        }
    }
}