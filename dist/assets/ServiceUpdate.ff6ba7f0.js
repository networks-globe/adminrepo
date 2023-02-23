import{G as F,r as u,aI as R,h as _,o as l,an as j,j as e,ao as J,af as U,ap as A,ah as V,a8 as n,aa as c,k as d,a1 as p,al as $}from"./index.7ed68957.js";import"./page-form-validation.61faf01b.js";import{u as D,C as m}from"./index.esm.88676979.js";import{b as E}from"./App.13c64db0.js";import{g as G,u as H}from"./ServiceActionCreators.d4b27c88.js";let K=()=>{let h=E(),N=F(),[S,b]=u.exports.useState(""),{_id:v}=R(),[r,g]=u.exports.useState({remark:"",status:"",name:"",description:"",sort:0}),f=_(a=>a.ServiceStateData),[s,k]=u.exports.useState(""),{reset:x,handleSubmit:I,control:i}=D({defaultValues:r});function y(a){b(a.target.files[0])}let C=a=>{if(k(a),r.name){var t=new FormData;t.append("name",r.name),t.append("description",r.description),t.append("remark",r.remark),t.append("sortOrder",r.sort),t.append("image",S),t.append("status",r.status),t.append("updateByName",JSON.parse(localStorage.getItem("userData")).name),t.append("updateById",JSON.parse(localStorage.getItem("userData"))._id),t.append("updateByRole",JSON.parse(localStorage.getItem("userData")).role),h(H({data:t,_id:v})),$(e("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:e("div",{className:"d-flex flex-column",children:e("h6",{className:"text-success",children:"Service is Updated!!!"})})})),N("/apps/service")}},w=()=>{x({remark:"",status:"",name:"",sort:0})};function o(a){let t=a.target.name,B=a.target.value;g(O=>({...O,[t]:B}))}return u.exports.useEffect(()=>{h(G());let a=f.find(t=>t._id===v);a&&g({remark:a.remark,status:a.status,name:a.name,description:a.description,sort:a.sortOrder})},[f.length]),l(j,{children:[e(J,{children:e(U,{tag:"h4",className:"text-center",children:"Update Service"})}),e(A,{children:l(V,{onSubmit:I(C),children:[l("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"name",children:"name"}),e(m,{control:i,id:"name",name:"name",render:({field:a})=>e(c,{...a,onChange:o,value:r.name,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.name===null})})})]}),l("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"description",children:"Desription"}),e(m,{control:i,id:"description",name:"description",render:({field:a})=>e(c,{...a,type:"textarea",value:r.description,onChange:o,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.description===null})})})]}),l("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"image",children:"Image"}),e(m,{control:i,id:"image",name:"image",render:({field:a})=>e(c,{...a,type:"file",onChange:y,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.image===null})})})]}),l("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"remark",children:"remark"}),e(m,{control:i,id:"remark",name:"remark",render:({field:a})=>e(c,{...a,onChange:o,value:r.remark,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.remark===null})})})]}),l("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"name",children:"Sort Order"}),e(m,{control:i,id:"sort",name:"sort",render:({field:a})=>e(c,{...a,onChange:o,value:r.sort|0,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.sort===null})})})]}),l("div",{className:"mb-1",children:[e(n,{className:"form-label",for:"status",children:"React Select"}),l("select",{name:"status",onChange:o,value:r.status,className:"form-control",children:[e("option",{value:"Active",children:"Active"}),e("option",{value:"Inactive",children:"Inactive"})]})]}),l("div",{className:"d-flex",children:[e(p,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(p,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:w,children:"Reset"}),e(p,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{K as default};