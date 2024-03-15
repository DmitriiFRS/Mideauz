/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      unoptimized: true,
      remotePatterns: [
         {
            protocol: "http",
            hostname: "dmitrpjh.beget.tech",
         },
         {
            protocol: "https",
            hostname: "midea-uzb.uz",
         },
      ],
   },
   output: "export",
};

module.exports = nextConfig;
