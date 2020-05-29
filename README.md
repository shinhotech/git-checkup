# git-checkup

Git 规范检测工具

## 起服务方式

```bash
npm install pm2 -g
npm install ts-node -g
pm2 install typescript
```

```bash
nodemon : npm run start
pm2: npm run pm2
```

## 一期需要完成的任务
- config.yaml配置的设计和读取
- ts编译配置
- pm2部署命令配置
- 定时任务脚本集成在main.js启动
- 根据gitlab api 拉取分支和tag信息
- 分支和tag命名检测逻辑
- 分支和tag定时任务
- 异常提醒，短信/邮件推送

## Features

关于分支
- [ ] 分支命名规范
- [ ] 分支向上合并提醒
- [ ] 限制向下合并的分支（release 合并 feature）预警
- [ ] 分支自动合并，支持定时
- [ ] 分支异常推送

关于tag
- [ ] 批量生成分支，支持定时
- [ ] tag 命名规范
- [ ] tag 检测与提醒（发版半日后）
- [ ] 批量生成tag，支持定时

关于提交
- [ ] commit meassage检测
- [ ] 限制提交的分支（master/release）提交检测预警
- [ ] commit 提醒，每天至少一次

关于代码
- [ ] 代码注释检测
- [ ] 代码规范检测
- [ ] 需冻结文件/文件夹修改预警
- [ ] 新代码review提醒

关于仓库
- [ ] 仓库命名规范

关于user
- [ ] user账号信息检测，异常提醒

## configuration

在[config.yaml](config.yaml)中设置：

- 需要检测的项目列表
- 项目迭代开始结束时间的数组
- 检测时间节点
- 分支、tag、提交信息等规范的正则
- ...

## 目录

```bash
lib         # 验证逻辑封装
schedule    # 定时任务
main.js     # 入口文件
config.yaml # 配置文件
```

## start up

开发
```
npm run dev
```

PM2 部署
```
npm run build
npm start/restart
```

*参考文档：[gitlab api](http://10.211.62.41:8081/help/api/README.md)*