(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{308:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[e._v("#")]),e._v(" 虚拟dom")]),e._v(" "),t("p",[e._v("大部分情况下可以降低使用js去操作跨线程庞大dom所需的昂贵的性能，让dom操作性能高，以及虚拟dom可以使用服务端渲染跨平台使用，使用js对象对真实dom进行描述，有属性，标签名，子节点。")]),e._v(" "),t("h2",{attrs:{id:"谈谈对虚拟dom的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谈谈对虚拟dom的理解"}},[e._v("#")]),e._v(" 谈谈对虚拟dom的理解")]),e._v(" "),t("ol",[t("li",[e._v("随着现在应用功能越来越复杂，管理的状态越多，如果还是使用之前的js去跨线程操作GUI线程的dom，对性能会有很大的损耗，而且状态难以维护，逻辑也变的混乱，引入虚拟dom之后，框架内部将虚拟dom和真实dom做了映射，不需要命令式的去操作dom，开发者之后专心维护这颗树状结构即可，状态的变化回去驱动dom发生改变，具体的dom操作vue帮我们完成，而且是在js线程内完成的。")]),e._v(" "),t("li",[e._v("虚拟dom只是一种数据结果，不仅可以再浏览器环境内使用，还可以再服务端以及跨平台渲染，提供了更多的场景开发。")])]),e._v(" "),t("h2",{attrs:{id:"首次渲染和更新页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首次渲染和更新页面"}},[e._v("#")]),e._v(" 首次渲染和更新页面")]),e._v(" "),t("h3",{attrs:{id:"首次渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首次渲染"}},[e._v("#")]),e._v(" 首次渲染")]),e._v(" "),t("p",[e._v("当执行new Vue，到执行钩子函数beforeMount，执行完"),t("code",[e._v("渲染函数_render")]),e._v("，可以拿到VNode，在通过"),t("code",[e._v("vm_update方法")]),e._v("转为"),t("code",[e._v("真实Dom")]),e._v("，")]),e._v(" "),t("h3",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[e._v("#")]),e._v(" 更新")]),e._v(" "),t("p",[e._v("数据驱动页面，在数据改变之前会生成两份VNode进行比较，怎么在旧的VNode上面做最小的改动渲染页面。petch之后去更新节点渲染到页面。")]),e._v(" "),t("h2",{attrs:{id:"生成dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成dom"}},[e._v("#")]),e._v(" 生成dom")]),e._v(" "),t("h3",{attrs:{id:"元素节点生成dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元素节点生成dom"}},[e._v("#")]),e._v(" 元素节点生成dom")]),e._v(" "),t("ol",[t("li",[e._v("会依次判断元素节点（1）、文本节点（3）、注释节点（8）、属性节点（2），分别创建然后依次插入父节点")]),e._v(" "),t("li",[e._v("元素节点，开始创建子节点，遍历VNode每一项，如果某一项是数据，继续递归调用，如果不是就创建文本节点。")])]),e._v(" "),t("h3",{attrs:{id:"组件vnode生成dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件vnode生成dom"}},[e._v("#")]),e._v(" 组件VNode生成Dom")]),e._v(" "),t("ol",[t("li",[e._v("先判断是否是组件，i = VNode.data，将子组件的构造函数实例化，建立父子关系，在init方法内手动进行挂载，在执行组件的"),t("code",[e._v("_render()")]),e._v("得到组件内元素节点VNODE，然后执行"),t("code",[e._v("vm._update()")]),e._v(",最后在插入Dom。")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Vue")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("_init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("$mount")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("_render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" vm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("vnode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"父子两个组件同时定义了beforecreate、created、beforemounte、mounted四个钩子执行顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父子两个组件同时定义了beforecreate、created、beforemounte、mounted四个钩子执行顺序"}},[e._v("#")]),e._v(" 父子两个组件同时定义了beforeCreate、created、beforeMounte、mounted四个钩子执行顺序")]),e._v(" "),t("ol",[t("li",[e._v("渲染阶段\n父beforeCreate => 父created => 父beforeMounte => 子beforeCreate => 子created => 子beforeMounte => 子mounted => 父mounted")]),e._v(" "),t("li",[e._v("子渲染阶段\n父beforeupdate => 子beforeupdate => 子updated => 父updated")]),e._v(" "),t("li",[e._v("父渲染阶段\n父beforeupdate => 父updated")]),e._v(" "),t("li",[e._v("销毁阶段\n父beforeDestroy->子beforeDestroy->子destroyed->父destroyed")])]),e._v(" "),t("h3",{attrs:{id:"写-react-vue-项目时为什么要在列表组件中写-key-其作用是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写-react-vue-项目时为什么要在列表组件中写-key-其作用是什么"}},[e._v("#")]),e._v(" 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？")]),e._v(" "),t("p",[e._v("key是给每一个vnode的唯一key，依靠key更准确更快的拿到oldVnode中对应的vnode节点,而且在比对的时候能更快的找到对应节点进行对比，是复用还是增加，对用一个列表来说，没有改变的节点会原地复用")]),e._v(" "),t("h3",{attrs:{id:"diff算法时候设置key和不设置key的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff算法时候设置key和不设置key的区别"}},[e._v("#")]),e._v(" diff算法时候设置key和不设置key的区别")]),e._v(" "),t("p",[e._v("不设置key，newCh和oldCh只会进行头尾两端的相互比较，设置key只会，除了头尾两端比较外，还会从用key生成的对象map中查找匹配节点，更高效的利用节点。")])])}),[],!1,null,null,null);t.default=r.exports}}]);