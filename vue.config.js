const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const fs = require('fs')

// Generate pages object
const pages = {};

const chromeName = fs.readdirSync(path.resolve(`src/entry`));

function getFileExtension (filename) {
  return (/[.]/.exec(filename))
    ? /[^.]+$/.exec(filename)[0]
    : undefined;
}

chromeName.forEach((name) => {
  const fileExtension = getFileExtension(name);
  const fileName = name.replace('.' + fileExtension, '');
  pages[fileName] = {
    entry: `src/entry/${name}`,
    template: 'public/index.html',
    filename: `${fileName}.html`
  }
});

module.exports = {
  pages,
  filenameHashing: false,
  configureWebpack: {
    plugins: [
      CopyWebpackPlugin([
        {
          from: path.resolve('src/manifest.json'),
          to: `${path.resolve('dist')}/manifest.json`
        }
      ])
    ],
    output: {
      filename: `js/[name].js`,
      chunkFilename: `[name].js`
    }
  }
}
