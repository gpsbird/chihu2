webpackJsonp([6],{198:function(l,n,u){"use strict";function t(l){return o._35(0,[(l()(),o._12(0,null,null,1,"question",[],null,null,null,w.b,w.a)),o._11(49152,null,0,y.a,[C.a],{data:[0,"data"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function e(l){return o._35(0,[(l()(),o._33(null,["\n"])),(l()(),o._12(0,null,null,10,"ion-header",[["no-border",""]],null,null,null,null,null)),o._11(16384,null,0,S.a,[P.a,o.m,o.J,[2,M.a]],null,null),(l()(),o._33(null,["\n\n    "])),(l()(),o._12(0,null,null,6,"ion-navbar",[["class","toolbar"],["color","mblue"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,U.b,U.a)),o._11(49152,null,0,J.a,[x.a,[2,M.a],[2,C.a],P.a,o.m,o.J],{color:[0,"color"]},null),(l()(),o._33(3,["\n        "])),(l()(),o._12(0,null,3,2,"ion-title",[],null,null,null,L.b,L.a)),o._11(49152,null,0,O.a,[P.a,o.m,o.J,[2,j.a],[2,J.a]],null,null),(l()(),o._33(0,["我的提问"])),(l()(),o._33(3,["\n    "])),(l()(),o._33(null,["\n\n"])),(l()(),o._33(null,["\n\n\n"])),(l()(),o._12(0,null,null,5,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,F.b,F.a)),o._11(4374528,null,0,B.a,[P.a,D.a,Q.a,o.m,o.J,x.a,T.a,o.C,[2,M.a],[2,C.a]],null,null),(l()(),o._33(1,["\n    "])),(l()(),o._8(16777216,null,1,1,null,t)),o._11(802816,null,0,_.h,[o.W,o.R,o.v],{ngForOf:[0,"ngForOf"]},null),(l()(),o._33(1,["\n"]))],function(l,n){var u=n.component;l(n,5,0,"mblue"),l(n,17,0,u.data)},function(l,n){l(n,4,0,o._25(n,5)._hidden,o._25(n,5)._sbPadding),l(n,13,0,o._25(n,14).statusbarPadding,o._25(n,14)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(0),i=(u(53),u(26)),a=u(85),r=function(){function l(l,n,u,t){this.UserService=l,this.http=n,this.navCtrl=u,this.navParams=t,this.items=[],this.uid=this.navParams.get("id")?this.navParams.get("id"):this.UserService._user._id,this.getdata()}return l.prototype.getdata=function(){var l=this;this.UserService.presentLoadingDefault();var n=new i.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu2/my_question","id="+this.uid,{headers:n}).subscribe(function(n){l.UserService.presentLoadingDismiss(),l.items=n.json()})},l}(),s=u(271),c=function(){return function(){}}(),_=u(14),d=u(28),h=u(87),f=u(252),p=u(253),m=u(139),b=u(140),v=u(141),g=u(142),k=u(143),w=u(280),y=u(268),C=u(15),S=u(89),P=u(1),M=u(4),U=u(225),J=u(36),x=u(6),L=u(226),O=u(86),j=u(37),F=u(224),B=u(20),D=u(3),Q=u(8),T=u(27),q=u(11),I=[],N=o._10({encapsulation:2,styles:I,data:{}}),z=o._9("page-my-question",r,function(l){return o._35(0,[(l()(),o._12(0,null,null,1,"page-my-question",[],null,null,null,e,N)),o._11(49152,null,0,r,[a.a,i.e,C.a,q.a],null,null)],null,null)},{},{},[]),E=u(88);u.d(n,"MyQuestionPageModuleNgFactory",function(){return V});var A=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])};return function(n,u){function t(){this.constructor=n}l(n,u),n.prototype=null===u?Object.create(u):(t.prototype=u.prototype,new t)}}(),R=function(l){function n(n){return l.call(this,n,[m.a,b.a,v.a,g.a,k.a,z],[])||this}return A(n,l),Object.defineProperty(n.prototype,"_NgLocalization_10",{get:function(){return null==this.__NgLocalization_10&&(this.__NgLocalization_10=new _.j(this.parent.get(o.x))),this.__NgLocalization_10},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_11",{get:function(){return null==this.__ɵi_11&&(this.__ɵi_11=new d.k),this.__ɵi_11},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_12",{get:function(){return null==this.__FormBuilder_12&&(this.__FormBuilder_12=new d.c),this.__FormBuilder_12},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new _.b,this._ɵba_1=new d.j,this._FormsModule_2=new d.d,this._ReactiveFormsModule_3=new d.i,this._IonicModule_4=new h.a,this._HeaderComponentModule_5=new f.a,this._FooterComponentModule_6=new p.a,this._QuestionComponentModule_7=new s.a,this._IonicPageModule_8=new h.b,this._MyQuestionPageModule_9=new c,this._LAZY_LOADED_TOKEN_13=r,this._MyQuestionPageModule_9},n.prototype.getInternal=function(l,n){return l===_.b?this._CommonModule_0:l===d.j?this._ɵba_1:l===d.d?this._FormsModule_2:l===d.i?this._ReactiveFormsModule_3:l===h.a?this._IonicModule_4:l===f.a?this._HeaderComponentModule_5:l===p.a?this._FooterComponentModule_6:l===s.a?this._QuestionComponentModule_7:l===h.b?this._IonicPageModule_8:l===c?this._MyQuestionPageModule_9:l===_.k?this._NgLocalization_10:l===d.k?this._ɵi_11:l===d.c?this._FormBuilder_12:l===E.a?this._LAZY_LOADED_TOKEN_13:n},n.prototype.destroyInternal=function(){},n}(o._7),V=new o.z(R,c)},224:function(l,n,u){"use strict";function t(l){return e._35(2,[e._31(402653184,1,{_fixedContent:0}),e._31(402653184,2,{_scrollContent:0}),(l()(),e._12(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),e._24(null,0),(l()(),e._12(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),e._24(null,1),e._24(null,2)],null,null)}u.d(n,"a",function(){return f}),n.b=t;var e=u(0),o=u(20),i=u(1),a=u(3),r=u(8),s=u(6),c=u(27),_=u(4),d=u(15),h=[],f=e._10({encapsulation:2,styles:h,data:{}});e._9("ion-content",o.a,function(l){return e._35(0,[(l()(),e._12(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,t,f)),e._11(4374528,null,0,o.a,[i.a,a.a,r.a,e.m,e.J,s.a,c.a,e.C,[2,_.a],[2,d.a]],null,null)],null,function(l,n){l(n,0,0,e._25(n,1).statusbarPadding,e._25(n,1)._hasRefresher)})},{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])},225:function(l,n,u){"use strict";function t(l){return e._35(0,[(l()(),e._12(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),e._11(278528,null,0,o.g,[e.v,e.w,e.m,e.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e._12(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.backButtonClick(u)&&t),t},a.b,a.a)),e._11(278528,null,0,o.g,[e.v,e.w,e.m,e.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._11(1097728,null,0,r.a,[[8,"bar-button"],s.a,e.m,e.J],null,null),(l()(),e._12(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._11(278528,null,0,o.g,[e.v,e.w,e.m,e.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._11(147456,null,0,c.a,[s.a,e.m,e.J],{name:[0,"name"]},null),(l()(),e._12(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),e._11(278528,null,0,o.g,[e.v,e.w,e.m,e.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e._33(null,["",""])),e._24(null,0),e._24(null,1),e._24(null,2),(l()(),e._12(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),e._11(278528,null,0,o.g,[e.v,e.w,e.m,e.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._24(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,e._25(n,7)._hidden),l(n,10,0,u._backText)})}u.d(n,"a",function(){return p}),n.b=t;var e=u(0),o=u(14),i=u(36),a=u(54),r=u(16),s=u(1),c=u(38),_=u(6),d=u(4),h=u(15),f=[],p=e._10({encapsulation:2,styles:f,data:{}});e._9("ion-navbar",i.a,function(l){return e._35(0,[(l()(),e._12(0,null,null,1,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,t,p)),e._11(49152,null,0,i.a,[_.a,[2,d.a],[2,h.a],s.a,e.m,e.J],null,null)],null,function(l,n){l(n,0,0,e._25(n,1)._hidden,e._25(n,1)._sbPadding)})},{color:"color",mode:"mode",hideBackButton:"hideBackButton"},{},["[menuToggle],ion-buttons[left]","ion-buttons[start]","ion-buttons[end],ion-buttons[right]","*"])},226:function(l,n,u){"use strict";function t(l){return e._35(2,[(l()(),e._12(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),e._11(278528,null,0,o.g,[e.v,e.w,e.m,e.J],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._24(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return _}),n.b=t;var e=u(0),o=u(14),i=u(86),a=u(1),r=u(37),s=u(36),c=[],_=e._10({encapsulation:2,styles:c,data:{}});e._9("ion-title",i.a,function(l){return e._35(0,[(l()(),e._12(0,null,null,1,"ion-title",[],null,null,null,t,_)),e._11(49152,null,0,i.a,[a.a,e.m,e.J,[2,r.a],[2,s.a]],null,null)],null,null)},{color:"color",mode:"mode"},{},["*"])},247:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(0),u(85);var t=u(26),e=(u(53),function(){function l(l,n,u){this.UserService=l,this.http=n,this.navCtrl=u,this.data={},this.isfork=!1}return l.prototype.ngOnChanges=function(l){try{l.data.currentValue&&l.data.currentValue.uid&&this.checkfork()}catch(l){}},l.prototype.checkfork=function(){this.isfork=this.UserService.checkisfork(this.data.uid)},l.prototype.fork=function(){var l=this;if(this.checkfork(),this.isfork)return!0;if(this.UserService.presentLoadingDefault(),this.UserService._user._id!=this.data.uid&&this.UserService._user._id){var n=new t.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu2/forkuser","uid="+this.data.uid+"&id="+this.UserService._user._id+"&name="+this.UserService._user.nickname+"&uname="+this.data.name+"&userimg="+this.UserService._user.userimg+"&uuserimg="+this.data.userimg,{headers:n}).subscribe(function(n){n.json()&&(l.isfork=!0),l.UserService.get_fork_user()})}else{if(this.UserService.presentLoadingDismiss(),this.UserService._user._id)return!0;this.navCtrl.push("LoginPage")}},l.prototype.unfork=function(){var l=this;if(this.checkfork(),!this.isfork)return!0;this.UserService.presentLoadingDefault();var n=new t.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu2/disfork_user","uid="+this.data.uid+"&id="+this.UserService._user._id,{headers:n}).subscribe(function(n){n.json()&&(l.isfork=!1),l.UserService.get_fork_user()})},l.prototype.pushPersonPage=function(l){this.navCtrl.push("PersonalPage",{_id:l})},l}())},248:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(0),u(85);var t=u(26),e=(u(53),function(){function l(l,n,u){this.UserService=l,this.http=n,this.navCtrl=u,this.data={},this.ishide=!0}return l.prototype.ngOnChanges=function(l){try{l.data.currentValue&&l.data.currentValue._id&&(this._id=l.data.currentValue._id,this.checkfork())}catch(l){}},l.prototype.checkfork=function(){var l=this;if(this.UserService._user._id){var n=new t.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu2/checkforkquestion","artid="+this._id+"&id="+this.UserService._user._id,{headers:n}).subscribe(function(n){"0"==n.json().length&&(l.ishide=!1)})}},l.prototype.fork=function(){var l=this;if(this.UserService._user._id){var n=new t.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu2/forkquestion","uid="+this.data.uid+"&artid="+this._id+"&id="+this.UserService._user._id+"&name="+this.UserService._user.nickname+"&userimg="+this.UserService._user.userimg+"&title="+this.data.title,{headers:n}).subscribe(function(n){1==n.json().result.ok&&(l.ishide=!0,alert("关注成功"))})}else this.navCtrl.push("LoginPage")},l}())},252:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(0),u(53),u(247);var t=function(){return function(){}}()},253:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(0),u(53),u(248);var t=function(){return function(){}}()},268:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(0),u(53);var t=function(){function l(l){this.navCtrl=l,this.data={}}return l.prototype.pushQuestionPage=function(l){this.navCtrl.push("QuestionPage",{_id:l})},l}()},271:function(l,n,u){"use strict";u.d(n,"a",function(){return t});u(0),u(53),u(268),u(252),u(253);var t=function(){return function(){}}()},272:function(l,n,u){"use strict";function t(l){return e._35(0,[e._27(0,o.c,[e.x]),(l()(),e._33(null,["\n"])),(l()(),e._12(0,null,null,22,"section",[["class","header"]],null,null,null,null,null)),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,0,"img",[["alt",""]],[[8,"src",4]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.pushPersonPage(e.data.uid)&&t),t},null,null)),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,9,"div",[["class","it-left"]],null,null,null,null,null)),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e._33(null,[""," 分享了心情"])),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,3,"p",[["class","time"]],null,null,null,null,null)),(l()(),e._12(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-clock-o"]],null,null,null,null,null)),(l()(),e._33(null,[":",""])),e._29(1),(l()(),e._33(null,["\n    "])),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,2,"div",[["class","fork"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.fork()&&t),t},null,null)),(l()(),e._12(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-plus"]],null,null,null,null,null)),(l()(),e._33(null,[" 关注"])),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,2,"div",[["class","fork nofork"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.unfork()&&t),t},null,null)),(l()(),e._12(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-plus"]],null,null,null,null,null)),(l()(),e._33(null,[" 取消关注"])),(l()(),e._33(null,["\n"]))],null,function(l,n){var u=n.component;l(n,4,0,u.data.userimg),l(n,9,0,u.data.name),l(n,13,0,e._34(n,13,0,l(n,14,0,e._25(n,0),u.data.time))),l(n,17,0,u.isfork),l(n,21,0,!u.isfork)})}u.d(n,"a",function(){return _}),n.b=t;var e=u(0),o=u(14),i=u(247),a=u(85),r=u(26),s=u(15),c=[],_=e._10({encapsulation:2,styles:c,data:{}});e._9("header",i.a,function(l){return e._35(0,[(l()(),e._12(0,null,null,1,"header",[],null,null,null,t,_)),e._11(573440,null,0,i.a,[a.a,r.e,s.a],null,null)],null,null)},{data:"data"},{},[])},273:function(l,n,u){"use strict";function t(l){return e._35(0,[(l()(),e._33(null,["\n"])),(l()(),e._12(0,null,null,42,"ion-row",[["class","row"]],null,null,null,null,null)),e._11(16384,null,0,o.a,[],null,null),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),e._11(16384,null,0,i.a,[],null,null),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,8,"button",[["clear",""],["icon-left",""],["ion-button",""],["small",""]],null,null,null,a.b,a.a)),e._11(1097728,null,0,r.a,[[8,""],s.a,e.m,e.J],{small:[0,"small"],clear:[1,"clear"]},null),(l()(),e._33(0,["\n                  "])),(l()(),e._12(0,null,0,1,"ion-icon",[["name","eye"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._11(147456,null,0,c.a,[s.a,e.m,e.J],{name:[0,"name"]},null),(l()(),e._33(0,["\n                  "])),(l()(),e._12(0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e._33(null,["",""])),(l()(),e._33(0,["\n                "])),(l()(),e._33(null,["\n    "])),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),e._11(16384,null,0,i.a,[],null,null),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,8,"button",[["clear",""],["icon-left",""],["ion-button",""],["small",""]],null,null,null,a.b,a.a)),e._11(1097728,null,0,r.a,[[8,""],s.a,e.m,e.J],{small:[0,"small"],clear:[1,"clear"]},null),(l()(),e._33(0,["\n                  "])),(l()(),e._12(0,null,0,1,"ion-icon",[["name","text"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._11(147456,null,0,c.a,[s.a,e.m,e.J],{name:[0,"name"]},null),(l()(),e._33(0,["\n                  "])),(l()(),e._12(0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e._33(null,["",""])),(l()(),e._33(0,["\n                "])),(l()(),e._33(null,["\n    "])),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,10,"ion-col",[["center",""],["class","col"],["text-center",""]],null,null,null,null,null)),e._11(16384,null,0,i.a,[],null,null),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,2,"button",[["ion-button",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.fork()&&t),t},a.b,a.a)),e._11(1097728,null,0,r.a,[[8,""],s.a,e.m,e.J],null,null),(l()(),e._33(0,["＋关注问题"])),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,2,"button",[["color","tabc"],["ion-button",""]],[[8,"hidden",0]],null,null,a.b,a.a)),e._11(1097728,null,0,r.a,[[8,""],s.a,e.m,e.J],{color:[0,"color"]},null),(l()(),e._33(0,["-取消关注"])),(l()(),e._33(null,["\n    "])),(l()(),e._33(null,["\n"]))],function(l,n){l(n,8,0,"","");l(n,11,0,"eye");l(n,22,0,"","");l(n,25,0,"text");l(n,40,0,"tabc")},function(l,n){var u=n.component;l(n,10,0,e._25(n,11)._hidden),l(n,14,0,u.data.fork),l(n,24,0,e._25(n,25)._hidden),l(n,28,0,u.data.answer),l(n,35,0,u.ishide),l(n,39,0,!u.ishide)})}u.d(n,"a",function(){return m}),n.b=t;var e=u(0),o=u(95),i=u(94),a=u(54),r=u(16),s=u(1),c=u(38),_=u(248),d=u(85),h=u(26),f=u(15),p=[],m=e._10({encapsulation:2,styles:p,data:{}});e._9("footer",_.a,function(l){return e._35(0,[(l()(),e._12(0,null,null,1,"footer",[],null,null,null,t,m)),e._11(573440,null,0,_.a,[d.a,h.e,f.a],null,null)],null,null)},{data:"data"},{},[])},280:function(l,n,u){"use strict";function t(l){return e._35(0,[(l()(),e._33(null,["\n"])),(l()(),e._12(0,null,null,16,"section",[["class","dv_top_ban"]],null,null,null,null,null)),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,1,"header",[],null,null,null,o.b,o.a)),e._11(573440,null,0,i.a,[a.a,r.e,s.a],{data:[0,"data"]},null),(l()(),e._33(null,["\n    "])),(l()(),e._12(0,null,null,10,"section",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.pushQuestionPage(e.data._id)&&t),t},null,null)),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e._33(null,["",""])),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._33(null,["",""])),(l()(),e._33(null,["\n        "])),(l()(),e._12(0,null,null,1,"footer",[],null,null,null,_.b,_.a)),e._11(573440,null,0,d.a,[a.a,r.e,s.a],{data:[0,"data"]},null),(l()(),e._33(null,["\n    "])),(l()(),e._33(null,["\n"]))],function(l,n){var u=n.component;l(n,4,0,u.data),l(n,15,0,u.data)},function(l,n){var u=n.component;l(n,9,0,u.data.title),l(n,12,0,u.data.text)})}u.d(n,"a",function(){return f}),n.b=t;var e=u(0),o=u(272),i=u(247),a=u(85),r=u(26),s=u(15),c=u(268),_=u(273),d=u(248),h=[],f=e._10({encapsulation:2,styles:h,data:{}});e._9("question",c.a,function(l){return e._35(0,[(l()(),e._12(0,null,null,1,"question",[],null,null,null,t,f)),e._11(49152,null,0,c.a,[s.a],null,null)],null,null)},{data:"data"},{},[])}});