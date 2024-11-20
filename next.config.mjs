/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codingbrackets.com",
        pathname: "/admin/**",
      },
    ],
  },
};

export default nextConfig;
