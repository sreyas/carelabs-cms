/** @type {import('next').NextConfig} */
const nextConfig = {

  async rewrites() {
    return [
      {
        source: '/:slug*',  
        destination:'/blogs/:slug*'
      },
    ];
  },
  /* config options here */
  reactCompiler: true,
  swcMinify: true,
};

export default nextConfig;
