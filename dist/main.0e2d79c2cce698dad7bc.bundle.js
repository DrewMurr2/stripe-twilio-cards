webpackJsonp([1],{"+h1B":function(n,l,u){"use strict";var t=u("/oeL"),e=u("aR8+"),r=u("wQAS"),i=u("q4dy"),o=u("qbdv"),a=u("fc+i"),c=u("CPp0"),s=u("15x7"),d=u("EkWA");u.d(l,"a",function(){return p});var p=t.b(e.a,[r.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[i.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,o.a,o.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,a.b,a.c,[o.c]),t.d(6144,t.q,null,[a.b]),t.d(4608,a.d,a.e,[]),t.d(5120,a.f,function(n,l,u,t){return[new a.g(n),new a.h(l),new a.i(u,t)]},[o.c,o.c,o.c,a.d]),t.d(4608,a.j,a.j,[a.f,t.r]),t.d(135680,a.k,a.k,[o.c]),t.d(4608,a.l,a.l,[a.j,a.k]),t.d(6144,t.s,null,[a.l]),t.d(6144,a.m,null,[a.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,a.n,a.n,[o.c]),t.d(4608,a.o,a.o,[o.c]),t.d(4608,c.a,c.a,[]),t.d(4608,c.b,c.c,[]),t.d(5120,c.d,c.e,[]),t.d(4608,c.f,c.f,[c.a,c.b,c.d]),t.d(4608,c.g,c.h,[]),t.d(5120,c.i,c.j,[c.f,c.g]),t.d(4608,s.a,s.a,[c.i]),t.d(4608,d.a,d.a,[]),t.d(512,o.d,o.d,[]),t.d(1024,t.u,a.p,[]),t.d(1024,t.v,function(n,l){return[a.q(n,l)]},[[2,a.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,a.s,a.s,[[3,a.s]]),t.d(512,c.k,c.k,[]),t.d(512,e.a,e.a,[])])})},"/RAP":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},0:function(n,l,u){n.exports=u("cDNt")},"15x7":function(n,l,u){"use strict";var t=u("CPp0"),e=u("Dqrr"),r=(u.n(e),u("Dqrr"));u.n(r);u.d(l,"a",function(){return i});var i=function(){function n(n){this.http=n,this.serverUrl="/api/",this.loggedIn=!1,this.user={firm:"string",email:"string"}}return n.prototype.post=function(n,l){var u=JSON.stringify(n),e=new t.l({"Content-Type":"application/json"});return this.http.post(this.serverUrl+l,u,{headers:e}).map(function(n){return n.json()}).catch(function(n){return r.Observable.throw(n)})},n.prototype.createUserInDB=function(n){return this.post(n,"createUserInDB")},n.prototype.testapi=function(){return this.post({},"sample")},n.ctorParameters=function(){return[{type:t.i}]},n}()},"62MG":function(n,l,u){"use strict";function t(n){return i._12(0,[(n()(),i._14(0,null,null,23,"div",[["class","card"],["style","margin-top:20px"]],null,null,null,null,null)),(n()(),i._13(null,["\n  "])),(n()(),i._14(0,null,null,20,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),i._13(null,["\n    "])),(n()(),i._14(0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),i._13(null,["Twilio Select Your Number"])),(n()(),i._13(null,["\n\n    "])),(n()(),i._14(0,null,null,0,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),i._13(null,["\n    "])),(n()(),i._14(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),i._13(null,["Desired Phone Number:"])),(n()(),i._13(null,["\n    "])),(n()(),i._14(0,[["em",1]],null,0,"input",[["type","text"]],null,null,null,null,null)),(n()(),i._13(null,["\n    "])),(n()(),i._14(0,null,null,4,"div",[["style","    padding: 8px;\n    margin: 3px;\n    margin-bottom: 20px;\n    border-style: solid;\n    border-radius: 5px;"]],null,null,null,null,null)),(n()(),i._13(null,["\n      "])),(n()(),i._14(0,[["cardelement",1]],null,1,"div",[],null,null,null,null,null)),(n()(),i._13(null,["512-576-5535"])),(n()(),i._13(null,["\n    "])),(n()(),i._13(null,["\n    "])),(n()(),i._14(0,null,null,1,"a",[["class","btn btn-primary"]],null,null,null,null,null)),(n()(),i._13(null,["Save"])),(n()(),i._13(null,["\n  "])),(n()(),i._13(null,["\n\n"]))],null,null)}function e(n){return i._12(0,[(n()(),i._14(0,null,null,1,"app-twilio",[],null,null,null,t,c)),i._15(114688,null,0,o.a,[],null,null)],function(n,l){n(l,1,0)},null)}var r=u("/RAP"),i=u("/oeL"),o=u("YR6I");u.d(l,"b",function(){return c}),l.a=t;var a=[r.a],c=i._11({encapsulation:0,styles:a,data:{}});i._16("app-twilio",o.a,e,{},{},[])},EkWA:function(n,l,u){"use strict";function t(){return window}u.d(l,"a",function(){return e});var e=function(){function n(){}return Object.defineProperty(n.prototype,"nativeWindow",{get:function(){return t()},enumerable:!0,configurable:!0}),n}()},NhKt:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},OjTg:function(n,l,u){"use strict";var t=u("EkWA"),e=u("15x7");u.d(l,"a",function(){return r});var r=function(){function n(n,l){this.userService=n,this.winRef=l,this.complete=!1}return n.prototype.ngOnInit=function(){},n.prototype.ngAfterViewInit=function(){console.log(this.winRef.nativeWindow),this.stripe=this.winRef.nativeWindow.Stripe("pk_test_wdevjExYH28dYzFg05q7GQTW"),this.elements=this.stripe.elements(),this.card=this.elements.create("card"),this.el.nativeElement.id="cardelement",this.card.mount("#cardelement")},n.prototype.submitCreditCard=function(n,l){this.stripe.createSource(this.card,{owner:{name:this.userService.user.firm,email:n},metadata:this.userService.user}).then(function(n){console.log(n),l(n)})},n.prototype.save=function(n){var l=this;this.submitCreditCard(n,function(n){n.error?(alert("Stripe Error"),console.log(n.error)):(console.log("Stripe Result",n),l.userService.createUserInDB(n.source).subscribe(function(n){n?(console.log("user",n),l.complete=!0):console.log("user error")},function(n){alert("Error Sending"),console.error(n)}))})},n.ctorParameters=function(){return[{type:e.a},{type:t.a}]},n}()},TCH4:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},YR6I:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[]},n}()},"aR8+":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},cDNt:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),r=u("+h1B"),i=u("fc+i");e.a.production&&u.i(t.a)(),u.i(i.a)().bootstrapModuleFactory(r.a).catch(function(n){return console.error(n)})},p5Ee:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,u){"use strict";function t(n){return i._12(0,[(n()(),i._13(null,["\n\n"])),(n()(),i._13(null,["\n"])),(n()(),i._14(0,null,null,7,"div",[["style","    padding-left: 15%;\n    padding-right: 15%;\n    padding-top: 20px;\n    padding-bottom: 1000px;\n    background-color: rgb(220,100,100);"]],null,null,null,null,null)),(n()(),i._13(null,["\n    "])),(n()(),i._14(0,null,null,1,"app-stripe",[],null,null,null,o.a,o.b)),i._15(4308992,null,0,a.a,[c.a,s.a],null,null),(n()(),i._13(null,["\n    "])),(n()(),i._14(0,null,null,1,"app-twilio",[],null,null,null,d.a,d.b)),i._15(114688,null,0,p.a,[],null,null),(n()(),i._13(null,["\n"]))],function(n,l){n(l,5,0),n(l,8,0)},null)}function e(n){return i._12(0,[(n()(),i._14(0,null,null,1,"app-root",[],null,null,null,t,v)),i._15(49152,null,0,f.a,[],null,null)],null,null)}var r=u("NhKt"),i=u("/oeL"),o=u("yf0e"),a=u("OjTg"),c=u("15x7"),s=u("EkWA"),d=u("62MG"),p=u("YR6I"),f=u("wQAS");u.d(l,"a",function(){return h});var _=[r.a],v=i._11({encapsulation:0,styles:_,data:{}}),h=i._16("app-root",f.a,e,{},{},[])},qtrl:function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="qtrl"},wQAS:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.title="app"}return n}()},yf0e:function(n,l,u){"use strict";function t(n){return a._12(0,[(n()(),a._14(0,null,null,0,"img",[["src","/assets/check.png"],["style","width: 80px;\n    float: right;"]],null,null,null,null,null))],null,null)}function e(n){return a._12(0,[(n()(),a._14(0,null,null,17,"div",[],null,null,null,null,null)),(n()(),a._13(null,["\n      "])),(n()(),a._14(0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),a._13(null,["You will not be billed until the install is complete and your firm is using Client Connect. You may cancel at any time."])),(n()(),a._13(null,["\n      "])),(n()(),a._14(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),a._13(null,["email address for billing:"])),(n()(),a._13(null,["\n      "])),(n()(),a._14(0,[["em",1]],null,0,"input",[["type","email"]],null,null,null,null,null)),(n()(),a._13(null,["\n      "])),(n()(),a._14(0,null,null,3,"div",[["style","    padding: 8px;\n    margin: 3px;\n    margin-bottom: 20px;\n    border-style: solid;\n    border-radius: 5px;"]],null,null,null,null,null)),(n()(),a._13(null,["\n        "])),(n()(),a._14(0,[[1,0],["cardelement",1]],null,0,"div",[],null,null,null,null,null)),(n()(),a._13(null,["\n      "])),(n()(),a._13(null,["\n      "])),(n()(),a._14(0,null,null,1,"a",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.save(a._17(n,8).value)&&t}return t},null,null)),(n()(),a._13(null,["Save"])),(n()(),a._13(null,["\n    "]))],null,null)}function r(n){return a._12(0,[a._18(671088640,1,{el:0}),(n()(),a._14(0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(n()(),a._13(null,["\n  "])),(n()(),a._14(0,null,null,10,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),a._13(null,["\n    "])),(n()(),a._14(0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),a._13(null,["Billing Information"])),(n()(),a._13(null,["\n    "])),(n()(),a._19(16777216,null,null,1,null,t)),a._15(16384,null,0,c.h,[a._2,a._3],{ngIf:[0,"ngIf"]},null),(n()(),a._13(null,["\n    "])),(n()(),a._19(16777216,null,null,1,null,e)),a._15(16384,null,0,c.h,[a._2,a._3],{ngIf:[0,"ngIf"]},null),(n()(),a._13(null,["\n  "])),(n()(),a._13(null,["\n"]))],function(n,l){var u=l.component;n(l,9,0,u.complete),n(l,12,0,!u.complete)},null)}function i(n){return a._12(0,[(n()(),a._14(0,null,null,1,"app-stripe",[],null,null,null,r,_)),a._15(4308992,null,0,s.a,[d.a,p.a],null,null)],function(n,l){n(l,1,0)},null)}var o=u("TCH4"),a=u("/oeL"),c=u("qbdv"),s=u("OjTg"),d=u("15x7"),p=u("EkWA");u.d(l,"b",function(){return _}),l.a=r;var f=[o.a],_=a._11({encapsulation:0,styles:f,data:{}});a._16("app-stripe",s.a,i,{},{},[])}},[0]);