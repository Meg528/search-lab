"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[8322],{4976:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=o(5893),n=o(1151);const i={},c="\ud83d\udcd8 Implementing Vector Search",a={id:"vector-search/implementing-vector-search",title:"\ud83d\udcd8 Implementing Vector Search",description:"There are two components that you will need to do to implement vector search into your application.",source:"@site/docs/7-vector-search/3-implementing-vector-search.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/implementing-vector-search",permalink:"/search-lab/docs/vector-search/implementing-vector-search",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/3-implementing-vector-search.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 What Are Vectors?",permalink:"/search-lab/docs/vector-search/what-are-vector"},next:{title:"\ud83d\udc50 Import Vectorized Data",permalink:"/search-lab/docs/vector-search/import-data"}},s={},h=[{value:"Vectorize your dataset",id:"vectorize-your-dataset",level:2},{value:"Vectorize your query",id:"vectorize-your-query",level:2}];function l(e){const t={h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-implementing-vector-search",children:"\ud83d\udcd8 Implementing Vector Search"}),"\n",(0,r.jsx)(t.p,{children:"There are two components that you will need to do to implement vector search into your application."}),"\n",(0,r.jsx)(t.h2,{id:"vectorize-your-dataset",children:"Vectorize your dataset"}),"\n",(0,r.jsx)(t.p,{children:"First, you will need to create this mathematical representation of your data. This is called vectorization. In the Create Vectors section, you will learn how to create vectors with some of the major encoders."}),"\n",(0,r.jsx)(t.p,{children:"In the context of this workshop, however, we already did the work for you. You will be able to import the data with the embeddings using the import tool you've used previously."}),"\n",(0,r.jsx)(t.h2,{id:"vectorize-your-query",children:"Vectorize your query"}),"\n",(0,r.jsx)(t.p,{children:"The second component is to vectorize your query. This is the same process as vectorizing your dataset, but instead of vectorizing a large dataset, you are vectorizing a single query."}),"\n",(0,r.jsx)(t.p,{children:"It is important to use the same encoder for both your dataset and your query. This is because the encoder learns a specific way to represent the data. If you use a different encoder, the vectors will be different and the search will not work."}),"\n",(0,r.jsx)(t.p,{children:"For this workshop, you will be using one of the provided functions to vectorize your query. Again, the full code to do this on your own is in the Create Vectors section."})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>c});var r=o(7294);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);