# segma前端项目

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
- 本项目所用命令默认只会检查`/src`目录下所有的`html,vue,css,less,scss,sass`文件。
- `.stylelintignore`文件只默认添加了对`src/assets/css/segma_ui/index.css`文件忽略
- 在`src/assets`目录下新增样式文件会进行检测，如果有不需要检测（如第三方样式、已经压缩的样式）的文件请添加至`.stylelintignore`


