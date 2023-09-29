"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[928],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const o={},i="Create an Atlas Search index",s={unversionedId:"search/search-index",id:"search/search-index",title:"Create an Atlas Search index",description:"To start using Atlas Search, you must configure a search index on your database. Atlas Search indexes categorize data in an easily searchable format and enable faster document retrieval using certain identifiers. You can create a search index right from the Atlas UI.",source:"@site/docs/2-search/2-search-index.mdx",sourceDirName:"2-search",slug:"/search/search-index",permalink:"/search-party-lab/docs/search/search-index",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/2-search/2-search-index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/search-party-lab/docs/search/intro"},next:{title:"Testing the Search index",permalink:"/search-party-lab/docs/search/test-search"}},c={},d=[{value:"Step-by-step guide to creating your first Atlas Search index",id:"step-by-step-guide-to-creating-your-first-atlas-search-index",level:2}],l=(p="Screenshot",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const h={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-atlas-search-index"},"Create an Atlas Search index"),(0,a.kt)("p",null,"To start using Atlas Search, you must configure a search index on your database. Atlas Search indexes categorize data in an easily searchable format and enable faster document retrieval using certain identifiers. You can create a search index right from the Atlas UI."),(0,a.kt)("h2",{id:"step-by-step-guide-to-creating-your-first-atlas-search-index"},"Step-by-step guide to creating your first Atlas Search index"),(0,a.kt)("p",null,"Open the ",(0,a.kt)("strong",{parentName:"p"},"Database Deployments")," page in MongoDB Atlas and select ",(0,a.kt)("strong",{parentName:"p"},"Create Index")," in the lower right corner."),(0,a.kt)(l,{alt:"The 'Database Deployments' page with the 'Create Index' link highlighted",src:"img/screenshots/2-search/2-search-index/1-create-index.png",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},"Create Search Index")," button."),(0,a.kt)(l,{alt:"The 'Create Search Index' button highlighted",src:"img/screenshots/2-search/2-search-index/2-create-search-index.png",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"The first step of building the search index is selecting the configuration method. You can choose from two options \u2014 using the ",(0,a.kt)("strong",{parentName:"p"},"Visual Editor")," or writing the configuration yourself with the ",(0,a.kt)("strong",{parentName:"p"},"JSON Editor"),". Let's stick to the default ",(0,a.kt)("strong",{parentName:"p"},"Visual Editor"),". To proceed, click ",(0,a.kt)("strong",{parentName:"p"},"Next"),"."),(0,a.kt)(l,{alt:"The 'Configuration Method' step of creating a new search index",src:"img/screenshots/2-search/2-search-index/3-search-index-config-method.png",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"Next, you need to select a name and data source for your index. Change the name to ",(0,a.kt)("strong",{parentName:"p"},"fulltextsearch")," and select the database ",(0,a.kt)("strong",{parentName:"p"},"library")," and the collection ",(0,a.kt)("strong",{parentName:"p"},"books"),"."),(0,a.kt)(l,{alt:"The 'Name & Data Source' step of creating a new search index",src:"img/screenshots/2-search/2-search-index/4-search-index-config-name-datasource.png",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"The final step allows you to review the index configuration and refine it if needed. You may also see the JSON that was generated from your configuration by clicking ",(0,a.kt)("strong",{parentName:"p"},"View JSON"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```JSON\n{\n    "mappings": {\n        "dynamic": true\n    }\n}\n```\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The index is using dynamic field mappings. We didn't configure any explicit (static) mappings between the fields in the documents and the search index. That's why Atlas created dynamic mappings that match the data in the documents to some common field types such as ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),".\nDynamic mappings are useful when you're just getting started with Atlas Search or if your schema changes regularly. However, they take up more space compared to static mappings.")),(0,a.kt)("p",null,"You don't need to refine this index. Go ahead and click ",(0,a.kt)("strong",{parentName:"p"},"Create Search Index"),"."),(0,a.kt)(l,{alt:"The 'Review & Refine' step of creating a new search index",src:"img/screenshots/2-search/2-search-index/5-search-index-config-refine.png",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"You'll be redirected to a page showing all of the search indexes used in your Atlas project. Creating the index should take up to a minute."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When your search index reaches status ",(0,a.kt)("strong",{parentName:"p"},"Active"),", you'll be able to see more information about the index. For example, the number of indexed documents, the field mappings and the index size. Notice also that you're using 1 out of the 3 free search indexes that come with your free M0 database.")),(0,a.kt)(l,{alt:"The 'Search Indexes' page with the newly created index highlighted",src:"img/screenshots/2-search/2-search-index/6-search-indexes-list.png",url:"https://cloud.mongodb.com",mdxType:"Screenshot"}),(0,a.kt)("p",null,"Once you see your new index showing as ",(0,a.kt)("inlineCode",{parentName:"p"},"Active")," in the list, you can move to the next step."))}m.isMDXComponent=!0}}]);