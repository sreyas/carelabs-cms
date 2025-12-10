/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inspired-gem-f09bdfaddd.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "inspired-gem-f09bdfaddd.strapiapp.com",
      }
    ],
  },
};

export default nextConfig;
