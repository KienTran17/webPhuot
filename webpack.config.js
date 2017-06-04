
module.exports = {
    entry: ['./src/web_app.js'],
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-source-map' //cho biet loi o dau (neu ko co se bao loi o bundle)
};