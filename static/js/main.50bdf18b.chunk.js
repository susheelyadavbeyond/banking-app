(this["webpackJsonpbanking-app"]=this["webpackJsonpbanking-app"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(6),r=a.n(s),l=(a(11),a(12),a(2)),i=[{email:"admin@admin.com",password:"abc123",fullname:"Admin Account",type:"Savings Peso",number:"47290539480",balance:1e3,isAdmin:!0},{email:"jeff@gmail.com",password:"abc123",fullname:"Jeffrey de Lara",type:"Savings Peso",number:"47290539481",balance:1029300.43,isAdmin:!0},{email:"jeff2@gmail.com",password:"abc123",fullname:"Juan dela Cruz",type:"Savings Peso",number:"47290539482",balance:392830.22,isAdmin:!1},{email:"user24@gmail.com",password:"abc123",fullname:"Peter de Castro",type:"Savings Peso",number:"47290539483",balance:102938.34,isAdmin:!1},{email:"user34@gmail.com",password:"abc123",fullname:"Noli Enriquez",type:"Checking Peso",number:"47290539484",balance:837495.38,isAdmin:!1},{email:"kibabe@gmail.com",password:"abc123",fullname:"Karen Davila",type:"Checking Peso",number:"47290539485",balance:574839.58,isAdmin:!1}],o=a(0),u=function(){return Object(o.jsxs)("h1",{id:"logo",children:[Object(o.jsx)("i",{className:"bx bxs-paper-plane"})," Avion Bank"]})},b=function(e){return Object(o.jsxs)("section",{id:"side-menu",children:[Object(o.jsx)(u,{}),Object(o.jsx)(j,{changePage:e.changePage,logoutHandler:e.logoutHandler})]})},j=function(e){return Object(o.jsxs)("ul",{children:[Object(o.jsx)(m,{onClickHandler:e.changePage,page:"home",icon:"bx bx-home",text:"Home"}),Object(o.jsx)(m,{onClickHandler:e.changePage,page:"create-account",icon:"bx bx-user-pin",text:"Create Account"}),Object(o.jsx)(m,{onClickHandler:e.changePage,page:"transfer",icon:"bx bx-transfer",text:"Fund Transfer"}),Object(o.jsx)(m,{onClickHandler:e.changePage,page:"deposit",icon:"bx bx-money",text:"Deposit"}),Object(o.jsx)(m,{onClickHandler:e.changePage,page:"withdraw",icon:"bx bx-log-out-circle",text:"Withdraw"}),Object(o.jsx)(m,{onClickHandler:e.logoutHandler,icon:"bx bx-log-out",text:"Logout"})]})},m=function(e){var t=e.icon,a=e.text,n=e.page;return Object(o.jsx)("li",{children:Object(o.jsxs)("a",{onClick:function(t){n?(t.preventDefault(),e.onClickHandler(n)):(t.preventDefault(),e.onClickHandler())},href:"#",children:[Object(o.jsx)("i",{className:t})," ",a]})})},d=a(3);function g(e){return e.toLocaleString(void 0,{maximumFractionDigits:2})}function f(e){return parseFloat(e.replace(/,/g,""))||0}function O(e){var t,a=JSON.parse(localStorage.getItem("users")),n=Object(d.a)(a);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(c.number===e)return c}}catch(s){n.e(s)}finally{n.f()}return!1}function x(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=1;"add"===a&&(c=1),"subtract"===a&&(c=-1);var s,r=JSON.parse(localStorage.getItem("users")),l=Object(d.a)(r);try{for(l.s();!(s=l.n()).done;){var i=s.value;i.number===e&&(i.balance+=t*c)}}catch(o){l.e(o)}finally{l.f()}n(r),localStorage.setItem("users",JSON.stringify(r))}function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}var p=function(e){var t=e.type,a=e.accountNumber,n=e.balance,c=e.fullname;return Object(o.jsxs)("div",{className:"account",children:[Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)(v,{fullname:c}),Object(o.jsx)(y,{type:t}),Object(o.jsx)(S,{accountNumber:a})]}),Object(o.jsx)(N,{balance:g(n)})]})},v=function(e){return Object(o.jsx)("h1",{children:e.fullname})},y=function(e){return Object(o.jsx)("h3",{children:e.type})},S=function(e){return Object(o.jsx)("div",{children:e.accountNumber})},N=function(e){var t=e.balance;return Object(o.jsx)("div",{className:"balance",children:t})},w=function(e){var t=e.users.map((function(e){return Object(o.jsx)(p,{fullname:e.fullname,type:e.type,accountNumber:e.number,balance:e.balance})}));return Object(o.jsx)("section",{id:"main-content",children:t})},C=function(e){return Object(o.jsx)("div",{className:"notif ".concat(e.style),children:e.message})},A=function(e){var t=function(){return Math.floor(1e9+9e9*Math.random())},a=Object(n.useState)({message:"Create a new client account.",style:"left"}),c=Object(l.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(0),u=Object(l.a)(i,2),b=u[0],j=u[1],m=Object(n.useState)(t()),d=Object(l.a)(m,2),O=d[0],x=d[1];return Object(o.jsx)("section",{id:"main-content",children:Object(o.jsxs)("form",{id:"form",onSubmit:function(a){a.preventDefault();var n=a.target.elements;(function(t){var a=e.users,n=!1;return a.forEach((function(e){e.email===t.email&&(n=!0)})),n?(r({message:"This email already exists. Try again.",style:"danger"}),!1):(r(""),a.unshift(t),e.setUsers(a),localStorage.setItem("users",JSON.stringify(a)),r({message:"Successfully saved.",style:"success"}),!0)})({email:n.email.value,password:n.password.value,fullname:n.fullname.value,type:n.accountType.value,number:n.accountNumber.value,isAdmin:!1,balance:f(n.initialBalance.value)})&&(n.email.value="",n.password.value="",n.fullname.value="",n.accountNumber.value=x(t()),n.initialBalance.value=j(0))},children:[Object(o.jsx)("h1",{children:"Create Account"}),Object(o.jsx)(C,{message:s.message,style:s.style}),Object(o.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(o.jsx)("input",{id:"fullname",type:"text",autoComplete:"off",name:"fullname"}),Object(o.jsx)("hr",{}),Object(o.jsx)("label",{htmlFor:"account-number",children:"Account # (Randomly Generated)"}),Object(o.jsx)("input",{id:"account-number",name:"accountNumber",className:"right",value:O,type:"number",disabled:!0}),Object(o.jsx)("label",{htmlFor:"balance",children:"Initial balance"}),Object(o.jsx)("input",{id:"balance",type:"text",value:g(b),onChange:function(e){var t=f(e.target.value)||0;j(t)},name:"initialBalance",className:"right"}),Object(o.jsx)("label",{htmlFor:"account-type",children:"Account Type"}),Object(o.jsxs)("select",{name:"accountType",children:[Object(o.jsx)("option",{value:"Checking Account",children:"Checking Account"}),Object(o.jsx)("option",{value:"Savings Accounts",children:"Savings Account"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(o.jsx)("input",{id:"email",type:"email",name:"email"}),Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{id:"password",type:"password",name:"password"}),Object(o.jsx)("input",{value:"Create Account",className:"btn",type:"submit"})]})})},H=function(e){var t=Object(n.useState)(e.users),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(c),i=Object(l.a)(r,2),u=i[0],b=i[1],j=Object(n.useState)({balance:0}),m=Object(l.a)(j,2),d=m[0],f=m[1],O=Object(n.useState)({balance:0}),x=Object(l.a)(O,2),h=x[0],p=x[1],v=Object(n.useState)({message:"Transfer money from one account to another.",style:"left"}),y=Object(l.a)(v,2),S=y[0],N=y[1],w=Object(n.useState)(0),A=Object(l.a)(w,2),H=A[0],P=A[1],k=c.map((function(e){return Object(o.jsxs)("option",{value:e.number,children:[e.fullname," #",e.number]})})),F=u.map((function(e){return Object(o.jsxs)("option",{value:e.number,children:[e.fullname," #",e.number]})}));return Object(o.jsx)("section",{id:"main-content",children:Object(o.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault();var a=parseFloat(t.target.elements.amount.value.replace(/,/g,""));if(a<=0)return!1;console.log("Transfer");var n=JSON.parse(localStorage.getItem("users"));if(0!==d.number&&0!==h.number){var c=!1;n.forEach((function(e){e.number===d.number&&e.balance-a>=0&&(e.balance-=a,f(e),c=!0)})),c?(n.forEach((function(e){e.number===h.number&&(e.balance+=a,p(e))})),N({message:"Successful transfer.",style:"success"}),s(n),e.setUsers(n),localStorage.setItem("users",JSON.stringify(n)),P(0)):N({message:"Transfer failed.",style:"danger"})}else N({message:"Incomplete information. Missing sender or receiver.",style:"danger"})},children:[Object(o.jsx)("h1",{children:"Fund Transfer"}),Object(o.jsx)(C,{message:S.message,style:S.style}),Object(o.jsx)("h2",{children:"Sender"}),Object(o.jsx)("label",{children:"From (Sender)"}),Object(o.jsxs)("select",{onChange:function(e){var t=e.target.value,a=[],n=null;c.forEach((function(e){e.number===t?n=e:a.push(e)})),f(n),b(a),p({number:0,balance:0})},name:"sender",children:[Object(o.jsx)("option",{children:"Select Sender"}),k]}),Object(o.jsx)("label",{children:"Current balance"}),Object(o.jsx)("input",{type:"text",className:"right",value:g(d.balance),disabled:!0}),Object(o.jsx)("label",{children:"Amount to Transfer"}),Object(o.jsx)("input",{type:"text",name:"amount",value:g(H),onChange:function(e){var t=parseFloat(e.target.value.replace(/,/g,""))||0;P(t)},autoComplete:"off",className:"right big-input"}),Object(o.jsx)("div",{className:"transfer-icon",children:Object(o.jsx)("i",{className:"bx bx-down-arrow-alt"})}),Object(o.jsx)("h2",{children:"Receiver"}),Object(o.jsx)("label",{children:"To (Receiver)"}),Object(o.jsxs)("select",{value:h.number||0,onChange:function(e){var t=e.target.value,a=null;c.forEach((function(e){e.number===t&&(a=e)})),p(a)},name:"receiver",children:[Object(o.jsx)("option",{children:"Select Receiver"}),F]}),Object(o.jsx)("label",{children:"Current balance"}),Object(o.jsx)("input",{type:"text",className:"right",value:g(h.balance),disabled:!0}),Object(o.jsx)("input",{type:"submit",className:"btn",value:"Transfer Fund"})]})})},P=function(e){var t=JSON.parse(localStorage.getItem("users")),a=e.setNotif,c=e.notif,s=Object(n.useState)(t),r=Object(l.a)(s,2),i=r[0],u=r[1],b=Object(n.useState)({balance:0}),j=Object(l.a)(b,2),m=j[0],p=j[1],v=Object(n.useState)(0),y=Object(l.a)(v,2),S=y[0],N=y[1],w=i.map((function(e){return Object(o.jsxs)("option",{value:e.number,children:[e.fullname," #",e.number]})})),A="withdraw"===e.page?"bx bx-down-arrow-alt":"bx bx-up-arrow-alt";return Object(o.jsx)("section",{id:"main-content",children:Object(o.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault();var n=f(t.target.elements.amount.value),c=t.target.elements.account.value;if(n>0&&"0"!==c){var s,r=Object(d.a)(i);try{for(r.s();!(s=r.n()).done;){var l=s.value;if(l.number===c){x(l.number,n,e.type,e.setUsers),p(O(l.number)),u(JSON.parse(localStorage.getItem("users"))),N(0),a({message:"".concat(h(e.page)," successful."),style:"success"});break}}}catch(o){r.e(o)}finally{r.f()}}else a({message:"".concat(h(e.page)," failed."),style:"danger"})},children:[Object(o.jsx)("h1",{children:e.page}),Object(o.jsx)(C,{message:c.message,style:c.style}),Object(o.jsx)("label",{children:"Account"}),Object(o.jsxs)("select",{name:"account",onChange:function(e){a(c);var t,n=e.target.value,s=Object(d.a)(i);try{for(s.s();!(t=s.n()).done;){var r=t.value;if(r.number===n){p(r);break}}}catch(l){s.e(l)}finally{s.f()}},children:[Object(o.jsx)("option",{value:"0",children:"Select Account"}),w]}),Object(o.jsx)("label",{children:"Current balance"}),Object(o.jsx)("input",{type:"text",className:"right",value:g(m.balance),disabled:!0}),Object(o.jsx)("div",{className:"transfer-icon",children:Object(o.jsx)("i",{class:A})}),Object(o.jsxs)("label",{children:["Amount to ",e.page]}),Object(o.jsx)("input",{type:"text",name:"amount",value:S,onChange:function(e){var t=g(f(e.target.value));N(t)},autoComplete:"off",className:"right big-input"}),Object(o.jsx)("button",{type:"submit",className:"btn",children:e.page})]})})},k=function(e){var t=Object(n.useState)("home"),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(e.users),i=Object(l.a)(r,2),u=i[0],j=i[1],m=Object(n.useState)({message:"",style:""}),d=Object(l.a)(m,2),g=d[0],f=d[1],O=function(e){s(e),"withdraw"===e&&f({message:"Select an account to withdraw money from.",style:"left"}),"deposit"===e&&f({message:"Select an account to deposit money.",style:"left"})};return"home"===c?Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{changePage:O,logoutHandler:e.logoutHandler}),Object(o.jsx)(w,{users:u})]}):"create-account"===c?Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{changePage:O,logoutHandler:e.logoutHandler}),Object(o.jsx)(A,{users:u,setUsers:j})]}):"transfer"===c?Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{changePage:O,logoutHandler:e.logoutHandler}),Object(o.jsx)(H,{users:u,setUsers:j})]}):"deposit"===c?Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{changePage:O,logoutHandler:e.logoutHandler}),Object(o.jsx)(P,{users:u,setUsers:j,notif:g,setNotif:f,type:"add",page:c})]}):"withdraw"===c?Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{changePage:O,logoutHandler:e.logoutHandler}),Object(o.jsx)(P,{users:u,setUsers:j,notif:g,setNotif:f,type:"subtract",page:c})]}):void 0},F=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),b=i[0],j=i[1];return Object(o.jsx)("div",{id:"login-page",children:Object(o.jsxs)("div",{id:"login",children:[Object(o.jsx)(u,{}),Object(o.jsx)(C,{message:e.notif.message,style:e.notif.style}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.loginHandler(c,b)},children:[Object(o.jsx)("label",{htmlFor:"username",children:"Username"}),Object(o.jsx)("input",{id:"username",autoComplete:"off",onChange:function(e){s(e.target.value)},value:c,type:"text"}),Object(o.jsx)("label",{htmlFor:"password",children:"Password"}),Object(o.jsx)("input",{id:"password",autoComplete:"off",onChange:function(e){j(e.target.value)},value:b,type:"password"}),Object(o.jsx)("button",{type:"submit",className:"btn",children:"Login"})]})]})})},I=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({message:"",style:""}),r=Object(l.a)(s,2),u=r[0],b=r[1],j=Object(n.useState)(!1),m=Object(l.a)(j,2),d=m[0],g=m[1];localStorage.getItem("users")||localStorage.setItem("users",JSON.stringify(i));var f=JSON.parse(localStorage.getItem("users"));return a?d?Object(o.jsx)(k,{users:f,logoutHandler:function(){c(!1),g(!1),b({message:"You have logged out.",style:"success"})}}):"You are a client.":Object(o.jsx)(F,{loginHandler:function(e,t){(function(e,t){var a=!1;return f.forEach((function(n){n.email===e&&n.password===t&&(n.isAdmin&&g(!0),b(""),a=!0)})),a||b({message:"Wrong username and password.",style:"danger"}),a})(e,t)&&c(!0)},notif:u,isLoggedIn:a})};var T=function(){return Object(o.jsx)(I,{})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),J()}},[[14,1,2]]]);
//# sourceMappingURL=main.50bdf18b.chunk.js.map