(this["webpackJsonprecipe-redux"]=this["webpackJsonprecipe-redux"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(13),r=a.n(s),i=(a(24),a(4)),o=a.n(i),l=a(10),d=a(3),j=a(5),u=a(2),b=(a(26),a(27),a(9)),h=a(12),m=Object(h.b)({name:"favouriteSlice",initialState:{favouriteList:[]},reducers:{addFavourite:function(e,t){e.favouriteList.push(t.payload)},deleteFavourite:function(e,t){e.favouriteList=e.favouriteList.filter((function(e){return e.id!==t.payload.id}))}}}),f=m.actions,O=f.addFavourite,v=f.deleteFavourite,x=function(e){return e.favourites.favouriteList},p=m.reducer,g=a(0);var N=function(){var e=Object(b.c)(x);return Object(g.jsx)("div",{className:"Navbar",children:Object(g.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",children:[Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(g.jsxs)("ul",{className:"navbar-nav",children:[Object(g.jsx)("li",{className:"nav-item active ml-3",children:Object(g.jsxs)(j.b,{className:"nav-link",to:"/",children:["Home ",Object(g.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(g.jsx)("li",{className:"nav-item active ml-3",children:Object(g.jsxs)(j.b,{className:"nav-link",to:"/search",children:["Search ",Object(g.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(g.jsx)("li",{className:"nav-item active ml-3",children:Object(g.jsxs)(j.b,{className:"nav-link",to:"/favourites",children:["Favourites ",Object(g.jsx)("span",{className:"sr-only",children:"(current)"}),Object(g.jsx)("small",{children:e.length})]})})]})})]})})};a(35);var w=function(e){var t=e.favouriteList,a=Object(u.e)().state,n=a.id,s=a.name,r=a.image,i=a.instructions,o=a.video,l=Object(b.b)(),j=t.find((function(e){return e.id===n})),h=Object(c.useState)(void 0===j),m=Object(d.a)(h,2),f=m[0],x=m[1];return console.log(t),Object(g.jsxs)("div",{className:"detail",children:[Object(g.jsx)(N,{}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{className:"detail-header food-header",children:s}),Object(g.jsxs)("div",{className:"detail-icons",children:[Object(g.jsxs)("div",{className:"contact",children:[Object(g.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100053185775014",target:"_blank",children:Object(g.jsx)("i",{className:"fab fa-facebook"})}),Object(g.jsx)("a",{href:"https://www.pinterest.com/khoitay321/_saved/",target:"_blank",style:{color:"red"},children:Object(g.jsx)("i",{class:"fab fa-pinterest"})}),Object(g.jsx)("a",{href:"https://www.instagram.com/khoi1.23/?hl=vi",target:"_blank",style:{color:"purple"},children:Object(g.jsx)("i",{class:"fab fa-instagram-square"})})]}),Object(g.jsx)("button",{className:f?"like":"red like",onClick:function(){x(!f),l(f?O({id:n,name:s,image:r,instructions:i,video:o}):v({id:n}))},children:Object(g.jsx)("i",{class:"fas fa-heart"})})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"detail-left col-sm-12 col-md-6",children:Object(g.jsx)("img",{src:r,alt:"mealImg"})}),Object(g.jsxs)("div",{className:"detail-right col-sm-12 col-md-6",children:[Object(g.jsx)("h2",{className:"food-header",children:"Instruction:"}),"Link: ",Object(g.jsx)("a",{href:o,children:o}),Object(g.jsx)("p",{children:i}),Object(g.jsx)("iframe",{width:"100%",height:"315",src:function(){var e=o.indexOf("="),t=o.slice(e+1);return"https://www.youtube.com/embed/".concat(t)}(),style:{border:"none"},allow:"fullscreen"})]})]})]})]})},y=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c.meals);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c.meals[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,c=a.meals[0],e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,n=c.meals,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();a(36);var S=function(e){var t=e.food;return Object(g.jsx)("div",{className:"item",children:Object(g.jsx)("div",{className:"item-image",style:{background:'url("'.concat(t.strMealThumb,'")'),backgroundPosition:"center",backgroundSize:"cover"},children:Object(g.jsx)("h3",{className:"food-header item-title",children:t.strMeal})})})};var I=function(e){var t=e.food,a=Object(c.useState)({}),n=Object(d.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){k(t.idMeal).then((function(e){return r(e)}))}),[]),console.log(t.idMeal),Object(g.jsx)(j.b,{to:"/detail",state:{name:s.strMeal,id:s.idMeal,image:s.strMealThumb,instructions:s.strInstructions,video:s.strYoutube},style:{textDecoration:"none"},children:Object(g.jsx)(S,{food:t})})};a(37);var L=function(e){var t=e.areaFoods,a=void 0===t?[]:t;return Object(g.jsx)("div",{className:"area-foods",children:a.map((function(e){return Object(g.jsx)(I,{food:e},e.idMeal)}))})};a(38),a(39);var T=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1];function s(){return(s=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(g.jsx)(j.b,{to:"/detail",style:{textDecoration:"none"},state:{id:a.idMeal,name:a.strMeal,image:a.strMealThumb,instructions:a.strInstructions,video:a.strYoutube},children:Object(g.jsxs)("div",{className:"headerRight-item",children:[Object(g.jsx)("div",{className:"headerRight-item-image",children:Object(g.jsx)("img",{className:"banner-img",src:a.strMealThumb,alt:""})}),Object(g.jsx)("h3",{children:a.strMeal}),Object(g.jsx)("p",{style:{height:"100px",overflow:"hidden",textAlign:"justify",color:"rgb(117,117,117)"},children:a.strInstructions})]})})},C=a.p+"static/media/slogan.6992bfa5.png";var V=function(e){var t=e.randomFood;return Object(g.jsxs)("div",{className:"home-header",children:[Object(g.jsx)(N,{}),Object(g.jsx)("div",{className:"container-fluid header_container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"headerBanner-left col-sm-12 col-md-6",style:{backgroundImage:'url("'.concat(t.strMealThumb,'")')},children:Object(g.jsx)("div",{className:"headerBanner-left-box d-flex justify-content-center align-items-center",children:Object(g.jsxs)("div",{className:"border-effect",children:[Object(g.jsx)("span",{children:"DIPS"}),Object(g.jsx)("h2",{className:"food-header border-effect-header",children:t.strMeal}),Object(g.jsx)("div",{children:t.strInstructions}),Object(g.jsx)(j.b,{to:"/detail",state:{id:t.idMeal,name:t.strMeal,image:t.strMealThumb,instructions:t.strInstructions,video:t.strYoutube},children:Object(g.jsx)("span",{style:{marginTop:"20px"},children:"More"})})]})})}),Object(g.jsxs)("div",{className:"headerBanner-right col-sm-12 col-md-6",children:[Object(g.jsx)("img",{className:"logo",src:C,alt:"slogan"}),Object(g.jsxs)("h2",{children:[Object(g.jsx)("span",{style:{color:"rgba(221, 105, 10, 0.774)"},children:"WELCOME"})," to my recipe app"]}),Object(g.jsxs)("div",{className:"headerBanner-right-foods",children:[Object(g.jsx)(T,{}),Object(g.jsx)(T,{}),Object(g.jsx)(T,{}),Object(g.jsx)(T,{}),Object(g.jsx)(T,{}),Object(g.jsx)(T,{})]})]})]})})]})};a(40);var E=function(e){var t=e.randomFood,a=e.chineseFoods,c=e.frenchFoods,n=e.indianFoods,s=e.canadianFoods,r=e.japaneseFoods;return console.log("Home: ",a),Object(g.jsxs)("div",{className:"home",children:[Object(g.jsx)(V,{randomFood:t}),Object(g.jsx)("div",{className:"home-logo",children:Object(g.jsx)("img",{src:C,alt:""})}),Object(g.jsx)("h2",{className:"areaFoods-title",children:"Japanese foods"}),Object(g.jsx)(L,{areaFoods:r}),Object(g.jsx)("h2",{className:"areaFoods-title",children:"French foods"}),Object(g.jsx)(L,{areaFoods:c}),Object(g.jsx)("h2",{className:"areaFoods-title",children:"Canadian foods"}),Object(g.jsx)(L,{areaFoods:s}),Object(g.jsx)("h2",{className:"areaFoods-title",children:"Indian foods"}),Object(g.jsx)(L,{areaFoods:n})]})},B=Object(h.b)({name:"search slice",initialState:{searchValue:""},reducers:{changeSearchValue:function(e,t){e.searchValue=t.payload.value}}}),D=B.actions.changeSearchValue,_=function(e){return e.search.searchValue},R=B.reducer;a(41),a(42);var Y=function(e){var t=e.id,a=e.name,c=e.image,n=e.instructions,s=e.video,r=Object(b.b)();return Object(g.jsxs)("div",{className:"favourite-item",children:[Object(g.jsx)("img",{src:c,alt:""}),Object(g.jsxs)("div",{className:"favourite-item-content",children:[Object(g.jsx)("h2",{className:"food-header favourite-item-header",children:a}),Object(g.jsx)("p",{className:"item-instructions",children:n}),Object(g.jsx)(j.b,{style:{textDecoration:"none"},to:"/detail",state:{id:t,name:a,image:c,instructions:n,video:s},children:Object(g.jsx)("span",{style:{marginTop:"20px"},children:"More"})}),Object(g.jsx)("button",{className:"removeFavourite-btn",onClick:function(){r(v({id:t}))},children:"Remove"})]})]})};var H=function(e){var t=e.favouriteList;return Object(g.jsxs)("div",{className:"favourites",children:[Object(g.jsx)(N,{}),Object(g.jsx)("div",{className:"favourites-header",children:Object(g.jsx)("div",{className:"fav-title",children:Object(g.jsx)("h1",{children:"Favourite list"})})}),Object(g.jsx)("div",{className:"favourites-container container",children:Object(g.jsx)("div",{children:t.map((function(e){return Object(g.jsx)(Y,{id:e.id,name:e.name,image:e.image,instructions:e.instructions,video:e.video},e.id)}))})})]})};a(43);var J=function(e){var t=e.recipes,a=e.searchValue,n=Object(c.useState)(a),s=Object(d.a)(n,2),r=s[0],i=s[1],u=Object(b.b)(),h=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(D({value:r}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(t),Object(g.jsxs)("div",{className:"search",children:[Object(g.jsx)(N,{}),Object(g.jsxs)("form",{children:[Object(g.jsx)("div",{className:"search-header",children:Object(g.jsxs)("div",{className:"search-recipes",children:[Object(g.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},defaultValue:r,placeholder:"chicken, chocolate,..."}),Object(g.jsx)("button",{type:"submit",onClick:h,children:Object(g.jsx)("i",{className:"fas fa-search"})})]})}),Object(g.jsx)("div",{className:"search-showRecipes",children:null===t?"No results were found":t.map((function(e){return Object(g.jsx)(j.b,{to:"/detail",state:{name:"".concat(e.strMeal),id:"".concat(e.idMeal),image:"".concat(e.strMealThumb),instructions:"".concat(e.strInstructions),video:"".concat(e.strYoutube)},children:Object(g.jsx)(S,{food:e},e.idMeal)})}))})]})]})};var W=function(){var e=Object(b.c)(x),t=Object(b.c)(_),a=Object(c.useState)([]),n=Object(d.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)({}),h=Object(d.a)(i,2),m=h[0],f=h[1],O=Object(c.useState)([]),v=Object(d.a)(O,2),p=v[0],N=v[1],k=Object(c.useState)([]),S=Object(d.a)(k,2),I=S[0],L=S[1],T=Object(c.useState)([]),C=Object(d.a)(T,2),V=C[0],B=C[1],D=Object(c.useState)([]),R=Object(d.a)(D,2),Y=R[0],W=R[1],z=Object(c.useState)([]),A=Object(d.a)(z,2),P=A[0],q=A[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=N,e.next=3,M("french");case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=L,e.next=8,M("Chinese");case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=B,e.next=13,M("indian");case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=W,e.next=18,M("japanese");case 18:return e.t7=e.sent,(0,e.t6)(e.t7),e.t8=q,e.next=23,M("canadian");case 23:e.t9=e.sent,(0,e.t8)(e.t9);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}F().then((function(e){return f(e)})),function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){$()}),[t]);var $=function(){var e=Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:a=e.sent,r(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log("Home: ",t),console.log(s),Object(g.jsx)(j.a,{children:Object(g.jsx)("div",{className:"app",children:Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{path:"/",element:Object(g.jsx)(E,{randomFood:m,frenchFoods:p,chineseFoods:I,indianFoods:V,japaneseFoods:Y,canadianFoods:P})}),Object(g.jsx)(u.a,{path:"/search",element:Object(g.jsx)(J,{recipes:s,searchValue:t})}),Object(g.jsx)(u.a,{path:"/detail",element:Object(g.jsx)(w,{favouriteList:e})}),Object(g.jsx)(u.a,{path:"/favourites",element:Object(g.jsx)(H,{favouriteList:e})})]})})})},z=a(11),A=a(18),P={key:"root",version:1,storage:a.n(A).a},q=Object(z.g)(P,p),$=Object(h.a)({reducer:{favourites:q,search:R},middleware:function(e){return e({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(19),K=Object(z.h)($);r.a.render(Object(g.jsxs)(n.a.StrictMode,{children:[Object(g.jsx)(b.a,{store:$,children:Object(g.jsx)(G.a,{loading:null,persistor:K,children:Object(g.jsx)(W,{})})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.0d3dbc1e.chunk.js.map