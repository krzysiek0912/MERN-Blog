(this.webpackJsonpfavnotes=this.webpackJsonpfavnotes||[]).push([[0],{109:function(e,t,n){e.exports=n(277)},117:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},166:function(e,t){},184:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),s=n(26),u=n(14),l=n(30),i=n(12),p=n.n(i),m=(n(117),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)});m.defaultProps={children:p.a.node};var d=m,f=n(7),h=n(8),v=n(10),E=n(9),b=n(11),O=(n(118),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(s.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))})))}),g=Object(l.f)((function(e){return r.a.createElement(O,e)})),P=(n(120),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),j=(n(121),function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts/random",title:"Random post"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"}]},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(P,null),r.a.createElement(g,{links:e}))}}]),t}(r.a.Component)),y=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(j,null),t))},_=(n(122),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)});_.defaultProps={children:""};var w=_,q=n(53),k=n(22),S=n(13),x=n.n(S),N=n(31),D=n(32),T=n.n(D),C="http://localhost:8000/api";function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){return"app/".concat("request","/").concat(e)},I=function(e){return e.request},L=F("START_REQUEST"),U=F("END_REQUEST"),M=F("RESET_REQUEST"),B=F("ERROR_REQUEST"),Q=function(e){return{palyload:e,type:L}},X=function(e){return{palyload:e,type:U}},G=function(e,t){return{palyload:t,error:e,type:B}},J=function(e){return function(t){t(function(e){return{palyload:e,type:M}}(e))}},V={request:{pending:!1,error:null,success:null},requestPost:{pending:!1,error:null,success:null},requestForm:{pending:!1,error:null,success:null}};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},z=function(e){return"app/".concat("posts","/").concat(e)},K=z("LOAD_POSTS"),Z=z("LOAD_POSTS_PAGE"),$=z("LOAD_CURENT_POST"),ee=z("LOAD_RANDOM_POST"),te=z("LOAD_EDIT_POST"),ne=function(e){return{payload:e,type:Z}},ae={data:[],curentPost:{},editPost:{},randomPost:{},amount:0,postsPerPage:10,presentPage:1};n(139);var re=n(24),ce=(n(140),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(re.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({type:"button"},c,{className:"button button--".concat(n)}),a)}),oe=(n(141),function(e){var t=e.children,n=Object(re.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),se=n(106),ue=n.n(se),le=function(e){var t=e.children,n=Object(re.a)(e,["children"]);return r.a.createElement("div",n,ue()(t))};le.defaultProps={children:""};var ie=le,pe=function(e,t){return e.length<1?"Error":e.length<=t?e:"".concat(e.substr(0,e.lastIndexOf(" ",t)),"...")},me=function(e){var t=e.id,n=e.title,a=e.content,c=e.author,o=e.isSingle;return r.a.createElement("article",{className:"post-summary"},o&&r.a.createElement(w,null,n),!o&&r.a.createElement(oe,null,n),r.a.createElement("p",null,"Author: ",c),r.a.createElement(ie,null,o?a:pe(a,50)),!o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{variant:"primary"},r.a.createElement(s.b,{to:"/posts/".concat(t)},"Read more")),r.a.createElement(ce,{variant:"primary"},r.a.createElement(s.b,{to:"/posts/edit/".concat(t)},"Edit"))))};me.defaultProps={id:"",title:"",content:""};var de=me,fe=function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t.map((function(e){return r.a.createElement(de,Object.assign({key:e.id},e))}))))},he=n(43),ve=(n(184),function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).changePageRight=function(){var e=n.state.presentPage;(0,Object(he.a)(n).changePage)(e+1)},n.changePageLeft=function(){var e=n.state.presentPage;(0,Object(he.a)(n).changePage)(e-1)},n.changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.state={presentPage:e.initialPage||1},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state.presentPage,n=this.changePage,a=this.changePageLeft,c=this.changePageRight,o=Object(q.a)(Array(e)).map((function(e,a){return r.a.createElement("li",{key:++a,onClick:function(){n(a)},className:"pagination__list__item".concat(a===t?" pagination__list__item--active":"")},a)}));return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},t>1&&r.a.createElement("li",{className:"pagination__list__item",onClick:a},"<"),o,t<e&&r.a.createElement("li",{className:"pagination__list__item",onClick:c},">")))}}]),t}(r.a.Component)),Ee=n(52),be=(n(236),function(){return r.a.createElement(Ee.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),Oe=n(37),ge=(n(237),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(re.a)(e,["variant","children"]);return r.a.createElement(Ee.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(Oe.c,null);case"success":return r.a.createElement(Oe.a,null);case"warning":case"error":return r.a.createElement(Oe.b,null);default:return r.a.createElement(Oe.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),Pe=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).loadPostsPage=function(e){var t=n.props;(0,t.loadPostsByPage)(e,t.postsPerPage)},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadPostsByPage,n=e.initialPage;t(void 0===n?1:n,e.postsPerPage)}},{key:"render",value:function(){var e,t,n=this.loadPostsPage,a=this.props,c=a.posts,o=a.request,s=a.pages,u=a.presentPage,l=a.pagination,i=o.requestPost,p=i.pending,m=i.error,d=i.success;return t=void 0===l,!1===p?!0===d?e=r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{posts:c}),t&&r.a.createElement(ve,{pages:s,onPageChange:n,initialPage:u})):null!==m&&(e=r.a.createElement(ge,{variant:"error"}," ",m," ")):null===d&&(e=r.a.createElement(be,null)),r.a.createElement("div",null,e)}}]),t}(r.a.Component),je=Object(u.b)((function(e){return{posts:(n=e,n.posts.data),request:I(e),pages:Y(e),presentPage:(t=e,t.posts.presentPage)};var t,n}),(function(e){return{loadPostsByPage:function(t,n){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(){var n=Object(N.a)(x.a.mark((function n(a){var r,c,o,s;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Q("requestPost")),n.prev=1,r=(e-1)*t,c=t,n.next=6,T.a.get("".concat(C,"/posts/range/").concat(r,"/").concat(c));case 6:return o=n.sent,n.next=9,new Promise((function(e){return setTimeout(e,100)}));case 9:s={posts:o.data.posts,amount:o.data.amount,postsPerPage:t,presentPage:e},a(ne(s)),a(X("requestPost")),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),a(G(n.t0.message,"requestPost"));case 17:case"end":return n.stop()}}),n,null,[[1,14]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(Pe),ye=function(){return r.a.createElement("div",null,r.a.createElement(w,null,"Blog"),r.a.createElement(je,{postsPerPage:3,pagination:!1}))},_e=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.request,a=t>0?r.a.createElement(r.a.Fragment,null,t," Posts"):r.a.createElement(ge,{variant:"info"}," No posts ");return r.a.createElement("div",null,!n.requestPost.pending&&a)}}]),t}(r.a.Component),we=Object(u.b)((function(e){return{count:(t=e,t.posts.data.length),request:I(e)};var t}))(_e),qe=function(){return r.a.createElement("div",null,r.a.createElement(w,null,"Posts list"),r.a.createElement(we,null),r.a.createElement(je,null))},ke=n(54),Se=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},xe=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadCurentPost)(e.id)}},{key:"render",value:function(){var e=this.props,t=e.curentPost,n=e.request,a=e.location,c=n.requestPost.pending;return r.a.createElement("div",null,c&&r.a.createElement(be,null)||t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(de,Object.assign({},t,{isSingle:!0})),r.a.createElement(ke.FacebookProvider,{appId:"441193243206112"},r.a.createElement(ke.Comments,{href:"".concat("http://localhost:3000").concat(a.pathname)}),r.a.createElement(ke.ShareButton,{href:"".concat("http://localhost:3000").concat(a.pathname)},"Share")))||r.a.createElement(Se,null))}}]),t}(r.a.Component),Ne=Object(l.f)((function(e){return r.a.createElement(xe,e)})),De=Object(u.b)((function(e){return{curentPost:(t=e,t.posts.curentPost),request:I(e)};var t}),(function(e){return{loadCurentPost:function(t){return e(function(e){return function(){var t=Object(N.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q("requestPost")),t.prev=1,t.next=4,T.a.get("".concat(C,"/posts/").concat(e));case 4:return a=t.sent,t.next=7,new Promise((function(e){return setTimeout(e,100)}));case 7:n({payload:a.data,type:$}),n(X("requestPost")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n(G(t.t0.message,"requestPost"));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Ne),Te=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(De,{id:t.params.id}))},Ce=n(107),Re=n.n(Ce),Ae=(n(270),function(e){var t=e.value,n=e.label,a=e.name,c=void 0===a?"text-field":a,o=e.onChange,s=Object(re.a)(e,["value","label","name","onChange"]);return r.a.createElement("label",{className:"text-field",htmlFor:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},s,{value:t,name:c,onChange:o,className:"text-field__input"})))}),Fe=(n(271),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)});n(272),n(273),n(274);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ue=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",author:"",content:""},isEdit:!1},n.componentWillUnmount=function(){(0,n.props.resetRequestObj)("requestForm")},n.handleChange=function(e){var t=n.state.post;n.setState({post:Le({},t,Object(k.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:Le({},t,{content:e})})},n.handleSubmit=function(e){var t=n.props,a=t.addPost,r=t.postToEdit,c=t.editPost,o=n.state.post;e.preventDefault(),r?(o._id=r._id,c(o)):a(o)},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.postToEdit;if(e){var t=e.title,n=e.author,a=e.content;this.setState({post:{title:t,author:n,content:a},isEdit:!0})}}},{key:"render",value:function(){var e=this.state,t=e.post,n=e.isEdit,a=this.handleChange,c=this.handleEditor,o=this.handleSubmit,s=this.props,u=s.request,l=s.postToEdit,i=u.requestForm,p=i.error,m=i.success,d=i.pending;return p?r.a.createElement(ge,{variant:"error"},p):m&&n?r.a.createElement(ge,{variant:"success"},"Post has been edit"):m&&!n?r.a.createElement(ge,{variant:"success"},"Post has been added"):d?r.a.createElement(be,null):r.a.createElement("form",{onSubmit:o},r.a.createElement(Ae,{label:"Title",value:t.title,onChange:a,name:"title"}),r.a.createElement(Ae,{label:"Author",value:t.author,onChange:a,name:"author"}),r.a.createElement(Fe,null,"Edit post content"),r.a.createElement(Re.a,{className:"content-editor",text:t.content,onChange:c,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement(ce,{type:"submit",variant:"primary"},l?"Update post":"Add post"))}}]),t}(r.a.Component),Me=Object(u.b)((function(e){return{request:I(e)}}),(function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(N.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q("requestForm")),t.prev=1,t.next=4,T.a.post("".concat(C,"/posts"),e);case 4:return t.next=6,new Promise((function(e){return setTimeout(e,100)}));case 6:n(X("requestForm")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(G(t.t0.message,"requestForm"));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editPost:function(t){return e(function(e){return function(){var t=Object(N.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q("requestForm")),t.prev=1,t.next=4,T.a.post("".concat(C,"/update/").concat(e._id),e);case 4:return t.next=6,new Promise((function(e){return setTimeout(e,100)}));case 6:n(X("requestForm")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(G(t.t0.message,"requestForm"));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequestObj:function(t){return e(J(t))}}}))(Ue),Be=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).componentWillUnmount=function(){(0,n.props.resetRequestObj)("requestPost")},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadEditPost)(e.id)}},{key:"render",value:function(){var e=this.props,t=e.postToEdit,n=e.request.requestPost.success;return r.a.createElement("div",null,n&&r.a.createElement(Me,{postToEdit:t})||r.a.createElement(be,null))}}]),t}(r.a.Component),Qe=Object(u.b)((function(e){return{postToEdit:(t=e,t.posts.editPost),request:I(e)};var t}),(function(e){return{loadEditPost:function(t){return e(function(e){return function(){var t=Object(N.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q("requestPost")),t.prev=1,t.next=4,T.a.get("".concat(C,"/posts/").concat(e));case 4:return a=t.sent,t.next=7,new Promise((function(e){return setTimeout(e,100)}));case 7:n({payload:a.data,type:te}),n(X("requestPost")),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n(G(t.t0.message,"requestPost"));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequestObj:function(t){return e(J(t))}}}))(Be),Xe=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(Qe,{id:t.params.id}))},Ge=function(){return r.a.createElement("div",null,r.a.createElement(w,null,"NewPost"),r.a.createElement(Me,null))},Je=function(){return r.a.createElement("div",null,r.a.createElement(w,null,"Contact"),r.a.createElement("p",null,"Your Favourite Blooger Ltd."),r.a.createElement("p",null,"9432 Division Street Stone "),r.a.createElement("p",null,"Mountain, GA 30083 "),r.a.createElement("p",null," "),r.a.createElement("p",null,"Mobile Number: 207-914-3411"))},Ve=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadRandomPost)(e.id)}},{key:"render",value:function(){var e=this.props,t=e.randomPost,n=e.request.requestPost.pending;return r.a.createElement("div",null,n&&r.a.createElement(be,null)||t&&r.a.createElement(de,Object.assign({},t,{isSingle:!0}))||r.a.createElement(Se,null))}}]),t}(r.a.Component),We=Object(u.b)((function(e){return{randomPost:(t=e,t.posts.randomPost),request:I(e)};var t}),(function(e){return{loadRandomPost:function(){return e(function(){var e=Object(N.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q("requestPost")),e.prev=1,e.next=4,T.a.get("".concat(C,"/posts/random"));case 4:return n=e.sent,e.next=7,new Promise((function(e){return setTimeout(e,100)}));case 7:t({payload:n.data,type:ee}),t(X("requestPost")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(G(e.t0.message,"requestPost"));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Ve),He=function(e){e.match;return r.a.createElement("div",null,r.a.createElement(We,null))},Ye=function(){return r.a.createElement(y,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:ye}),r.a.createElement(l.a,{path:"/posts/new",component:Ge}),r.a.createElement(l.a,{path:"/posts/random",component:He}),r.a.createElement(l.a,{path:"/posts/edit/:id",component:Xe}),r.a.createElement(l.a,{path:"/posts/:id",component:Te}),r.a.createElement(l.a,{path:"/posts",exact:!0,component:qe}),r.a.createElement(l.a,{path:"/contact",exact:!0,component:Je}),r.a.createElement(l.a,{component:Se})))},ze=n(108),Ke=n(33),Ze=Object(Ke.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case K:return H({},e,{data:t.payload});case Z:return H({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(q.a)(t.payload.posts)});case $:return H({},e,{curentPost:t.payload});case ee:return H({},e,{randomPost:t.payload});case te:return H({},e,{editPost:t.payload});default:return e}},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case L:return A({},e,Object(k.a)({},t.palyload,{pending:!0,error:null,success:null}));case U:return A({},e,Object(k.a)({},t.palyload,{pending:!1,error:null,success:!0}));case M:return A({},e,Object(k.a)({},t.palyload,{pending:!1,error:null,success:null}));case B:return A({},e,Object(k.a)({},t.palyload,{pending:!1,error:t.error,success:!1}));default:return e}}}),$e=Object(Ke.e)(Ze,Object(Ke.d)(Object(Ke.a)(ze.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));n(275),n(276);o.a.render(r.a.createElement((function(){return r.a.createElement(u.a,{store:$e},r.a.createElement(s.a,null,r.a.createElement(Ye,null)))}),null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.ab09ad68.chunk.js.map