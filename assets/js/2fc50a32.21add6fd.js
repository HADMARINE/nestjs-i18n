"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[268],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1},o="Handlebars",s={unversionedId:"guides/view_engines/handlebars",id:"guides/view_engines/handlebars",title:"Handlebars",description:"To enable handlebars support make use of the viewEngine option inside your I18nModule.",source:"@site/docs/guides/view_engines/handlebars.md",sourceDirName:"guides/view_engines",slug:"/guides/view_engines/handlebars",permalink:"/guides/view_engines/handlebars",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/guides/view_engines/handlebars.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guards",permalink:"/guides/guard"},next:{title:"Pug",permalink:"/guides/view_engines/pug"}},l={},p=[{value:"Example usage",id:"example-usage",level:2},{value:"Result",id:"result",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handlebars"},"Handlebars"),(0,a.kt)("p",null,"To enable ",(0,a.kt)("a",{parentName:"p",href:"https://handlebarsjs.com"},(0,a.kt)("strong",{parentName:"a"},"handlebars"))," support make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewEngine")," option inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"I18nModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/app.module.ts"',title:'"src/app.module.ts"'},"  I18nModule.forRoot({\n    fallbackLanguage: 'en',\n    loaderOptions: {\n      path: path.join(__dirname, '/i18n/'),\n    },\n+   viewEngine: 'hbs'\n  })\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Handlebars is imported dynamically, so make sure to install it (",(0,a.kt)("inlineCode",{parentName:"p"},"npm i hbs"),"). Otherwise ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," can't register the helper function.")),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Let's try to do some translations with handlebar templates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/i18n/en/test.json"',title:'"src/i18n/en/test.json"'},'{\n  "HELLO": "Hello {username}",\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.controller.ts"',title:'"src/app.controller.ts"'},"\n@Controller('Test')\nexport class TestController {\n  @Get('/')\n  @Render('page')\n  index(): any {\n    return { helloArgs: { username: \"Toon\" } };\n  }\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hbs",metastring:'title="src/view/page.hbs"',title:'"src/view/page.hbs"'},"<!doctype html>\n<html>\n  <body>\n    <h1>{{ t 'test.HELLO' helloArgs }}</h1>\n  </body>\n</html>\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The third argument ",(0,a.kt)("inlineCode",{parentName:"p"},"helloArgs")," is optional. This is only needed if you want to pass along arugments to your translations.")),(0,a.kt)("h3",{id:"result"},"Result"),(0,a.kt)("code",null,(0,a.kt)("h1",null,"Hello Toon")))}c.isMDXComponent=!0}}]);