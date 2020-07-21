const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const routeApp = './src';
const routePublic = './public'

// con env obtenemos la variable de entorno
module.exports = (env) => {

    return {
        entry: {
            index: `${routeApp}/main.ts`
        },   
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    exclude: '/node_modules/'
                }
            ]
        },
        devServer: {
            contentBase: path.resolve(__dirname, `./${routePublic}`),
            port: 8100
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${routePublic}/index.html`
            })
        ]
    };
}