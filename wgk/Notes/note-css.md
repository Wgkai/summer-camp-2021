#### 字体属性

字体系列、大小、粗细、文字样式
##### 字体系列
* `font-family`: '微软雅黑‘;

* 建议用英文写'Microsoft YaHei'

  > 如果有多种字体，用英文逗号隔开，优先显示前面的字体
  >
  > 多个单词组成的字体名称加引号
  >
  > 尽量使用系统默认字体

##### 字号
* `font-size`: 20px;

   > 注意加px
   > 可以给body整体加
   > **标题标签**比较特殊要单独改

##### 字体粗细
*  `font-weight`: bold/bolder/lighter/number

*  用数字更好 700=bold

  400/normal让标题不加粗
##### 字体样式
*	`font-style`: normal/italic
*	改为不倾斜用normal

##### 复合属性
> 节约代码，但有规范，**不能颠倒顺序**

`font：font-style font-weight font-size/line-height font-family`

必须保留`font-size`和`font-family`

---------------
#### 文本属性

颜色、对齐、缩进等
##### 文本颜色

* `color:`

* 三种表示
  1.英文 red
  2.十六进制（常用）#fff
  3.RGB代码

##### 文本对齐
* `text-align`

  > 是水平对齐方式

  e.g. text-align: center/left/right

  本质是让**盒子里面的文字**水平对齐

##### 文本装饰
> 上下划线、删除线

* `text-decoration`: none/**underline**/overline/line-through
* 用none**取消链接的下划线**

##### 文本缩进
> 指定文本的**第一行**缩进

* `text-indent`: 2em;

em是相对单位，就是当前一个文字的大小

##### 行间距
> 包括：上间距、文本高度、下间距

* `line-height`: 25px;

-----------------------------

#### 引入方式
1. 内部样式表：放到\<style>标签中
2. 行内样式表：在元素标签内部的style属性中修改样式，
   style=" "
3. 外部样式表

* 先建一个.css后缀文件
* 在html文件里写上\<link re1="stylesheet" href=" ">

---------------------

#### 复合选择器
> 由两个或多个基础选择器，通过不同方式组合而成

##### 后代选择器（重要）
形式：`元素1 元素2{ 样式声明 }`

> 表示选择元素1里面的所有元素2，只给元素2改

* 元素之间用空格隔开

* 可以多层：元素3....

* 元素1 2可以是任意基础选择器：标签、类、id

##### 子选择器（重要）
> 选亲儿子元素

形式：`元素1>元素2 {样式声明}`

##### 并集选择器（重要）
形式：`元素1，元素2 {样式声明}`

* 英文逗号
* 适用于集体声明
* 最好竖着写
* 元素可以是后代选择器、子选择器

##### 伪类选择器

###### 链接伪类（重要）
* a:link 选择所有未被访问的链接

* a:visited 选择所有已被访问的链接

* a:hover 选择鼠标指针位于其上的链接

* a:active 鼠标按下的链接

  > a可以替换成类名等

> 要按照LVHA顺序
> a链接，在浏览器中有默认样式，要单独指定样式

###### focus伪类选择器
主要针对表单元素
选择光标所在的元素
`input:focus{样式}`

----------------------

#### 元素显示模式
> 块级元素、行内元素

##### 块级元素
1. 独占一行

2. 高度、宽度、外边距、内边距都可控制

3. 宽度默认是容器（父级宽度）的100%

4. 里面可以放行内或块级元素

   > 注意：文字类的元素内不能使用块级元素
   > 例如\<p>里不能放\<div>
   > \<h1>~\<h6>里面也不能放块级元素

##### 行内元素
\<span> \<a>...

1. 一行可以显示多个
2. 高度、宽度直接设置没用
3. 默认宽度是它本身内容的宽度
4. 里面不能放块级元素,\<a>中可放，见显示模式转换

##### 行内块元素
\<img />  \<input />  \<td>...

1. 一行可以放多个，中间有空隙（行内元素的特点）
2. 默认宽度是它本身内容的宽度（行内元素的特点）
3. 高度、行高、内外边距都可以控制（块级元素特点）

##### 元素显示模式转换
> 一种模式的元素需要另一种模式的元素的特性

比如增加<a>的触发范围：

> a {
> width:150px;
> height:50px;
> **display:block;**
> }

display:inline（较少用）
display:inline-block
文字垂直居中：让line-height=height

-------

#### css背景
* 背景颜色：`backgroung-color`:颜色值;
  半透明效果：`background : rgba(0,0,0,0.X)`

* 背景图片:

  > logo/装饰性图/大背景（便于控制位置）

  `background-image: url(url)`;

  

* 背景平铺：`background-repeat`:repeat/no-repeat/repeat-x/repeat-y
  还可以加背景颜色，背景颜色在下层

* 背景图片位置：
  `background-position`：x y;

  * 方位：center/left/right/top/bottom
  * 精确单位：x,y分别是距离左边和距离上边
  * 若只写一个，另一个默认居中
  * 还可以混合写

