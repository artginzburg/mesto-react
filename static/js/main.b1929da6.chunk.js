(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"a":"Art Ginzburg"}')},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=(n(19),n(4)),s=n.n(o),u=n(2),l=n(10),d=n(7),p=n(3);function h(e,t){var n=r.a.useState(localStorage[e]?JSON.parse(localStorage[e]):t),a=Object(p.a)(n,2),c=a[0],i=a[1],o=r.a.useCallback((function(t){t.key===e&&i(JSON.parse(t.newValue))}),[e]),s=r.a.useCallback((function(t){localStorage[e]=JSON.stringify(t),i(t)}),[e]);return r.a.useEffect((function(){return window.addEventListener("storage",o),function(){window.removeEventListener("storage",o)}}),[o]),[c,s]}var b=n(8),f=n(9),m="mesto.nomoreparties.co",j="https://",_="v1",v=new(function(){function e(t){var n=this;Object(b.a)(this,e),this._paths={users:"users/me",cards:"cards"},this._handleFetch=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this.editProfile=function(e){var t=e.name,a=e.about;return n._customFetch(n._paths.users,"PATCH",{name:t,about:a})},this.addCard=function(e,t){return n._customFetch(n._paths.cards,"POST",{name:e,link:t})},this.deleteCard=function(e){return n._customFetch("".concat(n._paths.cards,"/").concat(e),"DELETE")},this.changeLikeCardStatus=function(e,t){return n._customFetch("".concat(n._paths.cards,"/likes/").concat(e),t?"PUT":"DELETE")},this.updateAvatar=function(e){var t=e.avatar;return n._customFetch("".concat(n._paths.users,"/avatar"),"PATCH",{avatar:t})},this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(f.a)(e,[{key:"_customFetch",value:function(e,t,n){var a={headers:this._headers};return t&&"GET"!==t&&(a.method=t,"DELETE"!==t&&(a.headers["Content-Type"]="application/json")),n&&(a.body=JSON.stringify(n)),fetch("".concat(this._baseUrl,"/").concat(e),a).then(this._handleFetch)}},{key:"getUserInfo",value:function(){return this._customFetch(this._paths.users)}},{key:"getInitialCards",value:function(){return this._customFetch(this._paths.cards)}}]),e}())({baseUrl:"".concat(j).concat(m,"/").concat(_,"/").concat("cohort-24"),headers:{authorization:"70313b07-c3c0-40aa-a296-04d0e6bc7885"}}),O=n(0),x={name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",about:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c",avatar:""},g=r.a.createContext(),C=r.a.createContext();function k(e){var t=e.children,n=h("currentUser",x),a=Object(p.a)(n,2),c=a[0],i=a[1];return r.a.useEffect((function(){v.getUserInfo().then(i)}),[i]),Object(O.jsx)(g.Provider,{value:c,children:Object(O.jsx)(C.Provider,{value:i,children:t})})}function y(){var e=r.a.useContext(g);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function E(){var e=r.a.useContext(C);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}function S(e,t){return JSON.stringify(e)===JSON.stringify(t)}function N(e,t,n,a){return L.apply(this,arguments)}function L(){return(L=Object(d.a)(s.a.mark((function e(t,n,a,r){var c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(u.a)(Object(u.a)({},n),a),t(c),e.prev=2,e.next=5,v[r](a);case 5:i=e.sent,S(c,i)||t(i),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(2),t(n),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var w=n.p+"static/media/logo.6fa47d29.svg";var F=function(){return Object(O.jsx)("header",{className:"header",children:Object(O.jsx)("a",{target:"_self",href:"https://github.com/artginzburg/mesto-react",className:"logo header__logo",children:Object(O.jsx)("img",{className:"logo__img",alt:"Mesto",src:w})})})};for(var T=function(e){var t,n=e.card;n.likes=null!==(t=n.likes)&&void 0!==t?t:[];var a=y();n.isTemporarilyLocal&&(n.owner=a);var r="element__trash-button"+(n.owner._id===a._id?" element__trash-button_visible":""),c="element__like-button"+(n.likes.some((function(e){return e._id===a._id}))?" element__like-button_active":"");return Object(O.jsxs)("li",{className:"element",children:[Object(O.jsx)("img",{onClick:function(){e.onCardClick(n)},className:"element__image",alt:n.name,src:n.link}),Object(O.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardDelete(n)},type:"reset",className:r}),Object(O.jsxs)("div",{className:"element__container",children:[Object(O.jsx)("h2",{className:"element__title",children:n.name}),Object(O.jsxs)("div",{className:"element__likes",children:[Object(O.jsx)("button",{onClick:function(){n.isTemporarilyLocal||e.onCardLike(n)},type:"button",className:c}),Object(O.jsx)("p",{className:"element__like-counter",children:n.likes.length})]})]})]})},P={isTemporarilyLocal:!0,name:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."},U=[],I=0;I<30;I++)U.push(P);function A(e){var t=y(),n=e.cards.length?e.cards:U;return Object(O.jsxs)("main",{className:"content",children:[Object(O.jsxs)("section",{className:"profile",children:[Object(O.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__avatar-container",children:Object(O.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar})}),Object(O.jsxs)("div",{className:"profile__info",children:[Object(O.jsx)("h1",{className:"profile__name",children:t.name}),Object(O.jsx)("p",{className:"profile__description",children:t.about}),Object(O.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(O.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(O.jsx)("section",{className:"elements",children:Object(O.jsx)("ul",{className:"elements__list",children:n.map((function(t){var n;return Object(O.jsx)(T,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},null!==(n=t._id)&&void 0!==n?n:Math.random())}))})})]})}var D=n(13);var J=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/artginzburg",className:"footer__copyright",children:["\xa9 2021 ",D.a]})})},q="popup__close-button",B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};var z=function(e){var t;return Object(a.useEffect)((function(){e.isOpen||document.activeElement.blur()}),[e.isOpen]),Object(O.jsx)("section",{onClick:e.onClose,className:"popup"+(e.isOpen?" popup_opened":""),id:e.name,children:Object(O.jsxs)("div",{className:"popup__container",children:[Object(O.jsx)("button",{type:"reset",className:q}),Object(O.jsx)("h2",{className:"popup__title",children:e.title}),Object(O.jsxs)("form",{onSubmit:function(t){e.onSubmit&&(t.preventDefault(),e.onSubmit()),e.children&&t.target.reset()},className:"popup__form",action:"#",children:[e.children,Object(O.jsx)("button",{type:"submit",className:"popup__button",children:null!==(t=e.buttonTitle)&&void 0!==t?t:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})},V=n(14),H=["isFocused"],M="text",R=!0,G=2,K=Object(a.forwardRef)((function(e,t){var n,r,c,i=null!==t&&void 0!==t?t:Object(a.createRef)(),o=null!==(n=e.type)&&void 0!==n?n:M,s=null!==(r=e.required)&&void 0!==r?r:R,l=o===M?G:null,d={type:o,minLength:null!==(c=e.minLength)&&void 0!==c?c:l,required:s,ref:i},p=e.isFocused,h=Object(V.a)(e,H);return Object(a.useEffect)((function(){p&&i&&i.current&&i.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){i&&i.current&&i.current.focus()}),50)}),[p,i]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(u.a)(Object(u.a)({},h),{},{className:"popup__input"},d)),Object(O.jsx)("p",{className:"popup__error",id:"".concat(e.id,"-error")})]})}));function Q(e){var t=r.a.useState(""),n=Object(p.a)(t,2),a=n[0],c=n[1],i=r.a.useState(""),o=Object(p.a)(i,2),s=o[0],l=o[1],d=y(),h=E();return r.a.useEffect((function(){c(d.name),l(d.about)}),[d]),Object(O.jsxs)(z,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(){N(h,d,{name:a,about:s},"editProfile"),e.onUpdateUser()},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile-editor",children:[Object(O.jsx)(K,{isFocused:e.isOpen,value:a,onChange:function(e){c(e.target.value)},autoComplete:"name",autoCapitalize:"words",name:"name",id:"profile-name",placeholder:"\u0418\u043c\u044f",maxLength:"40"}),Object(O.jsx)(K,{value:s,onChange:function(e){l(e.target.value)},name:"about",id:"profile-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",maxLength:"200"})]}))}function W(e){var t=Object(a.createRef)(),n=y(),r=E();return Object(O.jsx)(z,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(){N(r,n,{avatar:t.current.value},"updateAvatar"),e.onUpdateAvatar()},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-editor",children:Object(O.jsx)(K,{isFocused:e.isOpen,ref:t,type:"url",name:"avatar",id:"profile-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})}))}var X="",Y="";function Z(e){var t=Object(a.useState)(X),n=Object(p.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(Y),o=Object(p.a)(i,2),s=o[0],l=o[1];return Object(O.jsxs)(z,Object(u.a)(Object(u.a)({},e),{},{onReset:function(){c(X),l(Y)},onSubmit:function(){e.onAddPlace(r,s)},title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"element-editor",buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(O.jsx)(K,{isFocused:e.isOpen,value:r,onChange:function(e){c(e.target.value)},name:"title",id:"element-title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",maxLength:"30"}),Object(O.jsx)(K,{value:s,onChange:function(e){l(e.target.value)},type:"url",name:"link",id:"element-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})]}))}function $(e){return Object(O.jsx)(z,Object(u.a)(Object(u.a)({},e),{},{onSubmit:function(){e.onCardDelete(e.card)},title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirmation",buttonTitle:"\u0414\u0430"}))}var ee=function(e){var t=e.card;return Object(O.jsx)("section",{onClick:e.onClose,className:"popup popup_type_image"+(e.isOpen?" popup_opened":""),id:"image-viewer",children:Object(O.jsxs)("figure",{className:"popup__figure",children:[Object(O.jsx)("button",{type:"button",className:"".concat(q," ").concat(q,"_parent-corners_straight")}),Object(O.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(O.jsx)("figcaption",{className:"popup__caption",children:t.name})]})})};function te(){var e=r.a.useState(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),i=Object(p.a)(c,2),o=i[0],b=i[1],f=r.a.useState(!1),m=Object(p.a)(f,2),j=m[0],_=m[1],x=r.a.useState(!1),g=Object(p.a)(x,2),C=g[0],k=g[1],E=r.a.useState(!1),S=Object(p.a)(E,2),N=S[0],L=S[1],w=r.a.useState({}),T=Object(p.a)(w,2),P=T[0],U=T[1],I=h("cards",[]),D=Object(p.a)(I,2),q=D[0],B=D[1],z=y();function V(){return(V=Object(d.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q,a=t.likes.some((function(e){return e._id===z._id})),r=a?t.likes.filter((function(e){return e._id!==z._id})):[].concat(Object(l.a)(t.likes),[z]),c=Object(u.a)(Object(u.a)({},t),{},{likes:r}),B(q.map((function(e){return e._id===t._id?c:e}))),e.prev=5,e.next=8,v.changeLikeCardStatus(t._id,!a);case 8:i=e.sent,B(q.map((function(e){return e._id===t._id?i:e}))),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(5),B(n),e.t0;case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}function H(){_(!1),a(!1),b(!1),k(!1),L(!1)}function M(e){e.target===e.currentTarget&&H()}r.a.useEffect((function(){v.getInitialCards().then(B)}),[B]);var R=H,G=H;var K=r.a.useCallback((function(e){"Escape"===e.key&&H()}),[]);return r.a.useEffect((function(){var e,t=["keydown",K,!1];return(e=document).addEventListener.apply(e,t),function(){var e;return(e=document).removeEventListener.apply(e,t)}}),[K]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(F,{}),Object(O.jsx)(A,{onEditProfile:function(){a(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){_(!0)},cards:q,onCardClick:function(e){U(e),L(!0)},onCardLike:function(e){return V.apply(this,arguments)},onCardDelete:function(e){U(e),k(!0)}}),Object(O.jsx)(J,{}),Object(O.jsx)(Q,{onUpdateUser:R,isOpen:n,onClose:M}),Object(O.jsx)(Z,{onAddPlace:function(e,t){var n=q;B([{isTemporarilyLocal:!0,name:e,link:t}].concat(Object(l.a)(q))),v.addCard(e,t).then((function(e){return B([e].concat(Object(l.a)(q)))})).catch((function(){return B(n)})),H()},isOpen:o,onClose:M}),Object(O.jsx)(W,{onUpdateAvatar:G,isOpen:j,onClose:M}),Object(O.jsx)($,{card:P,onCardDelete:function(e){var t=q;B(q.filter((function(t){return t._id!==e._id}))),v.deleteCard(e._id).catch((function(e){throw B(t),e})),H()},isOpen:C,onClose:M}),Object(O.jsx)(ee,{card:P,isOpen:N,onClose:M})]})}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},ae=function(){function e(t,n){var a=this;Object(b.a)(this,e),this._showInputError=function(e,t){var n=a._element.querySelector("#".concat(e.id,"-error"));e.classList.add(a._data.inputErrorClass),n.textContent=t,n.classList.add(a._data.errorClass)},this._hideInputError=function(e){var t=a._element.querySelector("#".concat(e.id,"-error"));e.classList.remove(a._data.inputErrorClass),t.classList.remove(a._data.errorClass),t.textContent=""},this._resetFormErrors=function(){a._inputList.forEach((function(e){return a._hideInputError(e)})),a._toggleButtonState(1)},this._checkInputValidity=function(e){return e.validity.valid?a._hideInputError(e):a._showInputError(e,e.validationMessage)},this._hasInvalidInput=function(e){return e.some((function(e){return!e.validity.valid}))},this._toggleButtonState=function(e){return a._buttonElement.disabled=e||a._hasInvalidInput(a._inputList)},this._validationHandler=function(e){a._checkInputValidity(e),a._toggleButtonState()},this._setListeners=function(){a._element.addEventListener("reset",a._resetFormErrors),a._inputList.forEach((function(e){return e.addEventListener("input",(function(){return a._validationHandler(e)}))}))},this._data=t,this._element=n,this._inputList=Array.from(this._element.querySelectorAll(this._data.inputSelector)),this._buttonElement=this._element.querySelector(this._data.submitButtonSelector)}return Object(f.a)(e,[{key:"enableValidation",value:function(){this._toggleButtonState(),this._setListeners()}}]),e}(),re=["#element-editor","#avatar-editor","#profile-editor"];i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(k,{children:Object(O.jsx)(te,{})})}),document.getElementById("root")),re.forEach((function(e){new ae(B,document.querySelector(e).querySelector(B.formSelector)).enableValidation()})),ne()}},[[22,1,2]]]);
//# sourceMappingURL=main.b1929da6.chunk.js.map