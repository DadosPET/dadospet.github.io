(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2],{213:function(t,e,n){"use strict";n.r(e);var l=n(0).a.extend({props:{src:{type:String,required:!0},alt:{type:String,default:""}}}),o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{version:"1.1",viewBox:"0 0 270.93 270.93"}},[n("defs",[n("clipPath",{attrs:{id:"circlePath"}},[n("path",{attrs:{d:"m269.74 126.33a132.29 132.29 0 0 1-122 137.86 132.29 132.29 0 0 1-141.67-117.56 132.29 132.29 0 0 1 113-145.33 132.29 132.29 0 0 1 148.85 108.32z"}})])]),t._v(" "),n("image",{staticClass:"h-full",attrs:{x:"-110",y:"0","clip-path":"url(#circlePath)",preserveAspectRatio:"none",href:t.src,alt:t.alt}}),t._v(" "),n("path",{staticClass:"text-laranja-internacional fill-current",attrs:{d:"m128.52 0.64258c-4.4049 0.18207-8.842 0.58325-13.297 1.2129-71.278 10.074-121.7 74.924-113.89 146.48 7.8045 71.56 71.018 124.02 142.79 118.49 71.775-5.5264 126.22-67.041 122.97-138.95a0.66346 0.66346 0 0 0-0.00391-0.04297l-1.8262-16.756a0.66346 0.66346 0 0 0-0.00781-0.04101c-11.564-66.488-70.662-113.13-136.74-110.39zm0.05469 1.3262c65.422-2.7066 123.92 43.45 135.37 109.28l1.8203 16.691c3.2081 71.208-50.676 132.09-121.75 137.56-71.074 5.4725-133.64-46.45-141.37-117.31-7.7284-70.862 42.18-135.05 112.76-145.03 4.4115-0.6235 8.8023-1.0207 13.164-1.2012z"}})])}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,n){"use strict";n.r(e);var l=n(0).a.extend({props:{hero:{type:Object,required:!0}},data:function(){return{menuOpened:!1}}}),o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative bg-linho overflow-hidden"},[n("div",{staticClass:"max-w-7xl mx-auto"},[n("div",{staticClass:"relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32"},[n("div",{staticClass:"relative pt-6 px-4 sm:px-6 lg:px-8",staticStyle:{position:"fixed","background-color":"#FDF8F5",top:"0"}},[n("nav",{staticClass:"relative flex items-center justify-between sm:h-10 lg:justify-start",attrs:{"aria-label":"Global",fixed:"top"}},[n("div",{staticClass:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"},[n("div",{staticClass:"flex items-center justify-between w-full md:w-auto",staticStyle:{"background-color":"transparent"}},[t._m(0),t._v(" "),n("div",{staticClass:"-mr-2 flex items-center md:hidden"},[n("button",{staticClass:"bg-linho rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-perola-negra hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-laranja-internacional transition-colors",attrs:{id:"main-menu",type:"button","aria-haspopup":"true"},on:{click:function(e){t.menuOpened=!0}}},[n("span",{staticClass:"sr-only"},[t._v("Abrir menu")]),t._v(" "),n("i",{staticClass:"ri-menu-line"})])])])]),t._v(" "),t._m(1)])]),t._v(" "),n("transition",{attrs:{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"}},[t.menuOpened?n("div",{staticClass:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",staticStyle:{position:"fixed","background-color":"#FDF8F5",top:"0"}},[n("div",{staticClass:"rounded-lg shadow-md bg-linho ring-1 ring-perola-negra ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"px-5 pt-4 flex items-center justify-between"},[n("div",[n("img",{staticClass:"h-8 w-auto",staticStyle:{"background-color":"rgba(0,0,0,0)"},attrs:{alt:"",src:"images/logos/teste-logo.png"}})]),t._v(" "),n("div",{staticClass:"-mr-2"},[n("button",{staticClass:"bg-linho rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-perola-negra hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-laranja-internacional transition-colors",attrs:{type:"button"},on:{click:function(e){t.menuOpened=!1}}},[n("span",{staticClass:"sr-only"},[t._v("Fechar menu")]),t._v(" "),n("i",{staticClass:"ri-close-line"})])])]),t._v(" "),n("div",{attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"main-menu"}},[n("div",{staticClass:"px-2 pt-2 pb-3 space-y-1",attrs:{role:"none"}},[n("a",{staticClass:"block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors",attrs:{href:"#acesso-api",role:"menuitem"},on:{click:function(e){t.menuOpened=!1}}},[t._v("Acesso aos dados - API")]),t._v(" "),n("a",{staticClass:"block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors",attrs:{href:"#aplicacoes",role:"menuitem"},on:{click:function(e){t.menuOpened=!1}}},[t._v("Aplicações")]),t._v(" "),n("a",{staticClass:"block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors",attrs:{href:"#quem-somos",role:"menuitem"},on:{click:function(e){t.menuOpened=!1}}},[t._v("Quem somos")]),t._v(" "),n("a",{staticClass:"block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors",attrs:{href:"#perguntas-frequentes",role:"menuitem"},on:{click:function(e){t.menuOpened=!1}}},[t._v("FAQ")]),t._v(" "),n("a",{staticClass:"block px-3 py-2 rounded-md text-base font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark hover:bg-gray-50 transition-colors",attrs:{href:"#contato",role:"menuitem"},on:{click:function(e){t.menuOpened=!1}}},[t._v("Contato")])])])])]):t._e()]),t._v(" "),n("section",{staticClass:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},[n("div",{staticClass:"sm:text-center lg:text-left"},[t.hero.title?n("h1",{staticClass:"text-4xl tracking-tight font-normal text-gray-900 sm:text-5xl md:text-6xl",domProps:{innerHTML:t._s(t.hero.title)}}):n("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},[n("span",{staticClass:"block text-laranja-internacional lowercase"},[t._v("dados")]),t._v(" "),t._m(2)]),t._v(" "),t.hero.text?n("p",{staticClass:"mt-3 text-base text-perola-negra font-body sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",domProps:{innerHTML:t._s(t.hero.text)}}):n("p",{staticClass:"mt-3 text-base text-perola-negra font-body sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},[t._v("\n              Somos a "),n("span",{staticClass:"text-perola-negra font-bold"},[t._v("DadosPET - Comissão Nacional de Centralização e \n              Processamento de dados dos Grupos PET")]),t._v(". Somos membros e egressos do Programa de Educação\n              Tutorial que atuam com o objetivo de coletar, organizar, manter e garantir transparência de acesso aos \n              dados do programa, inclusive aos dados que são oficialmente disponibilizados pelo Ministério da Educação.\n            ")])])])],1)]),t._v(" "),n("div",{staticClass:"lg:absolute lg:h-full lg:inset-y-0 lg:w-full"},[n("div",{staticClass:"lg:relative lg:h-full lg:max-w-7xl lg:mx-auto"},[n("ElementHeroImage",{staticClass:"lg:absolute lg:-right-60 lg:-mt-4 lg:inset-y-0 h-full -ml-40",attrs:{alt:t.hero.circleImage.alternativeText,src:t.hero.circleImage.url}})],1)])]),t._v(" "),n("section",[n("div",{staticClass:"relative bg-linho overflow-hidden"},[n("div",{staticClass:"max-w-7xl mx-auto"},[n("div",{staticClass:"p-8 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center"},[n("div",{staticClass:"lg:col-start-2 lg:pl-20"},[n("ul",t._l(t.hero.entries,(function(e){return n("li",{key:e.title,staticClass:"py-5"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex-shrink-0"},[n("div",{staticClass:"flex items-center justify-center h-12 w-12 rounded-md bg-laranja-internacional text-linho"},[n("i",{class:e.icon+" text-xl"})])]),t._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-lg leading-6 text-laranja-internacional font-bold",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("p",{staticClass:"mt-2 text-base font-body leading-6 text-perola-negra",domProps:{innerHTML:t._s(e.text)}})])])])})),0)]),t._v(" "),n("div",{staticClass:"mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1"},[n("img",{staticClass:"relative mx-auto shadow-lg rounded w-auto",attrs:{alt:t.hero.presentationImage.alternativeText,src:t.hero.presentationImage.url}})])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticStyle:{"background-color":"transparent"},attrs:{href:"#"}},[n("span",{staticClass:"sr-only"},[t._v("Dados PET")]),t._v(" "),n("img",{staticClass:"h-8 w-auto sm:h-10",staticStyle:{"background-color":"transparent"},attrs:{alt:"Dados PET",src:"images/logos/teste-logo.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden md:block md:ml-10 md:pr-4 md:space-x-3 lg:space-x-8 text-sm"},[n("a",{staticClass:"font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:"#acesso-api"}},[t._v("acesso aos dados - API")]),t._v(" "),n("a",{staticClass:"font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:"#aplicacoes"}},[t._v("Aplicações")]),t._v(" "),n("a",{staticClass:"font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:"#quem-somos"}},[t._v("Quem somos")]),t._v(" "),n("a",{staticClass:"font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:"#perguntas-frequentes"}},[t._v("FAQ")]),t._v(" "),n("a",{staticClass:"font-bold lowercase text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:"#contato"}},[t._v("Contato")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"block text-perola-negra font-normal lowercase"},[t._v("são "),n("span",{staticClass:"font-bold"},[t._v("poderosos")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ElementHeroImage:n(213).default})}}]);