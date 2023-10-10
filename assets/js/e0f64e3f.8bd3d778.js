"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[2120],{4137:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},h),{},{components:r})):n.createElement(m,i({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={},i="Testing the Search index",s={unversionedId:"search/test-search",id:"search/test-search",title:"Testing the Search index",description:"Now that you have a search index, you can test it out.",source:"@site/docs/2-search/3-test-search.mdx",sourceDirName:"2-search",slug:"/search/test-search",permalink:"/search-party-lab/docs/search/test-search",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/2-search/3-test-search.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create an Atlas Search index",permalink:"/search-party-lab/docs/search/search-index"},next:{title:"Aggregation pipelines",permalink:"/search-party-lab/docs/category/aggregation-pipelines"}},l={},c=[{value:"Search Tester",id:"search-tester",level:2},{value:"Searching only the title",id:"searching-only-the-title",level:2}],h=(p="Screenshot",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-the-search-index"},"Testing the Search index"),(0,a.kt)("p",null,"Now that you have a search index, you can test it out."),(0,a.kt)("p",null,"From the list of indexes, look for the ",(0,a.kt)("strong",{parentName:"p"},"Query")," button."),(0,a.kt)(h,{src:"img/screenshots/2-search/3-test-search/1-query-button.png",alt:"The Query button from the list of indexes",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("h2",{id:"search-tester"},"Search Tester"),(0,a.kt)("p",null,"By using the ",(0,a.kt)("strong",{parentName:"p"},"Query")," button above, you will open the ",(0,a.kt)("strong",{parentName:"p"},"Search Tester"),". In the field, enter the word:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cooking\n")),(0,a.kt)("p",null,"and look at the results you get."),(0,a.kt)(h,{src:"img/screenshots/2-search/3-test-search/2-search-tester.png",alt:"The Search Tester",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"You can see that you get a list of books back including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"High-Flavor, Low-Fat Vegetarian ",(0,a.kt)("em",{parentName:"li"},"Cooking")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Cooking")," Secrets of the CIA: Favorite Recipes from the Culinary Institu\u2026"),(0,a.kt)("li",{parentName:"ul"},"Semi-Homemade ",(0,a.kt)("em",{parentName:"li"},"Cooking"),": Quick, Marvelous Meals and Nothing is Made from\u2026")),(0,a.kt)("p",null,"All those results match the word ",(0,a.kt)("em",{parentName:"p"},"cooking"),". Notice how capitalization doesn't matter. Neither does the placement of the word in the title. The search index is smart enough to find the word ",(0,a.kt)("em",{parentName:"p"},"cooking")," in all those titles."),(0,a.kt)("p",null,"Already, you are providing a better experience to your developers."),(0,a.kt)("h2",{id:"searching-only-the-title"},"Searching only the title"),(0,a.kt)("p",null,"This is great. However, this search query is searching the entire document. There might be some cases where that works for you, but in most cases, you'll likely want to limit this search only to the fields that matter. In this case, let's change it to only search the title."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Search Tester"),", click on the ",(0,a.kt)("strong",{parentName:"p"},"Edit $search query")," button, next to the green ",(0,a.kt)("strong",{parentName:"p"},"Search")," button."),(0,a.kt)("p",null,"This will open up the query editor."),(0,a.kt)(h,{src:"img/screenshots/2-search/3-test-search/3-query-editor.png",alt:"The Edit $search query button",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"Notice you the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," property currently shows ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),". This means that it will search the entire document. Try to change the search to only search the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," field."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can find more information about how to construct a query path in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-search/path-construction/"},"Search documentation"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click here to see the answer"),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    $search: {\n      index: "fulltextsearch",\n      text: {\n        query: "cooking",\n        path: ["title"]\n      }\n    }\n  }\n]\n')))),(0,a.kt)("p",null,"You will see the same results, but ordered differently. This has to do with relevancy, but we'll cover that in a later section."))}m.isMDXComponent=!0}}]);