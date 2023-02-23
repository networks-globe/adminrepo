import{G as P,aI as T,r as p,h as b,o as t,an as q,j as e,ao as B,af as R,ap as _,ah as j,a8 as o,aa as i,k as c,a1 as h,al as F}from"./index.7ed68957.js";import"./page-form-validation.61faf01b.js";import{u as J,C as m}from"./index.esm.88676979.js";import{b as O}from"./App.13c64db0.js";import{g as U,u as V}from"./DriveActionCreators.88716f1b.js";import{g as A}from"./CourseCategoryActionCreators.3c5324ef.js";const z=()=>{let u=O(),y=P(),{_id:f}=T(),[l,v]=p.exports.useState({name:"",startDate:"",startTime:"",technology:"",company:"",profile:"",experience:"",qualification:"",contactPerson:"",contactNumber:"",location:"",contactNumber:"",skills:"",venu:"",status:"",remark:""}),N=b(a=>a.DriveStateData),g=b(a=>a.CourseCategoryStateData);const[n,C]=p.exports.useState("");let{reset:k,handleSubmit:x,control:s}=J({defaultValues:l});const D=a=>{C(a),l.name&&(u(V({_id:f,name:l.name,startDate:l.startDate,startTime:l.startTime,technology:l.technology,company:l.company,profile:l.profile,experience:l.experience,qualification:l.qualification,contactPerson:l.contactPerson,contactNumber:l.contactNumber,location:l.location,skills:l.skills,venu:l.venu,status:l.status,remark:l.remark,updateByName:JSON.parse(localStorage.getItem("userData")).name,updateByRole:JSON.parse(localStorage.getItem("userData")).role,updateById:JSON.parse(localStorage.getItem("userData"))._id})),F(e("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:e("div",{className:"d-flex flex-column",children:e("h6",{className:"text-success",children:"Drive is Updated!!!"})})})),y("/placement/drive"))},w=()=>{k({name:"",startDate:"",startTime:"",technology:"",company:"",profile:"",experience:"",qualification:"",contactPerson:"",contactNumber:"",location:"",contactNumber:"",skills:"",venu:"",status:"",remark:""})};function r(a){let d=a.target.name,I=a.target.value;v(S=>({...S,[d]:I}))}return p.exports.useEffect(()=>{u(U()),u(A());let a=N.find(d=>d._id===f);a&&v({...a})},[N.length,g.length]),t(q,{children:[e(B,{children:e(R,{tag:"h4",className:"text-center",children:"Update Drive"})}),e(_,{children:t(j,{onSubmit:x(D),children:[t("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"name",children:"name"}),e(m,{control:s,id:"name",name:"name",render:({field:a})=>e(i,{...a,onChange:r,value:l.name,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.name===null})})})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"startDate",children:"Start Date"}),e(m,{control:s,id:"startDate",name:"startDate",render:({field:a})=>e(i,{...a,type:"date",onChange:r,value:l.startDate,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.startDate===null})})})]}),t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"startTime",children:"Start Time"}),e(m,{control:s,id:"startTime",name:"startTime",render:({field:a})=>e(i,{...a,onChange:r,value:l.startTime,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.startTime===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"technology",children:"Technology"}),e("select",{name:"technology",id:"technology",onChange:r,className:"form-select",value:l.technology,children:g.map((a,d)=>e("option",{value:a.name,children:a.name},d))})]}),t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"company",children:"Company"}),e(m,{control:s,id:"company",name:"company",render:({field:a})=>e(i,{...a,onChange:r,value:l.company,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.company===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"profile",children:"Profile"}),e(m,{control:s,id:"profile",name:"profile",render:({field:a})=>e(i,{...a,onChange:r,value:l.profile,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.profile===null})})})]}),t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"experience",children:"Experience"}),e(m,{control:s,id:"experience",name:"experience",render:({field:a})=>e(i,{...a,onChange:r,value:l.experience,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.experience===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"qualification",children:"Qualification"}),e(m,{control:s,id:"qualification",name:"qualification",render:({field:a})=>e(i,{...a,onChange:r,value:l.qualification,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.qualification===null})})})]}),t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"contactPerson",children:"Contact Person"}),e(m,{control:s,id:"contactPerson",name:"contactPerson",render:({field:a})=>e(i,{...a,onChange:r,value:l.contactPerson,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.contactPerson===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"location",children:"Location"}),e(m,{control:s,id:"location",name:"location",render:({field:a})=>e(i,{...a,onChange:r,value:l.location,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.location===null})})})]}),t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"skills",children:"Skills"}),e(m,{control:s,id:"skills",name:"skills",render:({field:a})=>e(i,{...a,onChange:r,value:l.skills,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.skills===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"contactNumber",children:"Contact Number"}),e(m,{control:s,id:"contactNumber",name:"contactNumber",render:({field:a})=>e(i,{...a,onChange:r,value:l.contactNumber,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.contactNumber===null})})})]}),t("div",{className:"col-md-6",children:[e(o,{className:"form-label",for:"venu",children:"Venu"}),e(m,{control:s,id:"venu",name:"venu",render:({field:a})=>e(i,{...a,onChange:r,value:l.venu,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.venu===null})})})]})]}),t("div",{className:"col-md-6 mb-1",children:[e(o,{className:"form-label",for:"status",children:"React Select"}),t("select",{name:"status",onChange:r,value:l.status,className:"form-control",children:[e("option",{value:"Active",children:"Active"}),e("option",{value:"Inactive",children:"Inactive"})]})]}),t("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"remark",children:"remark"}),e(m,{control:s,id:"remark",name:"remark",render:({field:a})=>e(i,{...a,type:"textarea",onChange:r,value:l.remark,options:{allowInput:!0},className:c("form-control",{"is-invalid":n!==null&&n.remark===null})})})]}),t("div",{className:"d-flex",children:[e(h,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(h,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:w,children:"Reset"}),e(h,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{z as default};
