(this["webpackJsonpcompound-components-modal"]=this["webpackJsonpcompound-components-modal"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),c=n.n(r),o=(n(12),n(3)),u=n(4),i=n(6),m=n(5);var s=function(e){var t=e.children;return l.a.createElement("section",null,t)};var d=function(e){var t=e.toggle,n=e.callToActionLabel||"Default alert";return l.a.createElement("footer",null,l.a.createElement("button",{className:"btn",onClick:function(){alert("OK"),t()}},n),l.a.createElement("button",{className:"btn",onClick:t},"Cancel"))};var E=function(e){var t=e.title||"Default modal title",n=e.toggle;return l.a.createElement("header",null,l.a.createElement("span",null,t),l.a.createElement("button",{className:"close",onClick:n},"\xd7"))},p=(n(13),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isOpened:!1},e.toggle=function(){e.setState({isOpened:!e.state.isOpened})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.isOpened,n=l.a.Children.map(this.props.children,(function(t){return l.a.cloneElement(t,{toggle:e.toggle})}));return l.a.createElement(l.a.Fragment,null,t?l.a.createElement("div",{id:"modal",className:"modal",onClick:function(t){return"modal"===t.target.id&&e.toggle()}},l.a.createElement("div",{className:"modal__content"},n)):l.a.createElement("button",{className:"btn",onClick:function(){return e.toggle()}},"Toggle modal"))}}]),n}(a.Component));p.Content=s,p.Footer=d,p.Header=E;var f=p,g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Modal main header"),l.a.createElement("h2",null,"Subtitle"),l.a.createElement("ol",null,l.a.createElement("li",null,"This"),l.a.createElement("li",null,"List"),l.a.createElement("li",null,"Is"),l.a.createElement("li",null,"Ordered")),l.a.createElement("p",null,"Goodbye!"))};n(14);var v=function(){var e=l.a.createElement(f,null,l.a.createElement(f.Header,{title:"Modal title"}),l.a.createElement(f.Content,null,l.a.createElement(g,null)),l.a.createElement(f.Footer,{callToActionLabel:"Action"}));return l.a.createElement("div",{className:"app"},e)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.cf102e89.chunk.js.map