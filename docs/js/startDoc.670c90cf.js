(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["startDoc"],{b800:function(n,e,a){"use strict";a.r(e);var t=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",[a("Md",{attrs:{mdData:n.mdData}})],1)},p=[],i=a("4f03"),o=a("cda6"),s=a.n(o),u={components:{Md:i["a"]},data:function(){return{mdData:s.a}}},m=u,r=a("2877"),l=Object(r["a"])(m,t,p,!1,null,null,null);e["default"]=l.exports},cda6:function(n,e){n.exports="# 快速上手\n\n## 安装\n\n### 使用 npm 或者 yarn 进行安装\n\n```bash\n$ npm install --save p-ui-mobile\n```\n\n```bash\n& yarn add p-ui-mobile\n```\n\n## 使用\n\n如需动画效果，需先安装 animate.css\n\n```bash\nyarn add animate.css\n```\n\n### 完整引入\n\nmain.js\n\n```javascript\nimport Vue from 'vue'\nimport App from './App'\n\nimport animate from 'animate.css'\nimport PUI from 'p-ui-mobile'\nimport 'p-ui-mobile/lib/style.css'\n\nVue.config.productionTip = false\n\nVue.use(animate)\nVue.use(PUI)\n\n/* eslint-disable no-new */\nnew Vue({\n  el: '#app',\n  components: { App },\n  template: '<App/>'\n})\n```\n\n### 按需引入\n\n需安装 babel-plugin-import\n\n```bash\nnpm install --save-dev babel-plugin-import\n```\n\n在 babel.config.js 中添加\n\n```javascript\nmodule.exports = {\n  plugins: [\n    [\n      'import', {\n        'libraryName': 'p-ui-mobile',\n        'style': true\n      }\n    ]\n  ]\n}\n```\n\nmain.js\n\n**注意：需要使用的组件都需要引入，否则可能出现样式错误的情况，如 button 和 toast 组件中，可能使用了 icon**\n\n```javascript\nimport Vue from 'vue'\nimport App from './App'\n\nimport {Button, Modal, Icon} from 'p-ui-mobile'\n\nVue.config.productionTip = false\n\nVue.use(Button)\nVue.use(Modal)\nVue.use(Icon)\n\n/* eslint-disable no-new */\nnew Vue({\n  el: '#app',\n  components: { App },\n  template: '<App/>'\n})\n```\n"}}]);
//# sourceMappingURL=startDoc.670c90cf.js.map