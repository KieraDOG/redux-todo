(this["webpackJsonpredux-todo-list"]=this["webpackJsonpredux-todo-list"]||[]).push([[0],{21:function(n,e,t){n.exports=t(34)},32:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(4),u=t(8),i=t.n(u),c=(t(32),t(7)),l=t(18),d=[{text:"exercitationem eaque sapiente",completed:!1},{text:"perferendis rerum quibusdam",completed:!1},{text:"repellendus esse quas",completed:!0},{text:"sed dolorem numquam",completed:!0}],b=Object(c.b)({todos:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return[].concat(Object(l.a)(n),[{text:e.text,completed:!1}]);case"TOGGLE_TODO":return n.map((function(n,t){return t===e.index?{text:n.text,completed:!n.completed}:n}));default:return n}}}),s=Object(c.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=t(1),f=t(2);function m(){var n=Object(p.a)(["\n  text-align: left;\n  cursor: pointer;\n  outline: 0;\n  border: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 60px;\n  font-size: 1.25rem;\n  background: transparent;\n  margin-bottom: 12px;\n\n  &:hover {\n    "," {\n      border: 2px solid #38d7b2;\n    }\n  }\n"]);return m=function(){return n},n}function h(){var n=Object(p.a)(["\n    border: 2px solid #38d7b2;\n    color: #38d7b2;\n  "]);return h=function(){return n},n}function g(){var n=Object(p.a)(["\n  margin-right: 16px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n\n  ","\n"]);return g=function(){return n},n}function v(){var n=Object(p.a)(["\n    color: rgba(0, 0, 0, 0.1);\n    text-decoration: line-through;\n  "]);return v=function(){return n},n}function x(){var n=Object(p.a)(["\n  ","\n"]);return x=function(){return n},n}var O=f.b.div(x(),(function(n){return n.completed&&Object(f.a)(v())})),j=f.b.div(g(),(function(n){return n.completed&&Object(f.a)(h())})),E=f.b.button(m(),j),w=function(n){var e=n.text,t=n.completed,r=n.onClick;return o.a.createElement(E,{onClick:r},o.a.createElement("div",null,o.a.createElement(j,{completed:t},t&&o.a.createElement(o.a.Fragment,null,"\u2713"))),o.a.createElement(O,{completed:t},e))};function k(){var n=Object(p.a)(["\n"]);return k=function(){return n},n}var y=f.b.div(k()),S=Object(a.b)((function(n){return{todos:n.todos}}),(function(n){return{onTodoClick:function(e){return n(function(n){return{type:"TOGGLE_TODO",index:n}}(e))}}}))((function(n){var e=n.todos,t=n.onTodoClick;return o.a.createElement(y,null,e.map((function(n,e){return o.a.createElement(w,Object.assign({key:e},n,{onClick:function(){return t(e)}}))})))}));function I(){var n=Object(p.a)(["\n  margin-left: 12px;\n"]);return I=function(){return n},n}function _(){var n=Object(p.a)(["\n  font-weight: 600;\n"]);return _=function(){return n},n}function C(){var n=Object(p.a)(["\n  display: flex;\n  margin-bottom: 36px;\n  font-size: 1.5rem;\n"]);return C=function(){return n},n}var D=f.b.div(C()),T=f.b.div(_()),z=f.b.div(I()),F=function(n){n.text,n.completed,n.onClick;return o.a.createElement(D,null,o.a.createElement(T,null,"Monday,"),o.a.createElement(z,null,"3 Dec"))};function q(){var n=Object(p.a)(["\n  width: 50px;\n  height: 4px;\n  margin-top: 8px;\n  border-radius: 0.5px;\n  background: #55aef1;\n"]);return q=function(){return n},n}function G(){var n=Object(p.a)(["\n  font-size: 1.25rem;\n"]);return G=function(){return n},n}function L(){var n=Object(p.a)(["\n  text-align: right;\n"]);return L=function(){return n},n}function N(){var n=Object(p.a)(["\n"]);return N=function(){return n},n}function X(){var n=Object(p.a)(["\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 1rem;\n  text-align: left;\n  cursor: pointer;\n  flex: 1;\n\n  &:hover {\n    "," {\n      color: #55aef1;\n    }\n  }\n"]);return X=function(){return n},n}function A(){var n=Object(p.a)(["\n  color: rgba(0, 0, 0, 0.5);\n"]);return A=function(){return n},n}function B(){var n=Object(p.a)(["\n  display: flex;\n  margin-bottom: 24px;\n"]);return B=function(){return n},n}var J=f.b.div(B()),M=f.b.div(A()),R=f.b.button(X(),M),U=Object(f.b)(R)(N()),V=Object(f.b)(R)(L()),W=f.b.div(G()),$=f.b.div(q()),H=function(){return o.a.createElement(J,null,o.a.createElement(U,null,o.a.createElement(W,null,"06"),o.a.createElement(M,null,"Created tasks"),o.a.createElement($,null)),o.a.createElement(V,null,o.a.createElement(W,null,"03"),o.a.createElement(M,null,"Completed tasks")))},K=t(16),P=t(17),Q=t(6),Y=t(19),Z=t(20);function nn(){var n=Object(p.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  justify-content: center;\n  align-items: center;\n  outline: 0;\n  border: 0;\n  padding: 0 16px;\n  background: #55aef1;\n  cursor: pointer;\n  color: white;\n  transition: box-shadow 0.3s;\n  font-size: 1.25rem;\n\n  &:disabled {\n    background: rgba(0, 0, 0, 0.3);\n    cursor: not-allowed;\n  }\n\n  &:not(:disabled):hover {\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(p.a)(["\n  position: relative;\n"]);return en=function(){return n},n}function tn(){var n=Object(p.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: 0;\n  background: white;\n  width: 100%;\n  border-radius: 4px;\n  height: 60px;\n  padding: 0 24px;\n  font-size: 1.25rem;\n  box-sizing: border-box;\n"]);return tn=function(){return n},n}function rn(){var n=Object(p.a)(["\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  background: transparent;\n  font-size: 2.25rem;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #55aef1;\n  color: #55aef1;\n\n  &:hover {\n    background-color: #55aef1;\n    color: white;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(p.a)(["\n  margin-top: 36px;\n"]);return on=function(){return n},n}var an=f.b.div(on()),un=f.b.button(rn()),cn=f.b.input(tn()),ln=f.b.form(en()),dn=f.b.button(nn()),bn=function(n){Object(Z.a)(t,n);var e=Object(Y.a)(t);function t(n){var r;return Object(K.a)(this,t),(r=e.call(this,n)).state={showInput:!1,value:""},r.toggleShowInput=r.toggleShowInput.bind(Object(Q.a)(r)),r.handleInputChange=r.handleInputChange.bind(Object(Q.a)(r)),r.handleFormSubmit=r.handleFormSubmit.bind(Object(Q.a)(r)),r}return Object(P.a)(t,[{key:"toggleShowInput",value:function(){this.setState((function(n){return{showInput:!n.showInput}}))}},{key:"handleInputChange",value:function(n){var e=n.target.value;this.setState({value:e})}},{key:"handleFormSubmit",value:function(n){var e=this.props.onSubmit,t=this.state.value;n.preventDefault(),e(t),this.setState({value:"",showInput:!1})}},{key:"render",value:function(){var n=this.state,e=n.showInput,t=n.value;return o.a.createElement(an,null,e?o.a.createElement(ln,{onSubmit:this.handleFormSubmit},o.a.createElement(cn,{value:t,onChange:this.handleInputChange}),o.a.createElement(dn,{disabled:!t,type:"submit"},"Add")):o.a.createElement(un,{onClick:this.toggleShowInput},"+"))}}]),t}(o.a.Component),sn=Object(a.b)(null,(function(n){return{onSubmit:function(e){return n(function(n){return{type:"ADD_TODO",text:n}}(e))}}}))(bn);function pn(){var n=Object(p.a)(["\n  max-width: 500px;\n  margin: 100px auto;\n  background: white;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\n  margin: 24px;\n  padding: 24px;\n  border-radius: 4px;\n\n  @media screen and (min-width: 1024px) {\n    margin: 100px auto;\n    padding: 36px;\n    border-radius: 24px;\n  }\n"]);return pn=function(){return n},n}var fn=f.b.div(pn());var mn=function(){return o.a.createElement(fn,null,o.a.createElement(F,null),o.a.createElement(H,null),o.a.createElement(S,null),o.a.createElement(sn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(a.a,{store:s},o.a.createElement(mn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5d979d6b.chunk.js.map