/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "midea-uzb.uz",
         },
      ],
   },
};

module.exports = nextConfig;
