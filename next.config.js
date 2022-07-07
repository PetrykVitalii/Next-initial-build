const { config } = require('dotenv');

config();

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: 'test.api'
  },
};
