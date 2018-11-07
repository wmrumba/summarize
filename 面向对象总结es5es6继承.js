//ES5
function 类名([参数]){
	//实例属性
	this.属性 = 参数;
}
//原型方法
类名.prototype.方法名 = function(){
	.....
}


//ES5继承
function 子类名([参数]){
	//实例继承
	//1. 父类名.call(this,参数1，参数2，……)
	//2. 父类名.apply(this,[参数1，参数2，……])
	父类名.apply(this,arguments)
}
//原型继承
for(var key in 父类.prototype){
	子类.prototype[key] = 父类.prototype[key];
}


//ES6
class 类名{
	constructor([参数]){
		//实例属性
		this.属性名 = 参数;
	}
	//原型方法
	方法名(){
		.....
	}
}

//ES6继承
class 子类名 extends 父类名{
	constructor([参数]){
		//调用父类的构造器方法
		super([参数]);
	}
}