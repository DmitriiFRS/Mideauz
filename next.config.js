/** @type {import('next').NextConfig} */
const nextConfig = {
   trailingSlash: true,
   images: {
      unoptimized: true,
      remotePatterns: [
         {
            protocol: "https",
            hostname: "midea-uzb.uz",
         },
      ],
   },
   output: "export",
};

module.exports = nextConfig;
