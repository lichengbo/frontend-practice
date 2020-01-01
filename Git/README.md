# 常用Git 命令记录

git branch 查看本地分支
git branch -a 查看本地及远程分支
git remote prune origin 去除远程已删除的分支
git checkout dev 切换本地分支到dev(dev 分支本地已存在)
git checkout -b dev origin/dev 切换到dev新分支并拉取远程dev 分支代码
git branch -D dev 删除dev 分支

git remote -v 显示远程仓库地址
git remote set-url 切换新仓库地址

git log 查看提交记录

git reset --hard HEAD 回退到指定版本
git reset [--hard|soft|mixed|merge|keep] [<commit>或HEAD]  将当前分支reset到指定的<commit>或者HEAD(默认为最新的一次提交，即重设到最新一次提交之前的版本)
1. hard(慎用) 重设index和working tree,所有改变都会被丢弃，包括文件的修改、新增、删除等操作，并把HEAD指向<commit>， 因此通过git log查看版本提交记录，被reset的版本记录会被丢弃，但可以通过git reflog查看
2. soft 不重设index和working tree,仅仅将HEAD指向<commit>,表示已经commit的文件会取消commit, 通过git status查看，文件会处于待commit状态“Changes to be committed”
3. mixed(默认) 重设index,但不重设working tree,表示已经被add的文件，被取消add， 通过git status查看，文件会处于待添加索引状态 “Changes not staged for commit”
4. merge
重设index，重设working tree中发生变化的文件，但是保留index和working tree不一致的文件
5. keep
重设index，重设working tree中发生变化的文件
