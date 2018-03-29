const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? '../../dist/ec' : './static';

const nodeModules = path.resolve(__dirname, '../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

module.exports = {
  scripts: [
    {
      entry: path.resolve(nodeModules, '@ecl/ec-preset-full/ec-preset-full.js'),
      dest: path.resolve(__dirname, outputFolder, 'scripts/europa.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/ec-preset-corporate/ec-preset-corporate.js'
      ),
      dest: path.resolve(__dirname, outputFolder, 'scripts/ec-corporate.js'),
      options: {
        sourceMap: isProd ? false : 'inline',
        moduleName: 'ECL',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/ec-preset-full/ec-preset-full.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/ec-preset-base/ec-preset-base.scss'
      ),
      dest: path.resolve(__dirname, outputFolder, 'styles/europa-base.css'),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
    {
      entry: path.resolve(
        nodeModules,
        '@ecl/ec-preset-corporate/ec-preset-corporate.scss'
      ),
      dest: path.resolve(
        __dirname,
        outputFolder,
        'styles/europa-corporate.css'
      ),
      options: {
        sourceMap: isProd ? 'file' : true,
        includePaths,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-form-checkbox/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(
        nodeModules,
        '@ecl/ec-component-form-feedback-message/images'
      ),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-form-radio/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-form-select/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-social-icon/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-message/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/generic-style-icon/fonts'),
      to: path.resolve(__dirname, outputFolder, 'fonts'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/ec-component-logo/images'),
      to: path.resolve(__dirname, outputFolder, 'images'),
    },
  ],
};