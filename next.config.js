/** @type {import('next').NextConfig} */
const nextConfig = {
   trailingSlash: true,
   images: {
      unoptimized: true,
      remotePatterns: [
         {
            protocol: "http",
            hostname: "dmitrpjh.beget.tech",
         },
      ],
   },
   output: "export",
};

module.exports = nextConfig;
