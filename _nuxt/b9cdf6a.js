(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{210:function(t,e,l){"use strict";l.r(e);var n=l(0).a.extend({}),r=l(24),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",{staticClass:"text-2xl sm:text-3xl font-bold text-perola-negra lowercase"},[t._t("default")],2),t._v(" "),l("svg",{staticClass:"fill-current text-laranja-internacional",attrs:{width:"72",height:"12"}},[l("rect",{attrs:{x:"0",y:"8",width:"72",height:"4"}})])])}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,l){"use strict";l.r(e);var n=l(0).a.extend({props:{activities:{type:Array,required:!0}}}),r=l(24),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("div",{staticClass:"relative bg-linho overflow-hidden",attrs:{id:"atividades"}},[l("a",{attrs:{name:"atividades"}}),t._v(" "),l("div",{staticClass:"max-w-7xl mx-auto"},[l("div",{staticClass:"p-8"},[l("ElementSectionTitle",[t._v("\n          Nossas "),l("span",{staticClass:"text-laranja-internacional"},[t._v("atividades")])]),t._v(" "),l("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 pt-8"},t._l(t.activities,(function(e){return l("div",{key:e.title,staticClass:"bg-branco overflow-hidden shadow-md rounded-lg w-full h-full flex flex-col flex-1 m-auto text-justify"},[e.images&&e.images[0]?l("img",{staticClass:"max-h-40 w-full object-cover",attrs:{src:e.images[0].url,alt:e.images[0].alternativeText}}):t._e(),t._v(" "),l("div",{staticClass:"bg-white w-full p-4 flex-grow"},[l("p",{staticClass:"text-laranja-internacional text-xl font-bold mb-2"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),l("p",{staticClass:"text-perola-negra font-body text-sm",domProps:{innerHTML:t._s(e.text)}})]),t._v(" "),e.callToAction?l("a",{staticClass:"flex items-center justify-between px-4 py-3 mx-4 mb-4 border border-transparent rounded-md shadow-md text-sm font-bold text-linho bg-laranja-internacional hover:bg-laranja-internacional-dark transition-colors",attrs:{href:e.callToAction.url}},[t._v("\n              "+t._s(e.callToAction.text)+"\n              "),l("i",{staticClass:"ri-external-link-fill text-md"})]):t._e()])})),0)],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ElementSectionTitle:l(210).default})}}]);