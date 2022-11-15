const getWebpackConfig = require('./webpack.config')

var demo01 = Object.assign({}, getWebpackConfig({ production: false }), {
    entry: './src/components/calculator/demo01/demo01.tsx',
    output: {
        filename: 'demo01.calcultor.js',
        library: ['Calculator widget', '[name]'],
        libraryTarget: 'umd',
    },
})

module.exports = [demo01]
