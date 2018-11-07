一.什么Promise? 是一个ES6新增的解决异步问题.
二.语法:
	new Promise(function(resolve,reject){
		处理语句
		如果成功,则调用 resolve()
		如果失败,则调用 reject()
	}).then(function(){
		成功要处理的语句
	}).catch(function(){
		失败后要处理的语句
	})
	
	new Promise(function(resolve,reject){
		处理语句
		如果成功,则调用resolve();
		如果失败,则调用reject();
	}).then(function(){
		return new Promise(function(resolve){
			处理语句
			如果成功,则调用resolve();
		})
	}).then(function(){
		return new Promise(function(resolve){
			处理语句
			如果成功,则调用resolve();
		})
	}).then(function(){
		成功后处理的语句
	}).catch(function(){
		失败后处理的语句
	})
	
	
	Promise.all([new Promise(),new Promise(),new Promise()])
	
	
三.什么是同源策略?
	同协议/同域名/同端口
四.同源策略的作用: 保护自己域内资源的安全,
五.如何跨域访问?
	1.后端: 代理,
	2.前端: jsonP,
六.jsonP原理?
   Jsonp跨域工作原理
   通过动态创建script标签，利用src的跨域属性，链接其他域的接口地址，向对方发出请求，再把script标签添加到head当中,将请求到的数据通过回调函数返回来就OK,并且记住回调函数必须是全局函数
七.jsonP的实现?
	1.准备回调函数(全局函数)
	2.动态创建script标签,设置src属性
	3.添加到head中