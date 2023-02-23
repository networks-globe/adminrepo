import{h as V,r as m,o as r,an as y,j as t,af as F,ao as _,ap as B,ac as R,ad as L,a8 as U,aa as z,U as D,D as T,L as P,B as Q,C as Z,E as k}from"./index.7ed68957.js";import{S as G}from"./react-select.esm.67b469f7.js";import{Q as J,R as K}from"./app-users.9834fa95.js";import{b as X,s as Y,d as ee,S as te,M as ae,E as se,e as le,T as re}from"./App.13c64db0.js";import{g as ne,d as ie}from"./OnlineRegistrationActionCreators.d46eedb2.js";import"./toConsumableArray.917c2683.js";let ce=({mainData:o,handlePerPage:a,rowsPerPage:l,handleFilter:N,searchTerm:h})=>{function S(i){let s,d=",",u=`
`,f=Object.keys(o[0]);return s="",s+=f.join(d),s+=u,i.forEach(p=>{let w=0;f.forEach(g=>{w>0&&(s+=d),s+=p[g],w++}),s+=u}),s}function x(i){let s=document.createElement("a"),d=S(i);if(d===null)return;let u="export.csv";d.match(/^data:text\/csv/i)||(d=`data:text/csv;charset=utf-8,${d}`),s.setAttribute("href",encodeURI(d)),s.setAttribute("download",u),s.click()}return t("div",{className:"invoice-list-table-header w-100 me-1 ms-50 mt-2 mb-75",children:r(R,{children:[t(L,{xl:"6",className:"d-flex align-items-center p-0",children:r("div",{className:"d-flex align-items-center w-100",children:[t("label",{htmlFor:"rows-per-page",children:"Show"}),r(z,{className:"mx-50",type:"select",id:"rows-per-page",value:l,onChange:a,style:{width:"5rem"},children:[t("option",{value:"10",children:"10"}),t("option",{value:"25",children:"25"}),t("option",{value:"50",children:"50"})]}),t("label",{htmlFor:"rows-per-page",children:"Entries"})]})}),r(L,{xl:"6",className:"d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1",children:[r("div",{className:"d-flex align-items-center mb-sm-0 mb-1 me-1",children:[t("label",{className:"mb-0",htmlFor:"search-invoice",children:"Search:"}),t(z,{id:"search-invoice",className:"ms-50 w-100",type:"text",value:h,onChange:i=>N(i.target.value)})]}),r("div",{className:"d-flex align-items-center table-header-actions",children:[t(D,{className:"me-1",children:r(T,{color:"secondary",caret:!0,outline:!0,children:[t(te,{className:"font-small-4 me-50"}),t("span",{className:"align-middle",onClick:()=>x(o),children:"Excel"})]})}),t(P,{className:"btn btn-primary add-new-user",to:"/apps/online-registration/create",children:"Add New Registration"})]})]})]})})},oe=(o,a,l)=>o.slice((l-1)*a,l*a);function b(o,a){var l=[];return a.status===""?l=o:l=o.filter(N=>N.status.toLowerCase()===a.status.toLowerCase()),oe(l,a.perPage,a.page)}let de=()=>{let o=X(),a=V(e=>e.OnlineRegistrationStateData),[l,N]=m.exports.useState("desc"),[h,S]=m.exports.useState(""),[x,i]=m.exports.useState([]),[s,d]=m.exports.useState(1),[u,f]=m.exports.useState("id"),[p,w]=m.exports.useState(10),[g,ue]=m.exports.useState({value:"",label:"Select Role"}),[C,me]=m.exports.useState({value:"",label:"Select Plan"}),[v,W]=m.exports.useState({value:"",label:"Select Status",number:0});m.exports.useEffect(()=>{o(ne()),i(b(a,{sort:l,sortColumn:u,q:h,page:s,perPage:p,role:g.value,status:v.value,currentPlan:C.value}))},[o,a.length,l,u,s]);let A=[{value:"",label:"Select Status",number:0},{value:"active",label:"Active",number:2},{value:"inactive",label:"Inactive",number:3}],O=e=>{i(b(a,{sort:l,sortColumn:u,q:h,perPage:p,page:e.selected+1,role:g.value,status:v.value,currentPlan:C.value})),d(e.selected+1)},j=e=>{let c=parseInt(e.currentTarget.value);i(b(a,{sort:l,sortColumn:u,q:h,perPage:c,page:s,role:g.value,currentPlan:C.value,status:v.value})),w(c)},E=e=>{S(e);var c=a.filter(n=>{if(n.name.toLowerCase().includes(e.toLowerCase())||n.phone.toLowerCase().includes(e.toLowerCase())||n.email.toLowerCase().includes(e.toLowerCase())||n.address.toLowerCase().includes(e.toLowerCase())||n.zipcode.toLowerCase().includes(e.toLowerCase())||n.course.toLowerCase().includes(e.toLowerCase())||n.center.toLowerCase().includes(e.toLowerCase())||n.city.toLowerCase().includes(e.toLowerCase())||n.country.toLowerCase().includes(e.toLowerCase())||n.transactionstatus.toLowerCase().includes(e.toLowerCase())||n.transactionid.toLowerCase().includes(e.toLowerCase()))return n});i(c)},I=()=>{let e=Number(Math.floor(a.length/p));return a.length%p!==0&&e++,t(K,{previousLabel:"",nextLabel:"",pageCount:e||1,activeClassName:"active",forcePage:s!==0?s-1:0,onPageChange:c=>O(c),pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pe-1"})},q=()=>{let e={role:g.value,currentPlan:C.value,status:v.value,q:h},c=Object.keys(e).some(function(n){return e[n].length>0});return x.length>0?x:x.length===0&&c?[]:x.slice(0,p)},H=(e,c)=>{N(c),f(e.sortField),i(b(a,{sort:l,sortColumn:u,q:h,page:s,perPage:p,role:g.value,status:v.value,currentPlan:C.value}))},$={Pending:"light-warning",Active:"light-success",Inactive:"light-danger"},M=[{name:"Name",sortable:!0,minWidth:"140px",sortField:"name",selector:e=>e.name,cell:e=>t("span",{className:"text-capitalize",children:e.name})},{name:"Phone",sortable:!0,minWidth:"130px",sortField:"phone",selector:e=>e.phone,cell:e=>t("span",{className:"text-capitalize",children:e.phone})},{name:"Email",sortable:!0,minWidth:"250px",sortField:"email",selector:e=>e.email,cell:e=>t("span",{className:"text-capitalize",children:e.email})},{name:"Course",sortable:!0,minWidth:"300px",sortField:"course",selector:e=>e.course,cell:e=>t("span",{className:"text-capitalize",children:e.course})},{name:"Center",sortable:!0,minWidth:"130px",sortField:"center",selector:e=>e.center,cell:e=>t("span",{className:"text-capitalize",children:e.center})},{name:"Address",sortable:!0,minWidth:"200px",sortField:"address",selector:e=>e.address,cell:e=>t("span",{className:"text-capitalize",children:e.address&&e.address.slice(0,50)+"..."})},{name:"Zipcode",sortable:!0,minWidth:"200px",sortField:"zipcode",selector:e=>e.zipcode,cell:e=>t("span",{className:"text-capitalize",children:e.zipcode})},{name:"City",sortable:!0,minWidth:"200px",sortField:"city",selector:e=>e.city,cell:e=>t("span",{className:"text-capitalize",children:e.city})},{name:"Country",sortable:!0,minWidth:"200px",sortField:"country",selector:e=>e.country,cell:e=>t("span",{className:"text-capitalize",children:e.country})},{name:"Amount",sortable:!0,minWidth:"200px",sortField:"amount",selector:e=>e.amount,cell:e=>t("span",{className:"text-capitalize",children:e.amount})},{name:"Transaction Id",sortable:!0,minWidth:"200px",sortField:"transactionid",selector:e=>e.transactionid,cell:e=>t("span",{className:"text-capitalize",children:e.transactionid})},{name:"Transaction Status",sortable:!0,minWidth:"200px",sortField:"transactionstatus",selector:e=>e.transactionstatus,cell:e=>t("span",{className:"text-capitalize",children:e.transactionstatus})},{name:"Remark",minWidth:"300px",sortable:!0,sortField:"remark",selector:e=>e.remark,cell:e=>t("span",{className:"text-capitalize",children:e.remark})},{name:"status",minWidth:"138px",sortable:!0,sortField:"status",selector:e=>e.status,cell:e=>t(Q,{className:"text-capitalize",color:$[e.status],pill:!0,children:e.status})},{name:"Actions",minWidth:"100px",cell:e=>t("div",{className:"column-action",children:r(D,{children:[t(T,{tag:"div",className:"btn btn-sm",children:t(ae,{size:14,className:"cursor-pointer"})}),r(Z,{children:[t(k,{className:"w-100",children:r(P,{to:"/apps/online-registration/show/"+e._id,children:[t(se,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"View"})]})}),r(P,{to:"/apps/online-registration/update/"+e._id,className:"p-1",children:["\xA0",t(le,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Edit"})]}),r(k,{className:"w-100",onClick:c=>{c.preventDefault(),o(ie({_id:e._id}))},children:[t(re,{size:14,className:"me-50"}),t("span",{className:"align-middle",children:"Delete"})]})]})]})})}];return r(m.exports.Fragment,{children:[r(y,{children:[t(F,{tag:"h3",className:"text-center pt-2",children:"Online Registration"}),t(_,{children:t(F,{tag:"h4",children:"Filters"})}),t(B,{children:t(R,{children:r(L,{md:"4",children:[t(U,{for:"status-select",children:"Status"}),t(G,{theme:Y,isClearable:!1,className:"react-select",classNamePrefix:"select",options:A,value:v,onChange:e=>{W(e),d(1),i(b(a,{sort:l,sortColumn:u,q:h,page:1,status:e.value,perPage:p,role:g.value,currentPlan:C.value}))}})]})})})]}),t(y,{className:"overflow-hidden",children:t("div",{className:"react-dataTable",children:t(J,{noHeader:!0,subHeader:!0,sortServer:!0,pagination:!0,responsive:!0,paginationServer:!0,columns:M,onSort:H,sortIcon:t(ee,{}),className:"react-dataTable",paginationComponent:I,data:q(),subHeaderComponent:t(ce,{mainData:x,searchTerm:h,rowsPerPage:p,handleFilter:E,handlePerPage:j})})})})]})},Ne=()=>t("div",{className:"app-user-list",children:t(de,{})});export{Ne as default};