* 背景固定/滚动
  `background-attachment`：scroll/fixed
  默认滚动

* `background-size:cover`:保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。
  
* 复合属性：颜色 图片 平铺 滚动 位置

---------------------------

#### css三大特性
* 层叠性
  原则：就近原则，若发生冲突，哪个近执行哪个样式
* 继承性
* 优先级 id>类>元素

----------------------

### 盒子模型
> border、content、padding、margin

#### border
* `border-width`
* `border-style` : solid/dashed/dotted
* `border-color`

> 可以简写，无顺序
>
> 可以设置一条边border-top/bottom/left/right
>
> 边框会影响盒子实际大小

* `border-collapse`合并边框

#### padding
* `padding-left/right/top/bottom`:值

简写：
1个值：所有
2个值：上下，左右
3个值：上，左右，下
4个值：上，右，下，左

若指定了height,width,则再加padding会撑大盒子

#### margin

> 同padding

* 盒子水平居中：margin : 0 auto;
* 嵌套块元素塌陷：
  解决：为父元素定义上边框/为父元素定义上内边距/为父元素添加：overflow:hidden
* 清除内外边距：
  \* {
  margin : 0;
  padding : 0;
  }

##### 圆角边框
`border-radius` : XXpx / 百分比;

> XX代表圆半径--可以变成圆形

##### 盒子阴影
`box-shadow`: 
水平位置、竖直位置、模糊距离（虚实）、阴影尺寸、阴影颜色
前两个必写

---------------------

### 浮动

标准流：标签按照规定好默认方式排列

网页布局第一准则：多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动

**浮动特性**

1. 浮动元素会脱离标准流，
   （漂浮在普通流上面）
2. 浮动的元素会一行内显示并且元素顶部对齐
3. 浮动的元素会具有行内块元素的特性
   若行内元素有了浮动，则不需要转换就可以直接给高度和宽度

**一般策略：先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置**

**清除浮动**

为什么清除浮动？
父级盒子在很多情况下，不方便给高度，但又由于盒子浮动不占有位置，最后父级盒子
高度为0，就会影响下面的标准流盒子

1. 额外标签法
   在浮动元素末尾添加一个空的块级元素标签，如\<div style="clear:both">\</div>

2. 给父级元素添加overflow
   overflow:hidden

3. after伪元素法
   给父级元素添加

   > .clearfix:after{
   > content: "";
   > display: block;
   > height: 0;
   > clear: both;
   > visibility: hidden;
   > }
   > .clearfix{
   > *zoom: 1;
   > }

   

4. 双伪元素法
   给父级元素添加

   > .clearfix:before,.clearfix:after{
   > content: "";
   > display: block;
   > height: 0;
   > clear: both;
   > visibility: hidden;
   > }
   > .clearfix{
   > *zoom: 1;
   > }
   > .clearfix:after{
   > clear:both;
   > }

   ****************

##### css属性书写顺序

优雅的代码

布局定位属性：**display**/position/float/clear/visibility/overflow
自身属性：width/height/margin/padding/border/background
文本属性：color/font/text-decoration/text-align/vertical-align/white-space/break-word
其他属性：content/cursor/border-radius/box-shadow/text-shadow......

************

##### 页面布局整体思路
确定版心（可视区）
分析行模块、列模块（大小、位置）
现有结构，后样式

**********


### 定位
> 将盒子定在某一位置
> 定位=定位模式+边偏移

##### 定位模式
###### position属性

1. static 静态定位（了解）

2. relative **相对定位**（重要）
   相对于自己原来的位置移动
   **原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待它**

3. absolute **绝对定位**（重要）
   相对于它的祖先元素
   如果没有祖先元素或祖先元素没有定位，则以浏览器为准定位
   以最近的一级有定位的祖先元素为准定位
   **脱离标准流**

> 子绝父相
> 父级需要占有位置，因此是相对定位；子盒子不需要占有位置，则是绝对定位

4. fixed **固定定位**（重要）
   固定于浏览器可视区的位置
   脱离标准流

5. sticky粘性定位（了解）

###### 边偏移
top/bottom/left/right
例如：top:80px

##### 定位叠放次序
* 选择器{z-index : 1;}

  > 如果属性值相同，则按照书写书顺序，后来居上
  > 数字后不能加单位
  > 只有定位的盒子才有z-index属性

##### 定位特殊特性
* **行内元素添加绝对或固定定位，可以直接设置高度和宽度**
* **块级元素添加绝对或固定定位，如果不给宽度或高度，默认大小是内容的大小**
* 浮动不会压住下面的**文字**（本身就是做环绕文字的）
* 绝对或固定定位会压住下面标准流的所有内容

*******************


#### 布局：
1. 标准流
可以让盒子上下排列，**垂直的块级盒子就用标准流布局**
2. 浮动
可以让多个块级元素一行显示或左右对齐盒子，**多个块级盒子水平显示就用浮动布局**
3. 定位
有层叠的概念，**如果元素自由在某个盒子内移动就用布局定位**

