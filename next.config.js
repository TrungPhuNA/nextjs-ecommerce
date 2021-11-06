module.exports = {
  reactStrictMode: true,
  modern: true,
  experimental: { esmExternals: true },
  distDir: 'build',
  presets: ["next/babel"],
  sassOptions:{
    includePaths:[path.join(__dirname,"styles")]
  }
}
