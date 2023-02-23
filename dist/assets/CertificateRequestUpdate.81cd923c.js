import{G as R,aI as q,h,r as p,o as t,an as B,j as e,ao as F,af as _,ap as j,ah as J,a8 as n,aa as c,k as i,a1 as N,al as O}from"./index.7ed68957.js";import"./page-form-validation.61faf01b.js";import{u as U,C as m}from"./index.esm.88676979.js";import{b as A}from"./App.13c64db0.js";import{g as E,u as P}from"./CertificationRequestActionCreators.b76faa9c.js";import{g as T}from"./CenterActionCreators.d9bf0dbf.js";import{g as V}from"./CourseActionCreators.1947fb33.js";const W=()=>{let u=A(),I=R(),{_id:v}=q(),g=h(a=>a.CourseStateData),C=h(a=>a.CenterStateData),[l,f]=p.exports.useState({name:"",email:"",phone:"",course:"",center:"",faculty:"",ducatId:"",from:"",toDate:"",certificateNo:"",status:"",remark:""}),b=h(a=>a.CertificationRequestStateData);const[r,y]=p.exports.useState("");let{reset:$,handleSubmit:D,control:s}=U({defaultValues:l});const w=a=>{y(a),l.name&&(u(P({_id:v,name:l.name,phone:l.phone,email:l.email,course:l.course,center:l.center,faculty:l.faculty,ducatId:l.ducatId,from:l.from,toDate:l.toDate,certificateNo:l.certificateNo,status:l.status,remark:l.remark,updateByName:JSON.parse(localStorage.getItem("userData")).name,updateByRole:JSON.parse(localStorage.getItem("userData")).role,updateById:JSON.parse(localStorage.getItem("userData"))._id})),O(e("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:e("div",{className:"d-flex flex-column",children:e("h6",{className:"text-success",children:"Certificate Request is Updated!!!"})})})),I("/apps/certification-request"))},S=()=>{f({name:"",email:"",phone:"",course:"",center:"",faculty:"",ducatId:"",from:"",toDate:"",certificateNo:"",status:"",remark:""})};function o(a){let d=a.target.name,k=a.target.value;f(x=>({...x,[d]:k}))}return p.exports.useEffect(()=>{u(E());let a=b.find(d=>d._id===v);a&&f({...a}),u(T()),u(V())},[b.length,g.length,C.length]),t(B,{children:[e(F,{children:e(_,{tag:"h4",className:"text-center",children:"Update Certification Request"})}),e(j,{children:t(J,{onSubmit:D(w),children:[t("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"name",children:"Name"}),e(m,{control:s,id:"name",name:"name",render:({field:a})=>e(c,{...a,onChange:o,value:l.name,options:{allowInput:!0},className:i("form-control",{"is-invalid":r!==null&&r.name===null})})})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"phone",children:"Phone"}),e(m,{control:s,id:"phone",name:"phone",render:({field:a})=>e(c,{...a,options:{allowInput:!0},onChange:o,value:l.phone,className:i("form-control",{"is-invalid":r!==null&&r.phone===null})})})]}),t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"email",children:"Email"}),e(m,{control:s,id:"email",name:"email",render:({field:a})=>e(c,{...a,options:{allowInput:!0},onChange:o,value:l.email,className:i("form-control",{"is-invalid":r!==null&&r.email===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"course",children:"Course"}),e("select",{name:"course",onChange:o,value:l.course,className:"form-control",children:g.map((a,d)=>e("option",{value:a.title,children:a.title},d))})]}),t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"course",children:"Center"}),e("select",{name:"center",onChange:o,value:l.center,className:"form-control",children:C.map((a,d)=>e("option",{value:a.title,children:a.title},d))})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"faculty",children:"Faculty"}),e(m,{control:s,id:"faculty",name:"faculty",render:({field:a})=>e(c,{...a,options:{allowInput:!0},onChange:o,value:l.faculty,className:i("form-control",{"is-invalid":r!==null&&r.faculty===null})})})]}),t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"ducatId",children:"DucatId"}),e(m,{control:s,id:"ducatId",name:"ducatId",render:({field:a})=>e(c,{...a,options:{allowInput:!0},onChange:o,value:l.ducatId,className:i("form-control",{"is-invalid":r!==null&&r.ducatId===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"from",children:"From"}),e(m,{control:s,id:"from",name:"from",render:({field:a})=>e(c,{...a,type:"date",options:{allowInput:!0},onChange:o,value:l.from,className:i("form-control",{"is-invalid":r!==null&&r.from===null})})})]}),t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"toDate",children:"To Date"}),e(m,{control:s,id:"toDate",name:"toDate",render:({field:a})=>e(c,{...a,type:"date",options:{allowInput:!0},onChange:o,value:l.toDate,className:i("form-control",{"is-invalid":r!==null&&r.toDate===null})})})]})]}),t("div",{className:"row mb-1",children:[t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"certificateNo",children:"Certificate Number"}),e(m,{control:s,id:"certificateNo",name:"certificateNo",render:({field:a})=>e(c,{...a,options:{allowInput:!0},onChange:o,value:l.certificateNo,className:i("form-control",{"is-invalid":r!==null&&r.certificateNo===null})})})]}),t("div",{className:"col-md-6",children:[e(n,{className:"form-label",for:"status",children:"Status"}),t("select",{name:"status",onChange:o,value:l.status,className:"form-control",children:[e("option",{value:"Active",children:"Active"}),e("option",{value:"Inactive",children:"Inactive"})]})]})]}),t("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"remark",children:"remark"}),e(m,{control:s,id:"remark",name:"remark",render:({field:a})=>e(c,{...a,type:"textarea",options:{allowInput:!0},onChange:o,value:l.remark,className:i("form-control",{"is-invalid":r!==null&&r.remark===null})})})]}),t("div",{className:"d-flex",children:[e(N,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(N,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:S,children:"Reset"}),e(N,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{W as default};