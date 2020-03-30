goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35869){
var map__35871 = p__35869;
var map__35871__$1 = (((((!((map__35871 == null))))?(((((map__35871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35871):map__35871);
var m = map__35871__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35874_36099 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35875_36100 = null;
var count__35876_36101 = (0);
var i__35877_36102 = (0);
while(true){
if((i__35877_36102 < count__35876_36101)){
var f_36103 = chunk__35875_36100.cljs$core$IIndexed$_nth$arity$2(null,i__35877_36102);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36103], 0));


var G__36106 = seq__35874_36099;
var G__36107 = chunk__35875_36100;
var G__36108 = count__35876_36101;
var G__36109 = (i__35877_36102 + (1));
seq__35874_36099 = G__36106;
chunk__35875_36100 = G__36107;
count__35876_36101 = G__36108;
i__35877_36102 = G__36109;
continue;
} else {
var temp__5735__auto___36111 = cljs.core.seq(seq__35874_36099);
if(temp__5735__auto___36111){
var seq__35874_36112__$1 = temp__5735__auto___36111;
if(cljs.core.chunked_seq_QMARK_(seq__35874_36112__$1)){
var c__4609__auto___36114 = cljs.core.chunk_first(seq__35874_36112__$1);
var G__36117 = cljs.core.chunk_rest(seq__35874_36112__$1);
var G__36118 = c__4609__auto___36114;
var G__36119 = cljs.core.count(c__4609__auto___36114);
var G__36120 = (0);
seq__35874_36099 = G__36117;
chunk__35875_36100 = G__36118;
count__35876_36101 = G__36119;
i__35877_36102 = G__36120;
continue;
} else {
var f_36123 = cljs.core.first(seq__35874_36112__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36123], 0));


var G__36124 = cljs.core.next(seq__35874_36112__$1);
var G__36125 = null;
var G__36126 = (0);
var G__36127 = (0);
seq__35874_36099 = G__36124;
chunk__35875_36100 = G__36125;
count__35876_36101 = G__36126;
i__35877_36102 = G__36127;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36128 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36128], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36128)))?cljs.core.second(arglists_36128):arglists_36128)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35879_36130 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35880_36131 = null;
var count__35881_36132 = (0);
var i__35882_36133 = (0);
while(true){
if((i__35882_36133 < count__35881_36132)){
var vec__35896_36134 = chunk__35880_36131.cljs$core$IIndexed$_nth$arity$2(null,i__35882_36133);
var name_36135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35896_36134,(0),null);
var map__35899_36136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35896_36134,(1),null);
var map__35899_36137__$1 = (((((!((map__35899_36136 == null))))?(((((map__35899_36136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35899_36136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35899_36136):map__35899_36136);
var doc_36138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35899_36137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35899_36137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36135], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36139], 0));

if(cljs.core.truth_(doc_36138)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36138], 0));
} else {
}


var G__36141 = seq__35879_36130;
var G__36142 = chunk__35880_36131;
var G__36143 = count__35881_36132;
var G__36144 = (i__35882_36133 + (1));
seq__35879_36130 = G__36141;
chunk__35880_36131 = G__36142;
count__35881_36132 = G__36143;
i__35882_36133 = G__36144;
continue;
} else {
var temp__5735__auto___36145 = cljs.core.seq(seq__35879_36130);
if(temp__5735__auto___36145){
var seq__35879_36146__$1 = temp__5735__auto___36145;
if(cljs.core.chunked_seq_QMARK_(seq__35879_36146__$1)){
var c__4609__auto___36148 = cljs.core.chunk_first(seq__35879_36146__$1);
var G__36149 = cljs.core.chunk_rest(seq__35879_36146__$1);
var G__36150 = c__4609__auto___36148;
var G__36151 = cljs.core.count(c__4609__auto___36148);
var G__36152 = (0);
seq__35879_36130 = G__36149;
chunk__35880_36131 = G__36150;
count__35881_36132 = G__36151;
i__35882_36133 = G__36152;
continue;
} else {
var vec__35904_36154 = cljs.core.first(seq__35879_36146__$1);
var name_36155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35904_36154,(0),null);
var map__35907_36156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35904_36154,(1),null);
var map__35907_36157__$1 = (((((!((map__35907_36156 == null))))?(((((map__35907_36156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35907_36156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35907_36156):map__35907_36156);
var doc_36158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35907_36157__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35907_36157__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36155], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36159], 0));

if(cljs.core.truth_(doc_36158)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36158], 0));
} else {
}


var G__36160 = cljs.core.next(seq__35879_36146__$1);
var G__36161 = null;
var G__36162 = (0);
var G__36163 = (0);
seq__35879_36130 = G__36160;
chunk__35880_36131 = G__36161;
count__35881_36132 = G__36162;
i__35882_36133 = G__36163;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35910 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35911 = null;
var count__35912 = (0);
var i__35913 = (0);
while(true){
if((i__35913 < count__35912)){
var role = chunk__35911.cljs$core$IIndexed$_nth$arity$2(null,i__35913);
var temp__5735__auto___36164__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36164__$1)){
var spec_36165 = temp__5735__auto___36164__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36165)], 0));
} else {
}


