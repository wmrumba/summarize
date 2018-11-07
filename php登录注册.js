一. 注册页
	1. register.html
		注册表单
	2. register.php
		1> 设置php的字符集
		2> 接收前端数据
		3> 操作数据库(5步)
			<1> 连接数据库服务器
			<2> 选择操作的数据库
			<3> 设置字符集
			<4> 编写sql语句
			<5> 执行sql语句
		4> 判断是否注册成功
			<1> 成功 跳转到login.html
			<2> 失败 跳转到register.html
二. 登录页
	1. login.html
		登录表单
	2. login.php
		1> 设置php的字符集
		2> 接收前端数据
		3> 操作数据库(5步)
		4> 判断是否注册成功
			<1> 成功 跳转到scoreList.php
			<2> 失败 跳转到login.html
三. scoreList.php
	1.查询数据库,获取数据,进行布局
		1> 设置php的字符集
		2> 操作数据库(5步)
		3> 布局(表格)
	2. 添加学生成绩功能(跳转到add.html)
四. 添加学生成绩
	1. 添加成绩表单
	2. add.php
		1> 设置php的字符集
		2> 接收前端数据
		3> 操作数据库(5步)
		4> 判断是否注册成功
			<1> 成功 跳转到scoreList.php
			<2> 失败 跳转到add.html
五. 删除学生成绩
	1. delete.php    (url传参)
		1> 设置php的字符集
		2> 接收前端数据
		3> 操作数据库(5步)
		4> 判断是否注册成功
			<1> 成功 跳转到scoreList.php
			<2> 失败 跳转到scoreList.php
六. 修改学生成绩
	1. update.php  (url传参)
		1> 设置php的字符集
		2> 接收前端数据
		3> 操作数据库(5步)
		4> 布局(表单)
	2. updateDoing.php
		1> 设置php的字符集
		2> 接收前端数据
		3> 操作数据库(5步)
		4> 判断是否注册成功
			<1> 成功 跳转到scoreList.php
			<2> 失败 跳转到scoreList.php