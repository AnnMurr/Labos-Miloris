const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/app/index.js',
        'cards': './src/app/modules/cards/cards.js',
        'filter-catalog': './src/app/core/utils/filter-catalog.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundler.js',
        chunkFilename: '[name].bundler.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['index', 'filter-catalog'],
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new HtmlWebpackPlugin({
            template: './about-company.html',
            filename: 'about-company.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './about-perfume.html',
            filename: 'about-perfume.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './aplication.html',
            filename: 'aplication.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './assortment.html',
            filename: 'assortment.html',
            chunks: ['cards', 'index'],
        }),
        new HtmlWebpackPlugin({
            template: './contact.html',
            filename: 'contact.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './delivery.html',
            filename: 'delivery.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './sale.html',
            filename: 'sale.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './privacy-policy.html',
            filename: 'privacy-policy.html',
            chunks: ['index'],
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js'],
    },
};
