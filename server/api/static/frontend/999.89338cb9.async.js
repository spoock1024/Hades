(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[999],{24969:function(L,$,l){"use strict";l.d($,{Z:function(){return w}});var b=l(1413),T=l(67294),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},k=H,K=l(84089),X=function(C,oe){return T.createElement(K.Z,(0,b.Z)((0,b.Z)({},C),{},{ref:oe,icon:k}))};X.displayName="PlusOutlined";var w=T.forwardRef(X)},43146:function(){"use strict"},29913:function(L,$,l){"use strict";var b=l(43146)},68018:function(L,$,l){"use strict";var b=l(43146),T=l(29913),H=l(83736),k=l(6516)},83736:function(L,$,l){"use strict";var b=l(43146),T=l(38390)},6516:function(L,$,l){"use strict";var b=l(43146)},54431:function(L,$,l){"use strict";l.d($,{Z:function(){return Sa}});var b=l(4942),T=l(87462),H=l(97937),k=l(89705),K=l(24969),X=l(94184),w=l.n(X),z=l(1413),C=l(97685),oe=l(71002),xe=l(91),t=l(67294),Tt=l(31131),Ge=l(21770),Zt=l(62874),Oe=(0,t.createContext)(null),wt=t.forwardRef(function(e,a){var o=e.prefixCls,n=e.className,r=e.style,i=e.id,s=e.active,u=e.tabKey,f=e.children;return t.createElement("div",{id:i&&"".concat(i,"-panel-").concat(u),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(u),"aria-hidden":!s,style:r,className:w()(o,s&&"".concat(o,"-active"),n),ref:a},f)}),Xe=wt,Nt=["key","forceRender","style","className"];function Ot(e){var a=e.id,o=e.activeKey,n=e.animated,r=e.tabPosition,i=e.destroyInactiveTabPane,s=t.useContext(Oe),u=s.prefixCls,f=s.tabs,S=n.tabPane,Z="".concat(u,"-tabpane");return t.createElement("div",{className:w()("".concat(u,"-content-holder"))},t.createElement("div",{className:w()("".concat(u,"-content"),"".concat(u,"-content-").concat(r),(0,b.Z)({},"".concat(u,"-content-animated"),S))},f.map(function(c){var p=c.key,h=c.forceRender,y=c.style,R=c.className,I=(0,xe.Z)(c,Nt),V=p===o;return t.createElement(Zt.Z,(0,T.Z)({key:p,visible:V,forceRender:h,removeOnLeave:!!i,leavedClassName:"".concat(Z,"-hidden")},n.tabPaneMotion),function(j,M){var Y=j.style,G=j.className;return t.createElement(Xe,(0,T.Z)({},I,{prefixCls:Z,id:a,tabKey:p,animated:S,active:V,style:(0,z.Z)((0,z.Z)({},y),Y),className:w()(R,G),ref:M}))})})))}var Ye=l(74902),Je=l(48555),ge=l(75164),kt=l(42550),Qe={width:0,height:0,left:0,top:0};function Rt(e,a,o){return(0,t.useMemo)(function(){for(var n,r=new Map,i=a.get((n=e[0])===null||n===void 0?void 0:n.key)||Qe,s=i.left+i.width,u=0;u<e.length;u+=1){var f=e[u].key,S=a.get(f);if(!S){var Z;S=a.get((Z=e[u-1])===null||Z===void 0?void 0:Z.key)||Qe}var c=r.get(f)||(0,z.Z)({},S);c.right=s-c.left-c.width,r.set(f,c)}return r},[e.map(function(n){return n.key}).join("_"),a,o])}function qe(e){var a=(0,t.useRef)(),o=(0,t.useRef)(!1);function n(){for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];o.current||(ge.Z.cancel(a.current),a.current=(0,ge.Z)(function(){e.apply(void 0,i)}))}return(0,t.useEffect)(function(){return o.current=!1,function(){o.current=!0,ge.Z.cancel(a.current)}},[]),n}function It(e){var a=(0,t.useRef)([]),o=(0,t.useState)({}),n=(0,C.Z)(o,2),r=n[1],i=(0,t.useRef)(typeof e=="function"?e():e),s=qe(function(){var f=i.current;a.current.forEach(function(S){f=S(f)}),a.current=[],i.current=f,r({})});function u(f){a.current.push(f),s()}return[i.current,u]}function _e(e,a){var o=t.useRef(e),n=t.useState({}),r=(0,C.Z)(n,2),i=r[1];function s(u){var f=typeof u=="function"?u(o.current):u;f!==o.current&&a(f,o.current),o.current=f,i({})}return[o.current,s]}var Mt=.1,et=.01,ke=20,tt=Math.pow(.995,ke);function At(e,a){var o=(0,t.useState)(),n=(0,C.Z)(o,2),r=n[0],i=n[1],s=(0,t.useState)(0),u=(0,C.Z)(s,2),f=u[0],S=u[1],Z=(0,t.useState)(0),c=(0,C.Z)(Z,2),p=c[0],h=c[1],y=(0,t.useState)(),R=(0,C.Z)(y,2),I=R[0],V=R[1],j=(0,t.useRef)();function M(g){var x=g.touches[0],m=x.screenX,N=x.screenY;i({x:m,y:N}),window.clearInterval(j.current)}function Y(g){if(r){g.preventDefault();var x=g.touches[0],m=x.screenX,N=x.screenY;i({x:m,y:N});var E=m-r.x,O=N-r.y;a(E,O);var ee=Date.now();S(ee),h(ee-f),V({x:E,y:O})}}function G(){if(r&&(i(null),V(null),I)){var g=I.x/p,x=I.y/p,m=Math.abs(g),N=Math.abs(x);if(Math.max(m,N)<Mt)return;var E=g,O=x;j.current=window.setInterval(function(){if(Math.abs(E)<et&&Math.abs(O)<et){window.clearInterval(j.current);return}E*=tt,O*=tt,a(E*ke,O*ke)},ke)}}var D=(0,t.useRef)();function B(g){var x=g.deltaX,m=g.deltaY,N=0,E=Math.abs(x),O=Math.abs(m);E===O?N=D.current==="x"?x:m:E>O?(N=x,D.current="x"):(N=m,D.current="y"),a(-N,-N)&&g.preventDefault()}var U=(0,t.useRef)(null);U.current={onTouchStart:M,onTouchMove:Y,onTouchEnd:G,onWheel:B},t.useEffect(function(){function g(E){U.current.onTouchStart(E)}function x(E){U.current.onTouchMove(E)}function m(E){U.current.onTouchEnd(E)}function N(E){U.current.onWheel(E)}return document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",m,{passive:!1}),e.current.addEventListener("touchstart",g,{passive:!1}),e.current.addEventListener("wheel",N),function(){document.removeEventListener("touchmove",x),document.removeEventListener("touchend",m)}},[])}var at={width:0,height:0,left:0,top:0,right:0};function Lt(e,a,o,n,r,i,s){var u=s.tabs,f=s.tabPosition,S=s.rtl,Z,c,p;return["top","bottom"].includes(f)?(Z="width",c=S?"right":"left",p=Math.abs(o)):(Z="height",c="top",p=-o),(0,t.useMemo)(function(){if(!u.length)return[0,0];for(var h=u.length,y=h,R=0;R<h;R+=1){var I=e.get(u[R].key)||at;if(I[c]+I[Z]>p+a){y=R-1;break}}for(var V=0,j=h-1;j>=0;j-=1){var M=e.get(u[j].key)||at;if(M[c]<p){V=j+1;break}}return[V,y]},[e,a,n,r,i,p,f,u.map(function(h){return h.key}).join("_"),S])}function nt(e){var a;return e instanceof Map?(a={},e.forEach(function(o,n){a[n]=o})):a=e,JSON.stringify(a)}function Bt(e,a){var o=e.prefixCls,n=e.editable,r=e.locale,i=e.style;return!n||n.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(o,"-nav-add"),style:i,"aria-label":(r==null?void 0:r.addAriaLabel)||"Add tab",onClick:function(u){n.onEdit("add",{event:u})}},n.addIcon||"+")}var rt=t.forwardRef(Bt),Dt=t.forwardRef(function(e,a){var o=e.position,n=e.prefixCls,r=e.extra;if(!r)return null;var i,s={};return(0,oe.Z)(r)==="object"&&!t.isValidElement(r)?s=r:s.right=r,o==="right"&&(i=s.right),o==="left"&&(i=s.left),i?t.createElement("div",{className:"".concat(n,"-extra-content"),ref:a},i):null}),ot=Dt,zt=l(81263),he={adjustX:1,adjustY:1},ye=[0,0],Vt={topLeft:{points:["bl","tl"],overflow:he,offset:[0,-4],targetOffset:ye},topCenter:{points:["bc","tc"],overflow:he,offset:[0,-4],targetOffset:ye},topRight:{points:["br","tr"],overflow:he,offset:[0,-4],targetOffset:ye},bottomLeft:{points:["tl","bl"],overflow:he,offset:[0,4],targetOffset:ye},bottomCenter:{points:["tc","bc"],overflow:he,offset:[0,4],targetOffset:ye},bottomRight:{points:["tr","br"],overflow:he,offset:[0,4],targetOffset:ye}},Kt=Vt,te=l(15105),jt=l(88603),Wt=te.Z.ESC,Ft=te.Z.TAB;function $t(e){var a=e.visible,o=e.setTriggerVisible,n=e.triggerRef,r=e.onVisibleChange,i=e.autoFocus,s=t.useRef(!1),u=function(){if(a&&n.current){var c,p,h,y;(c=n.current)===null||c===void 0||(p=c.triggerRef)===null||p===void 0||(h=p.current)===null||h===void 0||(y=h.focus)===null||y===void 0||y.call(h),o(!1),typeof r=="function"&&r(!1)}},f=function(){var c,p,h,y,R=(0,jt.tS)((c=n.current)===null||c===void 0||(p=c.popupRef)===null||p===void 0||(h=p.current)===null||h===void 0||(y=h.getElement)===null||y===void 0?void 0:y.call(h)),I=R[0];return I!=null&&I.focus?(I.focus(),s.current=!0,!0):!1},S=function(c){switch(c.keyCode){case Wt:u();break;case Ft:{var p=!1;s.current||(p=f()),p?c.preventDefault():u();break}}};t.useEffect(function(){return a?(window.addEventListener("keydown",S),i&&(0,ge.Z)(f,3),function(){window.removeEventListener("keydown",S),s.current=!1}):function(){s.current=!1}},[a])}var Ht=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Ut(e,a){var o=e.arrow,n=o===void 0?!1:o,r=e.prefixCls,i=r===void 0?"rc-dropdown":r,s=e.transitionName,u=e.animation,f=e.align,S=e.placement,Z=S===void 0?"bottomLeft":S,c=e.placements,p=c===void 0?Kt:c,h=e.getPopupContainer,y=e.showAction,R=e.hideAction,I=e.overlayClassName,V=e.overlayStyle,j=e.visible,M=e.trigger,Y=M===void 0?["hover"]:M,G=e.autoFocus,D=(0,xe.Z)(e,Ht),B=t.useState(),U=(0,C.Z)(B,2),g=U[0],x=U[1],m="visible"in e?j:g,N=t.useRef(null);t.useImperativeHandle(a,function(){return N.current}),$t({visible:m,setTriggerVisible:x,triggerRef:N,onVisibleChange:e.onVisibleChange,autoFocus:G});var E=function(){var v=e.overlay,W;return typeof v=="function"?W=v():W=v,W},O=function(v){var W=e.onOverlayClick;x(!1),W&&W(v)},ee=function(v){var W=e.onVisibleChange;x(v),typeof W=="function"&&W(v)},ue=function(){var v=E();return t.createElement(t.Fragment,null,n&&t.createElement("div",{className:"".concat(i,"-arrow")}),v)},ie=function(){var v=e.overlay;return typeof v=="function"?ue:ue()},_=function(){var v=e.minOverlayWidthMatchTrigger,W=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?v:!W},ne=function(){var v=e.openClassName;return v!==void 0?v:"".concat(i,"-open")},me=function(){var v=e.children,W=v.props?v.props:{},Q=w()(W.className,ne());return m&&v?t.cloneElement(v,{className:Q}):v},re=R;return!re&&Y.indexOf("contextMenu")!==-1&&(re=["click"]),t.createElement(zt.Z,(0,z.Z)((0,z.Z)({builtinPlacements:p},D),{},{prefixCls:i,ref:N,popupClassName:w()(I,(0,b.Z)({},"".concat(i,"-show-arrow"),n)),popupStyle:V,action:Y,showAction:y,hideAction:re||[],popupPlacement:Z,popupAlign:f,popupTransitionName:s,popupAnimation:u,popupVisible:m,stretch:_()?"minWidth":"",popup:ie(),onPopupVisibleChange:ee,onPopupClick:O,getPopupContainer:h}),me())}var Gt=t.forwardRef(Ut),Xt=Gt,it=l(97868);function Yt(e,a){var o=e.prefixCls,n=e.id,r=e.tabs,i=e.locale,s=e.mobile,u=e.moreIcon,f=u===void 0?"More":u,S=e.moreTransitionName,Z=e.style,c=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,R=e.removeAriaLabel,I=e.onTabClick,V=e.getPopupContainer,j=e.popupClassName,M=(0,t.useState)(!1),Y=(0,C.Z)(M,2),G=Y[0],D=Y[1],B=(0,t.useState)(null),U=(0,C.Z)(B,2),g=U[0],x=U[1],m="".concat(n,"-more-popup"),N="".concat(o,"-dropdown"),E=g!==null?"".concat(m,"-").concat(g):null,O=i==null?void 0:i.dropdownAriaLabel;function ee(d,v){d.preventDefault(),d.stopPropagation(),p.onEdit("remove",{key:v,event:d})}var ue=t.createElement(it.ZP,{onClick:function(v){var W=v.key,Q=v.domEvent;I(W,Q),D(!1)},prefixCls:"".concat(N,"-menu"),id:m,tabIndex:-1,role:"listbox","aria-activedescendant":E,selectedKeys:[g],"aria-label":O!==void 0?O:"expanded dropdown"},r.map(function(d){var v=p&&d.closable!==!1&&!d.disabled;return t.createElement(it.sN,{key:d.key,id:"".concat(m,"-").concat(d.key),role:"option","aria-controls":n&&"".concat(n,"-panel-").concat(d.key),disabled:d.disabled},t.createElement("span",null,d.label),v&&t.createElement("button",{type:"button","aria-label":R||"remove",tabIndex:0,className:"".concat(N,"-menu-item-remove"),onClick:function(Q){Q.stopPropagation(),ee(Q,d.key)}},d.closeIcon||p.removeIcon||"\xD7"))}));function ie(d){for(var v=r.filter(function(be){return!be.disabled}),W=v.findIndex(function(be){return be.key===g})||0,Q=v.length,fe=0;fe<Q;fe+=1){W=(W+d+Q)%Q;var Se=v[W];if(!Se.disabled){x(Se.key);return}}}function _(d){var v=d.which;if(!G){[te.Z.DOWN,te.Z.SPACE,te.Z.ENTER].includes(v)&&(D(!0),d.preventDefault());return}switch(v){case te.Z.UP:ie(-1),d.preventDefault();break;case te.Z.DOWN:ie(1),d.preventDefault();break;case te.Z.ESC:D(!1);break;case te.Z.SPACE:case te.Z.ENTER:g!==null&&I(g,d);break}}(0,t.useEffect)(function(){var d=document.getElementById(E);d&&d.scrollIntoView&&d.scrollIntoView(!1)},[g]),(0,t.useEffect)(function(){G||x(null)},[G]);var ne=(0,b.Z)({},y?"marginRight":"marginLeft",h);r.length||(ne.visibility="hidden",ne.order=1);var me=w()((0,b.Z)({},"".concat(N,"-rtl"),y)),re=s?null:t.createElement(Xt,{prefixCls:N,overlay:ue,trigger:["hover"],visible:r.length?G:!1,transitionName:S,onVisibleChange:D,overlayClassName:w()(me,j),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:V},t.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:ne,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":m,id:"".concat(n,"-more"),"aria-expanded":G,onKeyDown:_},f));return t.createElement("div",{className:w()("".concat(o,"-nav-operations"),c),style:Z,ref:a},re,t.createElement(rt,{prefixCls:o,locale:i,editable:p}))}var Jt=t.memo(t.forwardRef(Yt),function(e,a){return a.tabMoving});function Qt(e){var a,o=e.prefixCls,n=e.id,r=e.active,i=e.tab,s=i.key,u=i.label,f=i.disabled,S=i.closeIcon,Z=e.closable,c=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,y=e.onClick,R=e.onFocus,I=e.style,V="".concat(o,"-tab"),j=h&&Z!==!1&&!f;function M(D){f||y(D)}function Y(D){D.preventDefault(),D.stopPropagation(),h.onEdit("remove",{key:s,event:D})}var G=t.createElement("div",{key:s,"data-node-key":s,className:w()(V,(a={},(0,b.Z)(a,"".concat(V,"-with-remove"),j),(0,b.Z)(a,"".concat(V,"-active"),r),(0,b.Z)(a,"".concat(V,"-disabled"),f),a)),style:I,onClick:M},t.createElement("div",{role:"tab","aria-selected":r,id:n&&"".concat(n,"-tab-").concat(s),className:"".concat(V,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(s),"aria-disabled":f,tabIndex:f?null:0,onClick:function(B){B.stopPropagation(),M(B)},onKeyDown:function(B){[te.Z.SPACE,te.Z.ENTER].includes(B.which)&&(B.preventDefault(),M(B))},onFocus:R},u),j&&t.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(V,"-remove"),onClick:function(B){B.stopPropagation(),Y(B)}},S||h.removeIcon||"\xD7"));return c?c(G):G}var qt=Qt,Ce=function(a){var o=a.current||{},n=o.offsetWidth,r=n===void 0?0:n,i=o.offsetHeight,s=i===void 0?0:i;return[r,s]},Re=function(a,o){return a[o?0:1]};function _t(e,a){var o,n=t.useContext(Oe),r=n.prefixCls,i=n.tabs,s=e.className,u=e.style,f=e.id,S=e.animated,Z=e.activeKey,c=e.rtl,p=e.extra,h=e.editable,y=e.locale,R=e.tabPosition,I=e.tabBarGutter,V=e.children,j=e.onTabClick,M=e.onTabScroll,Y=(0,t.useRef)(),G=(0,t.useRef)(),D=(0,t.useRef)(),B=(0,t.useRef)(),U=(0,t.useRef)(),g=(0,t.useRef)(),x=(0,t.useRef)(),m=R==="top"||R==="bottom",N=_e(0,function(A,q){m&&M&&M({direction:A>q?"left":"right"})}),E=(0,C.Z)(N,2),O=E[0],ee=E[1],ue=_e(0,function(A,q){!m&&M&&M({direction:A>q?"top":"bottom"})}),ie=(0,C.Z)(ue,2),_=ie[0],ne=ie[1],me=(0,t.useState)([0,0]),re=(0,C.Z)(me,2),d=re[0],v=re[1],W=(0,t.useState)([0,0]),Q=(0,C.Z)(W,2),fe=Q[0],Se=Q[1],be=(0,t.useState)([0,0]),Ee=(0,C.Z)(be,2),Le=Ee[0],Be=Ee[1],De=(0,t.useState)([0,0]),Pe=(0,C.Z)(De,2),ze=Pe[0],Ve=Pe[1],F=It(new Map),de=(0,C.Z)(F,2),Te=de[0],xa=de[1],Ie=Rt(i,Te,fe[0]),pe=Re(d,m),ce=Re(fe,m),Ke=Re(Le,m),ut=Re(ze,m),Ea=pe<ce+Ke,le=Ea?pe-ut:pe-Ke,Pa="".concat(r,"-nav-operations-hidden"),Ze=0,we=0;m&&c?(Ze=0,we=Math.max(0,ce-le)):(Ze=Math.min(0,le-ce),we=0);function je(A){return A<Ze?Ze:A>we?we:A}var ft=(0,t.useRef)(),Ta=(0,t.useState)(),dt=(0,C.Z)(Ta,2),Me=dt[0],vt=dt[1];function We(){vt(Date.now())}function Fe(){window.clearTimeout(ft.current)}At(B,function(A,q){function P(J,ae){J(function(se){var Aa=je(se+ae);return Aa})}return pe>=ce?!1:(m?P(ee,A):P(ne,q),Fe(),We(),!0)}),(0,t.useEffect)(function(){return Fe(),Me&&(ft.current=window.setTimeout(function(){vt(0)},100)),Fe},[Me]);var Za=Lt(Ie,le,m?O:_,ce,Ke,ut,(0,z.Z)((0,z.Z)({},e),{},{tabs:i})),mt=(0,C.Z)(Za,2),wa=mt[0],Na=mt[1],bt=function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Z,P=Ie.get(q)||{width:0,height:0,left:0,right:0,top:0};if(m){var J=O;c?P.right<O?J=P.right:P.right+P.width>O+le&&(J=P.right+P.width-le):P.left<-O?J=-P.left:P.left+P.width>-O+le&&(J=-(P.left+P.width-le)),ne(0),ee(je(J))}else{var ae=_;P.top<-_?ae=-P.top:P.top+P.height>-_+le&&(ae=-(P.top+P.height-le)),ee(0),ne(je(ae))}},Ae={};R==="top"||R==="bottom"?Ae[c?"marginRight":"marginLeft"]=I:Ae.marginTop=I;var pt=i.map(function(A,q){var P=A.key;return t.createElement(qt,{id:f,prefixCls:r,key:P,tab:A,style:q===0?void 0:Ae,closable:A.closable,editable:h,active:P===Z,renderWrapper:V,removeAriaLabel:y==null?void 0:y.removeAriaLabel,onClick:function(ae){j(P,ae)},onFocus:function(){bt(P),We(),B.current&&(c||(B.current.scrollLeft=0),B.current.scrollTop=0)}})}),gt=function(){return xa(function(){var q=new Map;return i.forEach(function(P){var J,ae=P.key,se=(J=U.current)===null||J===void 0?void 0:J.querySelector('[data-node-key="'.concat(ae,'"]'));se&&q.set(ae,{width:se.offsetWidth,height:se.offsetHeight,left:se.offsetLeft,top:se.offsetTop})}),q})};(0,t.useEffect)(function(){gt()},[i.map(function(A){return A.key}).join("_")]);var $e=qe(function(){var A=Ce(Y),q=Ce(G),P=Ce(D);v([A[0]-q[0]-P[0],A[1]-q[1]-P[1]]);var J=Ce(x);Be(J);var ae=Ce(g);Ve(ae);var se=Ce(U);Se([se[0]-J[0],se[1]-J[1]]),gt()}),Oa=i.slice(0,wa),ka=i.slice(Na+1),ht=[].concat((0,Ye.Z)(Oa),(0,Ye.Z)(ka)),Ra=(0,t.useState)(),yt=(0,C.Z)(Ra,2),Ia=yt[0],Ma=yt[1],ve=Ie.get(Z),Ct=(0,t.useRef)();function St(){ge.Z.cancel(Ct.current)}(0,t.useEffect)(function(){var A={};return ve&&(m?(c?A.right=ve.right:A.left=ve.left,A.width=ve.width):(A.top=ve.top,A.height=ve.height)),St(),Ct.current=(0,ge.Z)(function(){Ma(A)}),St},[ve,m,c]),(0,t.useEffect)(function(){bt()},[Z,nt(ve),nt(Ie),m]),(0,t.useEffect)(function(){$e()},[c]);var xt=!!ht.length,Ne="".concat(r,"-nav-wrap"),He,Ue,Et,Pt;return m?c?(Ue=O>0,He=O+pe<ce):(He=O<0,Ue=-O+pe<ce):(Et=_<0,Pt=-_+pe<ce),t.createElement(Je.Z,{onResize:$e},t.createElement("div",{ref:(0,kt.x1)(a,Y),role:"tablist",className:w()("".concat(r,"-nav"),s),style:u,onKeyDown:function(){We()}},t.createElement(ot,{ref:G,position:"left",extra:p,prefixCls:r}),t.createElement("div",{className:w()(Ne,(o={},(0,b.Z)(o,"".concat(Ne,"-ping-left"),He),(0,b.Z)(o,"".concat(Ne,"-ping-right"),Ue),(0,b.Z)(o,"".concat(Ne,"-ping-top"),Et),(0,b.Z)(o,"".concat(Ne,"-ping-bottom"),Pt),o)),ref:B},t.createElement(Je.Z,{onResize:$e},t.createElement("div",{ref:U,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(O,"px, ").concat(_,"px)"),transition:Me?"none":void 0}},pt,t.createElement(rt,{ref:x,prefixCls:r,locale:y,editable:h,style:(0,z.Z)((0,z.Z)({},pt.length===0?void 0:Ae),{},{visibility:xt?"hidden":null})}),t.createElement("div",{className:w()("".concat(r,"-ink-bar"),(0,b.Z)({},"".concat(r,"-ink-bar-animated"),S.inkBar)),style:Ia})))),t.createElement(Jt,(0,T.Z)({},e,{removeAriaLabel:y==null?void 0:y.removeAriaLabel,ref:g,prefixCls:r,tabs:ht,className:!xt&&Pa,tabMoving:!!Me})),t.createElement(ot,{ref:D,position:"right",extra:p,prefixCls:r})))}var lt=t.forwardRef(_t),ea=["renderTabBar"],ta=["label","key"];function aa(e){var a=e.renderTabBar,o=(0,xe.Z)(e,ea),n=t.useContext(Oe),r=n.tabs;if(a){var i=(0,z.Z)((0,z.Z)({},o),{},{panes:r.map(function(s){var u=s.label,f=s.key,S=(0,xe.Z)(s,ta);return t.createElement(Xe,(0,T.Z)({tab:u,key:f,tabKey:f},S))})});return a(i,lt)}return t.createElement(lt,o)}var La=l(80334);function na(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=(0,z.Z)({inkBar:!0},(0,oe.Z)(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var ra=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],st=0;function oa(e,a){var o,n=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,s=e.className,u=e.items,f=e.direction,S=e.activeKey,Z=e.defaultActiveKey,c=e.editable,p=e.animated,h=e.tabPosition,y=h===void 0?"top":h,R=e.tabBarGutter,I=e.tabBarStyle,V=e.tabBarExtraContent,j=e.locale,M=e.moreIcon,Y=e.moreTransitionName,G=e.destroyInactiveTabPane,D=e.renderTabBar,B=e.onChange,U=e.onTabClick,g=e.onTabScroll,x=e.getPopupContainer,m=e.popupClassName,N=(0,xe.Z)(e,ra),E=t.useMemo(function(){return(u||[]).filter(function(F){return F&&(0,oe.Z)(F)==="object"&&"key"in F})},[u]),O=f==="rtl",ee=na(p),ue=(0,t.useState)(!1),ie=(0,C.Z)(ue,2),_=ie[0],ne=ie[1];(0,t.useEffect)(function(){ne((0,Tt.Z)())},[]);var me=(0,Ge.Z)(function(){var F;return(F=E[0])===null||F===void 0?void 0:F.key},{value:S,defaultValue:Z}),re=(0,C.Z)(me,2),d=re[0],v=re[1],W=(0,t.useState)(function(){return E.findIndex(function(F){return F.key===d})}),Q=(0,C.Z)(W,2),fe=Q[0],Se=Q[1];(0,t.useEffect)(function(){var F=E.findIndex(function(Te){return Te.key===d});if(F===-1){var de;F=Math.max(0,Math.min(fe,E.length-1)),v((de=E[F])===null||de===void 0?void 0:de.key)}Se(F)},[E.map(function(F){return F.key}).join("_"),d,fe]);var be=(0,Ge.Z)(null,{value:n}),Ee=(0,C.Z)(be,2),Le=Ee[0],Be=Ee[1];(0,t.useEffect)(function(){n||(Be("rc-tabs-".concat(st)),st+=1)},[]);function De(F,de){U==null||U(F,de);var Te=F!==d;v(F),Te&&(B==null||B(F))}var Pe={id:Le,activeKey:d,animated:ee,tabPosition:y,rtl:O,mobile:_},ze,Ve=(0,z.Z)((0,z.Z)({},Pe),{},{editable:c,locale:j,moreIcon:M,moreTransitionName:Y,tabBarGutter:R,onTabClick:De,onTabScroll:g,extra:V,style:I,panes:null,getPopupContainer:x,popupClassName:m});return t.createElement(Oe.Provider,{value:{tabs:E,prefixCls:i}},t.createElement("div",(0,T.Z)({ref:a,id:n,className:w()(i,"".concat(i,"-").concat(y),(o={},(0,b.Z)(o,"".concat(i,"-mobile"),_),(0,b.Z)(o,"".concat(i,"-editable"),c),(0,b.Z)(o,"".concat(i,"-rtl"),O),o),s)},N),ze,t.createElement(aa,(0,T.Z)({},Ve,{renderTabBar:D})),t.createElement(Ot,(0,T.Z)({destroyInactiveTabPane:G},Pe,{animated:ee}))))}var ia=t.forwardRef(oa),la=ia,sa=la,ca=l(53124),ua=l(97647),fa=l(33603),da={motionAppear:!1,motionEnter:!0,motionLeave:!0};function va(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},o;return a===!1?o={inkBar:!1,tabPane:!1}:a===!0?o={inkBar:!0,tabPane:!0}:o=(0,T.Z)({inkBar:!0},(0,oe.Z)(a)==="object"?a:{}),o.tabPane&&(o.tabPaneMotion=(0,T.Z)((0,T.Z)({},da),{motionName:(0,fa.mL)(e,"switch")})),o}var ma=l(50344),ba=function(e,a){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function pa(e){return e.filter(function(a){return a})}function ga(e,a){if(e)return e;var o=(0,ma.Z)(a).map(function(n){if(t.isValidElement(n)){var r=n.key,i=n.props,s=i||{},u=s.tab,f=ba(s,["tab"]),S=(0,T.Z)((0,T.Z)({key:String(r)},f),{label:u});return S}return null});return pa(o)}var ha=function(){return null},ya=ha,Ca=function(e,a){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function ct(e){var a=e.type,o=e.className,n=e.size,r=e.onEdit,i=e.hideAdd,s=e.centered,u=e.addIcon,f=e.children,S=e.items,Z=e.animated,c=Ca(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),p=c.prefixCls,h=c.moreIcon,y=h===void 0?t.createElement(k.Z,null):h,R=t.useContext(ca.E_),I=R.getPrefixCls,V=R.direction,j=R.getPopupContainer,M=I("tabs",p),Y;a==="editable-card"&&(Y={onEdit:function(g,x){var m=x.key,N=x.event;r==null||r(g==="add"?N:m,g)},removeIcon:t.createElement(H.Z,null),addIcon:u||t.createElement(K.Z,null),showAdd:i!==!0});var G=I(),D=ga(S,f),B=va(M,Z);return t.createElement(ua.Z.Consumer,null,function(U){var g,x=n!==void 0?n:U;return t.createElement(sa,(0,T.Z)({direction:V,getPopupContainer:j,moreTransitionName:"".concat(G,"-slide-up")},c,{items:D,className:w()((g={},(0,b.Z)(g,"".concat(M,"-").concat(x),x),(0,b.Z)(g,"".concat(M,"-card"),["card","editable-card"].includes(a)),(0,b.Z)(g,"".concat(M,"-editable-card"),a==="editable-card"),(0,b.Z)(g,"".concat(M,"-centered"),s),g),o),editable:Y,moreIcon:y,prefixCls:M,animated:B}))})}ct.TabPane=ya;var Sa=ct},38390:function(L,$,l){"use strict";var b=l(43146)},45520:function(L,$){"use strict";Object.defineProperty($,"__esModule",{value:!0}),$.call=k,$.default=void 0,$.note=T,$.noteOnce=X,$.resetWarned=H,$.warning=b,$.warningOnce=K;var l={};function b(z,C){}function T(z,C){}function H(){l={}}function k(z,C,oe){!C&&!l[oe]&&(z(!1,oe),l[oe]=!0)}function K(z,C){k(b,z,C)}function X(z,C){k(T,z,C)}var w=K;$.default=w},38416:function(L,$,l){var b=l(64062);function T(H,k,K){return k=b(k),k in H?Object.defineProperty(H,k,{value:K,enumerable:!0,configurable:!0,writable:!0}):H[k]=K,H}L.exports=T,L.exports.__esModule=!0,L.exports.default=L.exports},42122:function(L,$,l){var b=l(38416);function T(k,K){var X=Object.keys(k);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(k);K&&(w=w.filter(function(z){return Object.getOwnPropertyDescriptor(k,z).enumerable})),X.push.apply(X,w)}return X}function H(k){for(var K=1;K<arguments.length;K++){var X=arguments[K]!=null?arguments[K]:{};K%2?T(Object(X),!0).forEach(function(w){b(k,w,X[w])}):Object.getOwnPropertyDescriptors?Object.defineProperties(k,Object.getOwnPropertyDescriptors(X)):T(Object(X)).forEach(function(w){Object.defineProperty(k,w,Object.getOwnPropertyDescriptor(X,w))})}return k}L.exports=H,L.exports.__esModule=!0,L.exports.default=L.exports},95036:function(L,$,l){var b=l(18698).default;function T(H,k){if(b(H)!=="object"||H===null)return H;var K=H[Symbol.toPrimitive];if(K!==void 0){var X=K.call(H,k||"default");if(b(X)!=="object")return X;throw new TypeError("@@toPrimitive must return a primitive value.")}return(k==="string"?String:Number)(H)}L.exports=T,L.exports.__esModule=!0,L.exports.default=L.exports},64062:function(L,$,l){var b=l(18698).default,T=l(95036);function H(k){var K=T(k,"string");return b(K)==="symbol"?K:String(K)}L.exports=H,L.exports.__esModule=!0,L.exports.default=L.exports}}]);
