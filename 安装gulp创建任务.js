一.Gulp
	1.工程化构建工具
	2.作用:
		1> 压缩js  : gulp-uglify,
		2> 重命名: gulp-rename,
		3> 合并文件: gulp-concat,
		4> 编译sass : gulp-sass(cnpm)   gulp-ruby-sass(npm),
		5> 压缩css : gulp-cssnano(cnpm) gulp-clean-css(npm),
		6> 压缩图片: gulp-imagemin
二.安装nodejs环境
三.全局安装gulp : cnpm(npm) install -g gulp
四.准备项目
	1.在项目根目录下(shift + 右键---在此处打开命令窗口),初始化package.json : cnpm(npm) init [-y],
	2.在项目根目录下,本地安装gulp : cnpm(npm) install --save-dev gulp,
	3.在项目根目录下,创建gulpfile.js的配置文件
五.插件
	1. 压缩js/重命名js/合并js
		1> 在项目根目录下,本地安装插件 : cnpm(npm) install --save-dev 插件名 插件名,
		2> 在gulpfile.js中配置
		
			1.. 先通过require()导入所需插件
			2.. 发布任务
			
			const gulp = require('gulp'),
				  uglify = require('gulp-uglify'),
				  rename = require('gulp-rename'),
				  concat = require('gulp-concat');
				  
			//创建并发布任务
			gulp.task('js',function(){
				return gulp.src('./src/js/*.js').pipe(concat('main.js')).pipe(rename({'suffix':'.min'})).pipe(uglify()).pipe(gulp.dest('dist'));
			})
		3. 运行任务: gulp 任务名
六.API
	1. 创建并发布任务
	gulp.task('任务名',function(){
		任务内容
	})
	2. 找到处理内容的源路径
		gulp.src('处理文件的URL')
	3. 出口
		gulp.dest('出口URL')
	4. 自动监听
		gulp.watch('监听文件的URL',['任务名'])
	5. 连接api的方法 pipe()
	
	
	_public.scss 中的下划线表示不会自动编译
	其他文件在导入时不用加下划线 "@import public.scss"  扩展名可省略