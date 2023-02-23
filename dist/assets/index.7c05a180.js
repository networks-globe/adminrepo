import{h as _,r as d,o as s,an as F,j as a,af as k,ao as B,ap as U,ac as T,ad as P,a8 as Q,aa as q,U as j,D as E,L as y,B as D,C as G,E as L}from"./index.7ed68957.js";import{S as J}from"./react-select.esm.67b469f7.js";import{Q as K,R as X}from"./app-users.9834fa95.js";import{b as Y,s as Z,d as ee,S as ae,M as te,E as le,e as re,T as se}from"./App.13c64db0.js";import{g as ne,d as ie}from"./FaqCategoryActionCreators.25da5af5.js";import"./toConsumableArray.917c2683.js";let ce=({mainData:c,handlePerPage:t,rowsPerPage:r,handleFilter:x,searchTerm:p})=>{function w(n){let l,o=",",u=`
`,b=Object.keys(c[0]);return l="",l+=b.join(o),l+=u,n.forEach(m=>{let S=0;b.forEach(h=>{S>0&&(l+=o),l+=m[h],S++}),l+=u}),l}function g(n){let l=document.createElement("a"),o=w(n);if(o===null)return;let u="export.csv";o.match(/^data:text\/csv/i)||(o=`data:text/csv;charset=utf-8,${o}`),l.setAttribute("href",encodeURI(o)),l.setAttribute("download",u),l.click()}return a("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:s(T,{children:[a(P,{xl:"6",className:"d-flex align-items-center p-0",children:s("div",{className:"d-flex align-items-center w-100",children:[a("label",{htmlFor:"rows-per-page",children:"Show"}),s(q,{className:"mx-50",type:"select",id:"rows-per-page",value:r,onChange:t,style:{width:"5rem"},children:[a("option",{value:"10",children:"10"}),a("option",{value:"25",children:"25"}),a("option",{value:"50",children:"50"})]}),a("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),s(P,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[s("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[a("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),a(q,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:p,onChange:n=>x(n.target.value)})]}),s("div",{className:"d-flex align-items-center table-header-actions",children:[a(j,{className:"me-1",children:s(E,{color:"secondary",caret:!0,outline:!0,children:[a(ae,{className:"font-small-4 me-50"}),a("span",{className:"align-middle",onClick:()=>g(c),children:"Excel"})]})}),a(y,{className:"btn btn-primary add-new-user",to:"/apps/faq/faq-category/create",children:"New Faq Category"})]})]})]})})},oe=(c,t,r)=>c.slice((r-1)*t,r*t);function N(c,t){var r=[];return t.status===""?r=c:r=c.filter(x=>x.status.toLowerCase()===t.status.toLowerCase()),oe(r,t.perPage,t.page)}let ue=()=>{let c=Y(),t=_(e=>e.FaqCategoryStateData),[r,x]=d.exports.useState("desc"),[p,w]=d.exports.useState(""),[g,n]=d.exports.useState([]),[l,o]=d.exports.useState(1),[u,b]=d.exports.useState("id"),[m,S]=d.exports.useState(10),[h,de]=d.exports.useState({value:"",label:"Select Role"}),[v,me]=d.exports.useState({value:"",label:"Select Plan"}),[f,O]=d.exports.useState({value:"",label:"Select Status",number:0});d.exports.useEffect(()=>{c(ne()),n(N(t,{sort:r,sortColumn:u,q:p,page:l,perPage:m,role:h.value,status:f.value,currentPlan:v.value}))},[c,t.length,r,u,l]);let R=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],A=e=>{n(N(t,{sort:r,sortColumn:u,q:p,perPage:m,page:e.selected+1,role:h.value,status:f.value,currentPlan:v.value})),o(e.selected+1)},z=e=>{let i=parseInt(e.currentTarget.value);n(N(t,{sort:r,sortColumn:u,q:p,perPage:i,page:l,role:h.value,currentPlan:v.value,status:f.value})),S(i)},I=e=>{w(e);var i=t.filter(C=>{if(C.name.toLowerCase().includes(e.toLowerCase())||C.remark.toLowerCase().includes(e.toLowerCase()))return C});n(i)},H=()=>{let e=Number(Math.floor(t.length/m));return t.length%m!==0&&e++,a(X,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:l!==0?l-1:0,onPageChange:i=>A(i),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},W=()=>{let e={role:h.value,currentPlan:v.value,status:f.value,q:p},i=Object.keys(e).some(function(C){return e[C].length>0});return g.length>0?g:g.length===0&&i?[]:g.slice(0,m)},$=(e,i)=>{x(i),b(e.sortField),n(N(t,{sort:r,sortColumn:u,q:p,page:l,perPage:m,role:h.value,status:f.value,currentPlan:v.value}))},M={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},V=[{name:"Name",sortable:!0,minWidth:"300px",sortField:"name",selector:e=>e.name,cell:e=>a("span",{className:"text-capitalize",children:e.name})},{name:"Remark",minWidth:"138px",sortable:!0,sortField:"remark",selector:e=>e.remark,cell:e=>a("span",{className:"text-capitalize",children:e.remark})},{name:"status",minWidth:"138px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>a(D,{className:"text-capitalize",color:M[e.status],pill:!0,children:e.status})},{name:"Sort Order",minWidth:"138px",sortable:!0,sortField:"sortOrder",selector:e=>e.sortOrder,cell:e=>a(D,{className:"text-capitalize",children:e.sortOrder})},{name:"Actions",minWidth:"100px",cell:e=>a("div",{className:"column-action",children:s(j,{children:[a(E,{tag:"div",className:"btn btn-sm",children:a(te,{size:14,className:"cursor-pointer"})}),s(G,{children:[a(L,{className:"w-100",children:s(y,{to:"/apps/faq/faq-category/show/"+e._id,children:[a(le,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"View"})]})}),s(y,{to:"/apps/faq/faq-category/update/"+e._id,className:"p-1",children:["\xA0",a(re,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"Edit"})]}),s(L,{className:"w-100",onClick:i=>{i.preventDefault(),c(ie({_id:e._id}))},children:[a(se,{size:14,className:"me-50"}),a("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return s(d.exports.Fragment,{children:[s(F,{children:[a(k,{tag:"h3",className:"text-center pt-2",children:"Faq Category"}),a(B,{children:a(k,{tag:"h4",children:"Filters"})}),a(U,{children:a(T,{children:s(P,{md:"4",children:[a(Q,{for:"status-select",children:"Status"}),a(J,{theme:Z,isClearable:!1,className:"react-select",classNamePrefix:"select",options:R,value:f,onChange:e=>{O(e),o(1),n(N(t,{sort:r,sortColumn:u,q:p,page:1,status:e.value,perPage:m,role:h.value,currentPlan:v.value}))}})]})})})]}),a(F,{className:"overflow-hidden",children:a("div",{className:"react-dataTable",children:a(K,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:V,onSort:$,sortIcon:a(ee,{}),className:"react-dataTable",paginationComponent:H,data:W(),subHeaderComponent:a(ce,{mainData:g,searchTerm:p,rowsPerPage:m,handleFilter:I,handlePerPage:z})})})})]})},Ce=()=>a("div",{className:"app-user-list",children:a(ue,{})});export{Ce as default};