(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{237:function(e,n,o){"use strict";o.r(n);var r=o(0).a.extend({props:{announcement:{type:Object,required:!0}},data:function(){return{dismissed:!1,backgroundColor:{"laranja-internacional":"bg-laranja-internacional","laranja-chama":"bg-laranja-chama","laranja-gradiente":"bg-gradient-to-r from-laranja-internacional to-laranja-chama","mar-amarelo":"bg-mar-amarelo",ouro:"bg-ouro","perola-negra":"bg-perola-negra","bondi-blue":"bg-bondi-blue",pompadour:"bg-pompadour","rosa-francesa":"bg-rosa-francesa"},textColor:{"laranja-internacional":"text-linho","laranja-chama":"text-linho","laranja-gradiente":"text-linho","mar-amarelo":"text-perola-negra",ouro:"text-perola-negra","perola-negra":"text-linho","bondi-blue":"text-perola-negra",pompadour:"text-linho","rosa-francesa":"text-linho"},buttonColorScheme:{"laranja-internacional":"text-perola-negra bg-linho hover:bg-linho-dark","laranja-chama":"text-perola-negra bg-linho hover:bg-linho-dark","laranja-gradiente":"text-perola-negra bg-linho hover:bg-linho-dark","mar-amarelo":"text-linho bg-perola-negra hover-bondi-blue",ouro:"text-linho bg-perola-negra hover-bondi-blue","perola-negra":"text-perola-negra bg-linho hover:bg-linho-dark","bondi-blue":"text-perola-negra bg-linho hover:bg-linho-dark",pompadour:"text-perola-negra bg-linho hover:bg-linho-dark","rosa-francesa":"text-linho bg-perola-negra hover-bondi-blue"}}}}),t=o(24),component=Object(t.a)(r,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return!e.dismissed&&e.announcement&&e.announcement.visible?o("div",{class:e.backgroundColor[e.announcement.colorScheme]},[o("div",{staticClass:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"},[o("div",{staticClass:"flex items-center justify-between flex-wrap"},[o("div",{staticClass:"w-0 flex-1 flex items-center"},[o("span",{class:"flex p-2 rounded-lg "+e.textColor[e.announcement.colorScheme]},[o("i",{staticClass:"ri-rss-fill"})]),e._v(" "),o("p",{class:"ml-3 truncate "+e.textColor[e.announcement.colorScheme]},[o("span",{staticClass:"md:hidden",domProps:{innerHTML:e._s(e.announcement.shortDescription)}}),e._v(" "),o("span",{staticClass:"hidden md:inline",domProps:{innerHTML:e._s(e.announcement.longDescription)}})])]),e._v(" "),e.announcement.callToAction?o("div",{staticClass:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},[o("a",{class:"flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold transition-colors "+e.buttonColorScheme[e.announcement.colorScheme],attrs:{href:e.announcement.callToAction.url}},[e._v("\n          "+e._s(e.announcement.callToAction.text)+"\n        ")])]):e._e(),e._v(" "),o("div",{staticClass:"order-2 flex-shrink-0 sm:order-3 sm:ml-3"},[o("button",{staticClass:"-mr-1 flex p-2 rounded-md hover:bg-perola-negra hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-linho sm:-mr-2 transition-colors",attrs:{type:"button"},on:{click:function(n){e.dismissed=!e.dismissed}}},[o("span",{staticClass:"sr-only"},[e._v("Fechar")]),e._v(" "),o("i",{class:"ri-close-line "+e.textColor[e.announcement.colorScheme]})])])])])]):e._e()}),[],!1,null,null,null);n.default=component.exports}}]);