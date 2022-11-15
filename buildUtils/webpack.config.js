//
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
// const zlib = require('zlib')

const hasJsxRuntime = (() => {
    if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
        return false
    }

    try {
        require.resolve('react/jsx-runtime')
        return true
    } catch (e) {
        return false
    }
})()

const typescriptRegex = /\.(js|mjs|jsx|ts|tsx|css)$/

const appPath = [path.resolve('src')]

const getWebpackConfig = (webpackEnv) => {
    const isEnvDevelopment = !!webpackEnv.development
    const isEnvProduction = !!webpackEnv.production

    return {
        // mode: isEnvProduction
        //     ? 'production'
        //     : isEnvDevelopment && 'development',
        mode: "development",
        resolve: {
            extensions: ['.js','.ts', '.tsx'],
            alias: {
                '@': path.join(__dirname, 'src'),
            },
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-router': 'ReactRouter',
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true,
                        },
                    },
                }),
                new CssMinimizerPlugin(),
            ],
        },
        plugins: [
            new CompressionPlugin({
                filename: '[path][base].gz',
                algorithm: 'gzip',
                test: typescriptRegex,
                threshold: 10240,
                minRatio: 0.8,
            }),
        ],
        module: {
            strictExportPresence: true,
            rules: [
                {
                    enforce: 'pre',
                    exclude: /@babel(?:\/|\\{1,2})runtime/,
                    test: typescriptRegex,
                    loader: require.resolve('source-map-loader'),
                },
                {
                    test: typescriptRegex,
                    include: appPath,
                    loader: require.resolve('babel-loader'),
                    options: {
                        customize: require.resolve(
                            'babel-preset-react-app/webpack-overrides'
                        ),
                        presets: [
                            [
                                require.resolve('babel-preset-react-app'),
                                {
                                    runtime: hasJsxRuntime
                                        ? 'automatic'
                                        : 'classic',
                                },
                            ],
                        ],

                        plugins: [
                            isEnvDevelopment &&
                                require.resolve('react-refresh/babel'),
                        ].filter(Boolean),
                        cacheDirectory: true,
                        cacheCompression: false,
                        compact: isEnvProduction,
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                }
            ].filter(Boolean),
        },
    }
}

module.exports = getWebpackConfig
