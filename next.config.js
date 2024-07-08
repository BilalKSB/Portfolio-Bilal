/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: './', // Ajoutez cette ligne pour s'assurer que les chemins des actifs sont correctement résolus
};

module.exports = nextConfig;
