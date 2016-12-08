module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    resolove: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
