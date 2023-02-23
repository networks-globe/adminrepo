import{h as V,r as d,o as r,an as y,j as t,af as F,ao as _,ap as B,ac as q,ad as P,a8 as U,aa as k,U as D,D as z,L,B as Q,C as G,E as R}from"./index.7ed68957.js";import{S as J}from"./react-select.esm.67b469f7.js";import{Q as K,R as X}from"./app-users.9834fa95.js";import{b as Y,s as Z,d as ee,S as te,M as ae,E as le,e as se,T as re}from"./App.13c64db0.js";import{g as ne,d as ie}from"./CertificationRequestActionCreators.b76faa9c.js";import"./toConsumableArray.917c2683.js";let ce=({mainData:c,handlePerPage:a,rowsPerPage:s,handleFilter:C,searchTerm:h})=>{function S(n){let l,o=",",u=`
`,b=Object.keys(c[0]);return l="",l+=b.join(o),l+=u,n.forEach(m=>{let w=0;b.forEach(g=>{w>0&&(l+=o),l+=m[g],w++}),l+=u}),l}function f(n){let l=document.createElement("a"),o=S(n);if(o===null)return;let u="export.csv";o.match(/^data:text\/csv/i)||(o=`data:text/csv;charset=utf-8,${o}`),l.setAttribute("href",encodeURI(o)),l.setAttribute("download",u),l.click()}return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:r(q,{children:[t(P,{xl:"6",className:"d-flex align-items-center p-0",children:r("div",{className:"d-flex align-items-center w-100",children:[t("label",{htmlFor:"rows-per-page",children:"Show"}),r(k,{className:"mx-50",type:"select",id:"rows-per-page",value:s,onChange:a,style:{width:"5rem"},children:[t("option",{value:"10",children:"10"}),t("option",{value:"25",children:"25"}),t("option",{value:"50",children:"50"})]}),t("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),r(P,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[r("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[t("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),t(k,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:h,onChange:n=>C(n.target.value)})]}),r("div",{className:"d-flex align-items-center table-header-actions",children:[t(D,{className:"me-1",children:r(z,{color:"secondary",caret:!0,outline:!0,children:[t(te,{className:"font-small-4 me-50"}),t("span",{className:"align-middle",onClick:()=>f(c),children:"Excel"})]})}),t(L,{className:"btn btn-primary add-new-user",to:"/apps/certification-request/create",children:"Add New Certificate Request"})]})]})]})})},oe=(c,a,s)=>c.slice((s-1)*a,s*a);function N(c,a){var s=[];return a.status===""?s=c:s=c.filter(C=>C.status.toLowerCase()===a.status.toLowerCase()),oe(s,a.perPage,a.page)}let ue=()=>{let c=Y(),a=V(e=>e.CertificationRequestStateData),[s,C]=d.exports.useState("desc"),[h,S]=d.exports.useState(""),[f,n]=d.exports.useState([]),[l,o]=d.exports.useState(1),[u,b]=d.exports.useState("id"),[m,w]=d.exports.useState(10),[g,de]=d.exports.useState({value:"",label:"Select Role"}),[v,me]=d.exports.useState({value:"",label:"Select Plan"}),[x,T]=d.exports.useState({value:"",label:"Select Status",number:0});d.exports.useEffect(()=>{c(ne()),n(N(a,{sort:s,sortColumn:u,q:h,page:l,perPage:m,role:g.value,status:x.value,currentPlan:v.value}))},[c,a.length,s,u,l]);let I=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],j=e=>{n(N(a,{sort:s,sortColumn:u,q:h,perPage:m,page:e.selected+1,role:g.value,status:x.value,currentPlan:v.value})),o(e.selected+1)},E=e=>{let i=parseInt(e.currentTarget.value);n(N(a,{sort:s,sortColumn:u,q:h,perPage:i,page:l,role:g.value,currentPlan:v.value,status:x.value})),w(i)},A=e=>{S(e);var i=a.filter(p=>{if(p.name.toLowerCase().includes(e.toLowerCase())||p.course.toLowerCase().includes(e.toLowerCase())||p.phone.toLowerCase().includes(e.toLowerCase())||p.center.toLowerCase().includes(e.toLowerCase())||p.email.toLowerCase().includes(e.toLowerCase())||p.ducatId.toLowerCase().includes(e.toLowerCase())||p.faculty.toLowerCase().includes(e.toLowerCase()))return p});n(i)},W=()=>{let e=Number(Math.floor(a.length/m));return a.length%m!==0&&e++,t(X,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:l!==0?l-1:0,onPageChange:i=>j(i),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},O=()=>{let e={role:g.value,currentPlan:v.value,status:x.value,q:h},i=Object.keys(e).some(function(p){return e[p].length>0});return f.length>0?f:f.length===0&&i?[]:f.slice(0,m)},H=(e,i)=>{C(i),b(e.sortField),n(N(a,{sort:s,sortColumn:u,q:h,page:l,perPage:m,role:g.value,status:x.value,currentPlan:v.value}))},$={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},M=[{name:"ducatId",sortable:!0,minWidth:"130px",sortField:"ducatId",selector:e=>e.ducatId,cell:e=>t("span",{className:"text-capitalize",children:e.ducatId})},{name:"Name",sortable:!0,minWidth:"140px",sortField:"name",selector:e=>e.name,cell:e=>t("span",{className:"text-capitalize",children:e.name})},{name:"Phone",sortable:!0,minWidth:"130px",sortField:"phone",selector:e=>e.phone,cell:e=>t("span",{className:"text-capitalize",children:e.phone})},{name:"Email",sortable:!0,minWidth:"250px",sortField:"email",selector:e=>e.email,cell:e=>t("span",{className:"text-capitalize",children:e.email})},{name:"Course",sortable:!0,minWidth:"300px",sortField:"course",selector:e=>e.course,cell:e=>t("span",{className:"text-capitalize",children:e.course})},{name:"Center",sortable:!0,minWidth:"130px",sortField:"center",selector:e=>e.center,cell:e=>t("span",{className:"text-capitalize",children:e.center})},{name:"Faculty",sortable:!0,minWidth:"130px",sortField:"faculty",selector:e=>e.faculty,cell:e=>t("span",{className:"text-capitalize",children:e.faculty})},{name:"Remark",minWidth:"300px",sortable:!0,sortField:"remark",selector:e=>e.remark,cell:e=>t("span",{className:"text-capitalize",children:e.remark})},{name:"status",minWidth:"138px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>t(Q,{className:"text-capitalize",color:$[e.status],pill:!0,children:e.status})},{name:"Actions",minWidth:"100px",cell:e=>t("div",{className:"column-action",children:r(D,{children:[t(z,{tag:"div",className:"btn btn-sm",children:t(ae,{size:14,className:"cursor-pointer"})}),r(G,{children:[t(R,{className:"w-100",children:r(L,{to:"/apps/certification-request/show/"+e._id,children:[t(le,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"View"})]})}),r(L,{to:"/apps/certification-request/update/"+e._id,className:"p-1",children:["\xA0",t(se,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Edit"})]}),r(R,{className:"w-100",onClick:i=>{i.preventDefault(),c(ie({_id:e._id}))},children:[t(re,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return r(d.exports.Fragment,{children:[r(y,{children:[t(F,{tag:"h3",className:"text-center pt-2",children:"Certificate Request"}),t(_,{children:t(F,{tag:"h4",children:"Filters"})}),t(B,{children:t(q,{children:r(P,{md:"4",children:[t(U,{for:"status-select",children:"Status"}),t(J,{theme:Z,isClearable:!1,className:"react-select",classNamePrefix:"select",options:I,value:x,onChange:e=>{T(e),o(1),n(N(a,{sort:s,sortColumn:u,q:h,page:1,status:e.value,perPage:m,role:g.value,currentPlan:v.value}))}})]})})})]}),t(y,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(K,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:M,onSort:H,sortIcon:t(ee,{}),className:"react-dataTable",paginationComponent:W,data:O(),subHeaderComponent:t(ce,{mainData:f,searchTerm:h,rowsPerPage:m,handleFilter:A,handlePerPage:E})})})})]})},Ce=()=>t("div",{className:"app-user-list",children:t(ue,{})});export{Ce as default};