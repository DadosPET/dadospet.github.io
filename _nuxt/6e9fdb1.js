(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{210:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({}),l=n(24),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"text-2xl sm:text-3xl font-bold text-perola-negra lowercase"},[t._t("default")],2),t._v(" "),n("svg",{staticClass:"fill-current text-laranja-internacional",attrs:{width:"72",height:"12"}},[n("rect",{attrs:{x:"0",y:"8",width:"72",height:"4"}})])])}),[],!1,null,null,null);e.default=component.exports},211:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("1d2e67d4",content,!0,{sourceMap:!1})},212:function(t,e,n){"use strict";var r,l;n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),function(t){t.Current="current",t.Egress="egress",t.Tutor="tutor"}(r||(r={})),function(t){t.LaranjaInternacional="laranja-internacional",t.LaranjaChama="laranja-chama",t.LaranjaGradiente="laranja-gradiente",t.MarAmarelo="mar-amarelo",t.Ouro="ouro",t.PerolaNegra="perola-negra",t.BondiBlue="bondi-blue",t.Pompadour="pompadour",t.RosaFrancesa="rosa-francesa"}(l||(l={}))},215:function(t,e,n){"use strict";n(211)},216:function(t,e,n){var r=n(42)(!1);r.push([t.i,"#member-photo.enlargeable-image .full.enlarged{--tw-bg-opacity:1;background-color:rgba(12,35,64,var(--tw-bg-opacity));--tw-bg-opacity:0.8}",""]),t.exports=r},221:function(t,e,n){"use strict";n.r(e);n(41),n(26);var r=n(0),l=n(212),o=r.a.extend({props:{members:{type:Array,required:!0}},data:function(){return{currentMembers:this.members.filter((function(t){return t.type===l.b.Current||t.type===l.b.Tutor})).sort((function(a,b){return a.name.localeCompare(b.name)})),egressMembers:this.members.filter((function(t){return t.type===l.b.Egress})).sort((function(a,b){return a.name.localeCompare(b.name)})),selectedOption:l.b.Current,buttonStyle:{selected:"text-laranja-internacional font-bold lowercase py-2 my-2 mr-8 block hover:text-laranja-internacional-dark border-b-2 border-laranja-internacional transition-colors",unselected:"text-laranja-internacional font-medium lowercase py-2 my-2 mr-8 block hover:text-laranja-internacional-dark transition-colors"}}}}),c=(n(215),n(24)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"relative bg-linho overflow-hidden"},[n("a",{attrs:{name:"quem-somos"}}),t._v(" "),n("div",{staticClass:"max-w-7xl mx-auto"},[n("div",{staticClass:"p-8"},[n("ElementSectionTitle",[t._v("\n          Quem "),n("span",{staticClass:"text-laranja-internacional"},[t._v("somos")])]),t._v(" "),n("nav",{staticClass:"flex flex-row pt-8",attrs:{role:"tablist"}},[n("button",{class:"current"===t.selectedOption?t.buttonStyle.selected:t.buttonStyle.unselected,attrs:{type:"button",role:"tab","aria-controls":"pet-members","aria-selected":"current"===t.selectedOption},on:{click:function(e){t.selectedOption="current"}}},[t._v("\n            Membros\n          ")]),t._v(" "),n("button",{class:"egress"===t.selectedOption?t.buttonStyle.selected:t.buttonStyle.unselected,attrs:{type:"button",role:"tab","aria-controls":"pet-members","aria-selected":"egress"===t.selectedOption},on:{click:function(e){t.selectedOption="egress"}}},[t._v("\n            Egressos\n          ")])]),t._v(" "),n("div",{attrs:{id:"pet-members"}},["current"===t.selectedOption?n("div",{staticClass:"pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",attrs:{id:"current-members"}},t._l(t.currentMembers,(function(e){return n("div",{key:e.name,staticClass:"py-1"},[n("div",{staticClass:"flex-col flex justify-center items-center"},[n("div",{staticClass:"flex-shrink-0"},[n("EnlargeableImage",{attrs:{id:"member-photo",src:e.photoUrl,src_large:e.photoUrl,animation_duration:"200"}},[n("span",{staticClass:"sr-only"},[t._v("Ampliar foto de "+t._s(e.name))]),t._v(" "),n("img",{staticClass:"mx-auto object-cover text-perola-negra text-sm rounded-full h-20 w-20",attrs:{alt:"Foto de "+e.name,src:e.photoUrl}})])],1),t._v(" "),n("div",{staticClass:"mt-4 text-center flex flex-col"},[n("span",{staticClass:"text-md text-perola-negra font-medium"},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),e.cinLogin?n("a",{staticClass:"block text-laranja-internacional hover:text-laranja-internacional-dark text-sm transition-colors",attrs:{href:"mailto:"+e.cinLogin+"@cin.ufpe.br"}},[t._v("\n                    "+t._s(e.cinLogin)+"\n                  ")]):t._e(),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center text-xl"},[e.linkedinUrl?n("div",{staticClass:"m-2"},[n("a",{staticClass:"text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:e.linkedinUrl,target:"_blank",rel:"noopener noreferrer",title:e.name+" no Linkedin"}},[n("i",{staticClass:"ri-linkedin-fill"}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Linkedin")])])]):t._e(),t._v(" "),e.personalWebsiteUrl?n("div",{staticClass:"m-2"},[n("a",{staticClass:"text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:e.personalWebsiteUrl,target:"_blank",rel:"noopener noreferrer",title:"Página pessoal de "+e.name}},[n("i",{staticClass:"ri-earth-fill"}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Página pessoal")])])]):t._e()])])])])})),0):t._e(),t._v(" "),"egress"===t.selectedOption?n("div",{staticClass:"pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",attrs:{id:"egress-members"}},t._l(t.egressMembers,(function(e){return n("div",{key:e.name,staticClass:"py-1"},[n("div",{staticClass:"flex-col flex justify-center items-center"},[n("div",{staticClass:"flex-shrink-0"},[n("EnlargeableImage",{attrs:{id:"member-photo",src:e.photoUrl,src_large:e.photoUrl,animation_duration:"200"}},[n("span",{staticClass:"sr-only"},[t._v("Ampliar foto de "+t._s(e.name))]),t._v(" "),n("img",{staticClass:"mx-auto object-cover text-perola-negra text-sm rounded-full h-20 w-20",attrs:{alt:"Foto de "+e.name,src:e.photoUrl}})])],1),t._v(" "),n("div",{staticClass:"mt-4 text-center flex flex-col"},[n("span",{staticClass:"text-md text-perola-negra font-medium"},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),e.cinLogin?n("a",{staticClass:"text-md block text-laranja-internacional hover:text-laranja-internacional-dark text-sm transition-colors",attrs:{href:"mailto:"+e.cinLogin+"@cin.ufpe.br"}},[t._v("\n                    "+t._s(e.cinLogin)+"\n                  ")]):t._e(),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center text-xl"},[e.linkedinUrl?n("div",{staticClass:"m-2"},[n("a",{staticClass:"text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:e.linkedinUrl,target:"_blank",rel:"noopener noreferrer",title:e.name+" no Linkedin"}},[n("i",{staticClass:"ri-linkedin-fill"}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Linkedin")])])]):t._e(),t._v(" "),e.personalWebsiteUrl?n("div",{staticClass:"m-2"},[n("a",{staticClass:"text-laranja-internacional hover:text-laranja-internacional-dark transition-colors",attrs:{href:e.personalWebsiteUrl,target:"_blank",rel:"noopener noreferrer",title:"Página pessoal de "+e.name}},[n("i",{staticClass:"ri-earth-fill"}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Página pessoal")])])]):t._e()])])])])})),0):t._e()])],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ElementSectionTitle:n(210).default})}}]);