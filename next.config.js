module.exports = {
  reactStrictMode: true,
  modern: true,
  swcMinify: false,
  experimental: { esmExternals: true },
  distDir: 'build',
  presets: ["next/babel"],
  webpack(config, options) {
    const { dir, defaultLoaders } = options
    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules.push({
      test: /\\.+(ts|tsx)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        { loader: 'ts-loader', options: { transpileOnly: true } }
      ]
    })
    return config
  }
}
