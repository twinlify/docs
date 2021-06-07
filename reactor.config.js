module.exports = {
  esbuild: {
    loader: {
      '.js': 'jsx',
      '.md': 'text'
    }
  },
  documentation: {
    dist: './tocs',
    source: './src/pages/docs'
  },
  sitemap: {
    hostname: 'https://docs.twinlify.com',
    links: [
      {url: '/', lastmod: new Date()},
      {url: '/documentation/api/', lastmod: new Date()},
      {url: '/documentation/getting-started/', lastmod: new Date()},
      {url: '/documentation/using-bundler/', lastmod: new Date()},
      {url: '/documentation/using-cdn/', lastmod: new Date()},
      {url: '/documentation/changelog/', lastmod: new Date()}
    ]
  }
};
