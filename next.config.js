module.exports = {
  reactStrictMode: true,
  modern: true,
  swcMinify: false,
  experimental: { esmExternals: true },
  distDir: 'build',
  typescript: {
    ignoreBuildErrors: true,
  },
}
