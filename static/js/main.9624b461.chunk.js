(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(70)},50:function(e,t,n){},51:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),c=(n(50),n(29)),l=(n(51),n(99)),s=n(103),u=n(14),d=n.n(u),m="http://192.168.130.2:1337",g=function(e){var t=e.name,n=e.image,o=e.id;return a.createElement(l.a,null,a.createElement("img",{width:"100px",src:n,alt:""}),t,a.createElement(s.a,{variant:"outlined",color:"primary",onClick:function(){return e=o,void d.a.get(m+"/carts").set("Authorization","Bearer "+localStorage.getItem("__jwt")).then(function(t){console.log(t);var n=t.body[0],a=n.products.findIndex(function(t){return t.id===e});a<0?n.products.push({quantity:1,product_id:e}):n.products[a].quantity++,console.log(n),d.a.put(m+"/carts/"+n.id).set("Authorization","Bearer "+localStorage.getItem("__jwt")).set("Content-Type","application/json").send({products:{test:"hola"}}).then(console.log)});var e}},"Agregar"))},f=n(101),p=n(102),h=(n(69),function(){return a.createElement(f.a,{container:!0,justify:"center"},a.createElement(f.a,{item:!0,xs:6},a.createElement(l.a,{className:"login-form"},a.createElement("h1",null,"Iniciar Sesi\xf3n"),a.createElement("form",{onSubmit:function(e){var t=null;e.preventDefault(),d.a.post(m+"/auth/local").send({identifier:e.target.email.value,password:e.target.password.value}).then(function(e){return localStorage.setItem("__jwt",e.body.jwt),localStorage.setItem("__user",e.body.user.id),t=e.body.user,d.a.get(m+"/carts?user.id="+e.body.user.id).set("Authorization","Bearer "+e.body.jwt)}).then(function(e){0===e.body.length?d.a.post(m+"/carts").set("Authorization","Bearer "+localStorage.getItem("__jwt")).send({user:t,products:"[]"}).then(function(){window.location.href="/"}):window.location.href="/"})}},a.createElement(p.a,{id:"email",label:"Correo Electr\xf3nico",fullWidth:!0,margin:"normal"}),a.createElement(p.a,{id:"password",label:"Contrase\xf1a",type:"password",fullWidth:!0,margin:"normal"}),a.createElement(s.a,{color:"primary",variant:"contained",type:"submit"},"Entrar")))))});var w=function(){var e=o.a.useState([]),t=Object(c.a)(e,2),n=t[0],a=t[1],r=o.a.useState([]),i=Object(c.a)(r,2),l=i[0],u=i[1],p=o.a.useState(""),w=Object(c.a)(p,2),y=w[0],E=w[1];return o.a.useEffect(function(){var e="";y&&(e+="?category.id="+y),d.a.get(m+"/products"+e).then(function(e){console.log("productos"),a(e.body)})},[y]),o.a.useEffect(function(){d.a.get(m+"/categories").then(function(e){console.log("categorias"),e.body.push({id:"",name:"Todos"}),u(e.body)})},[]),localStorage.getItem("__jwt")?o.a.createElement("div",{className:"App"},l.map(function(e){return o.a.createElement(s.a,{key:e.id,variant:y===e.id?"contained":"text",color:"primary",onClick:function(){E(e.id)}},e.name)}),o.a.createElement(s.a,{color:"secondary",onClick:function(){localStorage.removeItem("__jwt"),window.location.href="/"},style:{float:"right"}},"Cerrar Sesi\xf3n"),o.a.createElement(f.a,{container:!0,spacing:2},n.map(function(e){return 0===e.images.length?null:o.a.createElement(f.a,{item:!0,xs:4,key:e.id},o.a.createElement(g,{name:e.name,id:e.id,image:m+e.images[0].url}))}))):o.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.9624b461.chunk.js.map