import{r as c,aI as s,h as m,j as e,aJ as o,o as d,L as p}from"./index.7ed68957.js";import{g as u}from"./PlacedStudentActionCreators.28cd91b3.js";import{b}from"./App.13c64db0.js";function y(){let[t,l]=c.exports.useState({}),n=b(),{_id:i}=s(),a=m(r=>r.PlacedStudentStateData);return c.exports.useEffect(()=>{n(u());let r=a.find(h=>h._id===i);r&&l(r)},[a.length]),e(o,{children:d("div",{className:"card pb-3",children:[d("h5",{className:"text-center p-2",children:[t.name," ",e("button",{className:"btn btn-primary float-end",onClick:()=>window.history.back(),children:"Back"})]}),e("div",{className:"container-fluid",children:e("table",{className:"table table-bordered",children:d("tbody",{children:[d("tr",{children:[e("th",{children:"Name"}),e("td",{children:t.name})]}),d("tr",{children:[e("th",{children:"Phone"}),e("td",{children:t.phone})]}),d("tr",{children:[e("th",{children:"Email"}),e("td",{children:t.email})]}),d("tr",{children:[e("th",{children:"Course"}),e("td",{children:t.course})]}),d("tr",{children:[e("th",{children:"Center"}),e("td",{children:t.center})]}),d("tr",{children:[e("th",{children:"Ducat Id"}),e("td",{children:t.ducatId})]}),d("tr",{children:[e("th",{children:"Company"}),e("td",{children:t.company})]}),d("tr",{children:[e("th",{children:"Package"}),e("td",{children:t.package})]}),d("tr",{children:[e("th",{children:"Role"}),e("td",{children:t.role})]}),d("tr",{children:[e("th",{children:"Image"}),e("td",{children:e("a",{href:`/placedStudents/${t.image}`,target:"_blank",children:e("img",{src:t.image&&`/placedStudents/${t.image}`,heigh:"200px",width:"300px",alt:""})})})]}),d("tr",{children:[e("th",{children:"Create Date"}),e("td",{children:t.createDate})]}),d("tr",{children:[e("th",{children:"Update By"}),d("td",{children:[t.updateByName,"/",t.updateByRole,"/",t.updateById]})]}),d("tr",{children:[e("th",{children:"Update Date"}),e("td",{children:t.updateDate})]}),d("tr",{children:[e("th",{children:"Status"}),e("td",{children:t.status})]}),d("tr",{children:[e("th",{children:"Remark"}),e("td",{children:t.remark})]}),e("tr",{children:e("td",{colSpan:2,children:e(p,{to:`/placement/placed-students/update/${t._id}`,className:"btn btn-primary w-100",children:"Update"})})})]})})})]})})}export{y as default};