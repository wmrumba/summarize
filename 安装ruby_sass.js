一. 安装ruby环境
	1. 测试ruby:  ruby -v
二. 安装sass : gem install sass
	1. 测试sass : sass -v
三. 四种编译风格
四. 使用第三方软件考拉或gulp进行编译
五. sass 导入功能
	1. 如何是公共的样式,写在一个以下划线开头的.scss文件中,这个文件不会被编译.
	2. 导入外部scss文件的命令: @import '文件名';   注: 不要加下划线,扩展名可省略,
		 如: @import 'public';
			@import 'public.scss';
六. sass嵌套
	1. 选择器嵌套(重点掌握)
		注: & : 表示父级选择器
	2. 属性嵌套(理解)
	3. 伪类嵌套(知道有)
七. 变量
	声明变量: $变量名 : 值;
	变通变量: $变量名 (以值的方式),
	特殊变量: #{$变量名}  (以属性的方式),
八.判断语句
	@if 条件{
		语句组;
	}
	
	@if 条件{
		语句组;
	}@else{
		语句组;
	}
	
	@if 条件{
		语句组;
	}@else if 条件{
		语句组;
	}
九. 数组/map
$num : 3;
$arr : 1px solid black;
$map : (key : value,key : value);
十. 循环
	(包含结束值)
	@for 变量 from start through end
	(不包含结束值)
	@for 变量 from start to end
十一.遍历数组
@each 变量 in 数组{
	语句组;
}

十二. 宏 @mixin
	@mixin 宏名{
		语句组;
	}
	
	@mixin 宏名(参数){
		语句组;
	}

	引用宏: @include 宏名,
十三. 函数
@function 函数名([参数]){
	@return 语句组;
}
十四.继承
	@extend 选择器