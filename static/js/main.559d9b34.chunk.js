(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{15:function(e,t,r){var s=r(23);e.exports={userList:function(){return s.get("https://randomuser.me/api/?results=50&nat=us")}}},42:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r(2),n=r.n(c),a=r(12),i=r.n(a),l=r(13),o=r(14),j=r(17),d=r(16),h=r(15),u=r.n(h);var b=function(e){return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(s.jsx)("tbody",{children:e.children})]})};var m=function(){return Object(s.jsxs)("form",{className:"form-inline",children:[Object(s.jsxs)("div",{className:"form-group mx-sm-3 mb-2",children:[Object(s.jsx)("label",{for:"searchInput",className:"sr-only",children:"Password"}),Object(s.jsx)("input",{type:"search",className:"form-control",id:"inputSearch",placeholder:"Search"})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Search"})]})};var O=function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:Object(s.jsx)("img",{src:e.image,alt:e.lastName})}),Object(s.jsxs)("td",{children:[e.firstName," ",e.lastName]}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.dob})]})},x=function(e){Object(j.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={users:[]},e.renderUsers=function(){return e.filteredUsers().sort(e.sortUsers).map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.image,alt:"user"})}),Object(s.jsx)("td",{children:e.first}),Object(s.jsx)("td",{children:e.last}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:new Date(e.dob).toDateString()})]},t)}))},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;u.a.userList().then((function(t){e.setState({users:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"filteredUsers",value:function(){var e=this.state.search.toLowerCase();return this.state.users.filter((function(t){return t.first.toLowerCase().includes(e)||t.last.toLowerCase().includes(e)}))}},{key:"render",value:function(){var e={header:{backgroundColor:"#6495ED",padding:"1rem",margin:"0"},input:{marginLeft:"1rem",marginRight:"auto",padding:"5px"},search:{marginLeft:"1rem"}};return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{children:Object(s.jsx)("h1",{style:e.header,children:"Search for Employee"})})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{style:e.search,children:"Search:"}),Object(s.jsx)(m,{onClick:function(e){e.preventDefault()},style:e.input})]}),Object(s.jsx)(b,{children:this.state.users.map((function(e){return Object(s.jsx)(O,{image:e.picture.large,firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,dob:e.dob.date},e.id)}))})]})}}]),r}(c.Component);var p=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(x,{})})};r(41);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.559d9b34.chunk.js.map