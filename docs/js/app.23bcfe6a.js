(function(t){function e(e){for(var n,s,l=e[0],i=e[1],u=e[2],v=0,p=[];v<l.length;v++)s=l[v],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/serve-vue-app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"227e":function(t,e,a){},"272f":function(t,e,a){"use strict";var n=a("f907"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-lg"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Logo here")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Services")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("router-link",{staticClass:"dropdown-item",attrs:{to:"/group-therapy"}},[t._v("Group Therapy")]),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/parents"}},[t._v("Parent Education Groups")]),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/training"}},[t._v("Training and Consultation")]),a("router-link",{staticClass:"dropdown-item",attrs:{to:"/clinical"}},[t._v("Clinical Supervision")])],1)]),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About Us")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler custom-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s=(a("e666"),a("2877")),l={},i=Object(s["a"])(l,r,o,!1,null,"38b0b89e",null),u=i.exports,c=a("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},f=d,_=(a("272f"),Object(s["a"])(f,h,m,!1,null,"df2aa6b2",null)),g=_.exports,b={name:"Home",components:{HelloWorld:g}},y=b,C=Object(s["a"])(y,v,p,!1,null,null,null),w=C.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],E={},x=Object(s["a"])(E,k,j,!1,null,null,null),$=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"contact"}},[t._m(0),a("div",{staticClass:"row justify-content-center align-items-center"},[a("div",{staticClass:"col-12 col-sm-3"},[a("div",[a("form",{attrs:{id:"contact-form"},on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[a("label",[t._v("Name")]),a("input",{attrs:{type:"text",name:"user_name"}}),a("label",[t._v("Phone")]),a("input",{attrs:{type:"text",name:"user_phone"}}),a("label",[t._v("Email")]),a("input",{attrs:{type:"email",name:"user_email"}}),a("label",[t._v("Message")]),a("textarea",{attrs:{name:"message"}}),a("button",{staticClass:"btn btn-sm",attrs:{value:"Send",type:"submit"}},[t._v("Sumbit")])])])])]),t._m(1)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-6 mt-4 top"},[a("h1",[t._v("This is the contact page.")]),a("h5",[t._v("This is where you can let them know how they can contact you; you can include your emails and office numbers or cellphones, or you could just have them fill out the form and let tell them you'll reach out to them.")]),a("p",[t._v("Here you can also let them know what information they might need to have ready or knowledge of when they're talking to you. You could explain the process of how you'll reach out. You could explain how you want them to address you depending on the service they are inquiring about. This page can be as busy or empty as you want.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-6 bottom"},[a("p",[t._v("This is where you can thank them for their interest or for reaching out and give them the general speel about getting back to them as soon as possible, if it's an emergency you could include hotline numbers etc. to have them call.")])])])}],S=a("0f91"),P=a.n(S),D={name:"Contact",methods:{sendEmail:t=>{P.a.sendForm("logan_gmail","contact_form",t.target,"user_b2HN3DOB9yIkgddI73kwu").then(t=>{console.log("SUCCESS!",t.status,t.text)},t=>{console.log("FAILED...",t)}),t.target.reset()}}},H=D,M=(a("fe4d"),Object(s["a"])(H,O,T,!1,null,null,null)),L=M.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"services"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("This is the clinical page.")])])])])}],I={name:"ClinicalSupervision"},A=I,F=Object(s["a"])(A,N,G,!1,null,null,null),W=F.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"services"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("This is the GroupTherapy page.")])])])])}],U={name:"GroupTherapy"},V=U,q=Object(s["a"])(V,Y,J,!1,null,null,null),z=q.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"services"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("This is the parent page.")])])])])}],Q={name:"ParentEducation"},R=Q,X=Object(s["a"])(R,B,K,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"services"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("This is the training page.")])])])])}],at={name:"TrainingConsultation"},nt=at,rt=Object(s["a"])(nt,tt,et,!1,null,null,null),ot=rt.exports;n["a"].use(c["a"]);const st=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:$},{path:"/contact",name:"Contact",component:L},{path:"/clinical",name:"ClinicalSupervision",component:W},{path:"/group-therapy",name:"GroupTherapy",component:z},{path:"/parents",name:"ParentEducation",component:Z},{path:"/training",name:"TrainingConsultation",component:ot}],lt=new c["a"]({mode:"history",base:"/serve-vue-app/",routes:st});var it=lt,ut=a("2f62");n["a"].use(ut["a"]);var ct=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:it,store:ct,render:function(t){return t(u)}}).$mount("#app")},8453:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e666:function(t,e,a){"use strict";var n=a("227e"),r=a.n(n);r.a},f907:function(t,e,a){},fe4d:function(t,e,a){"use strict";var n=a("8453"),r=a.n(n);r.a}});
//# sourceMappingURL=app.23bcfe6a.js.map