/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/ulepionepierogi.pl` : "",
  assetPrefix: isProd ? `/ulepionepierogi.pl/` : "",
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
