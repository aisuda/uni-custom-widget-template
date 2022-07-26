# uni-custom-widget-template
> aipage-editor自定义组件模板，uniapp版自定义组件，用于开发APP和各类小程序自定义组件。

### 目录说明
- src: 自定义组件源码；
- dist: uniapp构建后文件存放目录；
- preview: 自定义组件web预览模块（发布NPM自定义组件需要）；
- src/components: 存放自定义组件源码（vue3技术栈）；
- src/components/info-card/info-card.jsx: 自定义组件内容文件；
- src/components/info-card/plugin.jsx: 用于注册一个amis-editor插件，注册成功后编辑器左侧组件面板中会展示；
- src/react-widget/index.js: 用于注册一个amis渲染器，注册成功后编辑器画布区中才会正常展示自定义组件内容；
- src/components/xxx/assets: 存放自定义组件组件静态资源，比如 css、img等，此处存放的静态资源会经过webpack构建；
- src/pages: uniapp 应用页面，开发uniapp自定义组件时仅用于充当预览展示页；
- src/main.ts: uniapp 应用入口文件；
- src/manifest.ts: uniapp 配置文件（配置应用名称、appid、logo、版本等打包信息）；
- src/pages.json: uniapp 页面配置（配置页面路由、导航条、选项卡等页面类信息）；
- src/uni.css: uniapp 全局样式文件（这里是uni-app内置的常用样式变量）；
- amis.config.js: amis-widget-cli配置文件；
- index.html: uniapp 页面模板（本地预览需要）；
- vite.config.ts: uniapp 构建配置文件（vite 构建模式）；
- build: 存放打包&构建入口文件；
- build/linkDebug.js: 用于本地「linkDebug」调试自定义组件；
- build/registerPlugin.ts: 自定义组件插件构建入口；
- build/registerRenderer.ts: 自定义组件渲染器构建入口；
- build/index.ts: 自定义组件「web预览模块」构建入口（平台预览需要），build:h5 构建模式使用；

### 相关开发文档
- uni-app开发文档：[https://uniapp.dcloud.net.cn/](https://uniapp.dcloud.net.cn/)
- vue3开发文档：[https://v3.cn.vuejs.org/](https://v3.cn.vuejs.org/)
- 自定组件注册器：[vue3-aipage-widget](https://github.com/aisuda/vue3-aipage-widget)
- 自定义组件开发工具：[amis-widget-cli](https://github.com/aisuda/amis-widget-cli)

### 开发 aipage-editor 自定义组件 注意事项
- 开发小程序和快应用自定义组件时，静态资源（img、css等）请和自定义组件渲染器放同一个目录，比如：components/info-card/assets 存放 info-card 自定义组件的静态资源。方便后续动态注入自定义组件源码。

### 开发说明

1. **安装依赖**
```bash
$ npm i 或者 yarn
```

2. **preview: 组件预览模式（带热更新）**
> preview模式：用于预览自定义组件内容。
```bash
$ npm run preview
```

3. **linkDebug: 外链调试（amis-saas中预览自定义组件）**
> linkDebug模式：用于在amis-saas中预览和调试自定义组件。
```bash
$ npm run linkDebug
```

4. **build:h5: 构建自定义组件web预览模块**
> build:h5模式：用于构建发布到 npm 中的文件，默认存放到 preview 目录中。
```bash
$ npm run build:h5
```

5. **build2lib: 构建自定义组件web预览模块**
> build2lib模式：用于构建发布到 npm 中的文件，默认存放到当前 preview 目录中；
> 备注: 和 build:h5 构建模式 功能相同，但需要确保 自定义组件 是纯vue3.0技术栈的组件（不含uniapp内置组件）。
```bash
$ npm run build2lib
```

6. **package.json添加自定义组件信息，导入组件扩展包时需要**
> package.json 中添加 amis-widgets 字段，用于放置当前自定义组件信息，有这个 amis-widgets 字段才能被识别为自定义组件扩展包。

```bash
  ...
    "amis-widgets": [
    {
      "name": "uni-info-card", // 自定义组件名称，必填项
      "framework": "vue3", // 技术栈类型，非必填项，默认为 react 技术栈
      "usage": "renderer", // 渲染器类型，非必填项，默认为 renderer
      "type": "uni-info-card", // 自定义组件类型，必填项，同一应用下不允许有重复的自定义组件类型
      "entry": "/preview/renderer.umd", // 自定义组件入口文件路径，必填项
      "files": [  // 自定义组件依赖资源文件路径，非必填项
        "/dist/infoCard.css"
      ],
      "editorPlugin": {  // amis-editor自定义插件信息
        "name": "uni-info-card-plugin", // 自定义插件名称，在编辑器左侧组件面板作为title展示，必填项
        "description": "信息展示卡片", // 自定义插件描述，在编辑器左侧组件面板作为描述信息展示，必填项
        "pluginEntry": "/preview/plugin.umd", // 自定义插件的入口文件，必填项
        "tag": [  // 自定义插件的分类，必填项
          "展示"
        ],
        "sort": 100 // 自定义插件的排序，非必填项
      }
    },
    ... // 其他自定义组件
  ],
  ...
}
```
7. **发布一个NPM组件扩展包**
> 需要确保package.json中的name值唯一，version值不重复。
```bash
$ npm publish
```

8. **发布到制定的NPM仓库**
> 打开NPM配置文件（src/.npmrc），配置为制定仓库地址即可。

### 配置项说明（amis-widget-cli）
[请查看amis-widget-cli](https://github.com/aisuda/amis-widget-cli)


