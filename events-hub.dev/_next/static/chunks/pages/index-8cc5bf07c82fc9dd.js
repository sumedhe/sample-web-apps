(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1230)}])},1230:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(5893),r=n(7294),o=n(4671),l={authority:"https://api.asg.io/t/sume/oauth2/token",client_id:"fGmoN0pP_jGblhE69ekpZYHue00a",redirect_uri:"http://localhost:9000",response_type:"code",scope:"openid profile email",post_logout_redirect_uri:"http://localhost:9000",silent_redirect_uri:"http://localhost:9000"},s=()=>{let[e,t]=(0,r.useState)(null),[n,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let e=async()=>{try{let e=await fetch("/config.json");if(e.ok){let t=await e.json();s(t)}else throw Error("Failed to fetch config data.")}catch(e){console.error(e)}};e()},[]),(0,r.useEffect)(()=>{let e=new o.UserManager(l);e.getUser().then(e=>{e&&!e.expired&&t(e)}),e.signinRedirectCallback().then(e=>{e&&(console.log(e),t(e))})},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"OIDC Sample Application"}),e?(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["Welcome, ",e.profile.name]}),(0,i.jsxs)("p",{children:["Username: ",e.username]}),(0,i.jsxs)("p",{children:["Email: ",e.profile.email]}),(0,i.jsx)("button",{onClick:()=>{let e=new o.UserManager(l);e.signoutRedirect()},children:"Logout"})]}):(0,i.jsx)("button",{onClick:()=>{let e=new o.UserManager({...n});e.signinRedirect()},children:"Login"})]})}}},function(e){e.O(0,[293,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);