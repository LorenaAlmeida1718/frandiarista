import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'frandiarista.online',
          },
        ],
        destination: 'https://frandiarista.com.br/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.frandiarista.online',
          },
        ],
        destination: 'https://frandiarista.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
