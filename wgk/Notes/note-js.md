### 基本语法

#### 数据类型转换

###### 转换为字符串

* toString()

  > var num=1;
  >
  > alert(num.toString());

* String()强制转换

  >var num=1;
  >
  >alert(String(num));

* **加号拼接字符串**

  >var num=1;
  >
  >alert(num + '');

###### 转换为数字型（重点）

* parseInt(变量)   得到的是整数（向下取整）
* parseFloat(变量)   得到的是浮点数  

> parseInt('120px')会去掉px，parseFloat同

* Number()强制转换
* 隐式转换  -  *  \

###### 转换为布尔型

* Boolean()

  > ''、0、NaN、null、undefined会被转换成false，其余true

#### 运算符

不要直接比较两个浮点数是否相等

###### 比较运算符

===全等   要求值和数据类型完全相同

> 18 == '18'  //true
>
> 18 === '18'  //false

###### 逻辑运算符

&&优先级高于||



##### switch语句

switch后面的和case后面的必须**全等**

#### 数组

创建数组：var 数组名=[1,2,'kk',false]

可以放任意类型数据

arr.length数组长度

可以追加元素

#### 函数

函数没有返回值则返回undefined

##### arguments的使用

不确定有多少个参数传递时，可以用arguments来获取。

是当前函数思维一个**内置对象**，arguments中**存储了传递的所有实参**。

> 1. 具有length属性
>
> 2. 按照索引的方式进行存储
>
> 3. 没有pop()、push()等

##### 两种声明方式

1. function fn(){

   }

2. 函数表达式

   var	变量名 = function() {};

   调用：变量名(参数)；

#### 作用域

注意：1.在函数内部，没有声明直接赋值的变量也属于全局变量（不建议使用）

2.形参属于局部变量

3.（es6之前）没有**块级作用域**

> if (3 < 5){
>
> var num=10;
>
> }
>
> console.log(num);是可以输出的

#### 预解析

预解析：js引擎会把js里面的所有 var 和 function 提升到当前作用域的最前面

1. 变量提升：把所有变量声明提升到当前作用域的最前面，**不提升赋值操作**
2. 函数提升：第二种声明方式（函数表达式）不会提升

#### 对象

> 由**属性**和**方法**组成

##### 创建对象的三种方式

###### 1.利用字面量创建对象

```js
var obj = {
uname: '王广凯',
age:19;
sayHi: function() {
console.log(hi);
}
}
```

注意：

* 属性不需要声明

* 里面的属性或方法采用键值对的形式
* 多个属性或方法之间用逗号隔开
* 方法冒号后面跟的是一个匿名函数

调用对象：

1. 属性：对象名.属性名 / 对象名['属性名']

2. 方法：对象名.方法名()

###### 2.利用new Object创建对象

```js
var obj = new Object();
obj.name = '王广凯';
obj.age=19;
obj.sayhi = function(){
console.log(hi);
}
```



###### 3.构造函数创建对象

function 构造函数名 (形参) {

this.属性 = 值；

this.方法 = function() {}

}

调用：**new** 构造函数名 (实参)

```js
functioon Student(uname,age,sex) {
this.name = uname;
this.age = age;
this.sex = sex;
}
var wgk = new Student('王广凯'，19，'男');
```

##### for in 遍历对象的属性

```javascript
for(变量 in 对象)

 for(var k in obj)
 {
 console.log(obj[k]);
 }
```


************

#### 内置对象

> js自带的对象，并提供了一些常用的或最基本而必要的功能
>
> **查阅MDN**

##### Math数学对象

> 不是一个构造函数，不需要new来调用，直接使用里面的属性和方法

* Math.PI

* Math.floor()向下取整

* Math.ceil()向上取整

* Math.round四舍五入

  > .5特殊，往大了取

* Math.abs()绝对值

* Math.max() / Math.min() 最大/最小值

* Math.random()随机数 [0，1）

##### Date日期对象

> 是一个构造函数，必须使用new来调用创建

倒计时：预期的时间对应毫秒数 - 现在的时间对应毫秒数 

再用毫秒计算天/时/分/秒

##### Array数组对象

###### 添加数组元素

1.arr.push(4,5)	把4，5追加到arr数组**末尾** 	返回值是新数组长度

2.arr.unshift(4,5)	添加到arr数组**开头**	返回值是新数组长度

###### 删除数组元素

1.arr.pop()	删除最后**一个**元素	返回值是删除的元素

2.arr.shift()	删除第一个元素	返回值是删除的元素

###### 反转数组

arr.reverse()

###### 数组排序

arr.sort(function(a,b){

​				return a - b;	//升序

​				return b - a;	//降序

})

###### 数组索引

arr.indexOf('元素')	返回第一个满足条件的位序	找不到返回-1

###### 数组转换为字符串

arr = ['green' , 'blue' , 'pink'];

arr.join('-')

输出：green-blue-pink

##### String字符串对象

###### 根据字符返回位置

str.indexOf('要查找的字符' , [起始的位置])

###### 根据位置返回字符

str.charAt(索引号)

str.charCodeAt(索引号)	返回ASCII码

str[索引号]	H5新增

#### 传参

简单数据类型传**值**

复杂数据类型传**址**

*******

### Web APIs

### DOM文档对象模型

#### DOM树

* 文档：一个页面就是一个文档，DOM种用document表示
* 元素：所有的标签，用element表示
* 结点：所有内容都是节点（标签、属性、文本、注释等），用node表示

DOM把以上内容都看作是对象

#### 获取元素

根据ID获取

```javascript
var element = document.getElementById(id);
```

* id是大小写敏感的字符串
* 返回的是一个元素对象
* `console . dir`打印返回的元素对象，更好地查看里面的属性和方法

