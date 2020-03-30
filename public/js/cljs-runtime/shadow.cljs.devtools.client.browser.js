goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35203 = arguments.length;
var i__4790__auto___35204 = (0);
while(true){
if((i__4790__auto___35204 < len__4789__auto___35203)){
args__4795__auto__.push((arguments[i__4790__auto___35204]));

var G__35205 = (i__4790__auto___35204 + (1));
i__4790__auto___35204 = G__35205;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34916){
var G__34917 = cljs.core.first(seq34916);
var seq34916__$1 = cljs.core.next(seq34916);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34917,seq34916__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34937 = cljs.core.seq(sources);
var chunk__34938 = null;
var count__34939 = (0);
var i__34940 = (0);
while(true){
if((i__34940 < count__34939)){
var map__34961 = chunk__34938.cljs$core$IIndexed$_nth$arity$2(null,i__34940);
var map__34961__$1 = (((((!((map__34961 == null))))?(((((map__34961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34961):map__34961);
var src = map__34961__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34961__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34961__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34961__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34961__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34968){var e_35212 = e34968;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35212);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35212.message)].join('')));
}

var G__35214 = seq__34937;
var G__35215 = chunk__34938;
var G__35216 = count__34939;
var G__35217 = (i__34940 + (1));
seq__34937 = G__35214;
chunk__34938 = G__35215;
count__34939 = G__35216;
i__34940 = G__35217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34937);
if(temp__5735__auto__){
var seq__34937__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34937__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34937__$1);
var G__35220 = cljs.core.chunk_rest(seq__34937__$1);
var G__35221 = c__4609__auto__;
var G__35222 = cljs.core.count(c__4609__auto__);
var G__35223 = (0);
seq__34937 = G__35220;
chunk__34938 = G__35221;
count__34939 = G__35222;
i__34940 = G__35223;
continue;
} else {
var map__34970 = cljs.core.first(seq__34937__$1);
var map__34970__$1 = (((((!((map__34970 == null))))?(((((map__34970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34970):map__34970);
var src = map__34970__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34970__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34979){var e_35231 = e34979;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35231);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35231.message)].join('')));
}

var G__35232 = cljs.core.next(seq__34937__$1);
var G__35233 = null;
var G__35234 = (0);
var G__35235 = (0);
seq__34937 = G__35232;
chunk__34938 = G__35233;
count__34939 = G__35234;
i__34940 = G__35235;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34982 = cljs.core.seq(js_requires);
var chunk__34983 = null;
var count__34984 = (0);
var i__34985 = (0);
while(true){
if((i__34985 < count__34984)){
var js_ns = chunk__34983.cljs$core$IIndexed$_nth$arity$2(null,i__34985);
var require_str_35244 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35244);


var G__35248 = seq__34982;
var G__35249 = chunk__34983;
var G__35250 = count__34984;
var G__35251 = (i__34985 + (1));
seq__34982 = G__35248;
chunk__34983 = G__35249;
count__34984 = G__35250;
i__34985 = G__35251;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34982);
if(temp__5735__auto__){
var seq__34982__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34982__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34982__$1);
var G__35252 = cljs.core.chunk_rest(seq__34982__$1);
var G__35253 = c__4609__auto__;
var G__35254 = cljs.core.count(c__4609__auto__);
var G__35255 = (0);
seq__34982 = G__35252;
chunk__34983 = G__35253;
count__34984 = G__35254;
i__34985 = G__35255;
continue;
} else {
var js_ns = cljs.core.first(seq__34982__$1);
var require_str_35259 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35259);


var G__35261 = cljs.core.next(seq__34982__$1);
var G__35262 = null;
var G__35263 = (0);
var G__35264 = (0);
seq__34982 = G__35261;
chunk__34983 = G__35262;
count__34984 = G__35263;
i__34985 = G__35264;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34995 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34995) : callback.call(null,G__34995));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35001){
var map__35002 = p__35001;
var map__35002__$1 = (((((!((map__35002 == null))))?(((((map__35002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35002):map__35002);
var msg = map__35002__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35002__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35002__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35007(s__35008){
return (new cljs.core.LazySeq(null,(function (){
var s__35008__$1 = s__35008;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35008__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35013 = cljs.core.first(xs__6292__auto__);
var map__35013__$1 = (((((!((map__35013 == null))))?(((((map__35013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35013):map__35013);
var src = map__35013__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35013__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35013__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35008__$1,map__35013,map__35013__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35002,map__35002__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35007_$_iter__35009(s__35010){
return (new cljs.core.LazySeq(null,((function (s__35008__$1,map__35013,map__35013__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35002,map__35002__$1,msg,info,reload_info){
return (function (){
var s__35010__$1 = s__35010;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35010__$1);
if(temp__5735__auto____$1){
var s__35010__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35010__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35010__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35012 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35011 = (0);
while(true){
if((i__35011 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__35011);
cljs.core.chunk_append(b__35012,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35272 = (i__35011 + (1));
i__35011 = G__35272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35012),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35007_$_iter__35009(cljs.core.chunk_rest(s__35010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35012),null);
}
} else {
var warning = cljs.core.first(s__35010__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35007_$_iter__35009(cljs.core.rest(s__35010__$2)));
}
} else {
return null;
}
break;
}
});})(s__35008__$1,map__35013,map__35013__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35002,map__35002__$1,msg,info,reload_info))
,null,null));
});})(s__35008__$1,map__35013,map__35013__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35002,map__35002__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35007(cljs.core.rest(s__35008__$1)));
} else {
var G__35273 = cljs.core.rest(s__35008__$1);
s__35008__$1 = G__35273;
continue;
}
} else {
var G__35274 = cljs.core.rest(s__35008__$1);
s__35008__$1 = G__35274;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35015_35275 = cljs.core.seq(warnings);
var chunk__35016_35276 = null;
var count__35017_35277 = (0);
var i__35018_35278 = (0);
while(true){
if((i__35018_35278 < count__35017_35277)){
var map__35031_35282 = chunk__35016_35276.cljs$core$IIndexed$_nth$arity$2(null,i__35018_35278);
var map__35031_35283__$1 = (((((!((map__35031_35282 == null))))?(((((map__35031_35282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35031_35282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35031_35282):map__35031_35282);
var w_35284 = map__35031_35283__$1;
var msg_35285__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35031_35283__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35031_35283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35031_35283__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35031_35283__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35288)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35286),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35287),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35285__$1)].join(''));


var G__35289 = seq__35015_35275;
var G__35290 = chunk__35016_35276;
var G__35291 = count__35017_35277;
var G__35292 = (i__35018_35278 + (1));
seq__35015_35275 = G__35289;
chunk__35016_35276 = G__35290;
count__35017_35277 = G__35291;
i__35018_35278 = G__35292;
continue;
} else {
var temp__5735__auto___35293 = cljs.core.seq(seq__35015_35275);
if(temp__5735__auto___35293){
var seq__35015_35294__$1 = temp__5735__auto___35293;
if(cljs.core.chunked_seq_QMARK_(seq__35015_35294__$1)){
var c__4609__auto___35295 = cljs.core.chunk_first(seq__35015_35294__$1);
var G__35296 = cljs.core.chunk_rest(seq__35015_35294__$1);
var G__35297 = c__4609__auto___35295;
var G__35298 = cljs.core.count(c__4609__auto___35295);
var G__35299 = (0);
seq__35015_35275 = G__35296;
chunk__35016_35276 = G__35297;
count__35017_35277 = G__35298;
i__35018_35278 = G__35299;
continue;
} else {
var map__35035_35300 = cljs.core.first(seq__35015_35294__$1);
var map__35035_35301__$1 = (((((!((map__35035_35300 == null))))?(((((map__35035_35300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35035_35300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35035_35300):map__35035_35300);
var w_35302 = map__35035_35301__$1;
var msg_35303__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35035_35301__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35035_35301__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35035_35301__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35035_35301__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35306)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35304),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35305),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35303__$1)].join(''));


var G__35309 = cljs.core.next(seq__35015_35294__$1);
var G__35310 = null;
var G__35311 = (0);
var G__35312 = (0);
seq__35015_35275 = G__35309;
chunk__35016_35276 = G__35310;
count__35017_35277 = G__35311;
i__35018_35278 = G__35312;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34999_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34999_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35042){
var map__35043 = p__35042;
var map__35043__$1 = (((((!((map__35043 == null))))?(((((map__35043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35043):map__35043);
var msg = map__35043__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35043__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35045 = cljs.core.seq(updates);
var chunk__35047 = null;
var count__35048 = (0);
var i__35049 = (0);
while(true){
if((i__35049 < count__35048)){
var path = chunk__35047.cljs$core$IIndexed$_nth$arity$2(null,i__35049);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35079_35333 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35082_35334 = null;
var count__35083_35335 = (0);
var i__35084_35336 = (0);
while(true){
if((i__35084_35336 < count__35083_35335)){
var node_35340 = chunk__35082_35334.cljs$core$IIndexed$_nth$arity$2(null,i__35084_35336);
var path_match_35341 = shadow.cljs.devtools.client.browser.match_paths(node_35340.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35341)){
var new_link_35342 = (function (){var G__35092 = node_35340.cloneNode(true);
G__35092.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35341),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35092;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35341], 0));

goog.dom.insertSiblingAfter(new_link_35342,node_35340);

goog.dom.removeNode(node_35340);


var G__35343 = seq__35079_35333;
var G__35344 = chunk__35082_35334;
var G__35345 = count__35083_35335;
var G__35346 = (i__35084_35336 + (1));
seq__35079_35333 = G__35343;
chunk__35082_35334 = G__35344;
count__35083_35335 = G__35345;
i__35084_35336 = G__35346;
continue;
} else {
var G__35347 = seq__35079_35333;
var G__35348 = chunk__35082_35334;
var G__35349 = count__35083_35335;
var G__35350 = (i__35084_35336 + (1));
seq__35079_35333 = G__35347;
chunk__35082_35334 = G__35348;
count__35083_35335 = G__35349;
i__35084_35336 = G__35350;
continue;
}
} else {
var temp__5735__auto___35351 = cljs.core.seq(seq__35079_35333);
if(temp__5735__auto___35351){
var seq__35079_35355__$1 = temp__5735__auto___35351;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35355__$1)){
var c__4609__auto___35356 = cljs.core.chunk_first(seq__35079_35355__$1);
var G__35357 = cljs.core.chunk_rest(seq__35079_35355__$1);
var G__35358 = c__4609__auto___35356;
var G__35359 = cljs.core.count(c__4609__auto___35356);
var G__35360 = (0);
seq__35079_35333 = G__35357;
chunk__35082_35334 = G__35358;
count__35083_35335 = G__35359;
i__35084_35336 = G__35360;
continue;
} else {
var node_35368 = cljs.core.first(seq__35079_35355__$1);
var path_match_35369 = shadow.cljs.devtools.client.browser.match_paths(node_35368.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35369)){
var new_link_35373 = (function (){var G__35093 = node_35368.cloneNode(true);
G__35093.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35369),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35093;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35369], 0));

goog.dom.insertSiblingAfter(new_link_35373,node_35368);

goog.dom.removeNode(node_35368);


var G__35377 = cljs.core.next(seq__35079_35355__$1);
var G__35378 = null;
var G__35379 = (0);
var G__35380 = (0);
seq__35079_35333 = G__35377;
chunk__35082_35334 = G__35378;
count__35083_35335 = G__35379;
i__35084_35336 = G__35380;
continue;
} else {
var G__35382 = cljs.core.next(seq__35079_35355__$1);
var G__35383 = null;
var G__35384 = (0);
var G__35385 = (0);
seq__35079_35333 = G__35382;
chunk__35082_35334 = G__35383;
count__35083_35335 = G__35384;
i__35084_35336 = G__35385;
continue;
}
}
} else {
}
}
break;
}


var G__35390 = seq__35045;
var G__35391 = chunk__35047;
var G__35392 = count__35048;
var G__35393 = (i__35049 + (1));
seq__35045 = G__35390;
chunk__35047 = G__35391;
count__35048 = G__35392;
i__35049 = G__35393;
continue;
} else {
var G__35394 = seq__35045;
var G__35395 = chunk__35047;
var G__35396 = count__35048;
var G__35397 = (i__35049 + (1));
seq__35045 = G__35394;
chunk__35047 = G__35395;
count__35048 = G__35396;
i__35049 = G__35397;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35045);
if(temp__5735__auto__){
var seq__35045__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35045__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35045__$1);
var G__35398 = cljs.core.chunk_rest(seq__35045__$1);
var G__35399 = c__4609__auto__;
var G__35400 = cljs.core.count(c__4609__auto__);
var G__35401 = (0);
seq__35045 = G__35398;
chunk__35047 = G__35399;
count__35048 = G__35400;
i__35049 = G__35401;
continue;
} else {
var path = cljs.core.first(seq__35045__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35100_35402 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35103_35403 = null;
var count__35104_35404 = (0);
var i__35105_35405 = (0);
while(true){
if((i__35105_35405 < count__35104_35404)){
var node_35406 = chunk__35103_35403.cljs$core$IIndexed$_nth$arity$2(null,i__35105_35405);
var path_match_35407 = shadow.cljs.devtools.client.browser.match_paths(node_35406.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35407)){
var new_link_35410 = (function (){var G__35110 = node_35406.cloneNode(true);
G__35110.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35407),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35110;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35407], 0));

goog.dom.insertSiblingAfter(new_link_35410,node_35406);

goog.dom.removeNode(node_35406);


var G__35413 = seq__35100_35402;
var G__35414 = chunk__35103_35403;
var G__35415 = count__35104_35404;
var G__35416 = (i__35105_35405 + (1));
seq__35100_35402 = G__35413;
chunk__35103_35403 = G__35414;
count__35104_35404 = G__35415;
i__35105_35405 = G__35416;
continue;
} else {
var G__35417 = seq__35100_35402;
var G__35418 = chunk__35103_35403;
var G__35419 = count__35104_35404;
var G__35420 = (i__35105_35405 + (1));
seq__35100_35402 = G__35417;
chunk__35103_35403 = G__35418;
count__35104_35404 = G__35419;
i__35105_35405 = G__35420;
continue;
}
} else {
var temp__5735__auto___35421__$1 = cljs.core.seq(seq__35100_35402);
if(temp__5735__auto___35421__$1){
var seq__35100_35422__$1 = temp__5735__auto___35421__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35100_35422__$1)){
var c__4609__auto___35423 = cljs.core.chunk_first(seq__35100_35422__$1);
var G__35424 = cljs.core.chunk_rest(seq__35100_35422__$1);
var G__35425 = c__4609__auto___35423;
var G__35426 = cljs.core.count(c__4609__auto___35423);
var G__35427 = (0);
seq__35100_35402 = G__35424;
chunk__35103_35403 = G__35425;
count__35104_35404 = G__35426;
i__35105_35405 = G__35427;
continue;
} else {
var node_35428 = cljs.core.first(seq__35100_35422__$1);
var path_match_35429 = shadow.cljs.devtools.client.browser.match_paths(node_35428.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35429)){
var new_link_35430 = (function (){var G__35111 = node_35428.cloneNode(true);
G__35111.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35429),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35111;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35429], 0));

goog.dom.insertSiblingAfter(new_link_35430,node_35428);

goog.dom.removeNode(node_35428);


var G__35431 = cljs.core.next(seq__35100_35422__$1);
var G__35432 = null;
var G__35433 = (0);
var G__35434 = (0);
seq__35100_35402 = G__35431;
chunk__35103_35403 = G__35432;
count__35104_35404 = G__35433;
i__35105_35405 = G__35434;
continue;
} else {
var G__35435 = cljs.core.next(seq__35100_35422__$1);
var G__35436 = null;
var G__35437 = (0);
var G__35438 = (0);
seq__35100_35402 = G__35435;
chunk__35103_35403 = G__35436;
count__35104_35404 = G__35437;
i__35105_35405 = G__35438;
continue;
}
}
} else {
}
}
break;
}


var G__35439 = cljs.core.next(seq__35045__$1);
var G__35440 = null;
var G__35441 = (0);
var G__35442 = (0);
seq__35045 = G__35439;
chunk__35047 = G__35440;
count__35048 = G__35441;
i__35049 = G__35442;
continue;
} else {
var G__35443 = cljs.core.next(seq__35045__$1);
var G__35444 = null;
var G__35445 = (0);
var G__35446 = (0);
seq__35045 = G__35443;
chunk__35047 = G__35444;
count__35048 = G__35445;
i__35049 = G__35446;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35132){
var map__35141 = p__35132;
var map__35141__$1 = (((((!((map__35141 == null))))?(((((map__35141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35141):map__35141);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35141__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35141__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35157,done){
var map__35158 = p__35157;
var map__35158__$1 = (((((!((map__35158 == null))))?(((((map__35158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35158):map__35158);
var msg = map__35158__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35165){
var map__35168 = p__35165;
var map__35168__$1 = (((((!((map__35168 == null))))?(((((map__35168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35168):map__35168);
var src = map__35168__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35168__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35172){var e = e35172;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35176,done){
var map__35177 = p__35176;
var map__35177__$1 = (((((!((map__35177 == null))))?(((((map__35177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35177):map__35177);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35177__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35179){
var map__35180 = p__35179;
var map__35180__$1 = (((((!((map__35180 == null))))?(((((map__35180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35180):map__35180);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35180__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35180__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35182,done){
var map__35183 = p__35182;
var map__35183__$1 = (((((!((map__35183 == null))))?(((((map__35183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35183):map__35183);
var msg = map__35183__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35185_35454 = type;
var G__35185_35455__$1 = (((G__35185_35454 instanceof cljs.core.Keyword))?G__35185_35454.fqn:null);
switch (G__35185_35455__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__35186 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__35186.cljs$core$IFn$_invoke$arity$1 ? fexpr__35186.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__35186.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e35187){var e = e35187;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35477 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35477)){
var s_35478 = temp__5735__auto___35477;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35478.onclose = (function (e){
return null;
}));

s_35478.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
