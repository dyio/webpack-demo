const path = require('path');

module.exports = {
    mode: "development",
    entry:'./hot/src/index.js',
    output: {
        path: path.join(__dirname,'build'),
        filename:'hot.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
}