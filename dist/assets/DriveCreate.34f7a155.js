import{G as k,r as n,h as w,o as r,an as I,j as a,ao as D,af as P,ap as T,ah as q,a8 as o,aa as i,a1 as c,al as B}from"./index.7ed68957.js";import{S as p}from"./react-select.esm.67b469f7.js";import"./page-form-validation.61faf01b.js";import{u as O,C as s}from"./index.esm.88676979.js";import{b as j,s as f}from"./App.13c64db0.js";import{a as E}from"./DriveActionCreators.88716f1b.js";import{g as J}from"./CourseCategoryActionCreators.3c5324ef.js";import"./toConsumableArray.917c2683.js";let R=[{value:"Select a Status",label:"Select a Status"},{value:"Active",label:"Active"},{value:"Inactive",label:"Inactive"}],A={name:"",startDate:"",startTime:"",technology:"",company:"",profile:"",experience:"",qualification:"",contactPerson:"",contactNumber:"",location:"",contactNumber:"",skills:"",venu:"",status:"",remark:""},K=()=>{let m=j(),h=k(),[v,N]=n.exports.useState([]),d=w(e=>e.CourseCategoryStateData),[F,b]=n.exports.useState(null),{reset:y,setError:C,handleSubmit:g,control:t,formState:{errors:l}}=O({defaultValues:A}),x=e=>{if(b(e),e.name)m(E({name:e.name,startDate:e.startDate,startTime:e.startTime,technology:e.courseCategory.value,company:e.company,profile:e.profile,experience:e.experience,qualification:e.qualification,contactPerson:e.contactPerson,contactNumber:e.contactNumber,location:e.location,skills:e.skills,venu:e.benu,status:e.status.value,remark:e.remark,addByName:JSON.parse(localStorage.getItem("userData")).name,addByRole:JSON.parse(localStorage.getItem("userData")).role,addById:JSON.parse(localStorage.getItem("userData"))._id})),B(a("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:a("div",{className:"d-flex flex-column",children:a("h6",{className:"text-success",children:"Drive is Created!!!"})})})),h("/placement/drive");else for(let u in e)e[u]===""&&C(u,{type:"manual"})},S=()=>{y({name:"",startDate:"",startTime:"",technology:"",company:"",profile:"",experience:"",qualification:"",contactPerson:"",contactNumber:"",location:"",contactNumber:"",skills:"",venu:"",status:"",remark:""})};return n.exports.useEffect(()=>{m(J()),N(d.map(e=>({value:e.name,label:e.name,name:"courseCategory"})))},[d.length]),r(I,{children:[a(D,{children:a(P,{tag:"h4",className:"text-center",children:"Create a New Drive"})}),a(T,{children:r(q,{onSubmit:g(x),children:[r("div",{className:"mb-1",children:[a(o,{className:"form-label",for:"name",children:"Name"}),a(s,{control:t,id:"name",name:"name",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.name&&!0})})]}),r("div",{className:"row mb-1",children:[r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"startDate",children:"Start Date"}),a(s,{control:t,id:"startDate",name:"startDate",render:({field:e})=>a(i,{...e,type:"date",options:{allowInput:!0},invalid:l.startDate&&!0})})]}),r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"startTime",children:"Start Time"}),a(s,{control:t,id:"startTime",name:"startTime",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.startTime&&!0})})]})]}),r("div",{className:"row mb-1",children:[r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"courseCategory",children:"CourseCategory"}),a(s,{id:"courseCategory",control:t,name:"courseCategory",render:({field:e})=>a(p,{...e,isClearable:!0,options:v,classNamePrefix:"select",theme:f,invalid:l.courseCategory&&!0})})]}),r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"company",children:"Company"}),a(s,{control:t,id:"company",name:"company",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.company&&!0})})]})]}),r("div",{className:"row mb-1",children:[r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"profile",children:"Profile"}),a(s,{control:t,id:"profile",name:"profile",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.profile&&!0})})]}),r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"experience",children:"Experience"}),a(s,{control:t,id:"experience",name:"experience",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.experience&&!0})})]})]}),r("div",{className:"row mb-1",children:[r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"qualification",children:"Qualification"}),a(s,{control:t,id:"qualification",name:"qualification",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.qualification&&!0})})]}),r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"contactPerson",children:"Contact Person"}),a(s,{control:t,id:"contactPerson",name:"contactPerson",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.contactPerson&&!0})})]})]}),r("div",{className:"row mb-1",children:[r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"location",children:"Location"}),a(s,{control:t,id:"location",name:"location",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.location&&!0})})]}),r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"skills",children:"Skills"}),a(s,{control:t,id:"skills",name:"skills",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.skills&&!0})})]})]}),r("div",{className:"row mb-1",children:[r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"contactNumber",children:"Contact Number"}),a(s,{control:t,id:"contactNumber",name:"contactNumber",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.contactNumber&&!0})})]}),r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"venu",children:"Venu"}),a(s,{control:t,id:"venu",name:"venu",render:({field:e})=>a(i,{...e,options:{allowInput:!0},invalid:l.venu&&!0})})]})]}),r("div",{className:"col-md-6",children:[a(o,{className:"form-label",for:"status",children:"Status"}),a(s,{id:"status",control:t,name:"status",render:({field:e})=>a(p,{...e,isClearable:!0,options:R,classNamePrefix:"select",theme:f,invalid:l.status&&!0})})]}),r("div",{className:"mb-1",children:[a(o,{className:"form-label",for:"remark",children:"remark"}),a(s,{control:t,id:"remark",name:"remark",render:({field:e})=>a(i,{...e,type:"textarea",options:{allowInput:!0},invalid:l.remark&&!0})})]}),r("div",{className:"d-flex",children:[a(c,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),a(c,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:S,children:"Reset"}),a(c,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{K as default};
