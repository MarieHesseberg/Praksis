import type { NextConfig } from 'next';

const isGitHubPages = process.env.PRAKSIS_GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        basePath: '/Praksis',
        assetPrefix: '/Praksis/',
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
