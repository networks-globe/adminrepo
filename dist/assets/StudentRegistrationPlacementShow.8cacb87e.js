import{r as i,aI as s,h as o,j as e,aJ as u,o as t,L as m}from"./index.7ed68957.js";import{g as p}from"./OnlineRegistrationActionCreators.d46eedb2.js";import{b}from"./App.13c64db0.js";function D(){let[r,l]=i.exports.useState({}),a=b(),{_id:h}=s(),n=o(d=>d.StudentRegistrationPlacementStateData);return i.exports.useEffect(()=>{a(p());let d=n.find(c=>c._id===h);d&&l(d)},[n.length]),e(u,{children:t("div",{className:"card pb-3",children:[t("h5",{className:"text-center p-2",children:[r.name," ",e("button",{className:"btn btn-primary float-end",onClick:()=>window.history.back(),children:"Back"})]}),e("div",{className:"container-fluid",children:e("table",{className:"table table-bordered",children:t("tbody",{children:[t("tr",{children:[e("th",{children:"Name"}),e("td",{children:r.name})]}),t("tr",{children:[e("th",{children:"Phone"}),e("td",{children:r.phone})]}),t("tr",{children:[e("th",{children:"Email"}),e("td",{children:r.email})]}),t("tr",{children:[e("th",{children:"Course"}),e("td",{children:r.course})]}),t("tr",{children:[e("th",{children:"Center"}),e("td",{children:r.center})]}),t("tr",{children:[e("th",{children:"10th %"}),t("td",{children:[r.tenth,"%"]})]}),t("tr",{children:[e("th",{children:"12th %"}),t("td",{children:[r.twelvth,"%"]})]}),t("tr",{children:[e("th",{children:"Graduation"}),t("td",{children:[r.graduation,"%"]})]}),t("tr",{children:[e("th",{children:"Post Graduation"}),t("td",{children:[r.postgraduation,"%"]})]}),t("tr",{children:[e("th",{children:"Ducat Id"}),e("td",{children:r.ducatId})]}),t("tr",{children:[e("th",{children:"Qualification"}),e("td",{children:r.qualification})]}),t("tr",{children:[e("th",{children:"Passout Year"}),e("td",{children:r.passoutYear})]}),t("tr",{children:[e("th",{children:"Trainer"}),e("td",{children:r.trainer})]}),t("tr",{children:[e("th",{children:"College"}),e("td",{children:r.college})]}),t("tr",{children:[e("th",{children:"Is About 60%"}),e("td",{children:r.isAbove60})]}),t("tr",{children:[e("th",{children:"Create Date"}),e("td",{children:r.createDate})]}),t("tr",{children:[e("th",{children:"Update By"}),t("td",{children:[r.updateByName,"/",r.updateByRole,"/",r.updateById]})]}),t("tr",{children:[e("th",{children:"Update Date"}),e("td",{children:r.updateDate})]}),t("tr",{children:[e("th",{children:"Status"}),e("td",{children:r.status})]}),t("tr",{children:[e("th",{children:"Remark"}),e("td",{children:r.remark})]}),e("tr",{children:e("td",{colSpan:2,children:e(m,{to:`/placement/student-registration-placement/update/${r._id}`,className:"btn btn-primary w-100",children:"Update"})})})]})})})]})})}export{D as default};