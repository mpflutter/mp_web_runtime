(this.webpackJsonpmp_web_runtime=this.webpackJsonpmp_web_runtime||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),r=n.n(a),o=n(7),s=n.n(o),c=(n(15),n(2)),l=n(3),d=n(5),u=n(4),p=n(6),h=Object(a.createContext)({style:{}}),b=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return!this.props.children||this.props.children.length<=0?Object(i.jsx)(h.Consumer,{children:function(e){return Object(i.jsx)(h.Provider,{value:{style:Object(p.a)(Object(p.a)({},e.style),t.props.style)},children:Object(i.jsx)(f,{style:{minWidth:"-webkit-fill-available",minHeight:"100%"}})})}}):Object(i.jsx)(h.Consumer,{children:function(e){return Object(i.jsx)(h.Provider,{value:{style:Object(p.a)(Object(p.a)({},e.style),t.props.style)},children:t.props.children})}})}}]),n}(a.Component),f=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)(h.Consumer,{children:function(e){var n;return Object(i.jsx)(h.Provider,{value:{style:{}},children:Object(a.createElement)(null!==(n=t.props.el)&&void 0!==n?n:"div",Object(p.a)(Object(p.a)({},t.props),{},{style:Object(p.a)(Object(p.a)({},e.style),t.props.style)}),t.props.children)})}})}}]),n}(a.Component),v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"alignStyles",value:function(){var t,e,n,i=this.props.data.attributes.alignment;return"bottomLeft"===i||"centerLeft"===i||"topLeft"===i?e="flex-start":"bottomCenter"===i||"center"===i||"topCenter"===i?e="center":"bottomRight"!==i&&"centerRight"!==i&&"topRight"!==i||(e="flex-end"),"topCenter"===i||"topLeft"===i||"topRight"===i?n="flex-start":"centerLeft"===i||"center"===i||"centerRight"===i?n="center":"bottomCenter"!==i&&"bottomLeft"!==i&&"bottomRight"!==i||(n="flex-end"),"flex"===(null===(t=this.props.data.children)||void 0===t?void 0:t[0].name)&&(n="stretch"),{display:"flex",justifyContent:e,alignItems:n}}},{key:"render",value:function(){return Object(i.jsx)(f,{style:Object(p.a)({minWidth:"100%",minHeight:"100%"},this.alignStyles()),children:this.props.children})}}]),n}(a.Component),g=function(t){var e=parseInt(t);return"rgba(".concat(e>>16&255,", ").concat(e>>8&255,", ").concat(e>>0&255,", ").concat((e>>24&255)/255,")")},m=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{backgroundColor:g(this.props.data.attributes.color)},children:this.props.children})}}]),n}(a.Component);function y(t){return"number"===typeof t||"string"===typeof t&&(!isNaN(t)&&!isNaN(parseFloat(t)))}var j=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return y(t)?"Infinity"===t&&!1===e?"-webkit-fill-available":"Infinity"===t?"100%":t+"px":"unset"},x=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return y(t)?"Infinity"===t&&!1===e?"-webkit-fill-available":"Infinity"===t?"100%":t+"px":"unset"},O=function(t){if(!t)return{};if(t.startsWith("EdgeInsets.zero"))return{};if(t.startsWith("EdgeInsets.all(")){var e=t.replace("EdgeInsets.all(","").replace(")","");return{paddingLeft:e+"px",paddingTop:e+"px",paddingRight:e+"px",paddingBottom:e+"px"}}if(t.startsWith("EdgeInsets(")){var n=t.replace("EdgeInsets(","").replace(")","").split(",").map((function(t){return t.trim()}));return{paddingLeft:n[0]+"px",paddingTop:n[1]+"px",paddingRight:n[2]+"px",paddingBottom:n[3]+"px"}}return{}},w=function(t){if(t.startsWith("BorderRadius.circular("))return{borderRadius:t.replace("BorderRadius.circular(","").replace(")","")+"px"};if(t.startsWith("BorderRadius.all("))return{borderRadius:t.replace("BorderRadius.all(","").replace(")","")+"px"};if(t.startsWith("BorderRadius.only(")){var e,n,i,a,r,o,s,c,l=t.replace("BorderRadius.only(","").replace(/\)/gi,"").replace(/Radius.circular\(/gi,""),d=null!==(e=null===(n=l.match(/topLeft: ([0-9|.]+)/))||void 0===n?void 0:n[1])&&void 0!==e?e:0,u=null!==(i=null===(a=l.match(/topRight: ([0-9|.]+)/))||void 0===a?void 0:a[1])&&void 0!==i?i:0,p=null!==(r=null===(o=l.match(/bottomLeft: ([0-9|.]+)/))||void 0===o?void 0:o[1])&&void 0!==r?r:0,h=null!==(s=null===(c=l.match(/bottomRight: ([0-9|.]+)/))||void 0===c?void 0:c[1])&&void 0!==s?s:0;return{borderTopLeftRadius:"".concat(d,"px"),borderTopRightRadius:"".concat(u,"px"),borderBottomLeftRadius:"".concat(p,"px"),borderBottomRightRadius:"".concat(h,"px")}}return{}},C=function(t){if(t.startsWith("Offset(")){var e=t.replace("Offset(","").replace(")","").split(",").map((function(t){return t.trim()}));return{dx:e[0],dy:e[1]}}},k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return"Infinity"===this.props.data.attributes.minWidth&&"Infinity"===this.props.data.attributes.minHeight&&"Infinity"===this.props.data.attributes.maxWidth&&"Infinity"===this.props.data.attributes.maxHeight&&!0===this.props.data.attributes.isTight?Object(i.jsx)(f,{children:this.props.children}):Object(i.jsx)(f,{style:{display:"flex",minWidth:j(parseInt(this.props.data.attributes.minWidth)<=.01&&"Infinity"===this.props.data.attributes.maxWidth&&!1===this.props.data.attributes.isTight?"Infinity":this.props.data.attributes.minWidth,this.props.data.attributes.isTight),minHeight:x(this.props.data.attributes.minHeight,this.props.data.attributes.isTight),maxWidth:j(this.props.data.attributes.maxWidth,this.props.data.attributes.isTight),maxHeight:x(this.props.data.attributes.maxHeight,this.props.data.attributes.isTight),overflow:!0===this.props.data.attributes.scrollable?"scroll":"hidden"},children:this.props.children})}}]),n}(a.Component),S=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)(f,{style:{display:"flex",flexDirection:function(){switch(t.props.data.attributes.direction){case"Axis.vertical":return"column";case"Axis.horizontal":return"row";default:return"column"}}(),justifyContent:function(){switch(t.props.data.attributes.mainAxisAlignment){case"MainAxisAlignment.start":return"flex-start";case"MainAxisAlignment.center":return"center";case"MainAxisAlignment.end":return"flex-end";case"MainAxisAlignment.spaceBetween":return"space-between";case"MainAxisAlignment.spaceAround":return"space-around";case"MainAxisAlignment.spaceEvenly":return"space-evenly";default:return"flex-start"}}(),alignItems:function(){switch(t.props.data.attributes.crossAxisAlignment){case"CrossAxisAlignment.start":return"flex-start";case"CrossAxisAlignment.center":return"center";case"CrossAxisAlignment.end":return"flex-end";case"CrossAxisAlignment.stretch":return"stretch";default:return"flex-start"}}(),minWidth:function(){if("Axis.horizontal"===t.props.data.attributes.direction&&"MainAxisSize.max"===t.props.data.attributes.mainAxisSize)return"100%"}(),minHeight:function(){if("Axis.vertical"===t.props.data.attributes.direction&&"MainAxisSize.max"===t.props.data.attributes.mainAxisSize)return"100%"}()},children:this.props.children})}}]),n}(a.Component);function _(t){var e={};if(null!=t){var n;if(t.fontFamily&&(e.fontFamily=t.fontFamily),null!=t.fontSize)e.fontSize="".concat((null!==(n=t.fontSize)&&void 0!==n?n:14).toString(),"px");null!=t.color&&(e.color=g(t.color)),t.fontWeight&&(e.fontWeight=function(t){if(t.fontWeight)return t.fontWeight.replace("FontWeight.w","")}(t)),t.fontStyle&&(e.fontStyle=function(t){if("FontStyle.italic"===t.fontStyle)return"italic"}(t)),t.letterSpacing&&(e.letterSpacing=t.letterSpacing),t.wordSpacing&&(e.wordSpacing=t.wordSpacing),t.textBaseline&&(e.alignmentBaseline=function(t){return"TextBaseline.alphabetic"===t.textBaseline?"alphabetic":"TextBaseline.ideographic"===t.textBaseline?"ideographic":void 0}(t)),t.height&&(e.height=t.height),null!=t.backgroundColor&&(e.backgroundColor=g(t.backgroundColor))}return e}var L=function(t){return null===t||void 0===t?void 0:t.replace("TextAlign.","")},B=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t,e={};return this.props.data.attributes.maxLines&&(e=Object(p.a)(Object(p.a)({},e),{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:this.props.data.attributes.maxLines.toString(),WebkitBoxOrient:"vertical",fontSize:"11px"})),Object(i.jsx)(f,{style:e,children:null===(t=this.props.data.children)||void 0===t?void 0:t.map((function(t,e){return A(t,e)}))})}}]),n}(a.Component),A=function(t,e){return"text_span"===t.name?Object(i.jsx)(W,{data:t},"idx_".concat(e)):null},W=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t,e;return Object(i.jsx)("span",{style:_(this.props.data.attributes.style),children:null!==(t=this.props.data.attributes.text)&&void 0!==t?t:null===(e=this.props.data.children)||void 0===e?void 0:e.map((function(t,e){return A(t,e)}))})}}]),n}(a.Component),T=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{style:Object(p.a)({},O(this.props.data.attributes.padding)),children:this.props.children})}}]),n}(a.Component),R=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a)))._scrollListener=void 0,t._scrollToBottomLastCall=void 0,t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;window&&(this._scrollListener=function(){if(window.pageYOffset+window.innerHeight>=window.document.body.scrollHeight){if(t._scrollToBottomLastCall>(new Date).getTime())return;t._scrollToBottomLastCall=(new Date).getTime()+5e3,ut.callbackChannel(JSON.stringify({type:"scroller",message:{event:"onScrollToBottom"}}))}},window.document.addEventListener("scroll",this._scrollListener))}},{key:"componentWillUnmount",value:function(){window.document.removeEventListener("scroll",this._scrollListener)}},{key:"render",value:function(){return Object(i.jsx)("div",{style:Object(p.a)({display:"flex",flexDirection:"Axis.horizontal"===this.props.data.attributes.scrollDirection?"row":"column",justifyContent:"flex-start",alignItems:"stretch",minWidth:"100%"},O(this.props.data.attributes.padding)),children:this.props.children})}}]),n}(a.Component),D=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(f,{style:{display:"flex",minWidth:j(this.props.data.attributes.width),minHeight:x(this.props.data.attributes.height),maxWidth:j(this.props.data.attributes.width),maxHeight:x(this.props.data.attributes.height)},children:this.props.children})}}]),n}(a.Component),I=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"renderDecoration",value:function(){var t,e,n,i,a,r={};if(this.props.data.attributes.color&&(r.backgroundColor=g(this.props.data.attributes.color)),(null===(t=this.props.data.attributes.decoration)||void 0===t?void 0:t.gradient)&&(r.background=function(t){if(!t)return"";if("LinearGradient"===t.classname){var e=function(){switch(t.end){case"centerRight":return"to right";case"centerLeft":return"to left";case"topRight":return"to top right";case"bottomRight":return"to bottom right";case"topLeft":return"to top left";case"bottomLeft":return"to bottom left"}}(),n=[];return n=t.stops&&t.stops.length?t.colors.map((function(e,n){return void 0!==t.stops[n]?"".concat(g(e)," ").concat((100*t.stops[n]).toFixed(0),"%"):g(e)})):t.colors.map((function(t){return g(t)})),"linear-gradient(".concat(e,", ").concat(n.join(", "),")")}return""}(this.props.data.attributes.decoration.gradient)),null===(e=this.props.data.attributes.decoration)||void 0===e||null===(n=e.boxShadow)||void 0===n?void 0:n[0]){var o,s,c,l,d=null===(o=this.props.data.attributes.decoration)||void 0===o||null===(s=o.boxShadow)||void 0===s?void 0:s[0];r.boxShadow="".concat(null===(c=C(d.offset))||void 0===c?void 0:c.dx,"px ").concat(null===(l=C(d.offset))||void 0===l?void 0:l.dy,"px ").concat(d.blurRadius,"px ").concat(d.spreadRadius,"px ").concat(g(d.color))}return(null===(i=this.props.data.attributes.decoration)||void 0===i?void 0:i.borderRadius)&&(r=Object(p.a)(Object(p.a)({},r),w(this.props.data.attributes.decoration.borderRadius))),(null===(a=this.props.data.attributes.decoration)||void 0===a?void 0:a.border)&&(r=Object(p.a)(Object(p.a)({},r),function(t){var e={};return"BorderStyle.none"!==t.topStyle&&(e.borderTopWidth=0===t.topWidth?"".concat((1/window.devicePixelRatio).toFixed(2),"px"):t.topWidth+"px",e.borderTopColor=g(t.topColor),e.borderTopStyle="solid"),"BorderStyle.none"!==t.leftStyle&&(e.borderLeftWidth=0===t.leftWidth?"".concat((1/window.devicePixelRatio).toFixed(2),"px"):t.leftWidth+"px",e.borderLeftColor=g(t.leftColor),e.borderLeftStyle="solid"),"BorderStyle.none"!==t.bottomStyle&&(e.borderBottomWidth=0===t.bottomWidth?"".concat((1/window.devicePixelRatio).toFixed(2),"px"):t.bottomWidth+"px",e.borderBottomColor=g(t.bottomColor),e.borderBottomStyle="solid"),"BorderStyle.none"!==t.rightStyle&&(e.borderRightWidth=0===t.rightWidth?"".concat((1/window.devicePixelRatio).toFixed(2),"px"):t.rightWidth+"px",e.borderRightColor=g(t.rightColor),e.borderRightStyle="solid"),e}(this.props.data.attributes.decoration.border))),r}},{key:"render",value:function(){return Object(i.jsx)("div",{style:Object(p.a)({minWidth:"-webkit-fill-available",minHeight:"100%"},this.renderDecoration()),children:this.props.children})}}]),n}(a.Component),E=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{style:{display:"flex",minWidth:"100%",minHeight:x(this.props.data.attributes.height),maxWidth:"100%",maxHeight:x(this.props.data.attributes.height),alignItems:"center"},children:Object(i.jsx)("div",{style:{display:"flex",minWidth:"100%",minHeight:x(this.props.data.attributes.thickness),maxWidth:"100%",maxHeight:x(this.props.data.attributes.thickness),borderTopWidth:x(this.props.data.attributes.thickness,!0),borderTopStyle:"solid",borderTopColor:g(this.props.data.attributes.color)}})})}}]),n}(a.Component),F=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)(f,{el:"img",style:{display:"flex",minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:function(){if(!t.props.data.attributes.fit)return"cover";switch(t.props.data.attributes.fit){case"BoxFit.fill":return"fill";case"BoxFit.contain":return"contain";case"BoxFit.cover":return"cover";case"BoxFit.fitWidth":case"BoxFit.fitHeight":return"scale-down";case"BoxFit.none":return"none";default:return"contain"}}()},src:t.props.data.attributes.src?t.props.data.attributes.src:t.props.data.attributes.assetName?t.props.data.attributes.assetPkg?"".concat(lt,"/assets/packages/").concat(t.props.data.attributes.assetPkg,"/").concat(t.props.data.attributes.assetName):"".concat(lt,"/assets/").concat(t.props.data.attributes.assetName):void 0})}}]),n}(a.Component),P=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{borderRadius:"50%",overflow:"hidden"},children:this.props.children})}}]),n}(a.Component),H=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:Object(p.a)(Object(p.a)({},w(this.props.data.attributes.borderRadius)),{},{overflow:"hidden"}),children:this.props.children})}}]),n}(a.Component),M=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{opacity:this.props.data.attributes.opacity},children:this.props.children})}}]),n}(a.Component),N=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{style:{display:"flex",flex:this.props.data.attributes.flex},children:this.props.children})}}]),n}(a.Component),J=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)(f,{onClick:this.props.data.attributes.onTap?function(){ut.callbackChannel(JSON.stringify({type:"gesture_detector",message:{event:"onTap",target:t.props.data.attributes.onTap}}))}:null,children:this.props.children})}}]),n}(a.Component),z=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{style:{display:"flex",position:"relative",minWidth:"-webkit-fill-available"},children:this.props.children})}}]),n}(a.Component),V=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(f,{style:{display:"flex",position:"absolute",left:j(this.props.data.attributes.left),top:j(this.props.data.attributes.top),right:j(this.props.data.attributes.right),bottom:j(this.props.data.attributes.bottom),width:j(this.props.data.attributes.width),height:j(this.props.data.attributes.height)},children:this.props.children})}}]),n}(a.Component),U=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{visibility:this.props.data.attributes.visible?"unset":"hidden"},children:this.props.children})}}]),n}(a.Component),G=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{display:this.props.data.attributes.offstage?"none":"unset"},children:this.props.children})}}]),n}(a.Component),Y=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{transform:this.props.data.attributes.transform},children:this.props.children})}}]),n}(a.Component),K=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{pointerEvents:this.props.data.attributes.absorbing?"absorbing":void 0},children:this.props.children})}}]),n}(a.Component),$=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(b,{style:{pointerEvents:this.props.data.attributes.ignoring?"none":void 0},children:this.props.children})}}]),n}(a.Component),q=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t,e,n;return Object(i.jsx)(f,{style:{fontFamily:null===(t=this.props.data.attributes.icon)||void 0===t?void 0:t.fontFamily,color:this.props.data.attributes.color&&g(this.props.data.attributes.color),fontSize:j(this.props.data.attributes.size)},children:(null===(e=this.props.data.attributes.icon)||void 0===e?void 0:e.codePoint)?String.fromCharCode(null===(n=this.props.data.attributes.icon)||void 0===n?void 0:n.codePoint):""})}}]),n}(a.Component),Q=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a)))._scrollListener=void 0,t._scrollToBottomLastCall=void 0,t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;window&&(this._scrollListener=function(){if(window.pageYOffset+window.innerHeight>=window.document.body.scrollHeight){if(t._scrollToBottomLastCall>(new Date).getTime())return;t._scrollToBottomLastCall=(new Date).getTime()+5e3,ut.callbackChannel(JSON.stringify({type:"scroller",message:{event:"onScrollToBottom"}}))}},window.document.addEventListener("scroll",this._scrollListener))}},{key:"componentWillUnmount",value:function(){window.document.removeEventListener("scroll",this._scrollListener)}},{key:"render",value:function(){return Object(i.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",minWidth:"100%"},children:this.props.children})}}]),n}(a.Component),X=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:this.props.children})}}]),n}(a.Component),Z=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{style:{},children:this.props.children})}}]),n}(a.Component),tt=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a)))._lastValue=void 0,t}return Object(l.a)(n,[{key:"_onSubmitted",value:function(t,e){this.props.data.attributes.onSubmitted&&(ut.callbackChannel(JSON.stringify({type:"editable_text",message:{event:"onSubmitted",target:this.props.data.attributes.onSubmitted,data:e}})),t.blur())}},{key:"_onChanged",value:function(t,e){ut.callbackChannel(JSON.stringify({type:"editable_text",message:{event:"onChanged",target:this.props.data.attributes.onChanged,data:e}}))}},{key:"_keyboardType",value:function(t){return(null===t||void 0===t?void 0:t.indexOf("TextInputType.number"))>0?"number":"text"}},{key:"_keyboardPattern",value:function(t){if((null===t||void 0===t?void 0:t.indexOf("TextInputType.number"))>0){var e=t.indexOf("signed: true")>0,n=t.indexOf("decimal: true")>0;if(e&&n)return"[0-9+-.]*";if(e&&!n)return"[0-9+-]*";if(!e&&!n)return console.log("fdshfkjdshalffjklad"),"[0-9]*"}return""}},{key:"render",value:function(){var t=this;return this.props.data.attributes.maxLines>1?Object(i.jsx)(f,{children:Object(i.jsx)("textarea",{style:Object(p.a)(Object(p.a)({},_(this.props.data.attributes.style)),{},{textAlign:L(this.props.data.attributes.textAlign),width:"100%",height:"100%",backgroundColor:"transparent",border:"none"}),onInput:function(e){t._lastValue=e.target.value,t._onChanged(e.target,e.target.value)},onChange:function(e){t._lastValue=e.target.value,t._onChanged(e.target,e.target.value)},rows:this.props.data.attributes.maxLines,readOnly:this.props.data.attributes.readOnly,children:this.props.data.attributes.value||this._lastValue})}):Object(i.jsx)(f,{children:Object(i.jsx)("input",{style:Object(p.a)(Object(p.a)({},_(this.props.data.attributes.style)),{},{textAlign:L(this.props.data.attributes.textAlign),width:"100%",height:"100%",backgroundColor:"transparent",border:"none"}),onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||t._onSubmitted(e.target,e.target.value)},onInput:function(e){t._lastValue=e.target.value,t._onChanged(e.target,e.target.value)},onChange:function(e){t._lastValue=e.target.value,t._onChanged(e.target,e.target.value)},readOnly:this.props.data.attributes.readOnly,type:this.props.data.attributes.obscureText?"password":this._keyboardType(this.props.data.attributes.keyboardType),pattern:this._keyboardPattern(this.props.data.attributes.keyboardType),value:this.props.data.attributes.value||this._lastValue,autoFocus:this.props.data.attributes.autofocus,autoCorrect:this.props.data.attributes.autoCorrect})})}}]),n}(a.Component),et=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"onTapIndex",value:function(t){ut.callbackChannel(JSON.stringify({type:"tab_bar",message:{event:"onTapIndex",target:this.props.data.attributes.onTapIndex,data:t}}))}},{key:"render",value:function(){var t=this,e=this.props.nested;return Object(i.jsx)("div",{style:e?{backgroundColor:"white",position:"sticky",display:"flex",flexDirection:"row",justifyContent:"space-around",top:"0px",left:"0px",right:"0px",height:"50px"}:{backgroundColor:"white",position:"fixed",display:"flex",flexDirection:"row",justifyContent:"space-around",top:"0px",left:"0px",right:"0px",height:"50px"},children:this.props.data.children.map((function(e,n){return Object(i.jsxs)("div",{onClick:function(){return t.onTapIndex(n)},style:{height:"50px",flex:"1",display:"flex",flexDirection:"column"},children:[Object(i.jsx)("div",{style:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"14px",fontWeight:n===t.props.data.attributes.selected?"bold":"normal"},children:e.attributes.text}),Object(i.jsx)("div",{style:{height:"2px",backgroundColor:"rgb(31,128,240)",visibility:n===t.props.data.attributes.selected?"visible":"hidden"}})]})}))})}}]),n}(a.Component);et.height="50px";var nt=document.body.clientWidth,it=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a)))._scrollListener=void 0,t._scrollToBottomLastCall=void 0,t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;window&&(this._scrollListener=function(){if(window.pageYOffset+window.innerHeight>=window.document.body.scrollHeight){if(t._scrollToBottomLastCall>(new Date).getTime())return;t._scrollToBottomLastCall=(new Date).getTime()+5e3,ut.callbackChannel(JSON.stringify({type:"scroller",message:{event:"onScrollToBottom"}}))}},window.document.addEventListener("scroll",this._scrollListener))}},{key:"componentWillUnmount",value:function(){window.document.removeEventListener("scroll",this._scrollListener)}},{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{style:{display:"flex",flexWrap:"wrap",minWidth:"100%"},children:function(){var e,n,a;return"SliverGridDelegateWithFixedCrossAxisCount"===(null===(e=t.props.data.attributes.gridDelegate)||void 0===e?void 0:e.classname)?function(t,e,n){var a=e?O(e):{},r=a.paddingTop?parseInt(a.paddingTop):0,o=a.paddingLeft?parseInt(a.paddingLeft):0,s=a.paddingRight?parseInt(a.paddingRight):0,c=a.paddingBottom?parseInt(a.paddingBottom):0;return n.map((function(e,a){var l=(nt-o-s-t.crossAxisSpacing*(t.crossAxisCount-1))/t.crossAxisCount,d=a%t.crossAxisCount===0?"".concat(o,"px"):"unset",u=(a+1)%t.crossAxisCount===0?"unset":"".concat(t.crossAxisSpacing,"px"),p=a/t.crossAxisCount>=1?"".concat(t.mainAxisSpacing,"px"):"unset";return a<t.crossAxisCount&&r>0&&(p=r+"px"),Object(i.jsxs)("div",{style:{width:l+"px",height:l/t.childAspectRatio+"px",marginLeft:d,marginRight:u,marginTop:p},children:[Object(i.jsx)(b,{style:{minWidth:"100%",minHeight:"100%"},children:e}),a===n.length-1&&c>0?Object(i.jsx)("div",{style:{width:"100%",height:c+"px"}}):null]},"layout_".concat(a))}))}(t.props.data.attributes.gridDelegate,t.props.data.attributes.padding,t.props.children):"SliverGridDelegateWithMaxCrossAxisExtent"===(null===(n=t.props.data.attributes.gridDelegate)||void 0===n?void 0:n.classname)?function(t,e,n){var a=e?O(e):{},r=a.paddingTop?parseInt(a.paddingTop):0,o=a.paddingLeft?parseInt(a.paddingLeft):0,s=a.paddingRight?parseInt(a.paddingRight):0,c=a.paddingBottom?parseInt(a.paddingBottom):0,l=Math.ceil((nt-o-s)/t.maxCrossAxisExtent);return n.map((function(e,a){var d=(nt-o-s-t.crossAxisSpacing*(l-1))/l,u=a%l===0?"".concat(o,"px"):"unset",p=(a+1)%l===0?"unset":"".concat(t.crossAxisSpacing,"px"),h=a/l>=1?"".concat(t.mainAxisSpacing,"px"):"unset";return a<l&&r>0&&(h=r+"px"),Object(i.jsxs)("div",{style:{width:d+"px",height:d/t.childAspectRatio+"px",marginLeft:u,marginRight:p,marginTop:h},children:[Object(i.jsx)(b,{style:{minWidth:"100%",minHeight:"100%"},children:e}),a===n.length-1&&c>0?Object(i.jsx)("div",{style:{width:"100%",height:c+"px"}}):null]},"layout_".concat(a))}))}(t.props.data.attributes.gridDelegate,t.props.data.attributes.padding,t.props.children):"SliverWaterfallDelegate"===(null===(a=t.props.data.attributes.gridDelegate)||void 0===a?void 0:a.classname)?function(t,e,n){var a=e?O(e):{},r=a.paddingLeft?parseInt(a.paddingLeft):0,o=a.paddingRight?parseInt(a.paddingRight):0,s=a.paddingBottom?parseInt(a.paddingBottom):0,c=(nt-r-o-t.crossAxisSpacing*(t.crossAxisCount-1))/t.crossAxisCount,l=0,d=[],u=n.map((function(e,n){for(var i,o,s,u,p,h=null!==(i=null===(o=e.props)||void 0===o||null===(s=o.data)||void 0===s||null===(u=s.attributes)||void 0===u?void 0:u.height)&&void 0!==i?i:0,b=l;b<t.crossAxisCount;b++){var f=b+1>=t.crossAxisCount?0:b+1;if(d[b]&&d[f]){if(d[f].y+d[f].height<d[b].y+d[b].height){l=f;break}l=b;break}l=b;break}d[l]?(p=d[l].y+d[l].height,n>=t.crossAxisCount&&(p+=t.mainAxisSpacing)):p=(null===a||void 0===a?void 0:a.paddingTop)?parseInt(a.paddingTop):0;var v={x:r+c*l+l*t.crossAxisSpacing,y:p,width:c,height:h};return d[l]=v,l=(l+1)%t.crossAxisCount,v}));return n.map((function(t,e){return Object(i.jsxs)("div",{style:{position:"absolute",left:u[e].x+"px",top:u[e].y+"px",width:u[e].width+"px",height:u[e].height+"px"},children:[Object(i.jsx)(b,{style:{minWidth:"100%",minHeight:"100%"},children:t}),e===u.length-1&&s>0?Object(i.jsx)("div",{style:{width:"100%",height:s+"px"}}):null]},"layout_".concat(e))}))}(t.props.data.attributes.gridDelegate,t.props.data.attributes.padding,t.props.children):[]}()})}}]),n}(a.Component),at=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.children}}]),n}(a.Component),rt=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"registerPlugin",value:function(t){for(var e in t.components)this.components[e]=t.components[e];this.plugins.push(t)}},{key:"render",value:function(t,e){var n,i=this;return this.components[t.name]?Object(a.createElement)(this.components[t.name],{key:e,data:t},null===(n=t.children)||void 0===n?void 0:n.map((function(t,e){return i.render(t,"item_".concat(e))}))):null}}]),t}();rt.components={colored_box:m,align:v,constrained_box:k,rich_text:B,flex:S,padding:T,list_view:R,sized_box:D,decorated_box:I,divider:E,image:F,clip_oval:P,clip_r_rect:H,opacity:M,flexible:N,gesture_detector:J,stack:z,positioned:V,visibility:U,offstage:G,transform:Y,absorb_pointer:K,ignore_pointer:$,icon:q,custom_scroll_view:Q,sliver_list:X,div:Z,editable_text:tt,tab_bar:et,grid_view:it,sliver_waterfall_item:at},rt.plugins=[];var ot=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.data.isListBody?Object(i.jsx)("div",{style:{width:"100%"},children:rt.render(this.props.data)}):Object(i.jsx)("div",{style:{width:"100%",height:"100%"},children:rt.render(this.props.data)})}}]),n}(a.Component),st=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"receivedWebDialogsMessage",value:function(t){if("alert"===t.params.dialogType)window.alert(t.params.message),ht.callbackChannel(JSON.stringify({type:"action",message:{event:"callback",id:t.id}}));else if("confirm"===t.params.dialogType){var e=window.confirm(t.params.message);ht.callbackChannel(JSON.stringify({type:"action",message:{event:"callback",id:t.id,data:e}}))}else if("prompt"===t.params.dialogType){var n=window.prompt(t.params.message,t.params.defaultValue);ht.callbackChannel(JSON.stringify({type:"action",message:{event:"callback",id:t.id,data:n}}))}}}]),t}(),ct=n(9),lt="./",dt=[{name:"MaterialIcons",url:"MaterialIcons-Regular.otf"}],ut=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={},t.lastFrameData=void 0,t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){1===window.mpflutterUseSocket?this.setupDartChannel():this.setupJSChannel()}},{key:"setupDartChannel",value:function(){var t=this;lt="http://".concat(new URL(window.location.href).hostname,":9898");var e=new WebSocket("ws://".concat(new URL(window.location.href).hostname,":9898/"));e.onmessage=function(e){try{var n=JSON.parse(e.data);if("frame_data"===n.type)t.lastFrameData=n,t.setState({data:n.message});else if("frame_diff_data"===n.type){var i=Object(ct.a)(t.lastFrameData,n.message).newDocument;t.lastFrameData=i,t.setState({data:i.message})}else"route"===n.type?pt.receivedRouteMessage(n.message):"action:web_dialogs"===n.type?st.receivedWebDialogsMessage(n.message):rt.plugins.forEach((function(e){var i;null===(i=e.onMessage)||void 0===i||i.call(t,n)}))}catch(a){}},e.onopen=function(){t.setupFonts(),t.setupPlugins()},e.onclose=function(){setTimeout((function(){t.setupDartChannel()}),1e3)},pt.setupPopStateListener(),n.callbackChannel=function(t){e.send(t)}}},{key:"setupJSChannel",value:function(){var t=this;window.addEventListener("message",(function(e){try{var n=JSON.parse(e.data);if("frame_data"===n.type)t.lastFrameData=n,t.setState({data:n.message});else if("frame_diff_data"===n.type){var i=Object(ct.a)(t.lastFrameData,n.message).newDocument;t.lastFrameData=i,t.setState({data:i.message})}else"route"===n.type?pt.receivedRouteMessage(n.message):rt.plugins.forEach((function(e){var i;null===(i=e.onMessage)||void 0===i||i.call(t,n)}))}catch(a){}})),this.setupFonts(),this.setupPlugins(),pt.setupPopStateListener(),n.callbackChannel=function(t){window.postMessage(t,"*")}}},{key:"setupFonts",value:function(){"undefined"!==typeof window&&dt.forEach((function(t){var e=document.createElement("style");e.innerHTML="\n        @font-face{\n          font-family: '".concat(t.name,"';\n          src: url('").concat(lt,"/assets/fonts/").concat(t.url,"');\n        }\n        "),document.body.appendChild(e)}))}},{key:"setupPlugins",value:function(){var t=this;if("undefined"!==typeof window){var e=document.createElement("script");e.src="".concat(lt,"/assets/mp_plugins.js"),e.addEventListener("load",(function(){t.setState({})})),document.body.appendChild(e);var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href="".concat(lt,"/assets/mp_plugins.css"),n.media="all",document.head.appendChild(n)}}},{key:"render",value:function(){var t,e,a,r,o,s,c;return n.isListBody=!0===(null===(t=this.state.data)||void 0===t?void 0:t.isListBody),n.setupBodyScrollBehavior(),Object(i.jsxs)("div",{id:"app",style:{height:!0===(null===(e=this.state.data)||void 0===e?void 0:e.isListBody)?"unset":"100%",backgroundColor:(null===(a=this.state.data)||void 0===a?void 0:a.backgroundColor)?g(null===(r=this.state.data)||void 0===r?void 0:r.backgroundColor):"unset"},children:[(null===(o=this.state.data)||void 0===o?void 0:o.header)?rt.render(null===(s=this.state.data)||void 0===s?void 0:s.header):null,(null===(c=this.state.data)||void 0===c?void 0:c.tabBar)?rt.render(this.state.data.tabBar):null,this.state.data?Object(i.jsx)(ot,{data:this.state.data.body}):null]})}}],[{key:"setupBodyScrollBehavior",value:function(){n.isDialogDisplaying?document.body.style.setProperty("overflow","hidden"):this.isListBody?document.body.style.setProperty("overflow","unset"):document.body.style.setProperty("overflow","hidden")}},{key:"attachDialog",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.isDialogDisplaying=!0,e?s.a.render(Object(i.jsx)("div",{style:{pointerEvents:"auto"},children:t}),document.getElementById("mp_dialog")):s.a.render(t,document.getElementById("mp_dialog")),n.setupBodyScrollBehavior()}},{key:"detachDialog",value:function(){this.isDialogDisplaying=!1,s.a.unmountComponentAtNode(document.getElementById("mp_dialog")),n.setupBodyScrollBehavior()}}]),n}(a.Component);ut.callbackChannel=function(){},ut.isDialogDisplaying=!1,ut.isListBody=!1;var pt=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"setupPopStateListener",value:function(){var t=this;window&&window.addEventListener("popstate",(function(e){if(t.doBacking)return!0;ut.callbackChannel(JSON.stringify({type:"router",message:{event:"doPop"}}))}))}},{key:"receivedRouteMessage",value:function(t){"didPush"===t.event?this.didPush(t):"didPop"===t.event&&this.didPop()}},{key:"didPush",value:function(t){window&&window.history.pushState(t.route,"","/?route=".concat(t.route.name))}},{key:"didPop",value:function(){window&&(this.doBacking=!0,window.history.back(),this.doBacking=!1)}}]),t}();pt.doBacking=!1,"undefined"!==typeof window&&(window.$MPFlutter={MPCore:rt,DivContextProvider:b,DivContextConsumer:f,App:ut},window.React=r.a,window.ReactDOM=s.a);var ht=ut;s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(ht,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.af73776d.chunk.js.map