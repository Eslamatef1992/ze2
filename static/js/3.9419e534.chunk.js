(this.webpackJsonpzentra=this.webpackJsonpzentra||[]).push([[3],{563:function(e,t,a){"use strict";a.r(t);var s=a(6),r=a(1),l=a(555),c=a(279),n=a(8),o=a(20),i=a(11),d=a(33),u=a(2),j=(a.p,a(4)),b=a(5),h=a(559),m=a(278),v=a(15),x=a(45),O=a(28),p=a(0),g=function(e){var t,a,o,d,g=e.modal,f=e.setModal,w=Object(r.useState)({email:"",code:"",password:""}),y=Object(s.a)(w,2),N=y[0],M=y[1],P=Object(r.useState)(!1),S=Object(s.a)(P,2),k=S[0],F=S[1],C=Object(r.useState)(""),z=Object(s.a)(C,2),A=z[0],q=z[1],_=Object(r.useState)("email"),L=Object(s.a)(_,2),V=L[0],D=L[1],J=new x.a,T=Object(n.d)((function(e){return e.auth.lang}));return Object(p.jsx)(h.a,{className:"en"===T?"en fade addProduct mt-4":"ar fade addProduct mt-4",style:{textAlign:"en"===T?"left":"right"},show:g,onHide:function(){f()},children:Object(p.jsxs)(i.AvForm,{className:"form-horizontal",onValidSubmit:function(e){e.preventDefault();var t={};F(!0),"email"===V?(t.email=null===N||void 0===N?void 0:N.email,null===J||void 0===J||J.forgetPassword("forgetPassword",t).then((function(e){null!==e&&void 0!==e&&e.status&&D("code")}))):"code"===V?(t.email=null===N||void 0===N?void 0:N.email,t.code=null===N||void 0===N?void 0:N.code,null===J||void 0===J||J.forgetPassword("verifiedForgetPasswordCode",t).then((function(e){var t;null!==e&&void 0!==e&&e.status&&(q(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.accessToken),D("password"))}))):(t.new_password=null===N||void 0===N?void 0:N.password,O.a.setJwt(A),null===J||void 0===J||J.forgetPassword("changePasswordForForgetPassword",t).then((function(e){null!==e&&void 0!==e&&e.status&&(v.b.success("Password Updated Successfully."),f())}))),F(!1)},children:[Object(p.jsxs)(h.a.Header,{children:[Object(p.jsx)(h.a.Title,{children:"Forget Password"}),Object(p.jsx)(m.a,{variant:"",className:"close",style:{right:"en"===T?"0":"auto",left:"ar"===T?"0":"auto"},onClick:function(){f()},children:Object(p.jsx)("span",{children:"\xd7"})})]}),Object(p.jsx)(h.a.Body,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(c.a,{md:12,children:Object(p.jsx)(i.AvField,{label:u.a[T][V],type:"email"!==V?"text":"email",placeholder:u.a[T][V],bsSize:"lg",name:V,validate:{required:{value:!0,errorMessage:u.a[T].field_required}},value:N[V],onChange:function(e){M(Object(b.a)(Object(b.a)({},N),{},Object(j.a)({},V,e.target.value)))}})})})}),Object(p.jsxs)(h.a.Footer,{children:[Object(p.jsx)(m.a,{onClick:function(){"code"===V?D("email"):"password"===V?D("code"):f()},variant:"danger light",children:"email"!==V?null===(t=u.a[T])||void 0===t?void 0:t.back:null===(a=u.a[T])||void 0===a?void 0:a.close}),Object(p.jsx)(m.a,{variant:"primary",type:"submit",disabled:k,children:"email"!==V?null===(o=u.a[T])||void 0===o?void 0:o.next:null===(d=u.a[T])||void 0===d?void 0:d.submit})]})]})})};t.default=Object(n.b)((function(e){return{errorMessage:e.auth.errorMessage,successMessage:e.auth.successMessage,showLoading:e.auth.showLoading}}))((function(e){var t=Object(o.o)(),a=Object(r.useState)(!1),j=Object(s.a)(a,2),b=j[0],h=j[1],m=Object(r.useState)(""),v=Object(s.a)(m,2),x=v[0],O=v[1],f=Object(r.useState)(""),w=Object(s.a)(f,2),y=w[0],N=w[1],M=Object(r.useState)(!1),P=Object(s.a)(M,2),S=P[0],k=P[1],F=Object(n.c)(),C=Object(n.d)((function(e){return e.auth})),z=Object(n.d)((function(e){return e.auth.lang}));return Object(p.jsxs)("div",{className:"login-wrapper ".concat(z),children:[Object(p.jsx)("span",{className:"login-border"}),Object(p.jsxs)("div",{className:"row w-100 vh-100",children:[Object(p.jsx)("div",{className:"col-md-6 one",children:Object(p.jsxs)("div",{className:"position-absolute welcome-text",style:{top:"47%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"9",textWrap:"nowrap",textAlign:"center"},children:[Object(p.jsx)("h3",{className:"text-white",children:"Zentra"}),Object(p.jsx)("h3",{className:"text-white",children:"Welcome to Dashboard"})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"authincation-content auth-form text-center",children:[e.errorMessage&&Object(p.jsx)("div",{className:"text-danger",children:e.errorMessage}),e.successMessage&&Object(p.jsx)("div",{className:"bg-green-300 text-green-900 border border-green-900 p-1 my-2",children:e.successMessage}),Object(p.jsx)("i",{className:"la la-users text-white mb-3",style:{fontSize:"4rem"}}),Object(p.jsxs)(i.AvForm,{onValidSubmit:function(e){e.preventDefault(),F(Object(d.o)(!0)),F(Object(d.p)(x,y,t))},className:"login-form",children:[Object(p.jsxs)(l.a,{children:[Object(p.jsx)(c.a,{md:12,className:"form-group mb-2",children:Object(p.jsx)(i.AvField,{name:"email",type:"email",value:x,errorMessage:"Please Enter a Valid Value",className:"radius-10",style:{height:"50px"},validate:{required:{value:!0,errorMessage:u.a[z].field_required}},placeholder:u.a[z].email,onChange:function(e){return O(e.target.value)}})}),Object(p.jsxs)(c.a,{md:12,className:"form-group position-relative",children:[Object(p.jsx)(i.AvField,{name:"password",type:S?"text":"password",value:y,className:"radius-10",style:{height:"50px"},errorMessage:"Please enter a valid password",validate:{required:{value:!0,errorMessage:u.a[z].field_required}},placeholder:u.a[z].password,onChange:function(e){return N(e.target.value)}}),S?Object(p.jsx)("i",{className:"la la-eye-slash position-absolute cursor-pointer",style:{top:"16px",right:"en"===z?"8%":"auto",left:"ar"===z?"8%":"auto"},onClick:function(){return k(!1)}}):Object(p.jsx)("i",{className:"la la-eye position-absolute cursor-pointer",style:{top:"16px",right:"en"===z?"8%":"auto",left:"ar"===z?"8%":"auto"},onClick:function(){return k(!0)}}),Object(p.jsx)("p",{style:{fontSize:"13px",textAlign:"start",margin:"0",color:"#dedede",cursor:"pointer"},onClick:function(){return h(!0)},children:"Forget my Password..?"})]})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsxs)("button",{type:"submit",className:"btn btn-primary d-flex align-items-center justify-content-center btn-block mb-4 radius-10 h-40",disabled:null===C||void 0===C?void 0:C.showLoading,style:{gap:"12px"},children:[u.a[z].login,Object(p.jsx)("i",{className:"la la-sign-in-alt fs-24"})]})})]}),Object(p.jsx)("div",{className:"text-center mb-2",children:Object(p.jsxs)("label",{className:"poweredBy d-block text-white",style:{textWrap:"nowrap",fontSize:"12px"},children:["Powered by"," ",Object(p.jsxs)("a",{href:"https://www.leaptechkw.com/",target:"_blank",rel:"noreferrer",style:{color:"#fff"},children:["Leap Tech kw"," "]})]})})]})})]}),b&&Object(p.jsx)(g,{modal:b,setModal:function(){return h(!1)}})]})}))}}]);
//# sourceMappingURL=3.9419e534.chunk.js.map