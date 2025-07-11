// setBasePath.js
const isGitHubPages = location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/<repository>/' : '/';
document.querySelector('base').setAttribute('href', basePath);