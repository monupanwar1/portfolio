/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {
    // Add this 'experimental' key
    serverActions: {
      bodySizeLimit: '10mb', // Move serverActions inside experimental
    },
  },
};

export default nextConfig;
