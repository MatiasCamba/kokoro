import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      // "your-cloudinary-subdomain.cloudinary.com" // reemplazá con tu subdominio real
    ],
  },
  // otras opciones de config si las necesitás
};

export default nextConfig;
