(this["webpackJsonpapp-flask"]=this["webpackJsonpapp-flask"]||[]).push([[0],{45:function(t,n,e){},46:function(t,n,e){},54:function(t,n,e){"use strict";e.r(n);var c=e(1),o=e.n(c),i=e(26),r=e.n(i),a=(e(45),e.p,e(46),e(6)),u=e(17),s=e(31),j=e(2),h=function(t){var n=t.todolist,e=Object(s.useTransition)(n,{keys:function(t){return t.id},from:{opacity:0,width:"4%",marginLeft:-100,marginRight:100},enter:{opacity:1,width:"100%",padding:"5px 0px",marginLeft:0,marginRight:0}});return e((function(t,n,e){return n&&Object(j.jsx)(s.animated.div,{style:t,children:Object(j.jsx)(u.b,{to:"/".concat(n.id),children:n.content})},e.id)}))},d=function(t){var n=t.addtodo,e=t.onFormChange,c=t.onFormSubmit;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c()},children:[Object(j.jsx)("input",{type:"text",value:n,onChange:function(t){e(t.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})})},f=function(){var t=Object(c.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1],i=Object(c.useState)(""),r=Object(a.a)(i,2),u=r[0],s=r[1];Object(c.useEffect)((function(){fetch("https://todoapi9999.herokuapp.com/api").then((function(t){if(t.ok)return t.json()})).then((function(t){return o(t)}))}),[]);var f=function(){fetch("https://todoapi9999.herokuapp.com/api").then((function(t){if(t.ok)return t.json()})).then((function(t){return o(t)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{addtodo:u,onFormChange:function(t){s(t)},onFormSubmit:function(){fetch("https://todoapi9999.herokuapp.com/api/create",{method:"POST",body:JSON.stringify({content:u}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){console.log(t),s(""),f()}))}}),Object(j.jsx)(h,{todolist:e})]})},p=e(3),b=function(t){var n=t.id,e=Object(p.f)();return Object(j.jsx)("button",{onClick:function(){fetch("/api/delete/".concat(n),{method:"POST",body:JSON.stringify({id:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){console.log(t),e.push("/")}))},children:"Delete"})},O=function(t){var n=t.id;return Object(j.jsx)(u.b,{to:"/edit/".concat(n),children:Object(j.jsx)("button",{children:"Edit"})})},l=function(){var t=Object(p.g)().id,n=Object(c.useState)([]),e=Object(a.a)(n,2),o=e[0],i=e[1];return Object(c.useEffect)((function(){setTimeout((function(){fetch("https://todoapi9999.herokuapp.com/api/".concat(t)).then((function(t){if(t.ok)return t.json()})).then((function(t){return i(t)}))}),10),fetch("https://todoapi9999.herokuapp.com/api/".concat(t)).then((function(t){if(t.ok)return t.json()})).then((function(t){return i(t)}))}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:o.length>0&&o.map((function(t){return t.content}))}),Object(j.jsx)(b,{id:t}),Object(j.jsx)(O,{id:t,todo:o}),Object(j.jsx)("hr",{}),Object(j.jsx)(u.b,{to:"/",children:"Back To Home"})]})},m=function(){var t=Object(p.f)(),n=Object(p.g)().id,e=Object(c.useState)(""),o=Object(a.a)(e,2),i=o[0],r=o[1];Object(c.useEffect)((function(){fetch("/api/".concat(n)).then((function(t){if(t.ok)return t.json()})).then((function(t){console.log(t),r(t[0].content)}))}),[n]);return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://todoapi9999.herokuapp.com/api/edit/".concat(n),{method:"POST",body:JSON.stringify({id:n,content:i}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)})),t.push("/".concat(n))},children:[Object(j.jsx)("input",{type:"text",value:i,onChange:function(t){r(t.target.value)},required:!0}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})};var x=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/react-todo",children:Object(j.jsx)(f,{})}),Object(j.jsx)(p.a,{exact:!0,path:"/react-todo/:id",children:Object(j.jsx)(l,{})}),Object(j.jsx)(p.a,{path:"/react-todo/edit/:id",children:Object(j.jsx)(m,{})})]})})})},g=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,55)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),g()}},[[54,1,2]]]);
//# sourceMappingURL=main.d61c4911.chunk.js.map