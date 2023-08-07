(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6616)}])},6616:function(e,n,i){"use strict";i.r(n);var s=i(5893),l=i(7294),r=i(4671);i(6260);var t=i(5142),c=i(967),o=i(5927),d=i(5538),a=i(650),h=i(3272),x=i(4623),j=i(8005),u=i(2256);n.default=()=>{let[e,n]=(0,l.useState)(null),[i,Z]=(0,l.useState)("home"),[g,p]=(0,l.useState)(!1),[f,m]=(0,l.useState)(null);(0,l.useEffect)(()=>{let e=async()=>{try{let e=await fetch("/config.json");if(e.ok){let n=await e.json();m(n)}else throw Error("Failed to fetch config data.")}catch(e){console.error(e)}};e()},[]),(0,l.useEffect)(()=>{if(f){let e=new r.UserManager(f);e.getUser().then(e=>{e&&!e.expired&&n(e)}),e.signinRedirectCallback().then(e=>{console.log("Callback response:",e),e?(n(e),window.location.replace("/")):console.error("No user in response.")}).catch(e=>{console.error("Error in signinRedirectCallback:",e)})}},[f]);let v=()=>{let e=new r.UserManager(f);e.signinRedirect()},w=()=>{p(!g)};return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:(0,s.jsxs)(h.Z,{pointing:!0,secondary:!0,inverted:!0,style:{background:"#311B92",color:"#fff"},children:[(0,s.jsx)(h.Z.Item,{children:(0,s.jsx)("h4",{children:"EventsHub"})}),(0,s.jsx)(h.Z.Menu,{position:"right",children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.Z.Item,{style:{padding:"5px"},children:(0,s.jsx)("div",{children:(0,s.jsxs)(t.Z,{as:"a",image:!0,onClick:w,color:"violet",children:[(0,s.jsx)("img",{src:"/user.jpg",alt:"User Profile"}),e.profile.username]})})}),(0,s.jsx)(h.Z.Item,{name:"logout",active:"logout"===i,onClick:()=>{let e=new r.UserManager(f);e.signoutRedirect()}})]}):(0,s.jsx)(h.Z.Item,{name:"login",active:"login"===i,onClick:v})})]})}),e?(0,s.jsxs)("div",{children:[(0,s.jsxs)("header",{style:{padding:"20px",textAlign:"center",background:"#130e29",color:"#fff"},children:[(0,s.jsx)("h1",{children:"Welcome to Events Hub"}),(0,s.jsx)("p",{children:"Your one-stop destination for exciting events!"}),(0,s.jsx)(c.Z,{onClick:w,children:g?"Hide Profile":"View Profile"})]}),g&&(0,s.jsx)("section",{style:{padding:"40px"},children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Profile Information"}),(0,s.jsx)(o.Z,{definition:!0,children:(0,s.jsxs)(o.Z.Body,{children:[(0,s.jsxs)(o.Z.Row,{children:[(0,s.jsx)(o.Z.Cell,{width:3,children:"Username"}),(0,s.jsx)(o.Z.Cell,{children:e.profile.username})]}),(0,s.jsxs)(o.Z.Row,{children:[(0,s.jsx)(o.Z.Cell,{children:"Name"}),(0,s.jsxs)(o.Z.Cell,{children:[e.profile.given_name," ",e.profile.family_name]})]}),(0,s.jsxs)(o.Z.Row,{children:[(0,s.jsx)(o.Z.Cell,{children:"Email"}),(0,s.jsx)(o.Z.Cell,{children:e.profile.email})]})]})}),(0,s.jsx)("h2",{children:"Token Information"}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(o.Z,{definition:!0,children:(0,s.jsxs)(o.Z.Body,{children:[(0,s.jsxs)(o.Z.Row,{children:[(0,s.jsx)(o.Z.Cell,{width:3,children:"Access Token"}),(0,s.jsx)(o.Z.Cell,{children:(0,s.jsx)(d.Z.TextArea,{rows:1,value:e.access_token,readOnly:!0})})]}),(0,s.jsxs)(o.Z.Row,{children:[(0,s.jsx)(o.Z.Cell,{children:"ID Token"}),(0,s.jsx)(o.Z.Cell,{children:(0,s.jsx)(d.Z.TextArea,{rows:5,value:e.id_token,readOnly:!0})})]})]})})})]})}),(0,s.jsxs)("section",{style:{padding:"40px",background:"#f5f1ff",height:"95vh"},children:[(0,s.jsx)("h2",{children:"Featured Events"}),(0,s.jsx)(j.Z,{stackable:!0,columns:3,children:(0,s.jsxs)(j.Z.Row,{children:[(0,s.jsx)(j.Z.Column,{children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(a.Z,{src:"/event1.jpg",wrapped:!0,ui:!1}),(0,s.jsxs)(u.Z.Content,{children:[(0,s.jsx)(u.Z.Header,{children:"Event 1"}),(0,s.jsx)(u.Z.Meta,{children:"July 30, 2023"}),(0,s.jsx)(u.Z.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis turpis ut velit ultricies, vel convallis lectus mattis."})]})]})}),(0,s.jsx)(j.Z.Column,{children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(a.Z,{src:"/event2.jpg",wrapped:!0,ui:!1}),(0,s.jsxs)(u.Z.Content,{children:[(0,s.jsx)(u.Z.Header,{children:"Event 2"}),(0,s.jsx)(u.Z.Meta,{children:"August 15, 2023"}),(0,s.jsx)(u.Z.Description,{children:"Nunc vel arcu non ligula posuere ultricies. Maecenas quis nibh ut quam facilisis suscipit."})]})]})}),(0,s.jsx)(j.Z.Column,{children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(a.Z,{src:"/event3.jpg",wrapped:!0,ui:!1}),(0,s.jsxs)(u.Z.Content,{children:[(0,s.jsx)(u.Z.Header,{children:"Event 3"}),(0,s.jsx)(u.Z.Meta,{children:"September 5, 2023"}),(0,s.jsx)(u.Z.Description,{children:"Sed et tellus non massa aliquam lobortis in ac urna. Proin euismod libero id erat tincidunt pharetra."})]})]})})]})})]})]}):(0,s.jsx)(x.Z,{inverted:!0,textAlign:"center",vertical:!0,style:{height:"95vh",backgroundImage:'url("/background.jpg")',backgroundSize:"cover"},children:(0,s.jsxs)("div",{style:{paddingTop:"300px"},children:[(0,s.jsx)("h1",{style:{fontSize:"4em",fontWeight:"bold",color:"#fff"},children:"Discover Exciting Events"}),(0,s.jsx)(c.Z,{size:"huge",onClick:v,color:"violet",children:"Log In to Explore"})]})})]})}}},function(e){e.O(0,[293,488,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);