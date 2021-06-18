(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(17),n(4)),s=n.n(o),u=n(2),l=n(8),d=n(6),j=n(3),b=n(11),p=n(12),m="mesto.nomoreparties.co",h="https://",f="v1",O=new(function(){function e(t){var n=this;Object(b.a)(this,e),this._handleFetch=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this.editProfile=function(e){var t=e.name,a=e.about;return n._customFetch("users/me","PATCH",{name:t,about:a})},this.addCard=function(e,t){return n._customFetch("cards","POST",{name:e,link:t})},this.deleteCard=function(e){return n._customFetch("cards/".concat(e),"DELETE")},this.changeLikeCardStatus=function(e,t){return n._customFetch("cards/likes/".concat(e),t?"PUT":"DELETE")},this.updateAvatar=function(e){var t=e.avatar;return n._customFetch("users/me/avatar","PATCH",{avatar:t})},this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(p.a)(e,[{key:"_customFetch",value:function(e,t,n){var a={headers:this._headers};return t&&"GET"!==t&&(a.method=t,"DELETE"!==t&&(a.headers["Content-Type"]="application/json")),n&&(a.body=JSON.stringify(n)),fetch("".concat(this._baseUrl,"/").concat(e),a).then(this._handleFetch)}},{key:"getUserInfo",value:function(){return this._customFetch("users/me")}},{key:"getInitialCards",value:function(){return this._customFetch("cards")}}]),e}())({baseUrl:"".concat(h).concat(m,"/").concat(f,"/").concat("cohort-24"),headers:{authorization:"70313b07-c3c0-40aa-a296-04d0e6bc7885"}}),_="popup__close-button",v=n(0),x={name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",about:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c",avatar:""},C=r.a.createContext(),g=r.a.createContext();function k(e){var t=e.children,n=r.a.useState(x),a=Object(j.a)(n,2),c=a[0],i=a[1];return r.a.useEffect((function(){O.getUserInfo().then(i)}),[i]),Object(v.jsx)(C.Provider,{value:c,children:Object(v.jsx)(g.Provider,{value:i,children:t})})}function N(){var e=r.a.useContext(C);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function y(){var e=r.a.useContext(g);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}function w(){return(w=Object(d.a)(s.a.mark((function e(t,n,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(u.a)(Object(u.a)({},n),a)),e.prev=1,e.next=4,O.editProfile(a);case 4:r=e.sent,t(r),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),t(n),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function E(){return(E=Object(d.a)(s.a.mark((function e(t,n,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(u.a)(Object(u.a)({},n),a)),e.prev=1,e.next=4,O.updateAvatar(a);case 4:r=e.sent,t(r),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(1),t(n),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var S=n.p+"static/media/logo.6fa47d29.svg";var L=function(){return Object(v.jsx)("header",{className:"header",children:Object(v.jsx)("a",{target:"_self",href:"https://github.com/artginzburg/mesto-react",className:"logo header__logo",children:Object(v.jsx)("img",{className:"logo__img",alt:"Mesto",src:S})})})};var P=function(e){var t,n=e.card;n.likes=null!==(t=n.likes)&&void 0!==t?t:[];var a=N();n.isTemporarilyLocal&&(n.owner=a);var r="element__trash-button"+(n.owner._id===a._id?" element__trash-button_visible":""),c="element__like-button"+(n.likes.some((function(e){return e._id===a._id}))?" element__like-button_active":"");return Object(v.jsxs)("li",{className:"element",children:[Object(v.jsx)("img",{onClick:function(){e.onCardClick(n)},className:"element__image",alt:n.name,src:n.link}),Object(v.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardDelete(n)},type:"reset",className:r}),Object(v.jsxs)("div",{className:"element__container",children:[Object(v.jsx)("h2",{className:"element__title",children:n.name}),Object(v.jsxs)("div",{className:"element__likes",children:[Object(v.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardLike(n)},type:"button",className:c}),Object(v.jsx)("p",{className:"element__like-counter",children:n.likes.length})]})]})]})};function T(e){var t=N();return Object(v.jsxs)("main",{className:"content",children:[Object(v.jsxs)("section",{className:"profile",children:[Object(v.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__avatar-container",children:Object(v.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar})}),Object(v.jsxs)("div",{className:"profile__info",children:[Object(v.jsx)("h1",{className:"profile__name",children:t.name}),Object(v.jsx)("p",{className:"profile__description",children:t.about}),Object(v.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(v.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(v.jsx)("section",{className:"elements",children:Object(v.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){var n;return Object(v.jsx)(P,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},null!==(n=t._id)&&void 0!==n?n:Math.random())}))})})]})}var U=function(){return Object(v.jsx)("footer",{className:"footer",children:Object(v.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/artginzburg",className:"footer__copyright",children:"\xa9 2021 Art Ginzburg"})})};var F=function(e){var t=e.card;return Object(v.jsx)("section",{onClick:e.onClose,className:"popup popup_type_image"+(e.isOpen?" popup_opened":""),id:"image-viewer",children:Object(v.jsxs)("figure",{className:"popup__figure",children:[Object(v.jsx)("button",{type:"button",className:"".concat(_," popup__close-button_parent-corners_straight")}),Object(v.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(v.jsx)("figcaption",{className:"popup__caption",children:t.name})]})})};var D=function(e){var t;return Object(v.jsx)("section",{onClick:e.onClose,className:"popup"+(e.isOpen?" popup_opened":""),id:e.name,children:Object(v.jsxs)("div",{className:"popup__container",children:[Object(v.jsx)("button",{type:"reset",className:_}),Object(v.jsx)("h2",{className:"popup__title",children:e.title}),Object(v.jsxs)("form",{onSubmit:e.onSubmit,className:"popup__form",action:"#",children:[e.children,Object(v.jsx)("button",{type:"submit",className:"popup__button",children:null!==(t=e.buttonTitle)&&void 0!==t?t:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})},A=r.a.forwardRef((function(e,t){var n,a,r="text",c=null!==(n=e.type)&&void 0!==n?n:r,i=c===r?2:null;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("input",Object(u.a)(Object(u.a)({},e),{},{ref:t,className:"popup__input",type:c,minLength:null!==(a=e.minLength)&&void 0!==a?a:i})),Object(v.jsx)("p",{className:"popup__error",id:"".concat(e.id,"-error")})]})}));function I(e){var t=r.a.useState(""),n=Object(j.a)(t,2),a=n[0],c=n[1],i=r.a.useState(""),o=Object(j.a)(i,2),s=o[0],l=o[1],d=N(),b=y();return r.a.useEffect((function(){c(d.name),l(d.about)}),[d]),Object(v.jsxs)(D,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(t){t.preventDefault(),function(e,t,n){w.apply(this,arguments)}(b,d,{name:a,about:s}),e.onUpdateUser()},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-editor",children:[Object(v.jsx)(A,{value:a,onChange:function(e){c(e.target.value)},autoComplete:"name",autoCapitalize:"words",name:"name",id:"profile-name",placeholder:"\u0418\u043c\u044f",maxLength:"40",required:!0}),Object(v.jsx)(A,{value:s,onChange:function(e){l(e.target.value)},name:"about",id:"profile-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",maxLength:"200",required:!0})]}))}function q(e){var t=Object(a.createRef)(),n=N(),r=y();return Object(v.jsx)(D,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(a){a.preventDefault(),function(e,t,n){E.apply(this,arguments)}(r,n,{avatar:t.current.value}),e.onUpdateAvatar(),a.target.reset()},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-editor",children:Object(v.jsx)(A,{ref:t,type:"url",name:"avatar",id:"profile-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0})}))}function z(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),s=o[0],l=o[1];return Object(v.jsxs)(D,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(t){t.preventDefault(),e.onAddPlace(r,s),c(""),l("")},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element-editor",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(v.jsx)(A,{value:r,onChange:function(e){c(e.target.value)},name:"title",id:"element-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30",required:!0}),Object(v.jsx)(A,{value:s,onChange:function(e){l(e.target.value)},type:"url",name:"link",id:"element-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0})]}))}function J(e){return Object(v.jsx)(D,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(t){t.preventDefault(),e.onCardDelete(e.card)},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirmation",buttonTitle:"\u0414\u0430"}))}var M=function(){var e=r.a.useState(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),i=Object(j.a)(c,2),o=i[0],b=i[1],p=r.a.useState(!1),m=Object(j.a)(p,2),h=m[0],f=m[1],x=r.a.useState(!1),C=Object(j.a)(x,2),g=C[0],k=C[1],y=r.a.useState(!1),w=Object(j.a)(y,2),E=w[0],S=w[1],P=r.a.useState({}),D=Object(j.a)(P,2),A=D[0],M=D[1],B=r.a.useState([]),G=Object(j.a)(B,2),H=G[0],R=G[1],K=N();function Q(){return(Q=Object(d.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H,a=t.likes.some((function(e){return e._id===K._id})),r=a?t.likes.filter((function(e){return e._id!==K._id})):[].concat(Object(l.a)(t.likes),[K]),c=Object(u.a)(Object(u.a)({},t),{},{likes:r}),R(H.map((function(e){return e._id===t._id?c:e}))),e.prev=5,e.next=8,O.changeLikeCardStatus(t._id,!a);case 8:i=e.sent,R(H.map((function(e){return e._id===t._id?i:e}))),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(5),R(n),e.t0;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function V(){a(!1),k(!1),b(!1),f(!1),S(!1)}function W(e){(e.target===e.currentTarget||e.target.classList.contains(_))&&V()}r.a.useEffect((function(){return O.getInitialCards().then(R)}),[]);var X=V,Y=V,Z=r.a.useCallback((function(e){"Escape"===e.key&&V()}),[]);return r.a.useEffect((function(){return document.addEventListener("keydown",Z,!1),function(){return document.removeEventListener("keydown",Z,!1)}}),[Z]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{}),Object(v.jsx)(T,{onEditProfile:function(){b(!0)},onAddPlace:function(){f(!0)},onEditAvatar:function(){k(!0)},cards:H,onCardClick:function(e){M(e),a(!0)},onCardLike:function(e){return Q.apply(this,arguments)},onCardDelete:function(e){M(e),S(!0)}}),Object(v.jsx)(U,{}),Object(v.jsx)(I,{onUpdateUser:X,isOpen:o,onClose:W}),Object(v.jsx)(z,{onAddPlace:function(e,t){var n=H;R([{isTemporarilyLocal:!0,name:e,link:t}].concat(Object(l.a)(H))),O.addCard(e,t).then((function(e){return R([e].concat(Object(l.a)(H)))})).catch((function(){return R(n)})),V()},isOpen:h,onClose:W}),Object(v.jsx)(q,{onUpdateAvatar:Y,isOpen:g,onClose:W}),Object(v.jsx)(J,{card:A,onCardDelete:function(e){var t=H;R(H.filter((function(t){return t._id!==e._id}))),O.deleteCard(e._id).catch((function(e){throw R(t),e})),V()},isOpen:E,onClose:W}),Object(v.jsx)(F,{card:A,isOpen:n,onClose:W})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(k,{children:Object(v.jsx)(M,{})})}),document.getElementById("root")),B()}},[[20,1,2]]]);
//# sourceMappingURL=main.61f2ed18.chunk.js.map