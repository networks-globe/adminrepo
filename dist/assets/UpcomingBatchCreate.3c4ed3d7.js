import{G as B,r as n,h as v,o as a,an as w,j as t,ao as O,af as U,ap as j,ah as J,a8 as l,aa as o,a1 as m,al as P}from"./index.7ed68957.js";import{S as u}from"./react-select.esm.67b469f7.js";import"./page-form-validation.61faf01b.js";import{u as R,C as i}from"./index.esm.88676979.js";import{b as A,s as d}from"./App.13c64db0.js";import{a as E}from"./UpcomingBatchesActionCreators.eae78b04.js";import{g as F}from"./CenterActionCreators.d9bf0dbf.js";import{g as _}from"./CourseActionCreators.1947fb33.js";import"./toConsumableArray.917c2683.js";let $=[{value:"Select a Status",label:"Select a Status"},{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}],G={course:"",center:"",trainer:"",startDate:"",startTime:"",status:"",remark:""},Y=()=>{let c=A(),b=B(),[N,S]=n.exports.useState([]),[C,g]=n.exports.useState([]),p=v(e=>e.CourseStateData),h=v(e=>e.CenterStateData),[H,x]=n.exports.useState(null),{reset:D,setError:y,handleSubmit:k,control:r,formState:{errors:s}}=R({defaultValues:G}),I=e=>{if(x(e),e.course)c(E({course:e.course.value,center:e.center.value,trainer:e.trainer,startDate:e.startDate,startTime:e.startTime,remark:e.remark,status:e.status.value,addByName:JSON.parse(localStorage.getItem("userData")).name,addByRole:JSON.parse(localStorage.getItem("userData")).role,addById:JSON.parse(localStorage.getItem("userData"))._id})),P(t("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:t("div",{className:"d-flex flex-column",children:t("h6",{className:"text-success",children:"UpComming Batch is Created!!!"})})})),b("/apps/upcoming-batches");else for(let f in e)e[f]===""&&y(f,{type:"manual"})},T=()=>{D({course:"",center:"",trainer:"",startDate:"",startTime:"",status:"",remark:""})};return n.exports.useEffect(()=>{c(F()),c(_()),S(h.map(e=>({value:e.title,label:e.title,name:"center"}))),g(p.map(e=>({value:e.title,label:e.title,name:"course"})))},[p.length,h.length]),a(w,{children:[t(O,{children:t(U,{tag:"h4",className:"text-center",children:"Create an Upcoming Batch"})}),t(j,{children:a(J,{onSubmit:k(I),children:[a("div",{className:"mb-1",children:[t(l,{className:"form-label",for:"course",children:"Course"}),t(i,{id:"course",control:r,name:"course",render:({field:e})=>t(u,{...e,isClearable:!0,options:C,classNamePrefix:"select",theme:d,invalid:s.course&&!0})})]}),a("div",{className:"mb-1",children:[t(l,{className:"form-label",for:"center",children:"Center"}),t(i,{id:"center",control:r,name:"center",render:({field:e})=>t(u,{...e,isClearable:!0,options:N,classNamePrefix:"select",theme:d,invalid:s.center&&!0})})]}),a("div",{className:"mb-1",children:[t(l,{className:"form-label",for:"trainer",children:"Trainer"}),t(i,{control:r,id:"trainer",name:"trainer",render:({field:e})=>t(o,{...e,options:{allowInput:!0},invalid:s.trainer&&!0})})]}),a("div",{className:"row",children:[a("div",{className:"col-md-6 mb-1",children:[t(l,{className:"form-label",for:"startDate",children:"Start Date"}),t(i,{control:r,id:"startDate",name:"startDate",render:({field:e})=>t(o,{...e,type:"date",options:{allowInput:!0},invalid:s.startDate&&!0})})]}),a("div",{className:"col-md-6 mb-1",children:[t(l,{className:"form-label",for:"startTime",children:"Start Time"}),t(i,{control:r,id:"startTime",name:"startTime",render:({field:e})=>t(o,{...e,options:{allowInput:!0},invalid:s.startTime&&!0})})]})]}),a("div",{className:"mb-1",children:[t(l,{className:"form-label",for:"remark",children:"remark"}),t(i,{control:r,id:"remark",name:"remark",render:({field:e})=>t(o,{...e,options:{allowInput:!0},invalid:s.remark&&!0})})]}),a("div",{className:"mb-1",children:[t(l,{className:"form-label",for:"status",children:"Status"}),t(i,{id:"status",control:r,name:"status",render:({field:e})=>t(u,{...e,isClearable:!0,options:$,classNamePrefix:"select",theme:d,invalid:s.status&&!0})})]}),a("div",{className:"d-flex",children:[t(m,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),t(m,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:T,children:"Reset"}),t(m,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{Y as default};
