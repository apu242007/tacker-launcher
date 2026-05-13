/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/tacker-launcher",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
