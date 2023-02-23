import{h as V,r as u,o as s,an as D,j as a,af as y,ao as B,ap as U,ac as j,ad as P,a8 as Q,aa as F,U as A,D as E,L as k,B as L,C as G,E as T}from"./index.7ed68957.js";import{S as J}from"./react-select.esm.67b469f7.js";import{Q as K,R as X}from"./app-users.9834fa95.js";import{b as Y,s as Z,d as ee,S as ae,M as te,E as le,e as re,T as se}from"./App.13c64db0.js";import{g as ne,d as ie}from"./ServiceActionCreators.d4b27c88.js";import"./toConsumableArray.917c2683.js";let ce=({mainData:c,handlePerPage:t,rowsPerPage:r,handleFilter:f,searchTerm:p})=>{function w(n){let l,o=",",d=`
`,S=Object.keys(c[0]);return l="",l+=S.join(o),l+=d,n.forEach(m=>{let C=0;S.forEach(h=>{C>0&&(l+=o),l+=m[h],C++}),l+=d}),l}function g(n){let l=document.createElement("a"),o=w(n);if(o===null)return;let d="export.csv";o.match(/^data:text\/csv/i)||(o=`data:text/csv;charset=utf-8,${o}`),l.setAttribute("href",encodeURI(o)),l.setAttribute("download",d),l.click()}return a("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:s(j,{children:[a(P,{xl:"6",className:"d-flex align-items-center p-0",children:s("div",{className:"d-flex align-items-center w-100",children:[a("label",{htmlFor:"rows-per-page",children:"Show"}),s(F,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:t,style:{width:"5rem"},children:[a("option",{value:"10",children:"10"}),a("option",{value:"25",children:"25"}),a("option",{value:"50",children:"50"})]}),a("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),s(P,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[s("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[a("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),a(F,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:p,onChange:n=>f(n.target.value)})]}),s("div",{className:"d-flex align-items-center table-header-actions",children:[a(A,{className:"me-1",children:s(E,{color:"secondary",caret:!0,outline:!0,children:[a(ae,{className:"font-small-4 me-50"}),a("span",{className:"align-middle",onClick:()=>g(c),children:"Excel"})]})}),a(k,{className:"btn btn-primary add-new-user",to:"/apps/service/create",children:"Add New Service"})]})]})]})})},oe=(c,t,r)=>c.slice((r-1)*t,r*t);function b(c,t){var r=[];return t.status===""?r=c:r=c.filter(f=>f.status.toLowerCase()===t.status.toLowerCase()),oe(r,t.perPage,t.page)}let de=()=>{let c=Y(),t=V(e=>e.ServiceStateData),[r,f]=u.exports.useState("desc"),[p,w]=u.exports.useState(""),[g,n]=u.exports.useState([]),[l,o]=u.exports.useState(1),[d,S]=u.exports.useState("id"),[m,C]=u.exports.useState(10),[h,ue]=u.exports.useState({value:"",label:"Select Role"}),[v,me]=u.exports.useState({value:"",label:"Select Plan"}),[x,O]=u.exports.useState({value:"",label:"Select Status",number:0});u.exports.useEffect(()=>{c(ne()),n(b(t,{sort:r,sortColumn:d,q:p,page:l,perPage:m,role:h.value,status:x.value,currentPlan:v.value}))},[c,t.length,r,d,l]);let R=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],z=e=>{n(b(t,{sort:r,sortColumn:d,q:p,perPage:m,page:e.selected+1,role:h.value,status:x.value,currentPlan:v.value})),o(e.selected+1)},I=e=>{let i=parseInt(e.currentTarget.value);n(b(t,{sort:r,sortColumn:d,q:p,perPage:i,page:l,role:h.value,currentPlan:v.value,status:x.value})),C(i)},W=e=>{w(e);var i=t.filter(N=>{if(N.name.toLowerCase().includes(e.toLowerCase())||N.remark.toLowerCase().includes(e.toLowerCase()))return N});n(i)},$=()=>{let e=Number(Math.floor(t.length/m));return t.length%m!==0&&e++,a(X,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:l!==0?l-1:0,onPageChange:i=>z(i),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},q=()=>{let e={role:h.value,currentPlan:v.value,status:x.value,q:p},i=Object.keys(e).some(function(N){return e[N].length>0});return g.length>0?g:g.length===0&&i?[]:g.slice(0,m)},H=(e,i)=>{f(i),S(e.sortField),n(b(t,{sort:r,sortColumn:d,q:p,page:l,perPage:m,role:h.value,status:x.value,currentPlan:v.value}))},_={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},M=[{name:"Name",sortable:!0,minWidth:"300px",sortField:"name",selector:e=>e.name,cell:e=>a("span",{className:"text-capitalize",children:e.name})},{name:"Desription",sortable:!0,minWidth:"300px",sortField:"description",selector:e=>e.description,cell:e=>a("span",{className:"text-capitalize",children:e.description.slice(0,50)})},{name:"Image",sortable:!0,minWidth:"50px",selector:e=>e.image,cell:e=>a("a",{target:"_blank",href:`/service/${e.image}`,children:a("img",{src:`/service/${e.image}`,height:"50px",width:"50px"})})},{name:"Remark",minWidth:"138px",sortable:!0,sortField:"remark",selector:e=>e.remark,cell:e=>a("span",{className:"text-capitalize",children:e.remark})},{name:"status",minWidth:"58px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>a(L,{className:"text-capitalize",color:_[e.status],pill:!0,children:e.status})},{name:"Sort Order",minWidth:"50px",sortable:!0,sortField:"sortOrder",selector:e=>e.sortOrder,cell:e=>a(L,{className:"text-capitalize",children:e.sortOrder})},{name:"Actions",minWidth:"100px",cell:e=>a("div",{className:"column-action",children:s(A,{children:[a(E,{tag:"div",className:"btn btn-sm",children:a(te,{size:14,className:"cursor-pointer"})}),s(G,{children:[a(T,{className:"w-100",children:s(k,{to:"/apps/service/show/"+e._id,children:[a(le,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"View"})]})}),s(k,{to:"/apps/service/update/"+e._id,className:"p-1",children:["\xA0",a(re,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"Edit"})]}),s(T,{className:"w-100",onClick:i=>{i.preventDefault(),c(ie({_id:e._id}))},children:[a(se,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return s(u.exports.Fragment,{children:[s(D,{children:[a(y,{tag:"h3",className:"text-center pt-2",children:"Services"}),a(B,{children:a(y,{tag:"h4",children:"Filters"})}),a(U,{children:a(j,{children:s(P,{md:"4",children:[a(Q,{for:"status-select",children:"Status"}),a(J,{theme:Z,isClearable:!1,className:"react-select",classNamePrefix:"select",options:R,value:x,onChange:e=>{O(e),o(1),n(b(t,{sort:r,sortColumn:d,q:p,page:1,status:e.value,perPage:m,role:h.value,currentPlan:v.value}))}})]})})})]}),a(D,{className:"overflow-hidden",children:a("div",{className:"react-dataTable",children:a(K,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:M,onSort:H,sortIcon:a(ee,{}),className:"react-dataTable",paginationComponent:$,data:q(),subHeaderComponent:a(ce,{mainData:g,searchTerm:p,rowsPerPage:m,handleFilter:W,handlePerPage:I})})})})]})},Ne=()=>a("div",{className:"app-user-list",children:a(de,{})});export{Ne as default};