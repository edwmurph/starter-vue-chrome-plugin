const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const fs = require('fs')

// Generate pages object
const pages = {};

const entries = fs.readdirSync(path.resolve(`src/entry`));

function getFileExtension (filename) {
  return (/[.]/.exec(filename))
    ? /[^.]+$/.exec(filename)[0]
    : undefined;
}

entries.forEach((entry) => {
  const fileExtension = getFileExtension(entry);
  const fileName = entry.replace('.' + fileExtension, '');
  pages[fileName] = {
    entry: `src/entry/${entry}`,
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
