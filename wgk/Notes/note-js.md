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

2. 函数表达式（匿名函数）

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

根据标签名获取

```js
var elements = element.getElementsByTagName(tagName)
```

实例

```js
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagName("td");
（获取父元素内部所有指定标签名的子元素）
```

* 返回值是获取的元素对象的集合，以伪数组的形式存储（只有一个对象也是数组）
* 没有此元素返回空的伪数组
* 获取的元素是动态的

H5新增

根据类名选择

```js
var elements = element.getElementsByClassName(names);
```

所有都可选

```js
element = document.querySelector(selectors);//返回第一个元素对象
element = document.querySelectorAll(selectors);//返回所有元素对象
```

* 括号里面可以是类选择器，id选择器，标签选择器等等

获取body元素

```js
var objRef = document.body;
```

获取html元素

```js
var element = document.documentElement;
```

#### 事件基础

组成（三要素）：

* 事件源（被触发的对象 ）
* 事件类型（如何触发，点击/经过/键盘按下...）
* 事件处理程序（通过一个函数赋值的方式完成）

> var btn = document.getElementById(btn);
>
> btn.onclick = function(){.....};

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动出发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |



#### 操作元素

##### 1.改变元素内容

element.innerText

element.innerHTML

普通盒子里的内容

区别：

innerText不识别html标签，innerHTML识别

##### 2.修改元素属性

src、href、id、alt、title

##### 3.修改表单属性

type、value、checked、selected、disabled

```js
var btn = document.querySelector('button');
bn.onclick = function(){
this.disabled = true; //点击一次后被禁用
					  //this指向事件函数的调用者
}
```

##### 4.修改样式属性

（1）element.style	行内样式操作

* 相当于行内样式表，权重高

> this.style.backgroundColor = "#fff";
>
> this.style.fontsize = "25px";

（2）element.className	类名样式操作（修改的样式比较多）

> this.className = "xxx"

* 会覆盖原来的类名
* 可以修改为多类名，即可保留之前的类名

#### 排他思想

####  自定义属性的操作

##### 获取属性值

* element.属性	获取内置属性值（元素本身自带的）
* element.getAttribute('属性')	主要获得自定义的属性

##### 设置属性值

* element.属性 = 值
* element.setAttribute('属性'，‘值’)

##### 移除属性

* element.removeAttribute('属性')

##### H5自定义属性

自定义属性以data-开头

#### 节点操作

利用父子兄节点关系获取元素

元素节点nodeType为1（主要操作）

属性节点nodeType为2

文本节点nodeType为3

父节点

node.parentNode	没有就返回null

子节点	

node.children	不包含文本节点

node.children[0]

node.children[node.children.length-1]

兄弟节点

node.nextElementSibling	ie9以上

node.previousElementSibling

创建并添加节点

document.creatElement('tagname')

node.appendChild(child)

node是父级节点

node.insertBefore(child , 指定元素)

innerHTML和document.creatElement效率比较

innerHTML创建多个元素（不使用拼接字符串，采用数组形式拼接）效率更高，结构稍复杂

creatElement()创建多个元素效率稍低，但是结构更清晰

删除结点

node.removeChild(child)

node是父级节点

复制节点

node.cloneNode()

括号内为空或里面是false，浅拷贝，不复制里面的内容

括号里面是true，深拷贝，复制内容且动态

#### 事件高级

##### 注册事件

传统注册方式

事件监听方式

eventTarget.addEventListener( type , listener [,useCapture])

type是字符串，加 '',不加on

同一个元素、同一个时间可以添加多个侦听器

例：button.addEventListener ( 'click' , function(){xxx;})

##### 删除事件

传统方式

eventTarge.onclick = null

事件监听方式

eventTarget.removeEventListener( type , listener [,useCapture])

不能使用匿名函数

例：

```js
var divs = document.querySelectedAll( 'div' );

divs[1].addEventListener( 'click' , fn )

function fn (){
xxxxx;
divs[1].removeEventListener( 'click' , fn );
}
```

##### DOM事件流

> 描述的是从页面中接收事件的顺序

![Alt text](images/dom事件流.png)

