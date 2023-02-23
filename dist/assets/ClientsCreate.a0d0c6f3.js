import{G as x,r as c,o as t,an as k,j as e,ao as I,af as w,ap as B,ah as O,a8 as i,aa as m,a1 as o,al as F}from"./index.7ed68957.js";import{S as R}from"./react-select.esm.67b469f7.js";import"./page-form-validation.61faf01b.js";import{u as j,C as n}from"./index.esm.88676979.js";import{b as J,s as A}from"./App.13c64db0.js";import{a as T}from"./ClientsActionCreators.7f9bad31.js";import"./toConsumableArray.917c2683.js";let _=[{value:"Select a Status",label:"Select a Status"},{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}],$={remark:"",status:"",name:"",sort:0,image:""},K=()=>{var u=J(),p=x(),[h,v]=c.exports.useState("");let[E,g]=c.exports.useState(null),{reset:N,setError:b,handleSubmit:f,control:l,formState:{errors:s}}=j({defaultValues:$}),S=a=>{if(g(a),a.name){var r=new FormData;r.append("name",a.name),r.append("sortOrder",a.sort),r.append("image",h),r.append("remark",a.remark),r.append("status",a.status.value),r.append("addByName",JSON.parse(localStorage.getItem("userData")).name),r.append("addById",JSON.parse(localStorage.getItem("userData"))._id),r.append("addByRole",JSON.parse(localStorage.getItem("userData")).role),u(T(r)),F(e("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:e("div",{className:"d-flex flex-column",children:e("h6",{className:"text-success",children:"Client is Created!!!"})})})),p("/apps/clients")}else for(let d in a)a[d]===""&&b(d,{type:"manual"})};function C(a){v(a.target.files[0])}let y=()=>{N({remark:null,status:null,name:null,sort:0,image:"",description:""})};return t(k,{children:[e(I,{children:e(w,{tag:"h4",className:"text-center",children:"Create a New Client"})}),e(B,{children:t(O,{onSubmit:f(S),children:[t("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"name",children:"name"}),e(n,{control:l,id:"name",name:"name",render:({field:a})=>e(m,{...a,options:{allowInput:!0},invalid:s.name&&!0})})]}),t("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"name",children:"Image"}),e(n,{control:l,id:"image",name:"image",render:({field:a})=>e(m,{...a,onChange:C,type:"file",options:{allowInput:!0},invalid:s.image&&!0})})]}),t("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"remark",children:"remark"}),e(n,{control:l,id:"remark",name:"remark",render:({field:a})=>e(m,{...a,type:"textarea",options:{allowInput:!0},invalid:s.remark&&!0})})]}),t("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"sort",children:"Sort Order"}),e(n,{control:l,id:"sort",name:"sort",render:({field:a})=>e(m,{...a,options:{allowInput:!0},invalid:s.sort&&!0})})]}),t("div",{className:"mb-1",children:[e(i,{className:"form-label",for:"status",children:"React Select"}),e(n,{id:"status",control:l,name:"status",render:({field:a})=>e(R,{...a,isClearable:!0,options:_,classNamePrefix:"select",theme:A,invalid:s.status&&!0})})]}),t("div",{className:"d-flex",children:[e(o,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(o,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:y,children:"Reset"}),e(o,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{K as default};