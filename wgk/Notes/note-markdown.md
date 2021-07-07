## Markdown 笔记

### 一、块级元素

#### 标题
第一种：
>This is an H1
\===========
>
>This is an H2
\-------------

第二种：
>\# This is an H1 (**#后面要加空格**)
>
>\## This is an H2
>
>\###### This is an H6

#### 块引用
* 每段前面要加">"
* 一块引用中间有空行最好也加上，不然会被分隔开，就像这样：
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
id sem consectetuer libero luctus adipiscing.
* 可以嵌套引用，只需再添加一个">"（可以嵌套好几层）
* 块引用可以包含 Markdown 元素, 包括标题, 列表和代码块

#### 列表
* 星号*、加号+、连字符-均可，例如：
>\*   Red（**星号后要加空格**）
>\*   Green
>\*   Blue

* 有序列表使用数字加(英文)句号（自己标的数字不会影响显示的数字）
* 列表内若分段，每段要首行缩进（4空格或table)
* 列表内若包含块注释，注释前也要缩进
* 列表内若包含代码块，双倍缩进

#### 代码块
1.   要在 Markdown 中插入代码块, 只需要将每一行都缩进 4 个空格或者 1 个水平制表符（有点麻烦）
2. **用 \<pre> 和 \<code> 标签包围代码块：**
>\<pre>\<code>typedef struct BiTNode {  //二叉链表结点的定义
>	TElemType  data;
>	struct BiTNode* lchild, * rchild;
>} BiTNode, * BiTree;\</code>\</pre>

效果就像这样：
><pre><code>typedef struct BiTNode {  //二叉链表结点的定义
>	TElemType  data;
>	struct BiTNode* lchild, * rchild;
>} BiTNode, * BiTree;</code></pre>
#### 水平线
如果一行中只有三个以上的连字符, 星号, 或者下划线则会在该位置生成一个 \<hr /> 标签. 星号和连字符之间的空格也是允许的. 下面的例子都会生成一条水平线:
>\***
>
>\*****
>
>\- - -
>
>\---------------------------------------

---------------------------

### 二、内联元素

#### 链接:link:

Markdown 支持两种链接形式: 内联 和 引用.

##### 内联

要创建内联链接, 只需在链接文本的右括号后面紧接一对圆括号. 圆括号里面放所需的 URL 链接, 还可以放一个 可选 的链接标题, 标题要用引号包围. 例如:

> This is \[an example\](http://example.com/ "Title") inline link.
>
> \[This link](http://example.net/) has no title attribute.

效果如下：

>This is [an example](http://example.com/ "Title") inline link.
>
>[This link](http://example.net/) has no title attribute.

##### 引用

* 引用类型的链接放在第二个中括号里, 括号里面放链接标签:

  > This is \[an example][id] reference-style link.

  接下来, 在文档中的任意位置, 你可以像下面那样定义链接标签, 需要单独占一行:

  > \[id]:http://example.com/  "Optional Title Here"(这一行是看不见的)

  然后，效果如下：

  [id]: http://example.com/

  > This is [an example][id] reference-style link.

* 隐含链接名称

  这样写:   

  > \[Google][]

  同时这样定义链接:

  > \[Google]: http://google.com/

  然后，效果如下：

  [Google]: http://google.com/

  > [Google][]

#### 图片

* 内联图片语法如下:

  > !\[Alt text](/path/to/img.jpg)

  > !\[Alt text](/path/to/img.jpg "Optional title")

* 引用图片语法如下:

  > !\[Alt text][id]

  "id" 是图片引用的名称. 图片引用使用链接定义的相同语法:

  > \[id]: url/to/image  "Optional title attribute"



----------------------------------

### The End:sleepy::sleepy::sleepy:

