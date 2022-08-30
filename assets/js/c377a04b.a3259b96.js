"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[971],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=a,k=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(k,s(s({ref:e},u),{},{components:n})):r.createElement(k,s({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,slug:"/"},s="Welcome",o={unversionedId:"index",id:"index",title:"Welcome",description:"nestjs-i18n - made easy",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/quick-start"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Getting started",id:"getting-started",level:2}],u={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("head",null,(0,a.kt)("title",null,"nestjs-i18n - made easy")),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"#"},(0,a.kt)("img",{src:"https://nestjs-i18n.com/img/logo.svg",width:"600",alt:"nestjs-i18n Logo"}))),(0,a.kt)("p",{align:"center"},"The i18n library for ",(0,a.kt)("a",{href:"https://nestjs.com",target:"_blank"},"nestjs"),". It makes working with languages in your nestjs project easy. Everything is made to be highly configurable. You can write and plug-in your own language resolvers or loaders.",(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://www.npmjs.com/package/nestjs-i18n",target:"_blank"},(0,a.kt)("img",{alt:"npm version",src:"https://img.shields.io/npm/v/nestjs-i18n"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/nestjs-i18n",target:"_blank"},(0,a.kt)("img",{alt:"NPM",src:"https://img.shields.io/npm/l/nestjs-i18n"})),(0,a.kt)("a",{href:"https://github.com/toonvanstrijp/nestjs-i18n/actions/workflows/test.yaml",target:"_blank"},(0,a.kt)("img",{src:"https://github.com/toonvanstrijp/nestjs-i18n/actions/workflows/test.yaml/badge.svg?branch=main"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/nestjs-i18n",target:"_blank"},(0,a.kt)("img",{alt:"npm downloads",src:"https://img.shields.io/npm/dm/nestjs-i18n"})),(0,a.kt)("a",{href:"https://coveralls.io/github/toonvanstrijp/nestjs-i18n?branch=main",target:"_blank"},(0,a.kt)("img",{alt:"coverage",src:"https://coveralls.io/repos/github/toonvanstrijp/nestjs-i18n/badge.svg?branch=main"})))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"nestjs-i18n")," comes with a bunch of tools to help add multiple language support to your project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Variable formatting")," (",(0,a.kt)("a",{parentName:"li",href:"/guides/formatting"},"instructions"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nested")," translations (",(0,a.kt)("a",{parentName:"li",href:"/guides/nested"},"instructions"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fallback")," languages (",(0,a.kt)("a",{parentName:"li",href:"/guides/fallback-languages"},"instructions"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Live")," reloading \ud83c\udf89"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Plurals")," support (",(0,a.kt)("a",{parentName:"li",href:"/guides/plurals"},"instructions"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GraphQL")," support (",(0,a.kt)("a",{parentName:"li",href:"/guides/graphql"},"instructions"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"gRPC")," support (",(0,a.kt)("a",{parentName:"li",href:"/guides/grpc"},"instructions"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DTO")," validation (",(0,a.kt)("a",{parentName:"li",href:"guides/dto_validation/global-validation"},"instructions"),")"),(0,a.kt)("li",{parentName:"ul"},"View engine support (",(0,a.kt)("a",{parentName:"li",href:"guides/view_engines/handlebars"},(0,a.kt)("strong",{parentName:"a"},"hbs"))," or ",(0,a.kt)("a",{parentName:"li",href:"guides/view_engines/pug"},(0,a.kt)("strong",{parentName:"a"},"pug"))," or ",(0,a.kt)("a",{parentName:"li",href:"guides/view_engines/ejs"},(0,a.kt)("strong",{parentName:"a"},"ejs")),")"),(0,a.kt)("li",{parentName:"ul"},"Custom resolvers"),(0,a.kt)("li",{parentName:"ul"},"Custom loaders"),(0,a.kt)("li",{parentName:"ul"},"Custom formatters")),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"To get started follow the ",(0,a.kt)("a",{parentName:"p",href:"/quick-start"},"quickstart"),". "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Missing something? Feel free to create a pull request or issue on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/toonvanstrijp/nestjs-i18n"},"github"),".")))}c.isMDXComponent=!0}}]);