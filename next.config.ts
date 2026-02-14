import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

// 👇 السطر ده مهم جداً: لازم نحدد المسار './i18n.ts'
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);