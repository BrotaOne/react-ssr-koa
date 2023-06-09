// 引入路径模块
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const openBrowser = require("react-dev-utils/openBrowser");

module.exports = {
    // 从哪里开始编译
    entry: "./client/index.tsx",
    // 编译到哪里
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/public',
        filename: "bundle.js"
    },
    // 配置模块规则
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: "/node-modules/" 
            },{
                test: /\.tsx?$/,    // .ts或者tsx后缀的文件，就是typescript文件
                use: "ts-loader",   // 就是上面安装的ts-loader
                exclude: "/node-modules/" // 排除node-modules目录
            }, {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }    
        ]
    },
    // 模式
    mode: "development",
    resolve: {
        extensions: [".ts",".js",".tsx",".jsx"], // 配置ts文件可以作为模块加载
    },
    devtool: "cheap-module-source-map",
    // devServer: {
    //     hot: true, // 热更新
    //     // open: true, // 服务启动后，自动打开浏览器
    //     port: 8011, // 服务端口
    //     host: '127.0.0.1', // 服务
    //     allowedHosts: ['.e3b03v-8011.csb.app'],// 允许 codessandbox
    //     onListening: function (devServer) {
    //         if (!devServer) {
    //           throw new Error('webpack-dev-server is not defined');
    //         }
    //         const addr = devServer.server.address();
    //         openBrowser(`http://${addr.address}:${addr.port}`);
    //       },
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React SSR With Koa',
            template: 'public/index.html'
        })
    ]
}