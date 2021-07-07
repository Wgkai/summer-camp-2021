## Git 笔记  
### Linux常用命令:clap::clap::clap:
#### 一、目录操作命令
##### 1.1 目录切换cd
* `cd /`        切换到根目录
* `cd /usr`        切换到根目录下的usr目录
* `cd ../`        切换到上一级目录 或者  `cd ..`
##### 1.2 目录查看 ls
*   `pwd 文件名`查看当前目录
* `ls`                查看当前目录下的所有目录和文件
* `ls -a`            查看当前目录下的所有目录和文件（包括隐藏的文件）
* `ls -l` 或 `ll`       列表查看当前目录下的所有目录和文件（列表查看，显示更多信息）
`ls /dir`            查看指定目录下的所有目录和文件   如：ls /usr
##### 1.3 创建目录 mkdir
* `mkdir    aaa`            在当前目录下创建一个名为aaa的目录
* `mkdir    /usr/aaa`    在指定目录下创建一个名为aaa的目录
##### 1.4 删除目录 rm
* `rm -rf aaa`    删除当前目录下的aaa目录
#### 二、文件操作命令
##### 2.1 新建文件 touch
* `touch 文件名` 例如：touch readme.txt
##### 2.2 删除文件 rm
* `rm -rf 文件名`
##### 2.3 修改文件 vi
*   打开文件
    *   命令：`vi 文件名`
    *   此时并不能编辑
*   编辑文件
    *   点击i/o/e进入编辑模式
*   保存/取消编辑
    *   按`esc`进入命令行模式
    *   输入`:`进入底行模式
    *   输入`wq`保存并退出编辑 或 输入`q!`撤销修改并退出编辑
##### 2.4 查看文件
*   `cat 文件名`

-------------------------

### Git!---分布式版本控制系统:hushed::hushed::hushed:
#### 一、本地仓库:house:
##### 1.初始化一个Git仓库
*   可以先进入到要初始化的仓库，然后：`git init`
*   或者`git init 文件路径`
>可以发现该目录下多了一个.git的目录，这个目录是Git来跟踪管理版本库的

##### 2.将文件添加到暂存区
*   `git add 文件名`

Git跟踪并管理的是修改，而非文件

##### 3.将文件提交到分支
*   `git commit -m <message>`
    
    >如果commit后面不加文件名，则将暂存区所有文件都提交到仓库
>1.Git命令必须在Git仓库目录内执行（git init除外），在仓库目录外执行是没有意义的。
>
>2.添加某个文件时，该文件必须在当前目录下存在，用ls或者dir命令查看当前目录的文件，
>
>看看文件是否存在，或者是否写错了文件名。

##### 4.查看当前仓库状态
*   `git status`

几种情况：
1.Changes not staged for commit:（还没add）
2.Changes to be committed:（已经add了，还没commit）
3.Untracked files:（还没有被add过）
4.On branch master，nothing to commit, working tree clean（所有都commit啦)

##### 5.查看修改的内容
*   `git diff 文件名`查看上一次修改
*   `git diff HEAD -- 文件名`命令可以查看工作区和版本库里面最新版本的区别

##### 6.查看提交日志
*   `git log`
    
    >加文件名会只显示该文件的提交记录
    >
    >git log --pretty=oneline --abbrev-commit可以更清晰地看到

##### 7.版本穿梭
*   `git reset --hard commit_id`
    
    >commit_id可以改为HEAD^（上个版本） 或 HEAD^^（上上个版本）

commit_id可以由以下两种途径获取：
用`git log`查看提交历史，以便确定要回退到哪个版本。
用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

##### 8.撤销修改
*   情况一：在工作区做了修改，还没add，用命令`git checkout -- 文件名`即可撤销。
*   情况二：做完修改后已经add了，则先用命令`git reset HEAD 文件名`，回到情况一再撤销。
*   情况三：已经commit了，用版本回退。

##### 9.删除文件和撤销删除
从工作区删除了某文件
1.   要从版本库中也删除，则用命令`git rm 文件名`删掉，并且`git commit`.
2.  发现误删了，则可用`git checkout -- 文件名`从版本库中恢复。
>git checkout其实是用版本库里的版本替换工作区的版本，
>
>无论工作区是修改还是删除，都可以“一键还原”。

#### 二、远程仓库:cloud:

##### 1.关联远程库

* `git remote add origin git@server-name:path/repo-name.git`

   >必须给远程库指定一个名字，`origin`是默认习惯命名


##### 2.push到远程库

* `git push <远程主机名> <本地分支名>:<远程分支名>`

第一次推送：`git push -u origin master`

以后：`git push origin master`/`git push`

##### 3.删除远程库

* `git remote rm <name>`

##### 4.从远程库克隆

* `git clone [url]`

> 地址不只有一个，fork过来的仓库，url要写SSH下面那个:sob:

##### 5.其他的一些指令

* `git remote`查看远程仓库名
* `git remote -v`查看远程仓库详细信息

#### 三、分支管理:deciduous_tree:

##### 1.基本操作

* 查看分支：`git branch`

* 创建分支：`git branch <name>`

* 切换分支：`git checkout <name>`或者`git switch <name>`

* 创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`

* 合并某分支到当前分支：`git merge <name>`

  > 默认是`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息
  >
  > 加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并

* 删除分支：`git branch -d <name>`

##### 2.解决冲突

​		在不同的分支里修改同一内容可能会引起冲突，解决冲突就是把Git合并

失败的文件手动编辑为我们希望的内容，再提交。

##### 3.多人协作

- 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
- 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；
- 用`git push origin <branch-name>`推送自己的修改；
- 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
- 如果合并有冲突，则解决冲突，并在本地提交；
- 没有冲突或者解决掉冲突后，再用`git push origin <branch-name>`推送就能成功

#### 四、标签管理

- 命令`git tag <tagname>`用于新建一个标签，默认为`HEAD`，也可以指定一个commit id；

  > * 指定的commit id 加在标签名后面
  > * commit--->tag  标签加在这次commit上

- 命令`git tag -a <tagname> -m "blablabla..."`可以指定标签信息；

- 命令`git tag`可以查看所有标签；

- 命令`git tag -d <tagname>`可以删除一个本地标签。