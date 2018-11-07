一. 安装nodejs环境 (npm     cnpm)npm install -g cnpm --registry=https://registry.npm.taobao.org
二. 全局安装webpack      cnpm(或npm) install -g webpack@3
三. 准备项目
	1. 在项目根目录下(shift + 鼠标右键---选择在此处打开命令窗口),初始化package.json文件: cnpm init [-y],
	2. 在项目根目录下,本地安装webpack : cnpm install --save-dev webpack@3,
	3. 在项目根目录下,创建一个配置文件: webpack.config.js,
		//先导入所需的插件
		var path = require('path');
		
		//导出模块
		module.exports = {
			//配置入口文件
			entry : "./src/js/index.js", //相对路径
			//配置出口
			output : {
				path : path.resolve(__dirname,'dist'), // __dirname : 找到当前目录所在的绝对路径
				filename : "index.js"
			}
		}
	4. 在项目根目录下,运行 webpack 可以实现打包
	5. 在项目根目录下,设置自动监听:   webpack --watch,
四. 插件
	1. html-webpack-plugin : 自动生成index.html页面,
		使用:
		1>  在项目根目录下本地安装插件 : cnpm install --save-dev html-webpack-plugin,
		2> 在webpack.config.js中先通过require 导入该插件
		3> 在webpack.config.js的module.exports的对象中添加plugins : [ new 该插件()],
			//先导入所需的插件
			var path = require('path');
			var HtmlWebpackPlugin = require('html-webpack-plugin');
			
			//导出模块
			module.exports = {
				//配置入口文件
				entry : "./src/js/index.js", //相对路径
				output : {
					path : path.resolve(__dirname,'dist'), // __dirname : 找到当前目录所在的绝对路径
					filename : "index.js"
				},
				plugins : [
					new HtmlWebpackPlugin()
				]
			}
		4> 设置模板文件:
			//先导入所需的插件
			var path = require('path');
			var HtmlWebpackPlugin = require('html-webpack-plugin');
			
			//导出模块
			module.exports = {
				//配置入口文件
				entry : "./src/js/index.js", //相对路径
				output : {
					path : path.resolve(__dirname,'dist'), // __dirname : 找到当前目录所在的绝对路径
					filename : "index.js"
				},
				plugins : [
					new HtmlWebpackPlugin({"template" : "./src/html/index.html"})
				]
			}
	2. style-loader    css-loader 
		1> 在项目根目录下本地安装 cnpm install --save-dev style-loader css-loader
		2>使用:
			在入口js文件中
			require("!style-loader!css-loader!css的url路径")
			