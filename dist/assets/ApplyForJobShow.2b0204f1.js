import{r as i,aI as s,h as o,j as e,aJ as p,o as t,L as u}from"./index.7ed68957.js";import{g as m}from"./ApplyForJobActionCreators.535bbc60.js";import{b}from"./App.13c64db0.js";function N(){let[r,n]=i.exports.useState({}),a=b(),{_id:h}=s(),l=o(d=>d.ApplyForJobStateData);return i.exports.useEffect(()=>{a(m());let d=l.find(c=>c._id===h);d&&n(d)},[l.length]),e(p,{children:t("div",{className:"card pb-3",children:[t("h5",{className:"text-center p-2",children:[r.name," ",e("button",{className:"btn btn-primary float-end",onClick:()=>window.history.back(),children:"Back"})]}),e("div",{className:"container-fluid",children:e("table",{className:"table table-bordered",children:t("tbody",{children:[t("tr",{children:[e("th",{children:"Name"}),e("td",{children:r.name})]}),t("tr",{children:[e("th",{children:"Phone"}),e("td",{children:r.phone})]}),t("tr",{children:[e("th",{children:"Email"}),e("td",{children:r.email})]}),t("tr",{children:[e("th",{children:"Course"}),e("td",{children:r.course})]}),t("tr",{children:[e("th",{children:"Center"}),e("td",{children:r.center})]}),t("tr",{children:[e("th",{children:"Job Type"}),e("td",{children:r.jobType})]}),t("tr",{children:[e("th",{children:"Linkedin Profile"}),e("td",{children:r.linkedinProfile})]}),t("tr",{children:[e("th",{children:"About Yourself"}),e("td",{children:r.aboutYourself})]}),t("tr",{children:[e("th",{children:"About Course"}),e("td",{children:r.aboutCourse})]}),t("tr",{children:[e("th",{children:"Resume"}),e("td",{children:r.resume?e("a",{href:`/resume/${r.resume}`,target:"_blank",children:"Download Resume"}):e("p",{children:"N/A"})})]}),t("tr",{children:[e("th",{children:"Create Date"}),e("td",{children:r.createDate})]}),t("tr",{children:[e("th",{children:"Update By"}),t("td",{children:[r.updateByName,"/",r.updateByRole,"/",r.updateById]})]}),t("tr",{children:[e("th",{children:"Update Date"}),e("td",{children:r.updateDate})]}),t("tr",{children:[e("th",{children:"Status"}),e("td",{children:r.status})]}),t("tr",{children:[e("th",{children:"Remark"}),e("td",{children:r.remark})]}),e("tr",{children:e("td",{colSpan:2,children:e(u,{to:`/apps/apply-for-job/update/${r._id}`,className:"btn btn-primary w-100",children:"Update"})})})]})})})]})})}export{N as default};