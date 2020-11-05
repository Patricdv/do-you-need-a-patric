const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: '/do-you-need-a-patric/_next/static/images/',
    },
  ],
  {
    basePath: '/do-you-need-a-patric',
    assetPrefix: '/do-you-need-a-patric/',
  },
]);
