import{G as _,aI as j,r as i,h as N,o as r,an as H,j as e,ao as J,af as L,ap as R,ah as U,a8 as l,aa as S,k as C,ad as W,a1 as h,al as M}from"./index.7ed68957.js";import"./page-form-validation.61faf01b.js";import{u as V,C as D}from"./index.esm.88676979.js";import{h as $,D as s,r as G,c as P}from"./form-quill-editor.f7579e23.js";import{b as q}from"./App.13c64db0.js";import{g as z,u as K}from"./TutorialDataActionCreators.0ccf6ea6.js";import{g as Q}from"./TechnologyActionCreators.3980be47.js";import"./toConsumableArray.917c2683.js";const le=()=>{let d=q(),b=_(),{_id:p}=j(),[a,g]=i.exports.useState({topic:"",status:"",sortOrder:0,technology:""}),f=N(t=>t.TutorialDataStateData),x=N(t=>t.TechnologyStateData),T=$(""),O=s.ContentState.createFromBlockArray(T.contentBlocks),m=s.EditorState.createWithContent(O),[v,u]=i.exports.useState(m);const[n,I]=i.exports.useState("");let{reset:B,handleSubmit:k,control:y}=V({defaultValues:a});const w=t=>{I(t);let o=P(v.getCurrentContent());u(o),a.topic&&(d(K({_id:p,topic:a.topic,content:o,status:a.status,sortOrder:a.sort,technology:a.technology.value,updateByName:JSON.parse(localStorage.getItem("userData")).name,updateByRole:JSON.parse(localStorage.getItem("userData")).role,updateById:JSON.parse(localStorage.getItem("userData"))._id})),M(e("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:e("div",{className:"d-flex flex-column",children:e("h6",{className:"text-success",children:"Tutorial Data is Updated!!!"})})})),b("/tutorial/tutorial-data"))},E=()=>{B({topic:"",status:"",sortOrder:0,technology:""})};function c(t){let o=t.target.name,F=t.target.value;g(A=>({...A,[o]:F}))}return i.exports.useEffect(()=>{d(z()),d(Q());let t=f.find(o=>o._id===p);t&&(g({...t}),m=s.EditorState.createWithContent(s.ContentState.createFromBlockArray(s.convertFromHTML(t.content))),u(m))},[f.length]),r(H,{children:[e(J,{children:e(L,{tag:"h4",className:"text-center",children:"Update Tutorial Data"})}),e(R,{children:r(U,{onSubmit:k(w),children:[r("div",{className:"mb-1",children:[e(l,{className:"form-label",for:"technology",children:"Technology"}),e("select",{name:"technology",value:a.technology,onChange:c,id:"technology",className:"form-control",children:x.map((t,o)=>e("option",{value:t.name,children:t.name},o))})]}),r("div",{className:"mb-1",children:[e(l,{className:"form-label",for:"topic",children:"Topic"}),e(D,{control:y,id:"topic",name:"topic",render:({field:t})=>e(S,{...t,onChange:c,value:a.topic,options:{allowInput:!0},className:C("form-control",{"is-invalid":n!==null&&n.topic===null})})})]}),r("div",{className:"mb-1",children:[e(l,{className:"form-label",for:"answer",children:"Content"}),r(W,{sm:"12",className:"mb-2",children:[e(l,{className:"form-label",children:"Description"}),e(G.exports.Editor,{editorState:v,onEditorStateChange:t=>u(t)})]})]}),r("div",{className:"mb-1",children:[e(l,{className:"form-label",for:"sortOrder",children:"Sort Order"}),e(D,{control:y,id:"sortOrder",name:"sortOrder",render:({field:t})=>e(S,{...t,onChange:c,value:a.sortOrder|0,options:{allowInput:!0},className:C("form-control",{"is-invalid":n!==null&&n.sortOrder===null})})})]}),r("div",{className:"mb-1",children:[e(l,{className:"form-label",for:"status",children:"Status"}),r("select",{name:"status",onChange:c,value:a.status,className:"form-control",children:[e("option",{value:"Active",children:"Active"}),e("option",{value:"Inactive",children:"Inactive"})]})]}),r("div",{className:"d-flex",children:[e(h,{className:"me-1",color:"primary",type:"submit",children:"Submit"}),e(h,{className:"me-1",outline:!0,color:"danger",type:"reset",onClick:E,children:"Reset"}),e(h,{outline:!0,color:"secondary",type:"reset",onClick:()=>window.history.back(),children:"Back"})]})]})})]})};export{le as default};