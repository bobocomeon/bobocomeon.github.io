(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{319:function(t,e,a){"use strict";a.r(e);var r=a(14),v=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue3的一些改变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue3的一些改变"}},[t._v("#")]),t._v(" vue3的一些改变")]),t._v(" "),e("ul",[e("li",[t._v("使用ts")]),t._v(" "),e("li",[t._v("重构了compiler")]),t._v(" "),e("li",[t._v("重构了vdom")]),t._v(" "),e("li",[t._v("新的响应式机制 配合proxy和reflect")])]),t._v(" "),e("h2",{attrs:{id:"重构后的响应式机制带来了哪些改变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重构后的响应式机制带来了哪些改变"}},[t._v("#")]),t._v(" 重构后的响应式机制带来了哪些改变")]),t._v(" "),e("p",[t._v("对数组的全面监听，以前的vue2是改写了数组的方法来实现数组的监听")]),t._v(" "),e("h2",{attrs:{id:"惰性监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#惰性监听"}},[t._v("#")]),t._v(" 惰性监听")]),t._v(" "),e("p",[t._v("不需要把所有的数据全写在data里面，进行响应式绑定，提高了组件实例初始化速度，vue3以前把所有组件实例在初始化之前，通过递归的方式给每个key使用Object.defineProperty，而在vue3中，将可响应式对象创建的权利交给了开发者，开发者可通过暴露的reactive，computed，effect方法自定义自己需响应式数据权利，从而降低了组件实例化的时间，以及内存的使用。")])])}),[],!1,null,null,null);e.default=v.exports}}]);