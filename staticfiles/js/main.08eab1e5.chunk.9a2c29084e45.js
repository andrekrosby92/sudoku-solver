(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),s=(n(17),n(5)),i=n(4),u=n(3),l=n.n(u),f=n(6),v=n(0);function b(e){var t=e.disabled,n=e.loading,c=e.text,o=e.optionalClassName,s=e.onClick,i=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=i.current;e.onmousemove=function(t){e.style.backgroundPosition="\n        ".concat(t.offsetX-e.clientWidth,"px\n        ").concat(t.offsetY-e.clientHeight,"px\n      ")}}),[i]),Object(v.jsx)("button",{disabled:t,className:"btn ".concat(n?"--is-loading":""," ").concat(o),onClick:s,ref:i,children:n?Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)("span",{children:"\u22c5"}),Object(v.jsx)("span",{children:"\u22c5"}),Object(v.jsx)("span",{children:"\u22c5"})]}):c})}function d(e){var t=e.value,n=e.onChange;return Object(v.jsxs)("div",{className:"toggle",children:[Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",defaultChecked:t,onChange:function(){return n(!t)}}),Object(v.jsx)("span",{className:"slider round"})]}),Object(v.jsx)("small",{children:"Solve asynchronously"})]})}var j=n(2),h=n(11),O=n(12),p=[[5,0,1,6,2,7,0,0,0],[8,2,0,0,9,0,0,1,3],[6,4,0,0,0,0,0,0,0],[9,6,0,4,0,1,3,0,0],[0,8,0,7,3,0,4,2,9],[0,0,4,9,0,0,5,0,0],[0,0,6,0,7,5,0,3,0],[2,0,0,3,6,9,0,0,5],[0,5,0,0,0,0,1,9,0]];function x(e,t,n){if("undefined"==typeof t&&(t=e,e=0),"undefined"==typeof n&&(n=1),n>0&&e>=t||n<0&&e<=t)return[];for(var a=[],r=e;n>0?r<t:r>t;r+=n)a.push(r);return a}var y=function(){function e(t){var n=this;Object(h.a)(this,e),this.initialBoard=void 0,this.board=void 0,this._isPossible=function(e,t,a){var r,c=Object(j.a)(x(3));try{for(c.s();!(r=c.n()).done;){var o,s=r.value,i=Object(j.a)(x(3));try{for(i.s();!(o=i.n()).done;){var u=o.value;if(n.board[e][3*s+u]===a)return!1;if(n.board[3*s+u][t]===a)return!1;var l=3*Math.floor(e/3),f=3*Math.floor(t/3);if(n.board[l+s][f+u]===a)return!1}}catch(v){i.e(v)}finally{i.f()}}}catch(v){c.e(v)}finally{c.f()}return!0},this.initialBoard=this._parseStateToBoard(t),this.board=this._parseStateToBoard(t)}return Object(O.a)(e,[{key:"isValid",value:function(){var e,t=new Set,n=Object(j.a)(x(9));try{for(n.s();!(e=n.n()).done;){var a,r=e.value,c=Object(j.a)(x(9));try{for(c.s();!(a=c.n()).done;){var o=a.value,s=this.board[r][o];if(0!==s){var i="row ".concat(r," value ").concat(s),u="col ".concat(o," value ").concat(s),l="box ".concat(Math.floor(r/3)," / ").concat(Math.floor(o/3)," value ").concat(s);if(t.has(i)||t.has(u)||t.has(l))return!1;t.add(i),t.add(u),t.add(l)}}}catch(f){c.e(f)}finally{c.f()}}}catch(f){n.e(f)}finally{n.f()}return!0}},{key:"solve",value:function(e){var t,n=this,a=Object(j.a)(x(9));try{var r=function(){var a,r=t.value,c=Object(j.a)(x(9));try{var o=function(){var t=a.value;if(0===n.board[r][t]){var c,o=Object(j.a)(x(1,10));try{var u=function(){var a=c.value;if(n._isPossible(r,t,a)){if(n.board[r][t]=a,e((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},"r".concat(r,"c").concat(t),String(a)))})),n.solve(e))return{v:{v:{v:!0}}};n.board[r][t]=0,e((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},"r".concat(r,"c").concat(t),""))}))}};for(o.s();!(c=o.n()).done;){var l=u();if("object"===typeof l)return l.v}}catch(f){o.e(f)}finally{o.f()}return{v:{v:!1}}}};for(c.s();!(a=c.n()).done;){var u=o();if("object"===typeof u)return u.v}}catch(l){c.e(l)}finally{c.f()}};for(a.s();!(t=a.n()).done;){var c=r();if("object"===typeof c)return c.v}}catch(o){a.e(o)}finally{a.f()}return!0}},{key:"solveAsync",value:function(){var e=Object(f.a)(l.a.mark((function e(t){var n,a,r,c,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._sleep(1);case 2:n=Object(j.a)(x(9)),e.prev=3,r=l.a.mark((function e(){var n,r,c,u,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.value,r=Object(j.a)(x(9)),e.prev=2,u=l.a.mark((function e(){var a,r,u,f,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=c.value,0!==o.board[n][a]){e.next=22;break}r=Object(j.a)(x(1,10)),e.prev=3,f=l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.value,!o._isPossible(n,a,r)){e.next=12;break}return o.board[n][a]=r,t((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},"r".concat(n,"c").concat(a),String(r)))})),e.next=6,o.solveAsync(t);case 6:if(!e.sent){e.next=10;break}return e.abrupt("return",{v:{v:{v:Promise.resolve(!0)}}});case 10:o.board[n][a]=0,t((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},"r".concat(n,"c").concat(a),""))}));case 12:case"end":return e.stop()}}),e)})),r.s();case 6:if((u=r.n()).done){e.next=13;break}return e.delegateYield(f(),"t0",8);case 8:if("object"!==typeof(v=e.t0)){e.next=11;break}return e.abrupt("return",v.v);case 11:e.next=6;break;case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),r.e(e.t1);case 18:return e.prev=18,r.f(),e.finish(18);case 21:return e.abrupt("return",{v:{v:Promise.resolve(!1)}});case 22:case"end":return e.stop()}}),e,null,[[3,15,18,21]])})),r.s();case 5:if((c=r.n()).done){e.next=12;break}return e.delegateYield(u(),"t0",7);case 7:if("object"!==typeof(f=e.t0)){e.next=10;break}return e.abrupt("return",f.v);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(2),r.e(e.t1);case 17:return e.prev=17,r.f(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})),n.s();case 6:if((a=n.n()).done){e.next=13;break}return e.delegateYield(r(),"t0",8);case 8:if("object"!==typeof(c=e.t0)){e.next=11;break}return e.abrupt("return",c.v);case 11:e.next=6;break;case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),n.e(e.t1);case 18:return e.prev=18,n.f(),e.finish(18);case 21:return e.abrupt("return",Promise.resolve(!0));case 22:case"end":return e.stop()}}),e,this,[[3,15,18,21]])})));return function(t){return e.apply(this,arguments)}}()},{key:"didSolve",value:function(){return JSON.stringify(this.initialBoard)!==JSON.stringify(this.board)}},{key:"_parseStateToBoard",value:function(e){var t,n=[],a=Object(j.a)(x(9));try{for(a.s();!(t=a.n()).done;){var r,c=t.value,o=[],s=Object(j.a)(x(9));try{for(s.s();!(r=s.n()).done;){var i=r.value;e["r".concat(c,"c").concat(i)]?o.push(parseInt(e["r".concat(c,"c").concat(i)])):o.push(0)}}catch(u){s.e(u)}finally{s.f()}n.push(o)}}catch(u){a.e(u)}finally{a.f()}return n}},{key:"_sleep",value:function(){var e=Object(f.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),m=n(7),k=Object(a.createContext)({});function g(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),i=s[0],u=s[1],l=Object(a.useState)(!1),f=Object(m.a)(l,2),b=f[0],d=f[1],h=Object(a.useState)(null),O=Object(m.a)(h,2),y=O[0],g=O[1];function S(){g(null),c((function(){var e,t={},n=Object(j.a)(x(9));try{for(n.s();!(e=n.n()).done;){var a,r=e.value,c=Object(j.a)(x(9));try{for(c.s();!(a=c.n()).done;){var o=a.value;t["r".concat(r,"c").concat(o)]=p[r][o]?String(p[r][o]):""}}catch(s){c.e(s)}finally{c.f()}}}catch(s){n.e(s)}finally{n.f()}return t}))}Object(a.useEffect)((function(){S()}),[]);var w={state:r,willSolveAsync:i,isSolving:b,didSolve:y,setState:c,setWillSolveAsync:u,setIsSolving:d,setDidSolve:g,setDefaultBoardToState:S,clearBoard:function(){g(null),c((function(){var e,t={},n=Object(j.a)(x(9));try{for(n.s();!(e=n.n()).done;){var a,r=e.value,c=Object(j.a)(x(9));try{for(c.s();!(a=c.n()).done;){var o=a.value;t["r".concat(r,"c").concat(o)]=""}}catch(s){c.e(s)}finally{c.f()}}}catch(s){n.e(s)}finally{n.f()}return t}))}};return Object(v.jsx)(k.Provider,{value:w,children:e.children})}function S(){var e=Object(a.useContext)(k),t=e.state,n=e.willSolveAsync,r=e.isSolving,c=e.didSolve,o=e.setState,s=e.setWillSolveAsync,i=e.setIsSolving,u=e.setDidSolve,j=e.setDefaultBoardToState,h=e.clearBoard,O=function(){var e=Object(f.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(null),!Object.values(t).every((function(e){return e}))){e.next=3;break}return e.abrupt("return");case 3:if((a=new y(t)).isValid()){e.next=7;break}return u(!1),e.abrupt("return");case 7:if(!n){e.next=14;break}return i(!0),e.next=11,a.solveAsync(o);case 11:i(!1),e.next=15;break;case 14:a.solve(o);case 15:a.didSolve()?u(!0):u(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"board-container",children:[Object(v.jsx)("h1",{children:"Solve a sudoku-puzzle."}),Object(v.jsx)("p",{children:"Enter a valid sudoku puzzle below and I will solve it for you."}),Object(v.jsx)(d,{value:n,onChange:s}),Object(v.jsx)("small",{className:"note",children:"NOTE: Solving asynchronously will repeatedly update the board as it is solving. For tougher boards, this could take quite some time."}),Object(v.jsxs)("div",{className:"board",children:[x(9).map((function(e){return Object(v.jsx)(w,{row:e},e)})),Object(v.jsx)("div",{className:"overlay",children:x(9).map((function(e){return Object(v.jsx)("div",{},e)}))})]}),Object(v.jsx)(b,{disabled:r,loading:r,text:"Solve sudoku",onClick:O}),Object(v.jsx)(b,{disabled:r,loading:r,text:"Clear board",onClick:function(){return h()},optionalClassName:"blue"}),Object(v.jsx)(b,{disabled:r,loading:r,text:"Set default board",onClick:function(){return j()},optionalClassName:"orange"}),null!==c&&c&&Object(v.jsx)("h2",{className:"message success",children:"Board is solved."}),null!==c&&!c&&Object(v.jsx)("h2",{className:"message error",children:"There is no solution."})]})}function w(e){var t=e.row;return Object(v.jsx)("div",{className:"row",children:x(9).map((function(e){return Object(v.jsx)(C,{name:"r".concat(t,"c").concat(e)},e)}))})}function C(e){var t=e.name,n=Object(a.useContext)(k),r=n.state,c=n.setState,o=n.isSolving;return Object(v.jsx)("div",{className:"box",children:Object(v.jsx)("input",{name:t,maxLength:1,autoComplete:"off",disabled:o,value:r[t],onChange:function(e){var t=x(1,10).map((function(e){return String(e)}))+" ",n=e.target.value;t.includes(n)&&c((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(s.a)({},e.target.name,n))}))}})})}function N(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)("nav",{className:"navbar",children:"Sudoku-solver"}),Object(v.jsx)("div",{className:"main",children:Object(v.jsx)(g,{children:Object(v.jsx)(S,{})})})]})}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),B()}},[[20,1,2]]]);
//# sourceMappingURL=main.08eab1e5.chunk.js.map