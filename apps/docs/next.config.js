/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

module.exports = createVanillaExtractPlugin({
  transpilePackages: ['@repo/ui'],
});
