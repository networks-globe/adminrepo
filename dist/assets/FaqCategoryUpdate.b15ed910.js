import{G as q,aI as F,r as i,h as D,o as r,an as w,j as e,ao as B,af as O,ap as R,ah as _,a8 as o,aa as c,k as d,a1 as u,al as j}from"./index.7ed68957.js";import"./page-form-validation.61faf01b.js";import{u as J,C as p}from"./index.esm.88676979.js";import{b as U}from"./App.13c64db0.js";import{g as A,u as V}from"./FaqCategoryActionCreators.25da5af5.js";const P=()=>{let h=U(),N=q(),{_id:f}=F(),[t,g]=i.exports.useState({remark:"",status:"",name:"",sort:0}),v=D(a=>a.FaqCategoryStateData);const[s,y]=i.exports.useState("");let{reset:C,handleSubmit:k,control:n}=J({defaultValues:t});const b=a=>{y(a),t.name&&(h(V({_id:f,name:t.name,remark:t.remark,status:t.status,sortOrder:t.sort,updateByName:JSON.parse(localStorage.getItem("userData")).name,updateByRole:JSON.parse(localStorage.getItem("userData")).role,updateById:JSON.parse(localStorage.getItem("userData"))._id})),j(e("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:e("div",{className:"d-flex flex-column",children:e("h6",{className:"text-success",children:"Faq Category is Updated!!!"})})})),N("/apps/faq/faq-category"))},S=()=>{C({remark:"",status:"",name:"",sort:0})};function l(a){let m=a.target.name,x=a.target.value;g(I=>({...I,[m]:x}))}return i.exports.useEffect(()=>{h(A());let a=v.find(m=>m._id===f);a&&g({remark:a.remark,status:a.status,name:a.name,sort:a.sortOrder})},[v.length]),r(w,{children:[e(B,{children:e(O,{tag:"h4",className:"text-center",children:"Update Faq Category"})}),e(R,{children:r(_,{onSubmit:k(b),children:[r("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"name",children:"name"}),e(p,{control:n,id:"name",name:"name",render:({field:a})=>e(c,{...a,onChange:l,value:t.name,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.name===null})})})]}),r("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"remark",children:"remark"}),e(p,{control:n,id:"remark",name:"remark",render:({field:a})=>e(c,{...a,onChange:l,value:t.remark,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.remark===null})})})]}),r("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"name",children:"Sort Order"}),e(p,{control:n,id:"sort",name:"sort",render:({field:a})=>e(c,{...a,onChange:l,value:t.sort|0,options:{allowInput:!0},className:d("form-control",{"is-invalid":s!==null&&s.sort===null})})})]}),r("div",{className:"mb-1",children:[e(o,{className:"form-label",for:"status",children:"React Select"}),r("select",{name:"status",onChange:l,value:t.status,className:"form-control",children:[e("option",{value:"Active",children:"Active"}),e("option",{value:"Inactive",children:"Inactive"})]})]}),r("div",{className:"d-flex",children:[e(u,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(u,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:S,children:"Reset"}),e(u,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{P as default};