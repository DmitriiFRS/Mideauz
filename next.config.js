/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "wordpress",
         },
      ],
   },
};

module.exports = nextConfig;
