(this["webpackJsonptest-scen-1"]=this["webpackJsonptest-scen-1"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),l=t(8),i=t.n(l),d=t(9),n=t(2),m=t(0),j=function(){return Object(m.jsx)("header",{className:"header",children:Object(m.jsx)("div",{className:"header__content"})})},r=function(){return Object(m.jsx)("aside",{className:"sidebar",children:Object(m.jsx)("div",{className:"sidebar__content"})})},b=function(e){var a=e.type,t=e.text,s=e.icon,c=e.callback,l=e.disabled;return Object(m.jsxs)("button",{type:a,className:"button",onClick:c,disabled:l||!1,children:[s&&Object(m.jsx)("img",{className:"button__icon",src:s,alt:"plus"}),t&&Object(m.jsx)("div",{className:"button__text ".concat(s?"with-icon":""),children:t})]})},o=[{lastName:"\u0418\u0432\u0430\u043d\u043e\u0432",firstName:"\u0418\u0432\u0430\u043d",middleName:"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",email:"mail1@mail.com",login:"user1"},{lastName:"\u041f\u0435\u0442\u0440\u043e\u0432",firstName:"\u041f\u0435\u0442\u0440",middleName:"\u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447",email:"mail2@mail.com",login:"user2"},{lastName:"\u0421\u0435\u0440\u0433\u0435\u0435\u0432",firstName:"\u0413\u0440\u0438\u0433\u043e\u0440\u0438\u0439",middleName:"\u0412\u0438\u043a\u0442\u043e\u0440\u043e\u0432\u0438\u0447",email:"mail3@mail.com",login:"user3"},{lastName:"\u0424\u0435\u0434\u043e\u0440\u043e\u0432",firstName:"\u0412\u0438\u043a\u0442\u043e\u0440",middleName:"\u0424\u0435\u0434\u043e\u0440\u043e\u0432\u0438\u0447",email:"mail4@mail.com",login:"user4"},{lastName:"\u0425\u0432\u0430\u0441\u0442\u0443\u043d\u043e\u0432",firstName:"\u0421\u0435\u0440\u0433\u0435\u0439",middleName:"\u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",email:"mail5@mail.com",login:"user5"},{lastName:"\u0413\u0440\u0438\u0433\u043e\u0440\u044c\u0435\u0432",firstName:"\u0424\u0435\u0434\u043e\u0440",middleName:"\u0413\u0440\u0438\u0433\u043e\u0440\u044c\u0435\u0432\u0438\u0447",email:"mail6@mail.com",login:"user6"}],_=t.p+"static/media/icon_trash.7c8bc93a.svg",h=t.p+"static/media/icon_pencil.5c4ed263.svg",O=t.p+"static/media/icon_plus.bdf6500d.svg",x=t(5),N=t(7),u=function(e){var a=e.addUser,t=e.closeModal,c=Object(s.useState)({lastName:"",firstName:"",middleName:"",email:"",login:""}),l=Object(n.a)(c,2),i=l[0],d=l[1],j=Object(s.useState)(!0),r=Object(n.a)(j,2),o=r[0],_=r[1],h=function(e){var a=e.target.name,t=e.target.value;d(Object(N.a)(Object(N.a)({},i),{},Object(x.a)({},a,t))),""!==i.lastName&&""!==i.firstName&&""!==i.middleName&&""!==i.email&&""!==i.login&&_(!1)};return Object(m.jsx)("div",{className:"add-user-modal",children:Object(m.jsxs)("div",{className:"add-user-modal__content",children:[Object(m.jsxs)("div",{className:"modal__header",children:[Object(m.jsx)("div",{className:"modal__title",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(m.jsx)("div",{onClick:t,className:"modal__close",children:"X"})]}),Object(m.jsx)("div",{className:"modal__content",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(i),t()},children:[Object(m.jsxs)("label",{children:[Object(m.jsxs)("div",{className:"modal__field",children:[Object(m.jsx)("div",{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(m.jsx)("input",{className:"modal__input",type:"text",name:"lastName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",onChange:h})]}),Object(m.jsxs)("div",{className:"modal__field",children:[Object(m.jsx)("div",{children:"\u0418\u043c\u044f"}),Object(m.jsx)("input",{className:"modal__input",type:"text",name:"firstName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:h})]}),Object(m.jsxs)("div",{className:"modal__field",children:[Object(m.jsx)("div",{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(m.jsx)("input",{className:"modal__input",type:"text",name:"middleName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",onChange:h})]}),Object(m.jsxs)("div",{className:"modal__field",children:[Object(m.jsx)("div",{children:"E-mail"}),Object(m.jsx)("input",{className:"modal__input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443",name:"email",onChange:h})]}),Object(m.jsxs)("div",{className:"modal__field",children:[Object(m.jsx)("div",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(m.jsx)("input",{className:"modal__input",type:"text",name:"login",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",onChange:h})]})]}),Object(m.jsx)("div",{className:"modal__footer",children:Object(m.jsx)(b,{type:"submit",text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",disabled:o})})]})})]})})},p=function(){var e=Object(s.useState)(o),a=Object(n.a)(e,2),t=a[0],c=a[1],l=Object(s.useState)(!1),i=Object(n.a)(l,2),x=i[0],N=i[1];return Object(m.jsxs)("div",{className:"users-page",children:[Object(m.jsx)(j,{}),Object(m.jsxs)("main",{className:"users-page__content",children:[Object(m.jsx)(r,{}),Object(m.jsxs)("div",{className:"users-page__users",children:[Object(m.jsxs)("div",{className:"users-page__subheader",children:[Object(m.jsx)("h2",{className:"subheader__name",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(m.jsx)(b,{type:"button",icon:O,text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",callback:function(){N(!0)}})]}),Object(m.jsxs)("table",{className:"users-page__table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"table__headers",children:[Object(m.jsx)("td",{className:"table__header",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(m.jsx)("td",{className:"table__header",children:"\u0418\u043c\u044f"}),Object(m.jsx)("td",{className:"table__header",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(m.jsx)("td",{className:"table__header",children:"E-mail"}),Object(m.jsx)("td",{className:"table__header",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(m.jsx)("td",{className:"table__header"})]})}),Object(m.jsx)("tbody",{children:t&&t.map((function(e,a){return Object(m.jsxs)("tr",{className:"table__row",children:[Object(m.jsx)("td",{className:"table__field",children:e.lastName}),Object(m.jsx)("td",{className:"table__field",children:e.firstName}),Object(m.jsx)("td",{className:"table__field",children:e.middleName}),Object(m.jsx)("td",{className:"table__field",children:e.email}),Object(m.jsx)("td",{className:"table__field",children:e.login}),Object(m.jsx)("td",{className:"table__buttons-field",children:Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)(b,{type:"button",text:null,icon:h}),Object(m.jsx)(b,{type:"button",text:null,icon:_})]})})]},"user_".concat(a+1))}))})]})]}),x&&Object(m.jsx)(u,{addUser:function(e){c([e].concat(Object(d.a)(t)))},closeModal:function(){return N(!1)}})]})]})};var f=function(){return Object(m.jsx)(p,{})};t(15);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e4287426.chunk.js.map