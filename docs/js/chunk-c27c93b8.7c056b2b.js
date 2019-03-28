(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c27c93b8"],{"0154":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Md",{attrs:{mdData:e.mdData}}),t("Demo",{attrs:{src:"/demo/flex"}})],1)},i=[],r=t("4f03"),f=t("480a"),a=t("72ff"),p=t.n(a),x={components:{Md:r["a"],Demo:f["a"]},data:function(){return{mdData:p.a}}},s=x,c=t("2877"),m=Object(c["a"])(s,l,i,!1,null,null,null);n["default"]=m.exports},"72ff":function(e,n){e.exports='# flex布局 Flex\n\n布局组件，基于 flex 布局的封装。\n\n## 代码演示\n\n```html\n<p-flex-wrap>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n</p-flex-wrap>\n\n<p-flex-wrap>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n</p-flex-wrap>\n\n<p-flex-wrap>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n</p-flex-wrap>\n\n<p-flex-wrap direction="column">\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n  <p-flex-item><div class="flexItem">Block</div></p-flex-item>\n</p-flex-wrap>\n```\n\n## API\n\n### FlexWrap\n\n| 属性 | 说明 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n| direction | 项目定位方向，值可以为 row、row-reverse、column、column-reverse | string | \'row\' |\n| wrap | 子元素的换行方式，可选nowrap、wrap、wrap-reverse | string | \'nowrap\' |\n| justify | 子元素在主轴上的对齐方式，可选start、end、center、between、around | string | \'start\' |\n| align | 子元素在交叉轴上的对齐方式，可选start、center、end、baseline、stretch | string | \'center\' |\n| alignContent | 有多根轴线时的对齐方式，可选start、end、center、between、around、stretch | string | \'stretch\' |\n\n### FlexItem\n\nFlexItem 组件默认加上了样式 flex:1 ,保证所有 item 平均分宽度, FlexWrap 容器的 children 不一定是 FlexItem\n\n'}}]);
//# sourceMappingURL=chunk-c27c93b8.7c056b2b.js.map