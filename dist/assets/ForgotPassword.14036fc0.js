import{r as h,G as p,j as a,o as s,ac as g,L as r,ad as t,af as f,ag as x,ah as N,a8 as v,aa as y,a1 as w,a6 as b,al as k}from"./index.7ed68957.js";import{u as C,l as L,m as j}from"./App.13c64db0.js";import{i as D,a as F}from"./forgot-password-v2-dark.784987d6.js";/* empty css                            */const T=()=>{var[l,i]=h.exports.useState(""),n=p();const{skin:o}=C(),c=o==="dark"?D:F;function m(e){i(e.target.value)}async function d(){var e=await fetch("/api/user/reset-email",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:l})}),u=await e.json();u.result==="Fail"?k(a("div",{className:"d-flex",style:{width:"200px",height:"50px",display:"grid",placeItems:"center"},children:a("div",{className:"d-flex flex-column",children:a("h6",{className:"text-success",children:"Invalid Email Address"})})})):(localStorage.setItem("resetuser",l),n("/forgot-password/otp"))}return L()?a(b,{to:"/"}):a("div",{className:"auth-wrapper auth-cover",children:s(g,{className:"auth-inner m-0",children:[a(r,{className:"brand-logo",to:"/",onClick:e=>e.preventDefault(),children:a("h2",{className:"brand-text text-primary ms-1",children:"Ducat"})}),a(t,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:a("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:a("img",{className:"img-fluid",src:c,alt:"Login Cover"})})}),a(t,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:s(t,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[a(f,{tag:"h2",className:"fw-bold mb-1",children:"Forgot Password? \u{1F512}"}),a(x,{className:"mb-2",children:"Enter your email and we'll send you an OTP to reset your password"}),s(N,{className:"auth-forgot-password-form mt-2",onSubmit:e=>e.preventDefault(),children:[s("div",{className:"mb-1",children:[a(v,{className:"form-label",for:"email",children:"Email"}),a(y,{type:"email",id:"email",onChange:m,name:"email",placeholder:"youremail@example.com",autoFocus:!0})]}),a(w,{color:"primary",onClick:d,block:!0,children:"Send OTP"})]}),a("p",{className:"text-center mt-2",children:s(r,{to:"/login",children:[a(j,{className:"rotate-rtl me-25",size:14}),a("span",{className:"align-middle",children:"Back to login"})]})})]})})]})})};export{T as default};
