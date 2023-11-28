"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[4833],{9163:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var n=i(5893),r=i(1151);const t={layout:"docs",title:"Versioning",section:"chisel3"},d="Chisel Project Versioning",l={id:"appendix/versioning",title:"Versioning",description:"Chisel follows Semantic Versioning 2.0.0.",source:"@site/docs/appendix/versioning.md",sourceDirName:"appendix",slug:"/appendix/versioning",permalink:"/docs/appendix/versioning",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/appendix/versioning.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Versioning",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Upgrading From Scala 2.11",permalink:"/docs/appendix/upgrading-from-scala-2-11"},next:{title:"Developer Documentation",permalink:"/docs/developers/"}},c={},h=[{value:"Old Chisel versions (3.0 - 3.6)",id:"old-chisel-versions-30---36",level:2},{value:"Compatible Versions (Chisel 3.0 - 3.6)",id:"compatible-versions-chisel-30---36",level:3}];function o(e){const s={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"chisel-project-versioning",children:"Chisel Project Versioning"}),"\n",(0,n.jsxs)(s.p,{children:["Chisel follows ",(0,n.jsx)(s.a,{href:"https://semver.org",children:"Semantic Versioning 2.0.0"}),".\nProject versions are of the form ",(0,n.jsx)(s.code,{children:"MAJOR.MINOR.PATCH"}),".\nAn incremented ",(0,n.jsx)(s.code,{children:"MAJOR"})," version means there may be backwards incompatible changes (typically after an appropriate deprecation schedule).\nAn incrementaled ",(0,n.jsx)(s.code,{children:"MINOR"})," version means there are changes in functionality (new APIs) in a backwards compatible manner.\nImportantly, Chisel maintains ",(0,n.jsx)(s.em,{children:"binary compatibility"})," between minor versions of the same major version.\nFor example, a project compiled against Chisel 5.0.0 can be used with future Chisel versions 5.1.0 or 5.100.2.\nAn incremented ",(0,n.jsx)(s.code,{children:"PATCH"})," version means there are backwards compatible bug fixes."]}),"\n",(0,n.jsx)(s.h2,{id:"old-chisel-versions-30---36",children:"Old Chisel versions (3.0 - 3.6)"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"As of Chisel 5.0.0, this and following sections no longer apply."})}),"\n",(0,n.jsxs)(s.p,{children:["Prior to the relese of Chisel 5.0.0, Chisel and related projects followed a versioning scheme similar to ",(0,n.jsx)(s.a,{href:"https://pvp.haskell.org/",children:"PVP"}),".\nProject versions were of the form ",(0,n.jsx)(s.code,{children:"A.B.C"})," where ",(0,n.jsx)(s.code,{children:"A.B"})," specifies the ",(0,n.jsx)(s.em,{children:"Major"})," version and ",(0,n.jsx)(s.code,{children:"C"})," specifies the ",(0,n.jsx)(s.em,{children:"Minor"})," version.\nProjects maintain ",(0,n.jsx)(s.em,{children:"binary compatibility"})," between minor versions of the same major version."]}),"\n",(0,n.jsx)(s.h3,{id:"compatible-versions-chisel-30---36",children:"Compatible Versions (Chisel 3.0 - 3.6)"}),"\n",(0,n.jsx)(s.p,{children:"Historically, various Chisel-related projects were distributed across multiple projects each with their own versioning."}),"\n",(0,n.jsxs)(s.p,{children:["Please use the following table to determine which versions of the related projects are compatible.\nIn particular, versions of projects in this table were compiled against the version of any dependencies listed in the same row.\nFor example, ",(0,n.jsx)(s.code,{children:"chisel-iotesters"})," version 1.4 was compiled against ",(0,n.jsx)(s.code,{children:"chisel3"})," version 3.3."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"chisel3"}),(0,n.jsx)(s.th,{children:"chiseltest"}),(0,n.jsxs)(s.th,{children:["chisel-iotesters",(0,n.jsx)("sup",{children:"3"})]}),(0,n.jsx)(s.th,{children:"firrtl"}),(0,n.jsx)(s.th,{children:"treadle"}),(0,n.jsx)(s.th,{children:"diagrammer"}),(0,n.jsxs)(s.th,{children:["firrtl-interpreter",(0,n.jsx)("sup",{children:"2"})]})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3.6"}),(0,n.jsx)(s.td,{children:"0.6"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"1.6"}),(0,n.jsx)(s.td,{children:"1.6"}),(0,n.jsx)(s.td,{children:"1.6"}),(0,n.jsx)(s.td,{children:"-"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3.5"}),(0,n.jsxs)(s.td,{children:["0.5",(0,n.jsx)("sup",{children:"4"})]}),(0,n.jsxs)(s.td,{children:["2.5",(0,n.jsx)("sup",{children:"5"})]}),(0,n.jsx)(s.td,{children:"1.5"}),(0,n.jsxs)(s.td,{children:["1.5",(0,n.jsx)("sup",{children:"4"})]}),(0,n.jsxs)(s.td,{children:["1.5",(0,n.jsx)("sup",{children:"4"})]}),(0,n.jsx)(s.td,{children:"-"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3.4"}),(0,n.jsx)(s.td,{children:"0.3"}),(0,n.jsx)(s.td,{children:"1.5"}),(0,n.jsx)(s.td,{children:"1.4"}),(0,n.jsx)(s.td,{children:"1.3"}),(0,n.jsx)(s.td,{children:"1.3"}),(0,n.jsx)(s.td,{children:"1.4"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3.3"}),(0,n.jsx)(s.td,{children:"0.2"}),(0,n.jsx)(s.td,{children:"1.4"}),(0,n.jsx)(s.td,{children:"1.3"}),(0,n.jsx)(s.td,{children:"1.2"}),(0,n.jsx)(s.td,{children:"1.2"}),(0,n.jsx)(s.td,{children:"1.3"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3.2"}),(0,n.jsxs)(s.td,{children:["0.1",(0,n.jsx)("sup",{children:"1"})]}),(0,n.jsx)(s.td,{children:"1.3"}),(0,n.jsx)(s.td,{children:"1.2"}),(0,n.jsx)(s.td,{children:"1.1"}),(0,n.jsx)(s.td,{children:"1.1"}),(0,n.jsx)(s.td,{children:"1.2"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3.1"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"1.2"}),(0,n.jsx)(s.td,{children:"1.1"}),(0,n.jsx)(s.td,{children:"1.0"}),(0,n.jsx)(s.td,{children:"1.0"}),(0,n.jsx)(s.td,{children:"1.1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"3.0"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"1.1"}),(0,n.jsx)(s.td,{children:"1.0"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"-"}),(0,n.jsx)(s.td,{children:"1.0"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("sup",{children:"1"})," chiseltest 0.1 was published under artifact name ",(0,n.jsx)(s.a,{href:"https://search.maven.org/search?q=a:chisel-testers2_2.12",children:"chisel-testers2"})," (0.2 was published under both artifact names)",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)("sup",{children:"2"})," Replaced by Treadle, in maintenance mode only since version 1.1, final version is 1.4",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)("sup",{children:"3"})," Replaced by chiseltest, final version is 2.5",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)("sup",{children:"4"})," chiseltest, treadle, and diagrammer skipped X.4 to have a consistent major version with Chisel",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)("sup",{children:"5"})," chisel-iotesters skipped from 1.5 to 2.5 to have a consistent major version with Chisel"]})]})}function a(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>d});var n=i(7294);const r={},t=n.createContext(r);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);