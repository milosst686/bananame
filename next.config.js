/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
    webpack: (config) => {
      // Resolve the path to your polyfill-self.js script
      const polyfillSelfPath = path.resolve(__dirname, 'Self.js');
  
      // Add the script as an entry point to your project
      config.entry = config.entry || {};
      config.entry.main = [polyfillSelfPath].concat(config.entry.main || []);
  
      return config;
    },
  };