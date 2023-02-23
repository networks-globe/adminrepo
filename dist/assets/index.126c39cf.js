import{h as V,r as d,o as s,an as k,j as t,af as T,ao as B,ap as U,ac as j,ad as P,a8 as Q,aa as D,U as A,D as E,L as y,B as L,C as G,E as F}from"./index.7ed68957.js";import{S as J}from"./react-select.esm.67b469f7.js";import{Q as K,R as X}from"./app-users.9834fa95.js";import{b as Y,s as Z,d as ee,S as te,M as ae,E as le,e as re,T as se}from"./App.13c64db0.js";import{g as ne,d as ie}from"./TechnologyActionCreators.3980be47.js";import"./toConsumableArray.917c2683.js";let oe=({mainData:o,handlePerPage:a,rowsPerPage:r,handleFilter:f,searchTerm:h})=>{function w(n){let l,c=",",u=`
`,C=Object.keys(o[0]);return l="",l+=C.join(c),l+=u,n.forEach(m=>{let S=0;C.forEach(p=>{S>0&&(l+=c),l+=m[p],S++}),l+=u}),l}function g(n){let l=document.createElement("a"),c=w(n);if(c===null)return;let u="export.csv";c.match(/^data:text\/csv/i)||(c=`data:text/csv;charset=utf-8,${c}`),l.setAttribute("href",encodeURI(c)),l.setAttribute("download",u),l.click()}return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:s(j,{children:[t(P,{xl:"6",className:"d-flex align-items-center p-0",children:s("div",{className:"d-flex align-items-center w-100",children:[t("label",{htmlFor:"rows-per-page",children:"Show"}),s(D,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:a,style:{width:"5rem"},children:[t("option",{value:"10",children:"10"}),t("option",{value:"25",children:"25"}),t("option",{value:"50",children:"50"})]}),t("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),s(P,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[s("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[t("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),t(D,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:h,onChange:n=>f(n.target.value)})]}),s("div",{className:"d-flex align-items-center table-header-actions",children:[t(A,{className:"me-1",children:s(E,{color:"secondary",caret:!0,outline:!0,children:[t(te,{className:"font-small-4 me-50"}),t("span",{className:"align-middle",onClick:()=>g(o),children:"Excel"})]})}),t(y,{className:"btn btn-primary add-new-user",to:"/tutorial/technology/create",children:"Add New Technology"})]})]})]})})},ce=(o,a,r)=>o.slice((r-1)*a,r*a);function b(o,a){var r=[];return a.status===""?r=o:r=o.filter(f=>f.status.toLowerCase()===a.status.toLowerCase()),ce(r,a.perPage,a.page)}let ue=()=>{let o=Y(),a=V(e=>e.TechnologyStateData),[r,f]=d.exports.useState("desc"),[h,w]=d.exports.useState(""),[g,n]=d.exports.useState([]),[l,c]=d.exports.useState(1),[u,C]=d.exports.useState("id"),[m,S]=d.exports.useState(10),[p,de]=d.exports.useState({value:"",label:"Select Role"}),[v,me]=d.exports.useState({value:"",label:"Select Plan"}),[x,O]=d.exports.useState({value:"",label:"Select Status",number:0});d.exports.useEffect(()=>{o(ne()),n(b(a,{sort:r,sortColumn:u,q:h,page:l,perPage:m,role:p.value,status:x.value,currentPlan:v.value}))},[o,a.length,r,u,l]);let R=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],z=e=>{n(b(a,{sort:r,sortColumn:u,q:h,perPage:m,page:e.selected+1,role:p.value,status:x.value,currentPlan:v.value})),c(e.selected+1)},I=e=>{let i=parseInt(e.currentTarget.value);n(b(a,{sort:r,sortColumn:u,q:h,perPage:i,page:l,role:p.value,currentPlan:v.value,status:x.value})),S(i)},$=e=>{w(e);var i=a.filter(N=>{if(N.name.toLowerCase().includes(e.toLowerCase())||N.remark.toLowerCase().includes(e.toLowerCase()))return N});n(i)},q=()=>{let e=Number(Math.floor(a.length/m));return a.length%m!==0&&e++,t(X,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:l!==0?l-1:0,onPageChange:i=>z(i),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},W=()=>{let e={role:p.value,currentPlan:v.value,status:x.value,q:h},i=Object.keys(e).some(function(N){return e[N].length>0});return g.length>0?g:g.length===0&&i?[]:g.slice(0,m)},H=(e,i)=>{f(i),C(e.sortField),n(b(a,{sort:r,sortColumn:u,q:h,page:l,perPage:m,role:p.value,status:x.value,currentPlan:v.value}))},_={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},M=[{name:"Name",sortable:!0,minWidth:"300px",sortField:"name",selector:e=>e.name,cell:e=>t("span",{className:"text-capitalize",children:e.name})},{name:"Logo",sortable:!0,minWidth:"50px",selector:e=>e.logo,cell:e=>t("a",{href:`/technology/${e.logo}`,target:"_blank",children:t("img",{src:e.logo&&`/technology/${e.logo}`,height:"50px",width:"50px"})})},{name:"Remark",minWidth:"138px",sortable:!0,sortField:"remark",selector:e=>e.remark,cell:e=>t("span",{className:"text-capitalize",children:e.remark})},{name:"status",minWidth:"58px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>t(L,{className:"text-capitalize",color:_[e.status],pill:!0,children:e.status})},{name:"Sort Order",minWidth:"50px",sortable:!0,sortField:"sortOrder",selector:e=>e.sortOrder,cell:e=>t(L,{className:"text-capitalize",children:e.sortOrder})},{name:"Actions",minWidth:"100px",cell:e=>t("div",{className:"column-action",children:s(A,{children:[t(E,{tag:"div",className:"btn btn-sm",children:t(ae,{size:14,className:"cursor-pointer"})}),s(G,{children:[t(F,{className:"w-100",children:s(y,{to:"/tutorial/technology/show/"+e._id,children:[t(le,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"View"})]})}),s(y,{to:"/tutorial/technology/update/"+e._id,className:"p-1",children:["\xA0",t(re,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Edit"})]}),s(F,{className:"w-100",onClick:i=>{i.preventDefault(),o(ie({_id:e._id}))},children:[t(se,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return s(d.exports.Fragment,{children:[s(k,{children:[t(T,{tag:"h3",className:"text-center pt-2",children:"Technology"}),t(B,{children:t(T,{tag:"h4",children:"Filters"})}),t(U,{children:t(j,{children:s(P,{md:"4",children:[t(Q,{for:"status-select",children:"Status"}),t(J,{theme:Z,isClearable:!1,className:"react-select",classNamePrefix:"select",options:R,value:x,onChange:e=>{O(e),c(1),n(b(a,{sort:r,sortColumn:u,q:h,page:1,status:e.value,perPage:m,role:p.value,currentPlan:v.value}))}})]})})})]}),t(k,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(K,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:M,onSort:H,sortIcon:t(ee,{}),className:"react-dataTable",paginationComponent:q,data:W(),subHeaderComponent:t(oe,{mainData:g,searchTerm:h,rowsPerPage:m,handleFilter:$,handlePerPage:I})})})})]})},Ne=()=>t("div",{className:"app-user-list",children:t(ue,{})});export{Ne as default};
