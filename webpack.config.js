
const HtmlWebPackPlugin=require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path=require('path');
module.exports={
 mode: 'development',
 devtool:'inline-source-map',
    entry:{bundle:'./src/index.ts'},
   target:  "web",
    module:{
        rules:[
                {
                    test:/\.ts$/,
                    use:'ts-loader',
                    include:[path.resolve(__dirname,'src')],
                     exclude: /node_modules/,
                },
                    {
        test: /\.css$/,
        use: ["style-loader","css-loader"],
        exclude: /node_modules/,        
      },

        ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
plugins: [
     new MiniCssExtractPlugin({filename: "style.css"}),
    new HtmlWebPackPlugin({


    title:'calculator',
    templateContent:`<body><div id="app-root"></div></body>`
}
)
  ],

    output:{
        publicPath:'/public',
        filename:'[name].js',
        path:path.resolve(__dirname,'public'),
        clean:true
 
   },
  devServer: {
    static: {
      directory: 'public'
    },
    compress: true,
    port: 4050,
  },

     optimization: {
    runtimeChunk: 'single',
  },
}