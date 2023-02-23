import{h as M,r as d,o as s,an as k,j as a,af as D,ao as V,ap as B,ac as j,ad as P,a8 as U,aa as L,U as A,D as E,L as y,B as F,C as Q,E as T}from"./index.7ed68957.js";import{S as J}from"./react-select.esm.67b469f7.js";import{Q as K,R as X}from"./app-users.9834fa95.js";import{b as Y,s as Z,d as ee,S as ae,M as te,E as le,e as re,T as se}from"./App.13c64db0.js";import{g as ne}from"./GalleryActionCreators.f1d4cec1.js";import"./toConsumableArray.917c2683.js";let ie=({mainData:c,handlePerPage:t,rowsPerPage:r,handleFilter:f,searchTerm:p})=>{function w(n){let l,o=",",u=`
`,C=Object.keys(c[0]);return l="",l+=C.join(o),l+=u,n.forEach(m=>{let S=0;C.forEach(h=>{S>0&&(l+=o),l+=m[h],S++}),l+=u}),l}function g(n){let l=document.createElement("a"),o=w(n);if(o===null)return;let u="export.csv";o.match(/^data:text\/csv/i)||(o=`data:text/csv;charset=utf-8,${o}`),l.setAttribute("href",encodeURI(o)),l.setAttribute("download",u),l.click()}return a("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:s(j,{children:[a(P,{xl:"6",className:"d-flex align-items-center p-0",children:s("div",{className:"d-flex align-items-center w-100",children:[a("label",{htmlFor:"rows-per-page",children:"Show"}),s(L,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:t,style:{width:"5rem"},children:[a("option",{value:"10",children:"10"}),a("option",{value:"25",children:"25"}),a("option",{value:"50",children:"50"})]}),a("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),s(P,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[s("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[a("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),a(L,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:p,onChange:n=>f(n.target.value)})]}),s("div",{className:"d-flex align-items-center table-header-actions",children:[a(A,{className:"me-1",children:s(E,{color:"secondary",caret:!0,outline:!0,children:[a(ae,{className:"font-small-4 me-50"}),a("span",{className:"align-middle",onClick:()=>g(c),children:"Excel"})]})}),a(y,{className:"btn btn-primary add-new-user",to:"/apps/gallery/create",children:"Add New Image"})]})]})]})})},ce=(c,t,r)=>c.slice((r-1)*t,r*t);function b(c,t){var r=[];return t.status===""?r=c:r=c.filter(f=>f.status.toLowerCase()===t.status.toLowerCase()),ce(r,t.perPage,t.page)}let oe=()=>{let c=Y(),t=M(e=>e.GalleryStateData),[r,f]=d.exports.useState("desc"),[p,w]=d.exports.useState(""),[g,n]=d.exports.useState([]),[l,o]=d.exports.useState(1),[u,C]=d.exports.useState("id"),[m,S]=d.exports.useState(10),[h,ue]=d.exports.useState({value:"",label:"Select Role"}),[v,de]=d.exports.useState({value:"",label:"Select Plan"}),[x,O]=d.exports.useState({value:"",label:"Select Status",number:0});d.exports.useEffect(()=>{c(ne()),n(b(t,{sort:r,sortColumn:u,q:p,page:l,perPage:m,role:h.value,status:x.value,currentPlan:v.value}))},[c,t.length,r,u,l]);let R=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],I=e=>{n(b(t,{sort:r,sortColumn:u,q:p,perPage:m,page:e.selected+1,role:h.value,status:x.value,currentPlan:v.value})),o(e.selected+1)},z=e=>{let i=parseInt(e.currentTarget.value);n(b(t,{sort:r,sortColumn:u,q:p,perPage:i,page:l,role:h.value,currentPlan:v.value,status:x.value})),S(i)},$=e=>{w(e);var i=t.filter(N=>{if(N.alt.toLowerCase().includes(e.toLowerCase())||N.remark.toLowerCase().includes(e.toLowerCase()))return N});n(i)},q=()=>{let e=Number(Math.floor(t.length/m));return t.length%m!==0&&e++,a(X,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:l!==0?l-1:0,onPageChange:i=>I(i),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},W=()=>{let e={role:h.value,currentPlan:v.value,status:x.value,q:p},i=Object.keys(e).some(function(N){return e[N].length>0});return g.length>0?g:g.length===0&&i?[]:g.slice(0,m)},H=(e,i)=>{f(i),C(e.sortField),n(b(t,{sort:r,sortColumn:u,q:p,page:l,perPage:m,role:h.value,status:x.value,currentPlan:v.value}))},_={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},G=[{name:"Alt Name",sortable:!0,minWidth:"300px",sortField:"alt",selector:e=>e.alt,cell:e=>a("span",{className:"text-capitalize",children:e.alt})},{name:"Image",sortable:!0,minWidth:"50px",selector:e=>e.image,cell:e=>a("a",{href:`/gallery/${e.image}`,target:"_blank",children:a("img",{src:`/gallery/${e.image}`,height:"50px",width:"50px"})})},{name:"Remark",minWidth:"138px",sortable:!0,sortField:"remark",selector:e=>e.remark,cell:e=>a("span",{className:"text-capitalize",children:e.remark})},{name:"status",minWidth:"58px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>a(F,{className:"text-capitalize",color:_[e.status],pill:!0,children:e.status})},{name:"Sort Order",minWidth:"50px",sortable:!0,sortField:"sortOrder",selector:e=>e.sortOrder,cell:e=>a(F,{className:"text-capitalize",children:e.sortOrder})},{name:"Actions",minWidth:"100px",cell:e=>a("div",{className:"column-action",children:s(A,{children:[a(E,{tag:"div",className:"btn btn-sm",children:a(te,{size:14,className:"cursor-pointer"})}),s(Q,{children:[a(T,{className:"w-100",children:s(y,{to:"/apps/gallery/show/"+e._id,children:[a(le,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"View"})]})}),s(y,{to:"/apps/gallery/update/"+e._id,className:"p-1",children:["\xA0",a(re,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"Edit"})]}),s(T,{className:"w-100",onClick:i=>{i.preventDefault(),c(deleteClients({_id:e._id}))},children:[a(se,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return s(d.exports.Fragment,{children:[s(k,{children:[a(D,{tag:"h3",className:"text-center pt-2",children:"Services"}),a(V,{children:a(D,{tag:"h4",children:"Filters"})}),a(B,{children:a(j,{children:s(P,{md:"4",children:[a(U,{for:"status-select",children:"Status"}),a(J,{theme:Z,isClearable:!1,className:"react-select",classNamePrefix:"select",options:R,value:x,onChange:e=>{O(e),o(1),n(b(t,{sort:r,sortColumn:u,q:p,page:1,status:e.value,perPage:m,role:h.value,currentPlan:v.value}))}})]})})})]}),a(k,{className:"overflow-hidden",children:a("div",{className:"react-dataTable",children:a(K,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:G,onSort:H,sortIcon:a(ee,{}),className:"react-dataTable",paginationComponent:q,data:W(),subHeaderComponent:a(ie,{mainData:g,searchTerm:p,rowsPerPage:m,handleFilter:$,handlePerPage:z})})})})]})},fe=()=>a("div",{className:"app-user-list",children:a(oe,{})});export{fe as default};
