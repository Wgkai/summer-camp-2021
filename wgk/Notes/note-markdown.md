### 块级元素
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