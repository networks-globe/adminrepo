import{G as k,r as i,h as f,o as l,an as A,j as a,ao as M,af as O,ap as q,ah as D,a8 as o,aa as n,a1 as u,al as R}from"./index.7ed68957.js";import{S as c}from"./react-select.esm.67b469f7.js";import"./page-form-validation.61faf01b.js";import{u as B,C as s}from"./index.esm.88676979.js";import{b as T,s as m}from"./App.13c64db0.js";import{a as j}from"./StudentRegistrationPlacementActionCreators.b6449156.js";import{g as E}from"./CenterActionCreators.d9bf0dbf.js";import{g as F}from"./CourseCategoryActionCreators.3c5324ef.js";import"./toConsumableArray.917c2683.js";let J=[{value:"Select a Status",label:"Select a Status"},{value:"Pending",label:"Pending"},{value:"Accepted",label:"Accepted"},{value:"Placed",label:"Placed"}],G=[{value:"Select a Status",label:"Select a Status"},{value:"Yes",label:"Yes"},{value:"No",label:"No"}],_={name:"",email:"",phone:"",course:"",center:"",ducatId:"",tenth:"",twelvth:"",graduation:"",postgraduation:"",qualification:"",passoutYear:"",trainer:"",completeYear:"",completeMonth:"",college:"",isAbove60:"",status:"",remark:""},Z=()=>{let d=T(),N=k(),[b,g]=i.exports.useState([]),[w,S]=i.exports.useState([]),p=f(e=>e.CourseCategoryStateData),h=f(e=>e.CenterStateData),[$,I]=i.exports.useState(null),{reset:C,setError:Y,handleSubmit:x,control:t,formState:{errors:r}}=B({defaultValues:_}),y=e=>{if(I(e),e.name)d(j({name:e.name,email:e.email,phone:e.phone,course:e.course.value,center:e.center.value,ducatId:e.ducatId,tenth:e.tenth,twelvth:e.twelvth,graduation:e.graduation,postgraduation:e.postgraduation,qualification:e.qualification,passoutYear:e.passoutYear,trainer:e.trainer,completeYear:e.completeYear,completeMonth:e.completeMonth,college:e.college,isAbove60:e.isAbove60.value,status:e.status.value,remark:e.remark,addByName:JSON.parse(localStorage.getItem("userData")).name,addByRole:JSON.parse(localStorage.getItem("userData")).role,addById:JSON.parse(localStorage.getItem("userData"))._id})),R(a("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:a("div",{className:"d-flex flex-column",children:a("h6",{className:"text-success",children:"Student is  Registred For Placement!!!"})})})),N("/placement/student-registration-placement");else for(let v in e)e[v]===""&&Y(v,{type:"manual"})},P=()=>{C({name:"",email:"",phone:"",course:"",center:"",ducatId:"",tenth:"",twelvth:"",graduation:"",postgraduation:"",qualification:"",passoutYear:"",trainer:"",completeYear:"",completeMonth:"",college:"",isAbove60:"",status:"",remark:""})};return i.exports.useEffect(()=>{d(E()),d(F()),g(h.map(e=>({value:e.title,label:e.title,name:"center"}))),S(p.map(e=>({value:e.name,label:e.name,name:"course"})))},[p.length,h.length]),l(A,{children:[a(M,{children:a(O,{tag:"h4",className:"text-center",children:"Create a New Registration"})}),a(q,{children:l(D,{onSubmit:x(y),children:[l("div",{className:"mb-1",children:[a(o,{className:"form-label",for:"name",children:"Name"}),a(s,{control:t,id:"name",name:"name",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.name&&!0})})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"phone",children:"Phone"}),a(s,{control:t,id:"phone",name:"phone",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.phone&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"email",children:"Email"}),a(s,{control:t,id:"email",name:"email",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.email&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"course",children:"Course"}),a(s,{id:"course",control:t,name:"course",render:({field:e})=>a(c,{...e,isClearable:!0,options:w,classNamePrefix:"select",theme:m,invalid:r.course&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"center",children:"Center"}),a(s,{id:"center",control:t,name:"center",render:({field:e})=>a(c,{...e,isClearable:!0,options:b,classNamePrefix:"select",theme:m,invalid:r.center&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"tenth",children:"10th Percentage"}),a(s,{control:t,id:"tenth",name:"tenth",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.tenth&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"twelvth",children:"12Th Percentage"}),a(s,{control:t,id:"twelvth",name:"twelvth",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.twelvth&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"graduation",children:"Graduation Percentage"}),a(s,{control:t,id:"graduation",name:"graduation",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.graduation&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"postgraduation",children:"Post graducation Percentage"}),a(s,{control:t,id:"postgraduation",name:"postgraduation",render:({field:e})=>a(n,{...e,type:"number",options:{allowInput:!0},invalid:r.postgraduation&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"ducatId",children:"Ducat Id"}),a(s,{control:t,id:"ducatId",name:"ducatId",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.ducatId&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"qualification",children:"Qualification"}),a(s,{control:t,id:"qualification",name:"qualification",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.qualification&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"passoutYear",children:"Passout Year"}),a(s,{id:"passoutYear",control:t,name:"passoutYear",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.passoutYear&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"trainer",children:"Trainer"}),a(s,{id:"trainer",control:t,name:"trainer",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.trainer&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"completeYear",children:"Complete Year"}),a(s,{id:"completeYear",control:t,name:"completeYear",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.completeYear&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"completeMonth",children:"Complete Month"}),a(s,{id:"completeMonth",control:t,name:"completeMonth",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.completeMonth&&!0})})]})]}),l("div",{className:"row mb-1",children:[l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"college",children:"College"}),a(s,{id:"college",control:t,name:"college",render:({field:e})=>a(n,{...e,options:{allowInput:!0},invalid:r.college&&!0})})]}),l("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"isAbove60",children:"Is Above 60"}),a(s,{id:"isAbove60",control:t,name:"isAbove60",render:({field:e})=>a(c,{...e,isClearable:!0,options:G,classNamePrefix:"select",theme:m,invalid:r.passoutYear&&!0})})]})]}),l("div",{className:"mb-1",children:[a(o,{className:"form-label",for:"remark",children:"remark"}),a(s,{control:t,id:"remark",name:"remark",render:({field:e})=>a(n,{...e,type:"textarea",options:{allowInput:!0},invalid:r.remark&&!0})})]}),l("div",{className:"mb-5",children:[a(o,{className:"form-label",for:"status",children:"Status"}),a(s,{id:"status",control:t,name:"status",render:({field:e})=>a(c,{...e,isClearable:!0,options:J,classNamePrefix:"select",theme:m,invalid:r.status&&!0})})]}),l("div",{className:"d-flex",children:[a(u,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),a(u,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:P,children:"Reset"}),a(u,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{Z as default};