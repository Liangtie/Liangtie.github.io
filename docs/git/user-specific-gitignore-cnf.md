---
description: 不要轻易往开源项目提交更新.gitignore
title: Git：添加用户范围的gitignore文件
readingTime: false
tag:
  - git
recommend: 3
---

尝试往 SWIG 提交 PR 时候，[ojwb 老哥的评论](https://github.com/swig/swig/pull/3009#discussion_r1740286838)提醒可以添加用户范围的 gitignore 文件：

> I don't know what all of these are from, but at least .vscode is really better handled by configuring it for your own user account as then it'll be ignored in any git repo you work on. Otherwise SWIG (and every other project) ends up having to add ignore rules for the backup files, etc created by every possible editor and IDE people might use...

搬运一下来自 [stackoverflow](https://stackoverflow.com/questions/5724455/can-i-make-a-user-specific-gitignore-file) 的答案：

```bash
echo build >> $HOME/.gitignore
git config --global core.excludesfile $HOME/.gitignore

```

确认 git config

```bash
type $HOME/.gitconfig
```
