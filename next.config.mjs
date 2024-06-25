/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ["https://res.cloudinary.com/mahabub-bd/image/upload"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  distDir: "build",
};

export default nextConfig;
