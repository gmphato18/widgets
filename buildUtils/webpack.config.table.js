const getWebpackConfig = require('./webpack.config')

const getOutputConfig = (entryPath, outputFilename) => {
    return {
        entry: entryPath,
        output: {
            filename: outputFilename,
            library: ['Table widget', '[name]'],
            libraryTarget: 'umd',
        },
    }
}

var demoau = Object.assign({}, getWebpackConfig({ production: false }), getOutputConfig('./src/client/demoau/demoau.tsx', 'demoau.table.js'))
var onthehouse = Object.assign({}, getWebpackConfig({ production: false }), getOutputConfig('./src/client/onthehouse/onthehouse.tsx', 'onthehouse.table.js'))

module.exports = [demoau, onthehouse]
