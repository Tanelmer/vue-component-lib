(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75626c60"],{5704:function(n,e){n.exports="# 操作表 ActionSheet\n\n操作表，从屏幕下方移入。\n\n## 代码演示\n\n```html\n\n<p-action-sheet v-model=\"sheetVisible\" :actions=\"actions\" :cancelText=\"cancelText\" @selected=\"handelSelect\"></p-action-sheet>\n\n<script>\nexport default {\n  data () {\n    return {\n      actions: ['拍照', '从相册中选择', '从网页中选择'],\n      sheetVisible: false,\n      cancelText: '取消'\n    }\n  },\n  methods: {\n    actionSheetInit () {\n      this.sheetVisible = true\n      this.cancelText = '取消'\n    },\n    nocancelAction () {\n      this.sheetVisible = true\n      this.cancelText = ''\n    },\n    handelSelect (item, index) {\n      this.$toast.info('item:' + item + '===index:' + index)\n    }\n  }\n}\n<\/script>\n\n```\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n| - | - | - | - |\n| v-model | 是否打开操作表 | boolean | false |\n| actions | actions 属性绑定一个操作数组 | array | ['拍照','从相册中选择','从网页中选择'] |\n| cancelText | 底部取消按钮文案 | string  | 取消 |\n| titleText | 顶部标题文案 | string  | 标题 |\n| closeByTouchMask | 点击蒙层关闭 actionsheet | boolean | true |\n"},f500:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("Md",{attrs:{mdData:n.mdData}}),t("Demo",{attrs:{src:"/demo/action-sheet"}})],1)},c=[],i=t("4f03"),s=t("480a"),o=t("5704"),l=t.n(o),r={components:{Md:i["a"],Demo:s["a"]},data:function(){return{mdData:l.a}}},h=r,d=t("2877"),u=Object(d["a"])(h,a,c,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-75626c60.dbc052b2.js.map