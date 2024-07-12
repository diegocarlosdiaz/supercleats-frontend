import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

// Configuración de Next.js
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
};

// Exporta la configuración de Next.js
export default nextConfig;
