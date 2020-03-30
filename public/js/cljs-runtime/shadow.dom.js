goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32613 = coll;
var G__32614 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32613,G__32614) : shadow.dom.lazy_native_coll_seq.call(null,G__32613,G__32614));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32643 = arguments.length;
switch (G__32643) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32647 = arguments.length;
switch (G__32647) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32652 = arguments.length;
switch (G__32652) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32661 = arguments.length;
switch (G__32661) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32671 = arguments.length;
switch (G__32671) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32682 = arguments.length;
switch (G__32682) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32686){if((e32686 instanceof Object)){
var e = e32686;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32686;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32691 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32692 = null;
var count__32693 = (0);
var i__32694 = (0);
while(true){
if((i__32694 < count__32693)){
var el = chunk__32692.cljs$core$IIndexed$_nth$arity$2(null,i__32694);
var handler_33235__$1 = ((function (seq__32691,chunk__32692,count__32693,i__32694,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32691,chunk__32692,count__32693,i__32694,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33235__$1);


var G__33236 = seq__32691;
var G__33237 = chunk__32692;
var G__33238 = count__32693;
var G__33239 = (i__32694 + (1));
seq__32691 = G__33236;
chunk__32692 = G__33237;
count__32693 = G__33238;
i__32694 = G__33239;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32691);
if(temp__5735__auto__){
var seq__32691__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32691__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32691__$1);
var G__33240 = cljs.core.chunk_rest(seq__32691__$1);
var G__33241 = c__4609__auto__;
var G__33242 = cljs.core.count(c__4609__auto__);
var G__33243 = (0);
seq__32691 = G__33240;
chunk__32692 = G__33241;
count__32693 = G__33242;
i__32694 = G__33243;
continue;
} else {
var el = cljs.core.first(seq__32691__$1);
var handler_33244__$1 = ((function (seq__32691,chunk__32692,count__32693,i__32694,el,seq__32691__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32691,chunk__32692,count__32693,i__32694,el,seq__32691__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33244__$1);


var G__33245 = cljs.core.next(seq__32691__$1);
var G__33246 = null;
var G__33247 = (0);
var G__33248 = (0);
seq__32691 = G__33245;
chunk__32692 = G__33246;
count__32693 = G__33247;
i__32694 = G__33248;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32711 = arguments.length;
switch (G__32711) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32712 = cljs.core.seq(events);
var chunk__32713 = null;
var count__32714 = (0);
var i__32715 = (0);
while(true){
if((i__32715 < count__32714)){
var vec__32722 = chunk__32713.cljs$core$IIndexed$_nth$arity$2(null,i__32715);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33250 = seq__32712;
var G__33251 = chunk__32713;
var G__33252 = count__32714;
var G__33253 = (i__32715 + (1));
seq__32712 = G__33250;
chunk__32713 = G__33251;
count__32714 = G__33252;
i__32715 = G__33253;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32712);
if(temp__5735__auto__){
var seq__32712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32712__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32712__$1);
var G__33254 = cljs.core.chunk_rest(seq__32712__$1);
var G__33255 = c__4609__auto__;
var G__33256 = cljs.core.count(c__4609__auto__);
var G__33257 = (0);
seq__32712 = G__33254;
chunk__32713 = G__33255;
count__32714 = G__33256;
i__32715 = G__33257;
continue;
} else {
var vec__32726 = cljs.core.first(seq__32712__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32726,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33258 = cljs.core.next(seq__32712__$1);
var G__33259 = null;
var G__33260 = (0);
var G__33261 = (0);
seq__32712 = G__33258;
chunk__32713 = G__33259;
count__32714 = G__33260;
i__32715 = G__33261;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32732 = cljs.core.seq(styles);
var chunk__32734 = null;
var count__32735 = (0);
var i__32736 = (0);
while(true){
if((i__32736 < count__32735)){
var vec__32749 = chunk__32734.cljs$core$IIndexed$_nth$arity$2(null,i__32736);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32749,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33262 = seq__32732;
var G__33263 = chunk__32734;
var G__33264 = count__32735;
var G__33265 = (i__32736 + (1));
seq__32732 = G__33262;
chunk__32734 = G__33263;
count__32735 = G__33264;
i__32736 = G__33265;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32732);
if(temp__5735__auto__){
var seq__32732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32732__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32732__$1);
var G__33266 = cljs.core.chunk_rest(seq__32732__$1);
var G__33267 = c__4609__auto__;
var G__33268 = cljs.core.count(c__4609__auto__);
var G__33269 = (0);
seq__32732 = G__33266;
chunk__32734 = G__33267;
count__32735 = G__33268;
i__32736 = G__33269;
continue;
} else {
var vec__32755 = cljs.core.first(seq__32732__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33271 = cljs.core.next(seq__32732__$1);
var G__33272 = null;
var G__33273 = (0);
var G__33274 = (0);
seq__32732 = G__33271;
chunk__32734 = G__33272;
count__32735 = G__33273;
i__32736 = G__33274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32763_33276 = key;
var G__32763_33277__$1 = (((G__32763_33276 instanceof cljs.core.Keyword))?G__32763_33276.fqn:null);
switch (G__32763_33277__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33279 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33279,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33279,"aria-");
}
})())){
el.setAttribute(ks_33279,value);
} else {
(el[ks_33279] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32784){
var map__32785 = p__32784;
var map__32785__$1 = (((((!((map__32785 == null))))?(((((map__32785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32785):map__32785);
var props = map__32785__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32790 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32793 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32793,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32793;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32801 = arguments.length;
switch (G__32801) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32809){
var vec__32810 = p__32809;
var seq__32811 = cljs.core.seq(vec__32810);
var first__32812 = cljs.core.first(seq__32811);
var seq__32811__$1 = cljs.core.next(seq__32811);
var nn = first__32812;
var first__32812__$1 = cljs.core.first(seq__32811__$1);
var seq__32811__$2 = cljs.core.next(seq__32811__$1);
var np = first__32812__$1;
var nc = seq__32811__$2;
var node = vec__32810;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32815 = nn;
var G__32816 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32815,G__32816) : create_fn.call(null,G__32815,G__32816));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32817 = nn;
var G__32818 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32817,G__32818) : create_fn.call(null,G__32817,G__32818));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32820 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32820,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32820,(1),null);
var seq__32823_33285 = cljs.core.seq(node_children);
var chunk__32824_33286 = null;
var count__32825_33287 = (0);
var i__32826_33288 = (0);
while(true){
if((i__32826_33288 < count__32825_33287)){
var child_struct_33289 = chunk__32824_33286.cljs$core$IIndexed$_nth$arity$2(null,i__32826_33288);
var children_33290 = shadow.dom.dom_node(child_struct_33289);
if(cljs.core.seq_QMARK_(children_33290)){
var seq__32845_33291 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33290));
var chunk__32847_33292 = null;
var count__32848_33293 = (0);
var i__32849_33294 = (0);
while(true){
if((i__32849_33294 < count__32848_33293)){
var child_33295 = chunk__32847_33292.cljs$core$IIndexed$_nth$arity$2(null,i__32849_33294);
if(cljs.core.truth_(child_33295)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33295);


var G__33296 = seq__32845_33291;
var G__33297 = chunk__32847_33292;
var G__33298 = count__32848_33293;
var G__33299 = (i__32849_33294 + (1));
seq__32845_33291 = G__33296;
chunk__32847_33292 = G__33297;
count__32848_33293 = G__33298;
i__32849_33294 = G__33299;
continue;
} else {
var G__33300 = seq__32845_33291;
var G__33301 = chunk__32847_33292;
var G__33302 = count__32848_33293;
var G__33303 = (i__32849_33294 + (1));
seq__32845_33291 = G__33300;
chunk__32847_33292 = G__33301;
count__32848_33293 = G__33302;
i__32849_33294 = G__33303;
continue;
}
} else {
var temp__5735__auto___33304 = cljs.core.seq(seq__32845_33291);
if(temp__5735__auto___33304){
var seq__32845_33305__$1 = temp__5735__auto___33304;
if(cljs.core.chunked_seq_QMARK_(seq__32845_33305__$1)){
var c__4609__auto___33306 = cljs.core.chunk_first(seq__32845_33305__$1);
var G__33307 = cljs.core.chunk_rest(seq__32845_33305__$1);
var G__33308 = c__4609__auto___33306;
var G__33309 = cljs.core.count(c__4609__auto___33306);
var G__33310 = (0);
seq__32845_33291 = G__33307;
chunk__32847_33292 = G__33308;
count__32848_33293 = G__33309;
i__32849_33294 = G__33310;
continue;
} else {
var child_33311 = cljs.core.first(seq__32845_33305__$1);
if(cljs.core.truth_(child_33311)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33311);


var G__33312 = cljs.core.next(seq__32845_33305__$1);
var G__33313 = null;
var G__33314 = (0);
var G__33315 = (0);
seq__32845_33291 = G__33312;
chunk__32847_33292 = G__33313;
count__32848_33293 = G__33314;
i__32849_33294 = G__33315;
continue;
} else {
var G__33316 = cljs.core.next(seq__32845_33305__$1);
var G__33317 = null;
var G__33318 = (0);
var G__33319 = (0);
seq__32845_33291 = G__33316;
chunk__32847_33292 = G__33317;
count__32848_33293 = G__33318;
i__32849_33294 = G__33319;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33290);
}


var G__33320 = seq__32823_33285;
var G__33321 = chunk__32824_33286;
var G__33322 = count__32825_33287;
var G__33323 = (i__32826_33288 + (1));
seq__32823_33285 = G__33320;
chunk__32824_33286 = G__33321;
count__32825_33287 = G__33322;
i__32826_33288 = G__33323;
continue;
} else {
var temp__5735__auto___33324 = cljs.core.seq(seq__32823_33285);
if(temp__5735__auto___33324){
var seq__32823_33325__$1 = temp__5735__auto___33324;
if(cljs.core.chunked_seq_QMARK_(seq__32823_33325__$1)){
var c__4609__auto___33326 = cljs.core.chunk_first(seq__32823_33325__$1);
var G__33327 = cljs.core.chunk_rest(seq__32823_33325__$1);
var G__33328 = c__4609__auto___33326;
var G__33329 = cljs.core.count(c__4609__auto___33326);
var G__33330 = (0);
seq__32823_33285 = G__33327;
chunk__32824_33286 = G__33328;
count__32825_33287 = G__33329;
i__32826_33288 = G__33330;
continue;
} else {
var child_struct_33331 = cljs.core.first(seq__32823_33325__$1);
var children_33332 = shadow.dom.dom_node(child_struct_33331);
if(cljs.core.seq_QMARK_(children_33332)){
var seq__32851_33333 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33332));
var chunk__32853_33334 = null;
var count__32854_33335 = (0);
var i__32855_33336 = (0);
while(true){
if((i__32855_33336 < count__32854_33335)){
var child_33337 = chunk__32853_33334.cljs$core$IIndexed$_nth$arity$2(null,i__32855_33336);
if(cljs.core.truth_(child_33337)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33337);


var G__33338 = seq__32851_33333;
var G__33339 = chunk__32853_33334;
var G__33340 = count__32854_33335;
var G__33341 = (i__32855_33336 + (1));
seq__32851_33333 = G__33338;
chunk__32853_33334 = G__33339;
count__32854_33335 = G__33340;
i__32855_33336 = G__33341;
continue;
} else {
var G__33343 = seq__32851_33333;
var G__33344 = chunk__32853_33334;
var G__33345 = count__32854_33335;
var G__33346 = (i__32855_33336 + (1));
seq__32851_33333 = G__33343;
chunk__32853_33334 = G__33344;
count__32854_33335 = G__33345;
i__32855_33336 = G__33346;
continue;
}
} else {
var temp__5735__auto___33347__$1 = cljs.core.seq(seq__32851_33333);
if(temp__5735__auto___33347__$1){
var seq__32851_33348__$1 = temp__5735__auto___33347__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32851_33348__$1)){
var c__4609__auto___33349 = cljs.core.chunk_first(seq__32851_33348__$1);
var G__33350 = cljs.core.chunk_rest(seq__32851_33348__$1);
var G__33351 = c__4609__auto___33349;
var G__33352 = cljs.core.count(c__4609__auto___33349);
var G__33353 = (0);
seq__32851_33333 = G__33350;
chunk__32853_33334 = G__33351;
count__32854_33335 = G__33352;
i__32855_33336 = G__33353;
continue;
} else {
var child_33354 = cljs.core.first(seq__32851_33348__$1);
if(cljs.core.truth_(child_33354)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33354);


var G__33355 = cljs.core.next(seq__32851_33348__$1);
var G__33356 = null;
var G__33357 = (0);
var G__33358 = (0);
seq__32851_33333 = G__33355;
chunk__32853_33334 = G__33356;
count__32854_33335 = G__33357;
i__32855_33336 = G__33358;
continue;
} else {
var G__33359 = cljs.core.next(seq__32851_33348__$1);
var G__33360 = null;
var G__33361 = (0);
var G__33362 = (0);
seq__32851_33333 = G__33359;
chunk__32853_33334 = G__33360;
count__32854_33335 = G__33361;
i__32855_33336 = G__33362;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33332);
}


var G__33363 = cljs.core.next(seq__32823_33325__$1);
var G__33364 = null;
var G__33365 = (0);
var G__33366 = (0);
seq__32823_33285 = G__33363;
chunk__32824_33286 = G__33364;
count__32825_33287 = G__33365;
i__32826_33288 = G__33366;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32875 = cljs.core.seq(node);
var chunk__32876 = null;
var count__32877 = (0);
var i__32878 = (0);
while(true){
if((i__32878 < count__32877)){
var n = chunk__32876.cljs$core$IIndexed$_nth$arity$2(null,i__32878);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33369 = seq__32875;
var G__33370 = chunk__32876;
var G__33371 = count__32877;
var G__33372 = (i__32878 + (1));
seq__32875 = G__33369;
chunk__32876 = G__33370;
count__32877 = G__33371;
i__32878 = G__33372;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32875);
if(temp__5735__auto__){
var seq__32875__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32875__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32875__$1);
var G__33373 = cljs.core.chunk_rest(seq__32875__$1);
var G__33374 = c__4609__auto__;
var G__33375 = cljs.core.count(c__4609__auto__);
var G__33376 = (0);
seq__32875 = G__33373;
chunk__32876 = G__33374;
count__32877 = G__33375;
i__32878 = G__33376;
continue;
} else {
var n = cljs.core.first(seq__32875__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33377 = cljs.core.next(seq__32875__$1);
var G__33378 = null;
var G__33379 = (0);
var G__33380 = (0);
seq__32875 = G__33377;
chunk__32876 = G__33378;
count__32877 = G__33379;
i__32878 = G__33380;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32893 = arguments.length;
switch (G__32893) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32903 = arguments.length;
switch (G__32903) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32914 = arguments.length;
switch (G__32914) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33391 = arguments.length;
var i__4790__auto___33392 = (0);
while(true){
if((i__4790__auto___33392 < len__4789__auto___33391)){
args__4795__auto__.push((arguments[i__4790__auto___33392]));

var G__33393 = (i__4790__auto___33392 + (1));
i__4790__auto___33392 = G__33393;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32920_33394 = cljs.core.seq(nodes);
var chunk__32921_33395 = null;
var count__32922_33396 = (0);
var i__32923_33397 = (0);
while(true){
if((i__32923_33397 < count__32922_33396)){
var node_33398 = chunk__32921_33395.cljs$core$IIndexed$_nth$arity$2(null,i__32923_33397);
fragment.appendChild(shadow.dom._to_dom(node_33398));


var G__33399 = seq__32920_33394;
var G__33400 = chunk__32921_33395;
var G__33401 = count__32922_33396;
var G__33402 = (i__32923_33397 + (1));
seq__32920_33394 = G__33399;
chunk__32921_33395 = G__33400;
count__32922_33396 = G__33401;
i__32923_33397 = G__33402;
continue;
} else {
var temp__5735__auto___33403 = cljs.core.seq(seq__32920_33394);
if(temp__5735__auto___33403){
var seq__32920_33404__$1 = temp__5735__auto___33403;
if(cljs.core.chunked_seq_QMARK_(seq__32920_33404__$1)){
var c__4609__auto___33405 = cljs.core.chunk_first(seq__32920_33404__$1);
var G__33406 = cljs.core.chunk_rest(seq__32920_33404__$1);
var G__33407 = c__4609__auto___33405;
var G__33408 = cljs.core.count(c__4609__auto___33405);
var G__33409 = (0);
seq__32920_33394 = G__33406;
chunk__32921_33395 = G__33407;
count__32922_33396 = G__33408;
i__32923_33397 = G__33409;
continue;
} else {
var node_33410 = cljs.core.first(seq__32920_33404__$1);
fragment.appendChild(shadow.dom._to_dom(node_33410));


var G__33411 = cljs.core.next(seq__32920_33404__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__32920_33394 = G__33411;
chunk__32921_33395 = G__33412;
count__32922_33396 = G__33413;
i__32923_33397 = G__33414;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32918){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32918));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32925_33415 = cljs.core.seq(scripts);
var chunk__32926_33416 = null;
var count__32927_33417 = (0);
var i__32928_33418 = (0);
while(true){
if((i__32928_33418 < count__32927_33417)){
var vec__32942_33419 = chunk__32926_33416.cljs$core$IIndexed$_nth$arity$2(null,i__32928_33418);
var script_tag_33420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32942_33419,(0),null);
var script_body_33421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32942_33419,(1),null);
eval(script_body_33421);


var G__33422 = seq__32925_33415;
var G__33423 = chunk__32926_33416;
var G__33424 = count__32927_33417;
var G__33425 = (i__32928_33418 + (1));
seq__32925_33415 = G__33422;
chunk__32926_33416 = G__33423;
count__32927_33417 = G__33424;
i__32928_33418 = G__33425;
continue;
} else {
var temp__5735__auto___33426 = cljs.core.seq(seq__32925_33415);
if(temp__5735__auto___33426){
var seq__32925_33427__$1 = temp__5735__auto___33426;
if(cljs.core.chunked_seq_QMARK_(seq__32925_33427__$1)){
var c__4609__auto___33428 = cljs.core.chunk_first(seq__32925_33427__$1);
var G__33429 = cljs.core.chunk_rest(seq__32925_33427__$1);
var G__33430 = c__4609__auto___33428;
var G__33431 = cljs.core.count(c__4609__auto___33428);
var G__33432 = (0);
seq__32925_33415 = G__33429;
chunk__32926_33416 = G__33430;
count__32927_33417 = G__33431;
i__32928_33418 = G__33432;
continue;
} else {
var vec__32950_33433 = cljs.core.first(seq__32925_33427__$1);
var script_tag_33434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32950_33433,(0),null);
var script_body_33435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32950_33433,(1),null);
eval(script_body_33435);


var G__33436 = cljs.core.next(seq__32925_33427__$1);
var G__33437 = null;
var G__33438 = (0);
var G__33439 = (0);
seq__32925_33415 = G__33436;
chunk__32926_33416 = G__33437;
count__32927_33417 = G__33438;
i__32928_33418 = G__33439;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32954){
var vec__32956 = p__32954;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32956,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32968 = arguments.length;
switch (G__32968) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32978 = cljs.core.seq(style_keys);
var chunk__32979 = null;
var count__32980 = (0);
var i__32981 = (0);
while(true){
if((i__32981 < count__32980)){
var it = chunk__32979.cljs$core$IIndexed$_nth$arity$2(null,i__32981);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33448 = seq__32978;
var G__33449 = chunk__32979;
var G__33450 = count__32980;
var G__33451 = (i__32981 + (1));
seq__32978 = G__33448;
chunk__32979 = G__33449;
count__32980 = G__33450;
i__32981 = G__33451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32978);
if(temp__5735__auto__){
var seq__32978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32978__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32978__$1);
var G__33452 = cljs.core.chunk_rest(seq__32978__$1);
var G__33453 = c__4609__auto__;
var G__33454 = cljs.core.count(c__4609__auto__);
var G__33455 = (0);
seq__32978 = G__33452;
chunk__32979 = G__33453;
count__32980 = G__33454;
i__32981 = G__33455;
continue;
} else {
var it = cljs.core.first(seq__32978__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33456 = cljs.core.next(seq__32978__$1);
var G__33457 = null;
var G__33458 = (0);
var G__33459 = (0);
seq__32978 = G__33456;
chunk__32979 = G__33457;
count__32980 = G__33458;
i__32981 = G__33459;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32988,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33000 = k32988;
var G__33000__$1 = (((G__33000 instanceof cljs.core.Keyword))?G__33000.fqn:null);
switch (G__33000__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32988,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33003){
var vec__33004 = p__33003;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33004,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33004,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32987){
var self__ = this;
var G__32987__$1 = this;
return (new cljs.core.RecordIter((0),G__32987__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32989,other32990){
var self__ = this;
var this32989__$1 = this;
return (((!((other32990 == null)))) && ((this32989__$1.constructor === other32990.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32989__$1.x,other32990.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32989__$1.y,other32990.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32989__$1.__extmap,other32990.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32987){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33019 = cljs.core.keyword_identical_QMARK_;
var expr__33020 = k__4447__auto__;
if(cljs.core.truth_((pred__33019.cljs$core$IFn$_invoke$arity$2 ? pred__33019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33020) : pred__33019.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33020)))){
return (new shadow.dom.Coordinate(G__32987,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33019.cljs$core$IFn$_invoke$arity$2 ? pred__33019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33020) : pred__33019.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33020)))){
return (new shadow.dom.Coordinate(self__.x,G__32987,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32987),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32987){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32987,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32993){
var extmap__4478__auto__ = (function (){var G__33028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32993,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32993)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33028);
} else {
return G__33028;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32993),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32993),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33033,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33041 = k33033;
var G__33041__$1 = (((G__33041 instanceof cljs.core.Keyword))?G__33041.fqn:null);
switch (G__33041__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33033,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33046){
var vec__33047 = p__33046;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33047,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33047,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33032){
var self__ = this;
var G__33032__$1 = this;
return (new cljs.core.RecordIter((0),G__33032__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33034,other33035){
var self__ = this;
var this33034__$1 = this;
return (((!((other33035 == null)))) && ((this33034__$1.constructor === other33035.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33034__$1.w,other33035.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33034__$1.h,other33035.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33034__$1.__extmap,other33035.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33032){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33054 = cljs.core.keyword_identical_QMARK_;
var expr__33055 = k__4447__auto__;
if(cljs.core.truth_((pred__33054.cljs$core$IFn$_invoke$arity$2 ? pred__33054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33055) : pred__33054.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33055)))){
return (new shadow.dom.Size(G__33032,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33054.cljs$core$IFn$_invoke$arity$2 ? pred__33054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33055) : pred__33054.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33055)))){
return (new shadow.dom.Size(self__.w,G__33032,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33032),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33032){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33032,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33037){
var extmap__4478__auto__ = (function (){var G__33057 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33037,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33037)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33057);
} else {
return G__33057;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33037),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33037),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33475 = (i + (1));
var G__33476 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33475;
ret = G__33476;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33069){
var vec__33071 = p__33069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33071,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33079 = arguments.length;
switch (G__33079) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33482 = ps;
var G__33483 = (i + (1));
el__$1 = G__33482;
i = G__33483;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33113 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33113,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33113,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33113,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33120_33484 = cljs.core.seq(props);
var chunk__33121_33485 = null;
var count__33122_33486 = (0);
var i__33123_33487 = (0);
while(true){
if((i__33123_33487 < count__33122_33486)){
var vec__33137_33488 = chunk__33121_33485.cljs$core$IIndexed$_nth$arity$2(null,i__33123_33487);
var k_33489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137_33488,(0),null);
var v_33490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137_33488,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33489);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33489),v_33490);


var G__33495 = seq__33120_33484;
var G__33496 = chunk__33121_33485;
var G__33497 = count__33122_33486;
var G__33498 = (i__33123_33487 + (1));
seq__33120_33484 = G__33495;
chunk__33121_33485 = G__33496;
count__33122_33486 = G__33497;
i__33123_33487 = G__33498;
continue;
} else {
var temp__5735__auto___33499 = cljs.core.seq(seq__33120_33484);
if(temp__5735__auto___33499){
var seq__33120_33503__$1 = temp__5735__auto___33499;
if(cljs.core.chunked_seq_QMARK_(seq__33120_33503__$1)){
var c__4609__auto___33504 = cljs.core.chunk_first(seq__33120_33503__$1);
var G__33505 = cljs.core.chunk_rest(seq__33120_33503__$1);
var G__33506 = c__4609__auto___33504;
var G__33507 = cljs.core.count(c__4609__auto___33504);
var G__33508 = (0);
seq__33120_33484 = G__33505;
chunk__33121_33485 = G__33506;
count__33122_33486 = G__33507;
i__33123_33487 = G__33508;
continue;
} else {
var vec__33142_33509 = cljs.core.first(seq__33120_33503__$1);
var k_33510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33142_33509,(0),null);
var v_33511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33142_33509,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33510);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33510),v_33511);


var G__33512 = cljs.core.next(seq__33120_33503__$1);
var G__33513 = null;
var G__33514 = (0);
var G__33515 = (0);
seq__33120_33484 = G__33512;
chunk__33121_33485 = G__33513;
count__33122_33486 = G__33514;
i__33123_33487 = G__33515;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33155 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33155,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33155,(1),null);
var seq__33158_33516 = cljs.core.seq(node_children);
var chunk__33160_33517 = null;
var count__33161_33518 = (0);
var i__33162_33519 = (0);
while(true){
if((i__33162_33519 < count__33161_33518)){
var child_struct_33520 = chunk__33160_33517.cljs$core$IIndexed$_nth$arity$2(null,i__33162_33519);
if((!((child_struct_33520 == null)))){
if(typeof child_struct_33520 === 'string'){
var text_33521 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33521),child_struct_33520].join(''));
} else {
var children_33522 = shadow.dom.svg_node(child_struct_33520);
if(cljs.core.seq_QMARK_(children_33522)){
var seq__33194_33523 = cljs.core.seq(children_33522);
var chunk__33196_33524 = null;
var count__33197_33525 = (0);
var i__33198_33526 = (0);
while(true){
if((i__33198_33526 < count__33197_33525)){
var child_33530 = chunk__33196_33524.cljs$core$IIndexed$_nth$arity$2(null,i__33198_33526);
if(cljs.core.truth_(child_33530)){
node.appendChild(child_33530);


var G__33531 = seq__33194_33523;
var G__33532 = chunk__33196_33524;
var G__33533 = count__33197_33525;
var G__33534 = (i__33198_33526 + (1));
seq__33194_33523 = G__33531;
chunk__33196_33524 = G__33532;
count__33197_33525 = G__33533;
i__33198_33526 = G__33534;
continue;
} else {
var G__33535 = seq__33194_33523;
var G__33536 = chunk__33196_33524;
var G__33537 = count__33197_33525;
var G__33538 = (i__33198_33526 + (1));
seq__33194_33523 = G__33535;
chunk__33196_33524 = G__33536;
count__33197_33525 = G__33537;
i__33198_33526 = G__33538;
continue;
}
} else {
var temp__5735__auto___33539 = cljs.core.seq(seq__33194_33523);
if(temp__5735__auto___33539){
var seq__33194_33540__$1 = temp__5735__auto___33539;
if(cljs.core.chunked_seq_QMARK_(seq__33194_33540__$1)){
var c__4609__auto___33541 = cljs.core.chunk_first(seq__33194_33540__$1);
var G__33542 = cljs.core.chunk_rest(seq__33194_33540__$1);
var G__33543 = c__4609__auto___33541;
var G__33544 = cljs.core.count(c__4609__auto___33541);
var G__33545 = (0);
seq__33194_33523 = G__33542;
chunk__33196_33524 = G__33543;
count__33197_33525 = G__33544;
i__33198_33526 = G__33545;
continue;
} else {
var child_33546 = cljs.core.first(seq__33194_33540__$1);
if(cljs.core.truth_(child_33546)){
node.appendChild(child_33546);


var G__33547 = cljs.core.next(seq__33194_33540__$1);
var G__33548 = null;
var G__33549 = (0);
var G__33550 = (0);
seq__33194_33523 = G__33547;
chunk__33196_33524 = G__33548;
count__33197_33525 = G__33549;
i__33198_33526 = G__33550;
continue;
} else {
var G__33551 = cljs.core.next(seq__33194_33540__$1);
var G__33552 = null;
var G__33553 = (0);
var G__33554 = (0);
seq__33194_33523 = G__33551;
chunk__33196_33524 = G__33552;
count__33197_33525 = G__33553;
i__33198_33526 = G__33554;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33522);
}
}


var G__33555 = seq__33158_33516;
var G__33556 = chunk__33160_33517;
var G__33557 = count__33161_33518;
var G__33558 = (i__33162_33519 + (1));
seq__33158_33516 = G__33555;
chunk__33160_33517 = G__33556;
count__33161_33518 = G__33557;
i__33162_33519 = G__33558;
continue;
} else {
var G__33559 = seq__33158_33516;
var G__33560 = chunk__33160_33517;
var G__33561 = count__33161_33518;
var G__33562 = (i__33162_33519 + (1));
seq__33158_33516 = G__33559;
chunk__33160_33517 = G__33560;
count__33161_33518 = G__33561;
i__33162_33519 = G__33562;
continue;
}
} else {
var temp__5735__auto___33563 = cljs.core.seq(seq__33158_33516);
if(temp__5735__auto___33563){
var seq__33158_33564__$1 = temp__5735__auto___33563;
if(cljs.core.chunked_seq_QMARK_(seq__33158_33564__$1)){
var c__4609__auto___33565 = cljs.core.chunk_first(seq__33158_33564__$1);
var G__33566 = cljs.core.chunk_rest(seq__33158_33564__$1);
var G__33567 = c__4609__auto___33565;
var G__33568 = cljs.core.count(c__4609__auto___33565);
var G__33569 = (0);
seq__33158_33516 = G__33566;
chunk__33160_33517 = G__33567;
count__33161_33518 = G__33568;
i__33162_33519 = G__33569;
continue;
} else {
var child_struct_33573 = cljs.core.first(seq__33158_33564__$1);
if((!((child_struct_33573 == null)))){
if(typeof child_struct_33573 === 'string'){
var text_33574 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33574),child_struct_33573].join(''));
} else {
var children_33575 = shadow.dom.svg_node(child_struct_33573);
if(cljs.core.seq_QMARK_(children_33575)){
var seq__33207_33576 = cljs.core.seq(children_33575);
var chunk__33209_33577 = null;
var count__33210_33578 = (0);
var i__33211_33579 = (0);
while(true){
if((i__33211_33579 < count__33210_33578)){
var child_33580 = chunk__33209_33577.cljs$core$IIndexed$_nth$arity$2(null,i__33211_33579);
if(cljs.core.truth_(child_33580)){
node.appendChild(child_33580);


var G__33581 = seq__33207_33576;
var G__33582 = chunk__33209_33577;
var G__33583 = count__33210_33578;
var G__33584 = (i__33211_33579 + (1));
seq__33207_33576 = G__33581;
chunk__33209_33577 = G__33582;
count__33210_33578 = G__33583;
i__33211_33579 = G__33584;
continue;
} else {
var G__33585 = seq__33207_33576;
var G__33586 = chunk__33209_33577;
var G__33587 = count__33210_33578;
var G__33588 = (i__33211_33579 + (1));
seq__33207_33576 = G__33585;
chunk__33209_33577 = G__33586;
count__33210_33578 = G__33587;
i__33211_33579 = G__33588;
continue;
}
} else {
var temp__5735__auto___33589__$1 = cljs.core.seq(seq__33207_33576);
if(temp__5735__auto___33589__$1){
var seq__33207_33590__$1 = temp__5735__auto___33589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33207_33590__$1)){
var c__4609__auto___33591 = cljs.core.chunk_first(seq__33207_33590__$1);
var G__33592 = cljs.core.chunk_rest(seq__33207_33590__$1);
var G__33593 = c__4609__auto___33591;
var G__33594 = cljs.core.count(c__4609__auto___33591);
var G__33595 = (0);
seq__33207_33576 = G__33592;
chunk__33209_33577 = G__33593;
count__33210_33578 = G__33594;
i__33211_33579 = G__33595;
continue;
} else {
var child_33596 = cljs.core.first(seq__33207_33590__$1);
if(cljs.core.truth_(child_33596)){
node.appendChild(child_33596);


var G__33597 = cljs.core.next(seq__33207_33590__$1);
var G__33598 = null;
var G__33599 = (0);
var G__33600 = (0);
seq__33207_33576 = G__33597;
chunk__33209_33577 = G__33598;
count__33210_33578 = G__33599;
i__33211_33579 = G__33600;
continue;
} else {
var G__33601 = cljs.core.next(seq__33207_33590__$1);
var G__33602 = null;
var G__33603 = (0);
var G__33604 = (0);
seq__33207_33576 = G__33601;
chunk__33209_33577 = G__33602;
count__33210_33578 = G__33603;
i__33211_33579 = G__33604;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33575);
}
}


var G__33605 = cljs.core.next(seq__33158_33564__$1);
var G__33606 = null;
var G__33607 = (0);
var G__33608 = (0);
seq__33158_33516 = G__33605;
chunk__33160_33517 = G__33606;
count__33161_33518 = G__33607;
i__33162_33519 = G__33608;
continue;
} else {
var G__33609 = cljs.core.next(seq__33158_33564__$1);
var G__33610 = null;
var G__33611 = (0);
var G__33612 = (0);
seq__33158_33516 = G__33609;
chunk__33160_33517 = G__33610;
count__33161_33518 = G__33611;
i__33162_33519 = G__33612;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33616 = arguments.length;
var i__4790__auto___33617 = (0);
while(true){
if((i__4790__auto___33617 < len__4789__auto___33616)){
args__4795__auto__.push((arguments[i__4790__auto___33617]));

var G__33618 = (i__4790__auto___33617 + (1));
i__4790__auto___33617 = G__33618;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33214){
var G__33215 = cljs.core.first(seq33214);
var seq33214__$1 = cljs.core.next(seq33214);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33215,seq33214__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33217 = arguments.length;
switch (G__33217) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29889__auto___33624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_33222){
var state_val_33223 = (state_33222[(1)]);
if((state_val_33223 === (1))){
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33222__$1,(2),once_or_cleanup);
} else {
if((state_val_33223 === (2))){
var inst_33219 = (state_33222[(2)]);
var inst_33220 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33222__$1 = (function (){var statearr_33224 = state_33222;
(statearr_33224[(7)] = inst_33219);

return statearr_33224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33222__$1,inst_33220);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29711__auto__ = null;
var shadow$dom$state_machine__29711__auto____0 = (function (){
var statearr_33225 = [null,null,null,null,null,null,null,null];
(statearr_33225[(0)] = shadow$dom$state_machine__29711__auto__);

(statearr_33225[(1)] = (1));

return statearr_33225;
});
var shadow$dom$state_machine__29711__auto____1 = (function (state_33222){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_33222);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e33226){if((e33226 instanceof Object)){
var ex__29714__auto__ = e33226;
var statearr_33227_33625 = state_33222;
(statearr_33227_33625[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33626 = state_33222;
state_33222 = G__33626;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
shadow$dom$state_machine__29711__auto__ = function(state_33222){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29711__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29711__auto____1.call(this,state_33222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29711__auto____0;
shadow$dom$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29711__auto____1;
return shadow$dom$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_33228 = f__29890__auto__();
(statearr_33228[(6)] = c__29889__auto___33624);

return statearr_33228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
