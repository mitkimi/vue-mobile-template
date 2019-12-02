# vue-mobile-template

> 移动端vue模板

## 主要技术栈
> 技术栈和loader
- Vue
- Vuex
- Vue-router
- less-loader

> 开源库
- 样式库： vant
- 时间过滤器： moment

## 安装
```
npm install
```

### 热更新研发
```
npm run watch
```

### 构建生产环境包
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## 研发思路

- 程序入口是 ～/src/main.js
  - 样式库在 main.js 中一次性引入
  - 使用 Vue.use 对所有组建进行注册
  - 时间过滤器使用方法：在页面上直接使用 { new Date() | moment }
- 页面入口是 ~/src/App.vue
  - 框架设置页面宽为 100% 屏幕宽，高为 100% 屏幕高的一个区域。超过此区域出现滚动条
  - 根据路由判断公共页面显示的模块可以浮在页面上层
- 状态管理 ~/src/store
  - 公共状态管理直接写进 index.js
  - 可根据模块拆分的状态放进单独的 js 文件并且引入 index.js 中
- 路由管理 ~/src/router
  - 设置路由模式、路由守卫等在 index.js 中配置
  - 页面路由表使用 routes.js 进行具体配置
  - 框架级别的组件放进 ~/src/layouts 中，使用 import from 进行引用
  - 页面级别的组件放进 ~/src/pages 中，使用 () => import(路径) 进行引用
- 组件构成
  - 组件由一个 .vue 文件统一管理，页面结构、脚本和样式分别以文件形式引入，所以一个组件的文件结构应该是

```markdown
- componentName
  - index.vue
  - componentName.html
  - componentName.js
  - componentName.less
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
