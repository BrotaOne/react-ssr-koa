// 引入路径模块
const path = require("path");

module.exports = {
    target: "node",
    // 从哪里开始编译
    entry: "./server/serverApp.tsx",
    // 编译到哪里
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "serverBundle.js",
        libraryTarget: "commonjs2"
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
        extensions: [".ts",".js",".jsx",".tsx"], // 配置ts文件可以作为模块加载
    },
    devtool: "cheap-module-source-map",
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
}