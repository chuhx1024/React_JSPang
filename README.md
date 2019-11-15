# React 学习
## 起步
### 1. 使用官方的脚手架
```
npm install -g create-react-app
```
create-react-app 是React官方推出的脚手架 适合初学者使用
```
// 进入一个文件夹
create-react-app my-app   //用脚手架创建React项目
cd my-app   //等创建完成后，进入项目目录
npm start   //预览项目，如果能正常打开，说明项目创建成功
```
等到浏览器可以打开React网页，并正常显示图标后，说明我们的环境已经全部搭建完成了。
## 好用的 vscode 插件
Simmle React Snippets 
ES7 React/Redux/React-Native/JS snippets
## 组件中使用 Prop-types 来校验父组件传来的值
```
// 引入 如果使用官方的脚手架  就默认安装了  
import PropTypes from 'prop-types'
// 使用 
组件名.
```