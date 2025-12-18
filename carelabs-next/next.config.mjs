/** @type {import('next').NextConfig} */

const mediaUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL);

 console.log("MediaURl:",mediaUrl);
 
const nextConfig = {
  reactCompiler: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: mediaUrl.protocol.replace(":", ""),
        hostname: mediaUrl.hostname,
      },
    ],
  },
};

export default nextConfig;
