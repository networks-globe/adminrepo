import{h as V,r as d,o as r,an as y,j as t,af as D,ao as B,ap as U,ac as j,ad as P,a8 as Q,aa as L,U as A,D as E,L as k,B as F,C as G,E as T}from"./index.7ed68957.js";import{S as J}from"./react-select.esm.67b469f7.js";import{Q as K,R as X}from"./app-users.9834fa95.js";import{b as Y,s as Z,d as ee,S as te,M as ae,E as le,e as se,T as re}from"./App.13c64db0.js";import{g as ne,d as ie}from"./ClientsActionCreators.7f9bad31.js";import"./toConsumableArray.917c2683.js";let ce=({mainData:c,handlePerPage:a,rowsPerPage:s,handleFilter:f,searchTerm:p})=>{function w(n){let l,o=",",u=`
`,b=Object.keys(c[0]);return l="",l+=b.join(o),l+=u,n.forEach(m=>{let S=0;b.forEach(h=>{S>0&&(l+=o),l+=m[h],S++}),l+=u}),l}function g(n){let l=document.createElement("a"),o=w(n);if(o===null)return;let u="export.csv";o.match(/^data:text\/csv/i)||(o=`data:text/csv;charset=utf-8,${o}`),l.setAttribute("href",encodeURI(o)),l.setAttribute("download",u),l.click()}return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:r(j,{children:[t(P,{xl:"6",className:"d-flex align-items-center p-0",children:r("div",{className:"d-flex align-items-center w-100",children:[t("label",{htmlFor:"rows-per-page",children:"Show"}),r(L,{className:"mx-50",type:"select",id:"rows-per-page",value:s,onChange:a,style:{width:"5rem"},children:[t("option",{value:"10",children:"10"}),t("option",{value:"25",children:"25"}),t("option",{value:"50",children:"50"})]}),t("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),r(P,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[r("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[t("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),t(L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:p,onChange:n=>f(n.target.value)})]}),r("div",{className:"d-flex align-items-center table-header-actions",children:[t(A,{className:"me-1",children:r(E,{color:"secondary",caret:!0,outline:!0,children:[t(te,{className:"font-small-4 me-50"}),t("span",{className:"align-middle",onClick:()=>g(c),children:"Excel"})]})}),t(k,{className:"btn btn-primary add-new-user",to:"/apps/clients/create",children:"Add New Client"})]})]})]})})},oe=(c,a,s)=>c.slice((s-1)*a,s*a);function N(c,a){var s=[];return a.status===""?s=c:s=c.filter(f=>f.status.toLowerCase()===a.status.toLowerCase()),oe(s,a.perPage,a.page)}let ue=()=>{let c=Y(),a=V(e=>e.ClientsStateData),[s,f]=d.exports.useState("desc"),[p,w]=d.exports.useState(""),[g,n]=d.exports.useState([]),[l,o]=d.exports.useState(1),[u,b]=d.exports.useState("id"),[m,S]=d.exports.useState(10),[h,de]=d.exports.useState({value:"",label:"Select Role"}),[v,me]=d.exports.useState({value:"",label:"Select Plan"}),[x,O]=d.exports.useState({value:"",label:"Select Status",number:0});d.exports.useEffect(()=>{c(ne()),n(N(a,{sort:s,sortColumn:u,q:p,page:l,perPage:m,role:h.value,status:x.value,currentPlan:v.value}))},[c,a.length,s,u,l]);let R=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],z=e=>{n(N(a,{sort:s,sortColumn:u,q:p,perPage:m,page:e.selected+1,role:h.value,status:x.value,currentPlan:v.value})),o(e.selected+1)},I=e=>{let i=parseInt(e.currentTarget.value);n(N(a,{sort:s,sortColumn:u,q:p,perPage:i,page:l,role:h.value,currentPlan:v.value,status:x.value})),S(i)},$=e=>{w(e);var i=a.filter(C=>{if(C.name.toLowerCase().includes(e.toLowerCase())||C.remark.toLowerCase().includes(e.toLowerCase()))return C});n(i)},q=()=>{let e=Number(Math.floor(a.length/m));return a.length%m!==0&&e++,t(X,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:l!==0?l-1:0,onPageChange:i=>z(i),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},W=()=>{let e={role:h.value,currentPlan:v.value,status:x.value,q:p},i=Object.keys(e).some(function(C){return e[C].length>0});return g.length>0?g:g.length===0&&i?[]:g.slice(0,m)},H=(e,i)=>{f(i),b(e.sortField),n(N(a,{sort:s,sortColumn:u,q:p,page:l,perPage:m,role:h.value,status:x.value,currentPlan:v.value}))},_={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},M=[{name:"Name",sortable:!0,minWidth:"300px",sortField:"name",selector:e=>e.name,cell:e=>t("span",{className:"text-capitalize",children:e.name})},{name:"Image",sortable:!0,minWidth:"50px",selector:e=>e.image,cell:e=>t("a",{href:`/clients/${e.image}`,target:"_blank",children:t("img",{src:e.image&&`/clients/${e.image}`,height:"50px",width:"50px"})})},{name:"Remark",minWidth:"138px",sortable:!0,sortField:"remark",selector:e=>e.remark,cell:e=>t("span",{className:"text-capitalize",children:e.remark})},{name:"status",minWidth:"58px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>t(F,{className:"text-capitalize",color:_[e.status],pill:!0,children:e.status})},{name:"Sort Order",minWidth:"50px",sortable:!0,sortField:"sortOrder",selector:e=>e.sortOrder,cell:e=>t(F,{className:"text-capitalize",children:e.sortOrder})},{name:"Actions",minWidth:"100px",cell:e=>t("div",{className:"column-action",children:r(A,{children:[t(E,{tag:"div",className:"btn btn-sm",children:t(ae,{size:14,className:"cursor-pointer"})}),r(G,{children:[t(T,{className:"w-100",children:r(k,{to:"/apps/clients/show/"+e._id,children:[t(le,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"View"})]})}),r(k,{to:"/apps/clients/update/"+e._id,className:"p-1",children:["\xA0",t(se,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Edit"})]}),r(T,{className:"w-100",onClick:i=>{i.preventDefault(),c(ie({_id:e._id}))},children:[t(re,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return r(d.exports.Fragment,{children:[r(y,{children:[t(D,{tag:"h3",className:"text-center pt-2",children:"Services"}),t(B,{children:t(D,{tag:"h4",children:"Filters"})}),t(U,{children:t(j,{children:r(P,{md:"4",children:[t(Q,{for:"status-select",children:"Status"}),t(J,{theme:Z,isClearable:!1,className:"react-select",classNamePrefix:"select",options:R,value:x,onChange:e=>{O(e),o(1),n(N(a,{sort:s,sortColumn:u,q:p,page:1,status:e.value,perPage:m,role:h.value,currentPlan:v.value}))}})]})})})]}),t(y,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(K,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:M,onSort:H,sortIcon:t(ee,{}),className:"react-dataTable",paginationComponent:q,data:W(),subHeaderComponent:t(ce,{mainData:g,searchTerm:p,rowsPerPage:m,handleFilter:$,handlePerPage:I})})})})]})},Ce=()=>t("div",{className:"app-user-list",children:t(ue,{})});export{Ce as default};