********

#### 显示与隐藏
##### 1. display
display : none:隐藏元素且不占有位置
display : block:显示元素

##### 2. visibility
visibility : visible:
visibility : hidden:继续占有原来位置

##### 3. overflow
overflow ：visible/hidden/scroll/auto
溢出的部分

********

### flex

* display : flex;

外面的叫容器、里面的叫项目
布局原理：通过**给父盒子**添加flex属性，来控制盒子的位置和排列方式

#### 父项常见属性

##### flex-direction设置主轴方向
row主轴是x,从左到右
row-reverse主轴是x,从右到左
column主轴是y,从上到下
column主轴是y,从下到上

##### justify-content设置主轴上子元素的排列方式
flex-start：从头部开始
flex-end：从尾部开始
center：居中对齐
space-around：平分剩余空间
**space-between**：先两边贴边，再平分剩余空间

##### flex-wrap设置子元素是否换行
默认不换行
nowrap 不换行
wrap 换行

##### align-items设置侧轴上的子元素排列方式（单行）
flex-start：从头部开始
flex-end：从尾部开始
center：居中对齐
stretch：拉伸
**先确定主轴**

##### align-content设置侧轴上的子元素排列方式（有换行）
同主轴

##### flex-flow
是direction和warp的符合属性

#### 子项常见属性
##### flex属性
定义子项目分配剩余空间，用flex表示占多少份数
. item {
flex:\<number>
}

##### align-self控制子项自己在侧轴上的排列方式
##### order定义项目的排列顺序
数值越小，排列越靠前

**********

##### 字体图标

##### symbol引用

解压，将代码放到项目文件夹里

第一步：引入symbol代码：\<script src="./iconfont.js"></script>（注意路径）

第二步：引入通用css代码：
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>



第三步：挑选相应图标并获取类名，应用于页面：

```
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-xxx"></use>
</svg>
```


可以用font-size更改大小

##### Unicode引用（可以使用伪元素选择器）

第一步：拷贝项目下面生成的 @font-face

```
@font-face {
  font-family: 'iconfont';
  src: url('iconfont.ttf?t=1625885691015') format('truetype');
}
```



第二步：定义使用 iconfont 的样式

```css
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```



第三步：挑选相应图标并获取字体编码，应用于页面

```html
<span class="iconfont">&#x33;</span>
```

伪元素：content：‘\x33';



##### css三角

div行高、宽度为0

三边boder-color:transparent

更改大小就改border-width

##### 图片、表单和文字对齐

将表单、图片的vertical-align属性设置为middle（只能用于行内元素或行内块元素）

##### 溢出的文本用省略号显示

单行文本：

先强制一行内显示文本
white-space：nowrap;

超出部分隐藏
overflow：hidden;

用省略号代替
text-overflow：ellipsis;

##### 布局技巧

margin负值解决边重合的问题

鼠标经过，边框变颜色的效果：利用z-index提高层级/鼠标经过时改成相对定位

##### css初始化

```html
/* 把我们所有标签的内外边距清零 */

* {
  margin: 0;
  padding: 0
  }
  /* em 和 i 斜体的文字不倾斜 */
  em,
  i {
  font-style: normal
  }
  /* 去掉li 的小圆点 */
  li {
  list-style: none
  }

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}
/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```

************

#### HTML5新特性

##### 新增语义化标签
\<header>
\<nav>导航
\<article>
\<section>某个区域
\<aside>侧边栏
\<footer>

是块级元素

##### 新增input类型

email/search/tel......

##### 新增表单属性

placeholder 提示文本
required
autofocus
autocomplete
multiple 提交多个文件

#### CSS3新特性

##### 新增选择器

###### 1. 属性选择器
元素[属性=某个值]
input[type=text]选择type属性值为text的input

还可以选择属性值以XXX开头(E[arr^=""])或结尾(E[arr$=""])的元素

###### 2. 结构伪类选择器
E:first-child

E:last-child

E:nth-child(n) 
对**所有子元素**进行排序

> 括号里面可以是：
>
> 数字 
> even偶数 
> odd 奇数 
> n表示选择所有 
> n+i/-n+i
> an

E:first-of-type

E:last-of-type

E:nth-of-type(n)
对**指定子元素**进行排序

> 例：**ol li**:nth-of-type:{}
> 注意前面要写到子元素

###### 3. 伪元素选择器（重要）
> 利用css创建一个标签，而不需要htm标签

* 父元素 :: before
* 父元素 :: after

创建的是行内元素

必须有content属性

和标签选择器权重一样

> 使用场景：
> 伪元素字体图标
> 清除浮动



##### 盒子模型border-box

> 解决边框和内边距影响盒子大小的问题

**box-sizing：border-box**

盒子的大小就是设置的width和height



##### 过渡
transition: 变化的属性 花费时间 运动曲线 何时开始
后两个可省略
谁变给谁写
还要写hover

