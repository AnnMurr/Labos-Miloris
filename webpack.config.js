const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/app/index.js',
        'export-btnUp': './src/app/components/btn-up/export-btnUp.js',
        cards: './src/app/modules/cards/cards.js',
        'export-cards': './src/app/modules/cards/export-cards.js',
        'export-burger': './src/app/modules/burger/export-burger.js',
        'basket-export': './src/app/modules/basket/basket-export.js',
        'export-authentication': './src/app/modules/authentication/export-authentication.js',
        'alert-message': './src/app/core/utils/alertMessage.js',
        'export-utils': './src/app/core/utils/export-utils.js',
        'filter-catalog': './src/app/core/utils/filter-catalog.js',
        'user': './src/app/modules/user/user.js',
        'basket-close': './src/app/modules/basket/basket-close.js',
        'basket': './src/app/modules/basket/basket.js',
        'create-basket-modal': './src/app/modules/basket/create-basket-modal.js',
        'userStore': './src/app/stores/userStore.js',
        'basket-store': './src/app/stores/basket-store.js',
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
                            // Other options for less-loader
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
            chunks: ['index', 'export-cards', 'user', 'basket-close', 'basket-export', 'basket', 'create-basket-modal', 'userStore', 'basket-store'],
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
