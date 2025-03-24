/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/my-cv-2' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-cv-2/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webm|mp4)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  }
};

export default config;