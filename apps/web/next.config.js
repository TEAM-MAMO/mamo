/** @type {import('next').NextConfig} */

const path = require('path');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

module.exports = createVanillaExtractPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
  transpilePackages: ['@repo/ui'],
})({});
