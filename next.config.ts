import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["shiki"], //Configuración para MDX - Nos ayuda para resaltar código y optimización    
  },
};
  

export default nextConfig;