# segma前端模板项目

## 项目说明
本项目是关于西格马前端团队使用Vue开发项目的模板项目。  
更多请见：[vue_template](https://github.com/LucasGoodman/vue_template)

## 运行前须知
- 请检查`public/index.html`中`title`字段修改为项目所需title
- 请检查`package.json`中`name`和`version`字段修改
- 检查`README.md`中关于项目说明修改

## 安装依赖
```
npm install
```

### 本地运行
```
npm run serve
```

### 打包开发版
```
npm run build:dev
```

### 打包正式版
```
npm run build:prod
```

### 运行`npm run build`命令，生成对应的打包分析页面
```
npm run report
```

### Eslint代码检查
```
npm run lint
```

### Eslint代码自动修复（只能修复部分问题，有些问题需要手动修复）
```
npm run lint:fix
```
### eslint工具说明：
- 本项目所用命令默认只会检查`/src`目录下所有的`js`和`vue`文件。
- `.eslintignore`文件默认添加了对`src/assets`目录下所有js文件的忽略

### Stylelint代码检查
```
npm run stylelint
```

### Stylelint代码自动修复（只能修复部分问题，有些问题需要手动修复）
```
npm run stylelint:fix
```
### Stylelint工具说明：
- 本项目所用命令默认只会检查`/src`目录下所有的`html,vue,css,less`文件。
- 在`src/assets`目录下新增样式文件会进行检测，如果有不需要检测（如第三方样式、已经压缩的样式）的文件请添加至`.stylelintignore`
- 如果在`src/assets`目录下添加了需要忽略的文件，但是检查未通过，可以将package.json中这段代码暂时删除（删除但不要提交到代码仓库）：
```$json
"src/**/*.{html,css,less,vue}": [
     "stylelint --fix",
     "git add"
 ]
```

## 开发规范
待补充


