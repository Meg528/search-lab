"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[986],{4137:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=i(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return r?o.createElement(m,s(s({ref:t},h),{},{components:r})):o.createElement(m,s({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(7462),n=(r(7294),r(4137));const a={},s="What Are Vectors?",c={unversionedId:"vector-search/what-are-vector",id:"vector-search/what-are-vector",title:"What Are Vectors?",description:"Simply put, a vector is a list of numbers. For example, a vector of length 3 could be [1, 2, 3]. A vector of length 5 could be [1, 2, 3, 4, 5]. A vector of length 100 could be [1, 2, 3, 4, 5, ..., 100]. The length of a vector is the number of elements it contains.",source:"@site/docs/7-vector-search/2-what-are-vector.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/what-are-vector",permalink:"/search-party-lab/docs/vector-search/what-are-vector",draft:!1,editUrl:"https://github.com/mongodb-developer/search-party-lab/blob/main/docs/7-vector-search/2-what-are-vector.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Semantic Search",permalink:"/search-party-lab/docs/vector-search/semantic-search"},next:{title:"Create Vector Search indexes",permalink:"/search-party-lab/docs/vector-search/create-index"}},l={},i=[{value:"Why Do We Need Vectors?",id:"why-do-we-need-vectors",level:2},{value:"How Do We Create Vectors?",id:"how-do-we-create-vectors",level:2}],h={toc:i},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-are-vectors"},"What Are Vectors?"),(0,n.kt)("p",null,"Simply put, a vector is a list of numbers. For example, a vector of length 3 could be ","[1, 2, 3]",". A vector of length 5 could be ","[1, 2, 3, 4, 5]",". A vector of length 100 could be ","[1, 2, 3, 4, 5, ..., 100]",". The length of a vector is the number of elements it contains."),(0,n.kt)("p",null,"In AI, vectors are a mathematical representation of data."),(0,n.kt)("p",null,"Thanks to some of the latest advances in AI, we can now use vectors to represent words, sentences, paragraphs, and even entire documents. This is a huge breakthrough because it allows us to use AI to understand the meaning of text."),(0,n.kt)("p",null,"Vectors can even be used to represent images, audio, and video, but we'll focus on text in this workshop."),(0,n.kt)("h2",{id:"why-do-we-need-vectors"},"Why Do We Need Vectors?"),(0,n.kt)("p",null,"Computers can't understand text. They can only understand numbers. So, we need a way to convert text into numbers. That's where vectors come in."),(0,n.kt)("p",null,"Using vectors, we can plot text in a multi-dimensional space. It is hard to visualize a multi-dimensional space, so let's start with a 2-dimensional space."),(0,n.kt)("p",null,"Imagine a plot with a x and y axis. Our ML model will plot various points on this plot. This could represent words, sentences, paragraphs, documents, or even images."),(0,n.kt)("p",null,"The position where the points are plotted is determined by the model you used. The models converts the data you passed it into a vector. Then, it plots the vector on the chart."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Points on a chart",src:r(8713).Z,width:"1702",height:"1330"})),(0,n.kt)("p",null,"When doing a search, we will create a new vector for the search term. We then plot this new vector on the chart."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Search term on a chart",src:r(365).Z,width:"1702",height:"1330"})),(0,n.kt)("p",null,"Then, we will find the closest words to the search term. The closest words will be the words that are plotted closest to the search term."),(0,n.kt)("p",null,"The closest term will depend on the algorithm you use to calculate the distance between vectors. Using Euclidian distance, the closest words will be the words that are closest to the search term."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Closest words",src:r(7818).Z,width:"1702",height:"1388"})),(0,n.kt)("p",null,"Vector search also provides a cosine algorithm. Using cosine distance, the closest words will be the words that are closest to the search term, but in the same direction."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Closest words",src:r(7213).Z,width:"1702",height:"1388"})),(0,n.kt)("h2",{id:"how-do-we-create-vectors"},"How Do We Create Vectors?"),(0,n.kt)("p",null,"There are many ways to create vectors. In this workshop, we'll use a pre-trained model and an API that will return vectors for us."))}p.isMDXComponent=!0},8713:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/1-vectors-dd6b881c393ab10e2b38df3c01a87aa7.png"},365:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/2-vector-query-629d04e7529c2442cf3fe9613b9de3cd.png"},7818:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/3-euclidean-e20e84c0a07375a9fa804d6e9e2ecfca.png"},7213:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/4-cosine-13e38983d440beb1534327ef58af8f2b.png"}}]);