import{h as _,r as d,o as r,an as D,j as t,ao as M,af as U,ap as V,ac as T,ad as P,a8 as Q,aa as L,U as j,D as A,L as y,B as k,C as G,E as F}from"./index.7ed68957.js";import{S as J}from"./react-select.esm.67b469f7.js";import{Q as K,R as X}from"./app-users.9834fa95.js";import{b as Y,s as Z,d as ee,S as te,M as ae,E as se,e as le,T as re}from"./App.13c64db0.js";import{g as ne,d as ie}from"./BlogCategoryActionCreators.d33bb95a.js";import"./toConsumableArray.917c2683.js";const oe=({mainData:o,handlePerPage:a,rowsPerPage:l,handleFilter:f,searchTerm:p})=>{function w(n){let s;const c=",",u=`
`,N=Object.keys(o[0]);return s="",s+=N.join(c),s+=u,n.forEach(m=>{let S=0;N.forEach(g=>{S>0&&(s+=c),s+=m[g],S++}),s+=u}),s}function h(n){const s=document.createElement("a");let c=w(n);if(c===null)return;const u="export.csv";c.match(/^data:text\/csv/i)||(c=`data:text/csv;charset=utf-8,${c}`),s.setAttribute("href",encodeURI(c)),s.setAttribute("download",u),s.click()}return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:r(T,{children:[t(P,{xl:"6",className:"d-flex align-items-center p-0",children:r("div",{className:"d-flex align-items-center w-100",children:[t("label",{htmlFor:"rows-per-page",children:"Show"}),r(L,{className:"mx-50",type:"select",id:"rows-per-page",value:l,onChange:a,style:{width:"5rem"},children:[t("option",{value:"10",children:"10"}),t("option",{value:"25",children:"25"}),t("option",{value:"50",children:"50"})]}),t("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),r(P,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[r("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[t("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),t(L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:p,onChange:n=>f(n.target.value)})]}),r("div",{className:"d-flex align-items-center table-header-actions",children:[t(j,{className:"me-1",children:r(A,{color:"secondary",caret:!0,outline:!0,children:[t(te,{className:"font-small-4 me-50"}),t("span",{className:"align-middle",onClick:()=>h(o),children:"Excel"})]})}),t(y,{className:"btn btn-primary add-new-user",to:"/apps/blog-category/create",children:"Add New Blog Category"})]})]})]})})},ce=(o,a,l)=>o.slice((l-1)*a,l*a);function C(o,a){var l=[];return a.status===""?l=o:l=o.filter(f=>f.status.toLowerCase()===a.status.toLowerCase()),ce(l,a.perPage,a.page)}const ue=()=>{const o=Y(),a=_(e=>e.BlogCategoryStateData),[l,f]=d.exports.useState("desc"),[p,w]=d.exports.useState(""),[h,n]=d.exports.useState([]),[s,c]=d.exports.useState(1),[u,N]=d.exports.useState("id"),[m,S]=d.exports.useState(10),[g,de]=d.exports.useState({value:"",label:"Select Role"}),[v,me]=d.exports.useState({value:"",label:"Select Plan"}),[x,E]=d.exports.useState({value:"",label:"Select Status",number:0});d.exports.useEffect(()=>{o(ne()),n(C(a,{sort:l,sortColumn:u,q:p,page:s,perPage:m,role:g.value,status:x.value,currentPlan:v.value}))},[o,a.length,l,u,s]);const O=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],z=e=>{n(C(a,{sort:l,sortColumn:u,q:p,perPage:m,page:e.selected+1,role:g.value,status:x.value,currentPlan:v.value})),c(e.selected+1)},B=e=>{const i=parseInt(e.currentTarget.value);n(C(a,{sort:l,sortColumn:u,q:p,perPage:i,page:s,role:g.value,currentPlan:v.value,status:x.value})),S(i)},R=e=>{w(e);var i=a.filter(b=>{if(b.title.toLowerCase().includes(e.toLowerCase())||b.seourl.toLowerCase().includes(e.toLowerCase()))return b});n(i)},I=()=>{let e=Number(Math.floor(a.length/m));return a.length%m!==0&&e++,t(X,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:s!==0?s-1:0,onPageChange:i=>z(i),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},$=()=>{const e={role:g.value,currentPlan:v.value,status:x.value,q:p},i=Object.keys(e).some(function(b){return e[b].length>0});return h.length>0?h:h.length===0&&i?[]:h.slice(0,m)},q=(e,i)=>{f(i),N(e.sortField),n(C(a,{sort:l,sortColumn:u,q:p,page:s,perPage:m,role:g.value,status:x.value,currentPlan:v.value}))},W={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},H=[{name:"Title",sortable:!0,minWidth:"300px",sortField:"title",selector:e=>e.title,cell:e=>t("span",{className:"text-capitalize",children:e.title})},{name:"Seo Url",sortable:!0,minWidth:"300px",sortField:"seourl",selector:e=>e.seourl,cell:e=>t("span",{className:"text-capitalize",children:e.seourl})},{name:"Image",sortable:!0,minWidth:"70px",sortField:"image",selector:e=>e.image,cell:e=>t("span",{className:"text-capitalize",children:t("a",{href:`/blog-category/${e.image}`,target:"_blank",children:t("img",{src:`/blog-category/${e.image}`,height:"50px",width:"70px"})})})},{name:"Status",minWidth:"138px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>t(k,{className:"text-capitalize",color:W[e.status],pill:!0,children:e.status})},{name:"Sort Order",minWidth:"138px",sortable:!0,sortField:"sortOrder",selector:e=>e.sortOrder,cell:e=>t(k,{className:"text-capitalize",children:e.sortOrder})},{name:"Actions",minWidth:"100px",cell:e=>t("div",{className:"column-action",children:r(j,{children:[t(A,{tag:"div",className:"btn btn-sm",children:t(ae,{size:14,className:"cursor-pointer"})}),r(G,{children:[t(F,{className:"w-100",children:r(y,{to:"/apps/blog-category/show/"+e._id,children:[t(se,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"View"})]})}),r(y,{to:"/apps/blog-category/update/"+e._id,className:"p-1",children:["\xA0",t(le,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Edit"})]}),r(F,{className:"w-100",onClick:i=>{i.preventDefault(),o(ie({_id:e._id}))},children:[t(re,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return r(d.exports.Fragment,{children:[r(D,{children:[t(M,{children:t(U,{tag:"h4",children:"Filters"})}),t(V,{children:t(T,{children:r(P,{md:"4",children:[t(Q,{for:"status-select",children:"Status"}),t(J,{theme:Z,isClearable:!1,className:"react-select",classNamePrefix:"select",options:O,value:x,onChange:e=>{E(e),c(1),n(C(a,{sort:l,sortColumn:u,q:p,page:1,status:e.value,perPage:m,role:g.value,currentPlan:v.value}))}})]})})})]}),t(D,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(K,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:H,onSort:q,sortIcon:t(ee,{}),className:"react-dataTable",paginationComponent:I,data:$(),subHeaderComponent:t(oe,{mainData:h,searchTerm:p,rowsPerPage:m,handleFilter:R,handlePerPage:B})})})})]})},be=()=>t("div",{className:"app-user-list",children:t(ue,{})});export{be as default};