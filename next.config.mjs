/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isolated Marketing Layer – No Core Access
  // This configuration is for the standalone marketing site
  
  // Enable React strict mode for development
  reactStrictMode: true,

  // Configure allowed image domains
  // NOTE: Marketing site serves static assets only
  // Hotel logos/images are loaded from Core SaaS via R2 public URLs
  images: {
    remotePatterns: [
      {
        // Cloudflare R2 public URLs (Core SaaS storage)
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
      },
      {
        // Custom R2 domain (if configured)
        protocol: 'https',
        hostname: 'cdn.hotelai.com',
      },
      {
        // Fallback for placeholder images
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Enable experimental features if needed
  experimental: {
    // serverActions: true, // Enable if needed for server actions
  },
};

export default nextConfig;
