import{G as N,r as w,o as l,an as S,j as e,ao as x,af as C,ap as y,ah as I,a8 as t,aa as o,a1 as n,al as g}from"./index.7ed68957.js";import{S as m}from"./react-select.esm.67b469f7.js";import"./page-form-validation.61faf01b.js";import{u as P,C as i}from"./index.esm.88676979.js";import{b as j,s as d}from"./App.13c64db0.js";import{a as k}from"./UserActionCreators.b67f2cf8.js";import"./toConsumableArray.917c2683.js";let A=[{value:"Select a Status",label:"Select a Status"},{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}],R=[{value:"Select a Status",label:"Select a Status"},{value:"Admin",label:"Admin"},{value:"Placement",label:"Placement"},{value:"Tutorial",label:"Tutorial"},{value:"Main",label:"Main"}],T={name:"",phone:"",email:"",password:"",role:"",status:""},G=()=>{let c=j(),u=N(),[U,p]=w.exports.useState(null),{reset:h,handleSubmit:v,control:s,formState:{errors:r}}=P({defaultValues:T}),b=a=>{p(a),c(k({name:a.name,email:a.email,phone:a.phone,password:a.password,ability:[{action:"manage",subject:"all"}],role:a.role.value,status:a.status.value})),g(e("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:e("div",{className:"d-flex flex-column",children:e("h6",{className:"text-success",children:"User Reocrd is Created!!!"})})})),u("/apps/user/list")},f=()=>{h({name:"",phone:"",email:"",password:"",role:"",status:""})};return l(S,{children:[e(x,{children:e(C,{tag:"h4",className:"text-center",children:"Create a New User"})}),e(y,{children:l(I,{onSubmit:v(b),children:[l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[e(t,{className:"form-label",for:"name",children:"Name"}),e(i,{control:s,id:"name",name:"name",render:({field:a})=>e(o,{...a,options:{allowInput:!0},invalid:r.name&&!0})})]}),l("div",{className:"col-md-6",children:[e(t,{className:"form-label",for:"phone",children:"Phone"}),e(i,{control:s,id:"phone",name:"phone",render:({field:a})=>e(o,{...a,options:{allowInput:!0},invalid:r.phone&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[e(t,{className:"form-label",for:"email",children:"Email"}),e(i,{control:s,id:"email",name:"email",render:({field:a})=>e(o,{...a,options:{allowInput:!0},invalid:r.email&&!0})})]}),l("div",{className:"col-md-6",children:[e(t,{className:"form-label",for:"password",children:"Password"}),e(i,{control:s,id:"password",name:"password",render:({field:a})=>e(o,{...a,type:"password",options:{allowInput:!0},invalid:r.password&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[e(t,{className:"form-label",for:"role",children:"Role"}),e(i,{id:"role",control:s,name:"role",render:({field:a})=>e(m,{...a,isClearable:!0,options:R,classNamePrefix:"select",theme:d,invalid:r.role&&!0})})]}),l("div",{className:"col-md-6",children:[e(t,{className:"form-label",for:"status",children:"Status"}),e(i,{id:"status",control:s,name:"status",render:({field:a})=>e(m,{...a,isClearable:!0,options:A,classNamePrefix:"select",theme:d,invalid:r.status&&!0})})]})]}),l("div",{className:"d-flex",children:[e(n,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(n,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:f,children:"Reset"}),e(n,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{G as default};