var G__36166 = seq__35910;
var G__36167 = chunk__35911;
var G__36168 = count__35912;
var G__36169 = (i__35913 + (1));
seq__35910 = G__36166;
chunk__35911 = G__36167;
count__35912 = G__36168;
i__35913 = G__36169;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35910);
if(temp__5735__auto____$1){
var seq__35910__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35910__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35910__$1);
var G__36170 = cljs.core.chunk_rest(seq__35910__$1);
var G__36171 = c__4609__auto__;
var G__36172 = cljs.core.count(c__4609__auto__);
var G__36173 = (0);
seq__35910 = G__36170;
chunk__35911 = G__36171;
count__35912 = G__36172;
i__35913 = G__36173;
continue;
} else {
var role = cljs.core.first(seq__35910__$1);
var temp__5735__auto___36174__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36174__$2)){
var spec_36175 = temp__5735__auto___36174__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36175)], 0));
} else {
}


var G__36176 = cljs.core.next(seq__35910__$1);
var G__36177 = null;
var G__36178 = (0);
var G__36179 = (0);
seq__35910 = G__36176;
chunk__35911 = G__36177;
count__35912 = G__36178;
i__35913 = G__36179;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36186 = cljs.core.ex_cause(t);
via = G__36185;
t = G__36186;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35922 = datafied_throwable;
var map__35922__$1 = (((((!((map__35922 == null))))?(((((map__35922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35922):map__35922);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35922__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35922__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35923 = cljs.core.last(via);
var map__35923__$1 = (((((!((map__35923 == null))))?(((((map__35923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35923):map__35923);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35923__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35924 = data;
var map__35924__$1 = (((((!((map__35924 == null))))?(((((map__35924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35924):map__35924);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35925 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35925__$1 = (((((!((map__35925 == null))))?(((((map__35925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35925):map__35925);
var top_data = map__35925__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35925__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35950 = phase;
var G__35950__$1 = (((G__35950 instanceof cljs.core.Keyword))?G__35950.fqn:null);
switch (G__35950__$1) {
case "read-source":
var map__35951 = data;
var map__35951__$1 = (((((!((map__35951 == null))))?(((((map__35951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35951):map__35951);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35951__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35953 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35953__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35953,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35953);
var G__35953__$2 = (cljs.core.truth_((function (){var fexpr__35954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35954.cljs$core$IFn$_invoke$arity$1 ? fexpr__35954.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35954.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35953__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35953__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35953__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35962 = top_data;
var G__35962__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35962,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35962);
var G__35962__$2 = (cljs.core.truth_((function (){var fexpr__35963 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35963.cljs$core$IFn$_invoke$arity$1 ? fexpr__35963.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35963.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35962__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35962__$1);
var G__35962__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35962__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35962__$2);
var G__35962__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35962__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35962__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35962__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35962__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35965 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35965,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35965,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35965,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35965,(3),null);
var G__35972 = top_data;
var G__35972__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35972,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35972);
var G__35972__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35972__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35972__$1);
var G__35972__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35972__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35972__$2);
var G__35972__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35972__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35972__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35972__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35972__$4;
}

break;
case "execution":
var vec__35983 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35920_SHARP_){
var or__4185__auto__ = (p1__35920_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35995.cljs$core$IFn$_invoke$arity$1 ? fexpr__35995.cljs$core$IFn$_invoke$arity$1(p1__35920_SHARP_) : fexpr__35995.call(null,p1__35920_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36000 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36000__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36000,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36000);
var G__36000__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36000__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36000__$1);
var G__36000__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36000__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36000__$2);
var G__36000__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36000__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36000__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36000__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36000__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35950__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36023){
var map__36024 = p__36023;
var map__36024__$1 = (((((!((map__36024 == null))))?(((((map__36024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36024):map__36024);
var triage_data = map__36024__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36047 = phase;
var G__36047__$1 = (((G__36047 instanceof cljs.core.Keyword))?G__36047.fqn:null);
switch (G__36047__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36052 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36053 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36054 = loc;
var G__36055 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36056_36249 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36057_36250 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36058_36251 = true;
var _STAR_print_fn_STAR__temp_val__36059_36252 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36058_36251);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36059_36252);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36018_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36018_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36057_36250);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36056_36249);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36052,G__36053,G__36054,G__36055) : format.call(null,G__36052,G__36053,G__36054,G__36055));

break;
case "macroexpansion":
var G__36065 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36066 = cause_type;
var G__36067 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36068 = loc;
var G__36069 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36065,G__36066,G__36067,G__36068,G__36069) : format.call(null,G__36065,G__36066,G__36067,G__36068,G__36069));

break;
case "compile-syntax-check":
var G__36070 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36071 = cause_type;
var G__36072 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36073 = loc;
var G__36074 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36070,G__36071,G__36072,G__36073,G__36074) : format.call(null,G__36070,G__36071,G__36072,G__36073,G__36074));

break;
case "compilation":
var G__36075 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36076 = cause_type;
var G__36077 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36078 = loc;
var G__36079 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36075,G__36076,G__36077,G__36078,G__36079) : format.call(null,G__36075,G__36076,G__36077,G__36078,G__36079));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36080 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36081 = symbol;
var G__36082 = loc;
var G__36083 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36085_36257 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36086_36258 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36087_36259 = true;
var _STAR_print_fn_STAR__temp_val__36088_36260 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36087_36259);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36088_36260);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36022_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36022_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36086_36258);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36085_36257);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36080,G__36081,G__36082,G__36083) : format.call(null,G__36080,G__36081,G__36082,G__36083));
} else {
var G__36090 = "Execution error%s at %s(%s).\n%s\n";
var G__36091 = cause_type;
var G__36092 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36093 = loc;
var G__36094 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36090,G__36091,G__36092,G__36093,G__36094) : format.call(null,G__36090,G__36091,G__36092,G__36093,G__36094));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36047__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
