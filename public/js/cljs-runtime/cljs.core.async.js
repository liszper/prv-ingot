goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30008 = arguments.length;
switch (G__30008) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30009 = (function (f,blockable,meta30010){
this.f = f;
this.blockable = blockable;
this.meta30010 = meta30010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30011,meta30010__$1){
var self__ = this;
var _30011__$1 = this;
return (new cljs.core.async.t_cljs$core$async30009(self__.f,self__.blockable,meta30010__$1));
}));

(cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30011){
var self__ = this;
var _30011__$1 = this;
return self__.meta30010;
}));

(cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30010","meta30010",1506080374,null)], null);
}));

(cljs.core.async.t_cljs$core$async30009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30009");

(cljs.core.async.t_cljs$core$async30009.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30009.
 */
cljs.core.async.__GT_t_cljs$core$async30009 = (function cljs$core$async$__GT_t_cljs$core$async30009(f__$1,blockable__$1,meta30010){
return (new cljs.core.async.t_cljs$core$async30009(f__$1,blockable__$1,meta30010));
});

}

return (new cljs.core.async.t_cljs$core$async30009(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30032 = arguments.length;
switch (G__30032) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30043 = arguments.length;
switch (G__30043) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30050 = arguments.length;
switch (G__30050) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32464 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32464) : fn1.call(null,val_32464));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32464) : fn1.call(null,val_32464));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30064 = arguments.length;
switch (G__30064) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32472 = n;
var x_32473 = (0);
while(true){
if((x_32473 < n__4666__auto___32472)){
(a[x_32473] = x_32473);

var G__32475 = (x_32473 + (1));
x_32473 = G__32475;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30084 = (function (flag,meta30085){
this.flag = flag;
this.meta30085 = meta30085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30086,meta30085__$1){
var self__ = this;
var _30086__$1 = this;
return (new cljs.core.async.t_cljs$core$async30084(self__.flag,meta30085__$1));
}));

(cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30086){
var self__ = this;
var _30086__$1 = this;
return self__.meta30085;
}));

(cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30085","meta30085",-468671449,null)], null);
}));

(cljs.core.async.t_cljs$core$async30084.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30084");

(cljs.core.async.t_cljs$core$async30084.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30084");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30084.
 */
cljs.core.async.__GT_t_cljs$core$async30084 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30084(flag__$1,meta30085){
return (new cljs.core.async.t_cljs$core$async30084(flag__$1,meta30085));
});

}

return (new cljs.core.async.t_cljs$core$async30084(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30107 = (function (flag,cb,meta30108){
this.flag = flag;
this.cb = cb;
this.meta30108 = meta30108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30109,meta30108__$1){
var self__ = this;
var _30109__$1 = this;
return (new cljs.core.async.t_cljs$core$async30107(self__.flag,self__.cb,meta30108__$1));
}));

(cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30109){
var self__ = this;
var _30109__$1 = this;
return self__.meta30108;
}));

(cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30108","meta30108",391656225,null)], null);
}));

(cljs.core.async.t_cljs$core$async30107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30107");

(cljs.core.async.t_cljs$core$async30107.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30107.
 */
cljs.core.async.__GT_t_cljs$core$async30107 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30107(flag__$1,cb__$1,meta30108){
return (new cljs.core.async.t_cljs$core$async30107(flag__$1,cb__$1,meta30108));
});

}

return (new cljs.core.async.t_cljs$core$async30107(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30118_SHARP_){
var G__30120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30118_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30120) : fret.call(null,G__30120));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30119_SHARP_){
var G__30121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30119_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30121) : fret.call(null,G__30121));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32498 = (i + (1));
i = G__32498;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32500 = arguments.length;
var i__4790__auto___32501 = (0);
while(true){
if((i__4790__auto___32501 < len__4789__auto___32500)){
args__4795__auto__.push((arguments[i__4790__auto___32501]));

var G__32502 = (i__4790__auto___32501 + (1));
i__4790__auto___32501 = G__32502;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30143){
var map__30144 = p__30143;
var map__30144__$1 = (((((!((map__30144 == null))))?(((((map__30144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30144):map__30144);
var opts = map__30144__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30134){
var G__30135 = cljs.core.first(seq30134);
var seq30134__$1 = cljs.core.next(seq30134);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30135,seq30134__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30158 = arguments.length;
switch (G__30158) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29889__auto___32511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30215){
var state_val_30216 = (state_30215[(1)]);
if((state_val_30216 === (7))){
var inst_30209 = (state_30215[(2)]);
var state_30215__$1 = state_30215;
var statearr_30234_32513 = state_30215__$1;
(statearr_30234_32513[(2)] = inst_30209);

(statearr_30234_32513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (1))){
var state_30215__$1 = state_30215;
var statearr_30235_32517 = state_30215__$1;
(statearr_30235_32517[(2)] = null);

(statearr_30235_32517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (4))){
var inst_30179 = (state_30215[(7)]);
var inst_30179__$1 = (state_30215[(2)]);
var inst_30187 = (inst_30179__$1 == null);
var state_30215__$1 = (function (){var statearr_30237 = state_30215;
(statearr_30237[(7)] = inst_30179__$1);

return statearr_30237;
})();
if(cljs.core.truth_(inst_30187)){
var statearr_30238_32518 = state_30215__$1;
(statearr_30238_32518[(1)] = (5));

} else {
var statearr_30239_32520 = state_30215__$1;
(statearr_30239_32520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (13))){
var state_30215__$1 = state_30215;
var statearr_30240_32521 = state_30215__$1;
(statearr_30240_32521[(2)] = null);

(statearr_30240_32521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (6))){
var inst_30179 = (state_30215[(7)]);
var state_30215__$1 = state_30215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30215__$1,(11),to,inst_30179);
} else {
if((state_val_30216 === (3))){
var inst_30213 = (state_30215[(2)]);
var state_30215__$1 = state_30215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30215__$1,inst_30213);
} else {
if((state_val_30216 === (12))){
var state_30215__$1 = state_30215;
var statearr_30241_32522 = state_30215__$1;
(statearr_30241_32522[(2)] = null);

(statearr_30241_32522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (2))){
var state_30215__$1 = state_30215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30215__$1,(4),from);
} else {
if((state_val_30216 === (11))){
var inst_30201 = (state_30215[(2)]);
var state_30215__$1 = state_30215;
if(cljs.core.truth_(inst_30201)){
var statearr_30245_32525 = state_30215__$1;
(statearr_30245_32525[(1)] = (12));

} else {
var statearr_30246_32526 = state_30215__$1;
(statearr_30246_32526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (9))){
var state_30215__$1 = state_30215;
var statearr_30247_32528 = state_30215__$1;
(statearr_30247_32528[(2)] = null);

(statearr_30247_32528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (5))){
var state_30215__$1 = state_30215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30248_32530 = state_30215__$1;
(statearr_30248_32530[(1)] = (8));

} else {
var statearr_30249_32531 = state_30215__$1;
(statearr_30249_32531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (14))){
var inst_30207 = (state_30215[(2)]);
var state_30215__$1 = state_30215;
var statearr_30252_32532 = state_30215__$1;
(statearr_30252_32532[(2)] = inst_30207);

(statearr_30252_32532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (10))){
var inst_30198 = (state_30215[(2)]);
var state_30215__$1 = state_30215;
var statearr_30253_32533 = state_30215__$1;
(statearr_30253_32533[(2)] = inst_30198);

(statearr_30253_32533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30216 === (8))){
var inst_30193 = cljs.core.async.close_BANG_(to);
var state_30215__$1 = state_30215;
var statearr_30256_32534 = state_30215__$1;
(statearr_30256_32534[(2)] = inst_30193);

(statearr_30256_32534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_30259 = [null,null,null,null,null,null,null,null];
(statearr_30259[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_30259[(1)] = (1));

return statearr_30259;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_30215){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30215);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30260){if((e30260 instanceof Object)){
var ex__29714__auto__ = e30260;
var statearr_30263_32537 = state_30215;
(statearr_30263_32537[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32539 = state_30215;
state_30215 = G__32539;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_30215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_30215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30264 = f__29890__auto__();
(statearr_30264[(6)] = c__29889__auto___32511);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30270){
var vec__30271 = p__30270;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30271,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30271,(1),null);
var job = vec__30271;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29889__auto___32545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30281){
var state_val_30282 = (state_30281[(1)]);
if((state_val_30282 === (1))){
var state_30281__$1 = state_30281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30281__$1,(2),res,v);
} else {
if((state_val_30282 === (2))){
var inst_30278 = (state_30281[(2)]);
var inst_30279 = cljs.core.async.close_BANG_(res);
var state_30281__$1 = (function (){var statearr_30285 = state_30281;
(statearr_30285[(7)] = inst_30278);

return statearr_30285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30281__$1,inst_30279);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0 = (function (){
var statearr_30286 = [null,null,null,null,null,null,null,null];
(statearr_30286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__);

(statearr_30286[(1)] = (1));

return statearr_30286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1 = (function (state_30281){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30281);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30288){if((e30288 instanceof Object)){
var ex__29714__auto__ = e30288;
var statearr_30289_32547 = state_30281;
(statearr_30289_32547[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30288;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32550 = state_30281;
state_30281 = G__32550;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = function(state_30281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1.call(this,state_30281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30293 = f__29890__auto__();
(statearr_30293[(6)] = c__29889__auto___32545);

return statearr_30293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30296){
var vec__30297 = p__30296;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30297,(1),null);
var job = vec__30297;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32552 = n;
var __32553 = (0);
while(true){
if((__32553 < n__4666__auto___32552)){
var G__30300_32554 = type;
var G__30300_32555__$1 = (((G__30300_32554 instanceof cljs.core.Keyword))?G__30300_32554.fqn:null);
switch (G__30300_32555__$1) {
case "compute":
var c__29889__auto___32557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32553,c__29889__auto___32557,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async){
return (function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = ((function (__32553,c__29889__auto___32557,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async){
return (function (state_30314){
var state_val_30315 = (state_30314[(1)]);
if((state_val_30315 === (1))){
var state_30314__$1 = state_30314;
var statearr_30316_32560 = state_30314__$1;
(statearr_30316_32560[(2)] = null);

(statearr_30316_32560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (2))){
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30314__$1,(4),jobs);
} else {
if((state_val_30315 === (3))){
var inst_30312 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30314__$1,inst_30312);
} else {
if((state_val_30315 === (4))){
var inst_30304 = (state_30314[(2)]);
var inst_30305 = process(inst_30304);
var state_30314__$1 = state_30314;
if(cljs.core.truth_(inst_30305)){
var statearr_30317_32562 = state_30314__$1;
(statearr_30317_32562[(1)] = (5));

} else {
var statearr_30318_32563 = state_30314__$1;
(statearr_30318_32563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (5))){
var state_30314__$1 = state_30314;
var statearr_30319_32569 = state_30314__$1;
(statearr_30319_32569[(2)] = null);

(statearr_30319_32569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (6))){
var state_30314__$1 = state_30314;
var statearr_30321_32573 = state_30314__$1;
(statearr_30321_32573[(2)] = null);

(statearr_30321_32573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (7))){
var inst_30310 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30322_32577 = state_30314__$1;
(statearr_30322_32577[(2)] = inst_30310);

(statearr_30322_32577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32553,c__29889__auto___32557,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async))
;
return ((function (__32553,switch__29710__auto__,c__29889__auto___32557,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null];
(statearr_30323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1 = (function (state_30314){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30314);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30327){if((e30327 instanceof Object)){
var ex__29714__auto__ = e30327;
var statearr_30329_32582 = state_30314;
(statearr_30329_32582[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32583 = state_30314;
state_30314 = G__32583;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = function(state_30314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1.call(this,state_30314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__;
})()
;})(__32553,switch__29710__auto__,c__29889__auto___32557,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async))
})();
var state__29891__auto__ = (function (){var statearr_30330 = f__29890__auto__();
(statearr_30330[(6)] = c__29889__auto___32557);

return statearr_30330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
});})(__32553,c__29889__auto___32557,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async))
);


break;
case "async":
var c__29889__auto___32584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32553,c__29889__auto___32584,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async){
return (function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = ((function (__32553,c__29889__auto___32584,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async){
return (function (state_30343){
var state_val_30344 = (state_30343[(1)]);
if((state_val_30344 === (1))){
var state_30343__$1 = state_30343;
var statearr_30357_32585 = state_30343__$1;
(statearr_30357_32585[(2)] = null);

(statearr_30357_32585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (2))){
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30343__$1,(4),jobs);
} else {
if((state_val_30344 === (3))){
var inst_30341 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30343__$1,inst_30341);
} else {
if((state_val_30344 === (4))){
var inst_30333 = (state_30343[(2)]);
var inst_30334 = async(inst_30333);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30334)){
var statearr_30358_32586 = state_30343__$1;
(statearr_30358_32586[(1)] = (5));

} else {
var statearr_30359_32587 = state_30343__$1;
(statearr_30359_32587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (5))){
var state_30343__$1 = state_30343;
var statearr_30361_32588 = state_30343__$1;
(statearr_30361_32588[(2)] = null);

(statearr_30361_32588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (6))){
var state_30343__$1 = state_30343;
var statearr_30366_32589 = state_30343__$1;
(statearr_30366_32589[(2)] = null);

(statearr_30366_32589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (7))){
var inst_30339 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30371_32590 = state_30343__$1;
(statearr_30371_32590[(2)] = inst_30339);

(statearr_30371_32590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32553,c__29889__auto___32584,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async))
;
return ((function (__32553,switch__29710__auto__,c__29889__auto___32584,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0 = (function (){
var statearr_30378 = [null,null,null,null,null,null,null];
(statearr_30378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__);

(statearr_30378[(1)] = (1));

return statearr_30378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1 = (function (state_30343){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30343);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30379){if((e30379 instanceof Object)){
var ex__29714__auto__ = e30379;
var statearr_30380_32591 = state_30343;
(statearr_30380_32591[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32592 = state_30343;
state_30343 = G__32592;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = function(state_30343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1.call(this,state_30343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__;
})()
;})(__32553,switch__29710__auto__,c__29889__auto___32584,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async))
})();
var state__29891__auto__ = (function (){var statearr_30381 = f__29890__auto__();
(statearr_30381[(6)] = c__29889__auto___32584);

return statearr_30381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
});})(__32553,c__29889__auto___32584,G__30300_32554,G__30300_32555__$1,n__4666__auto___32552,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30300_32555__$1)].join('')));

}

var G__32593 = (__32553 + (1));
__32553 = G__32593;
continue;
} else {
}
break;
}

var c__29889__auto___32594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30406){
var state_val_30407 = (state_30406[(1)]);
if((state_val_30407 === (7))){
var inst_30402 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
var statearr_30409_32595 = state_30406__$1;
(statearr_30409_32595[(2)] = inst_30402);

(statearr_30409_32595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30407 === (1))){
var state_30406__$1 = state_30406;
var statearr_30410_32596 = state_30406__$1;
(statearr_30410_32596[(2)] = null);

(statearr_30410_32596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30407 === (4))){
var inst_30387 = (state_30406[(7)]);
var inst_30387__$1 = (state_30406[(2)]);
var inst_30388 = (inst_30387__$1 == null);
var state_30406__$1 = (function (){var statearr_30411 = state_30406;
(statearr_30411[(7)] = inst_30387__$1);

return statearr_30411;
})();
if(cljs.core.truth_(inst_30388)){
var statearr_30412_32597 = state_30406__$1;
(statearr_30412_32597[(1)] = (5));

} else {
var statearr_30413_32598 = state_30406__$1;
(statearr_30413_32598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30407 === (6))){
var inst_30392 = (state_30406[(8)]);
var inst_30387 = (state_30406[(7)]);
var inst_30392__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30394 = [inst_30387,inst_30392__$1];
var inst_30395 = (new cljs.core.PersistentVector(null,2,(5),inst_30393,inst_30394,null));
var state_30406__$1 = (function (){var statearr_30420 = state_30406;
(statearr_30420[(8)] = inst_30392__$1);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30406__$1,(8),jobs,inst_30395);
} else {
if((state_val_30407 === (3))){
var inst_30404 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30406__$1,inst_30404);
} else {
if((state_val_30407 === (2))){
var state_30406__$1 = state_30406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30406__$1,(4),from);
} else {
if((state_val_30407 === (9))){
var inst_30399 = (state_30406[(2)]);
var state_30406__$1 = (function (){var statearr_30422 = state_30406;
(statearr_30422[(9)] = inst_30399);

return statearr_30422;
})();
var statearr_30423_32603 = state_30406__$1;
(statearr_30423_32603[(2)] = null);

(statearr_30423_32603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30407 === (5))){
var inst_30390 = cljs.core.async.close_BANG_(jobs);
var state_30406__$1 = state_30406;
var statearr_30424_32604 = state_30406__$1;
(statearr_30424_32604[(2)] = inst_30390);

(statearr_30424_32604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30407 === (8))){
var inst_30392 = (state_30406[(8)]);
var inst_30397 = (state_30406[(2)]);
var state_30406__$1 = (function (){var statearr_30425 = state_30406;
(statearr_30425[(10)] = inst_30397);

return statearr_30425;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30406__$1,(9),results,inst_30392);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0 = (function (){
var statearr_30426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__);

(statearr_30426[(1)] = (1));

return statearr_30426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1 = (function (state_30406){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30406);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30427){if((e30427 instanceof Object)){
var ex__29714__auto__ = e30427;
var statearr_30428_32606 = state_30406;
(statearr_30428_32606[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32607 = state_30406;
state_30406 = G__32607;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = function(state_30406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1.call(this,state_30406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30429 = f__29890__auto__();
(statearr_30429[(6)] = c__29889__auto___32594);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


var c__29889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30467){
var state_val_30468 = (state_30467[(1)]);
if((state_val_30468 === (7))){
var inst_30463 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30469_32610 = state_30467__$1;
(statearr_30469_32610[(2)] = inst_30463);

(statearr_30469_32610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (20))){
var state_30467__$1 = state_30467;
var statearr_30470_32611 = state_30467__$1;
(statearr_30470_32611[(2)] = null);

(statearr_30470_32611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (1))){
var state_30467__$1 = state_30467;
var statearr_30471_32612 = state_30467__$1;
(statearr_30471_32612[(2)] = null);

(statearr_30471_32612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (4))){
var inst_30432 = (state_30467[(7)]);
var inst_30432__$1 = (state_30467[(2)]);
var inst_30433 = (inst_30432__$1 == null);
var state_30467__$1 = (function (){var statearr_30472 = state_30467;
(statearr_30472[(7)] = inst_30432__$1);

return statearr_30472;
})();
if(cljs.core.truth_(inst_30433)){
var statearr_30473_32615 = state_30467__$1;
(statearr_30473_32615[(1)] = (5));

} else {
var statearr_30474_32616 = state_30467__$1;
(statearr_30474_32616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (15))){
var inst_30445 = (state_30467[(8)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30467__$1,(18),to,inst_30445);
} else {
if((state_val_30468 === (21))){
var inst_30458 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30479_32617 = state_30467__$1;
(statearr_30479_32617[(2)] = inst_30458);

(statearr_30479_32617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (13))){
var inst_30460 = (state_30467[(2)]);
var state_30467__$1 = (function (){var statearr_30480 = state_30467;
(statearr_30480[(9)] = inst_30460);

return statearr_30480;
})();
var statearr_30481_32618 = state_30467__$1;
(statearr_30481_32618[(2)] = null);

(statearr_30481_32618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (6))){
var inst_30432 = (state_30467[(7)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30467__$1,(11),inst_30432);
} else {
if((state_val_30468 === (17))){
var inst_30453 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
if(cljs.core.truth_(inst_30453)){
var statearr_30484_32622 = state_30467__$1;
(statearr_30484_32622[(1)] = (19));

} else {
var statearr_30485_32623 = state_30467__$1;
(statearr_30485_32623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (3))){
var inst_30465 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30467__$1,inst_30465);
} else {
if((state_val_30468 === (12))){
var inst_30442 = (state_30467[(10)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30467__$1,(14),inst_30442);
} else {
if((state_val_30468 === (2))){
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30467__$1,(4),results);
} else {
if((state_val_30468 === (19))){
var state_30467__$1 = state_30467;
var statearr_30494_32624 = state_30467__$1;
(statearr_30494_32624[(2)] = null);

(statearr_30494_32624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (11))){
var inst_30442 = (state_30467[(2)]);
var state_30467__$1 = (function (){var statearr_30499 = state_30467;
(statearr_30499[(10)] = inst_30442);

return statearr_30499;
})();
var statearr_30500_32626 = state_30467__$1;
(statearr_30500_32626[(2)] = null);

(statearr_30500_32626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (9))){
var state_30467__$1 = state_30467;
var statearr_30503_32627 = state_30467__$1;
(statearr_30503_32627[(2)] = null);

(statearr_30503_32627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (5))){
var state_30467__$1 = state_30467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30504_32628 = state_30467__$1;
(statearr_30504_32628[(1)] = (8));

} else {
var statearr_30505_32630 = state_30467__$1;
(statearr_30505_32630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (14))){
var inst_30445 = (state_30467[(8)]);
var inst_30445__$1 = (state_30467[(2)]);
var inst_30446 = (inst_30445__$1 == null);
var inst_30447 = cljs.core.not(inst_30446);
var state_30467__$1 = (function (){var statearr_30510 = state_30467;
(statearr_30510[(8)] = inst_30445__$1);

return statearr_30510;
})();
if(inst_30447){
var statearr_30512_32633 = state_30467__$1;
(statearr_30512_32633[(1)] = (15));

} else {
var statearr_30513_32634 = state_30467__$1;
(statearr_30513_32634[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (16))){
var state_30467__$1 = state_30467;
var statearr_30518_32635 = state_30467__$1;
(statearr_30518_32635[(2)] = false);

(statearr_30518_32635[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (10))){
var inst_30439 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30523_32636 = state_30467__$1;
(statearr_30523_32636[(2)] = inst_30439);

(statearr_30523_32636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (18))){
var inst_30450 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30525_32637 = state_30467__$1;
(statearr_30525_32637[(2)] = inst_30450);

(statearr_30525_32637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (8))){
var inst_30436 = cljs.core.async.close_BANG_(to);
var state_30467__$1 = state_30467;
var statearr_30528_32639 = state_30467__$1;
(statearr_30528_32639[(2)] = inst_30436);

(statearr_30528_32639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0 = (function (){
var statearr_30533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__);

(statearr_30533[(1)] = (1));

return statearr_30533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1 = (function (state_30467){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30467);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30534){if((e30534 instanceof Object)){
var ex__29714__auto__ = e30534;
var statearr_30535_32640 = state_30467;
(statearr_30535_32640[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30534;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32641 = state_30467;
state_30467 = G__32641;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__ = function(state_30467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1.call(this,state_30467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30536 = f__29890__auto__();
(statearr_30536[(6)] = c__29889__auto__);

return statearr_30536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));

return c__29889__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30540 = arguments.length;
switch (G__30540) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30551 = arguments.length;
switch (G__30551) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30559 = arguments.length;
switch (G__30559) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29889__auto___32649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30595){
var state_val_30596 = (state_30595[(1)]);
if((state_val_30596 === (7))){
var inst_30590 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
var statearr_30609_32651 = state_30595__$1;
(statearr_30609_32651[(2)] = inst_30590);

(statearr_30609_32651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (1))){
var state_30595__$1 = state_30595;
var statearr_30619_32653 = state_30595__$1;
(statearr_30619_32653[(2)] = null);

(statearr_30619_32653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (4))){
var inst_30567 = (state_30595[(7)]);
var inst_30567__$1 = (state_30595[(2)]);
var inst_30568 = (inst_30567__$1 == null);
var state_30595__$1 = (function (){var statearr_30624 = state_30595;
(statearr_30624[(7)] = inst_30567__$1);

return statearr_30624;
})();
if(cljs.core.truth_(inst_30568)){
var statearr_30627_32654 = state_30595__$1;
(statearr_30627_32654[(1)] = (5));

} else {
var statearr_30628_32655 = state_30595__$1;
(statearr_30628_32655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (13))){
var state_30595__$1 = state_30595;
var statearr_30629_32656 = state_30595__$1;
(statearr_30629_32656[(2)] = null);

(statearr_30629_32656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (6))){
var inst_30567 = (state_30595[(7)]);
var inst_30575 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30567) : p.call(null,inst_30567));
var state_30595__$1 = state_30595;
if(cljs.core.truth_(inst_30575)){
var statearr_30633_32657 = state_30595__$1;
(statearr_30633_32657[(1)] = (9));

} else {
var statearr_30634_32658 = state_30595__$1;
(statearr_30634_32658[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (3))){
var inst_30592 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30595__$1,inst_30592);
} else {
if((state_val_30596 === (12))){
var state_30595__$1 = state_30595;
var statearr_30637_32659 = state_30595__$1;
(statearr_30637_32659[(2)] = null);

(statearr_30637_32659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (2))){
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30595__$1,(4),ch);
} else {
if((state_val_30596 === (11))){
var inst_30567 = (state_30595[(7)]);
var inst_30581 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30595__$1,(8),inst_30581,inst_30567);
} else {
if((state_val_30596 === (9))){
var state_30595__$1 = state_30595;
var statearr_30640_32662 = state_30595__$1;
(statearr_30640_32662[(2)] = tc);

(statearr_30640_32662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (5))){
var inst_30572 = cljs.core.async.close_BANG_(tc);
var inst_30573 = cljs.core.async.close_BANG_(fc);
var state_30595__$1 = (function (){var statearr_30641 = state_30595;
(statearr_30641[(8)] = inst_30572);

return statearr_30641;
})();
var statearr_30642_32663 = state_30595__$1;
(statearr_30642_32663[(2)] = inst_30573);

(statearr_30642_32663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (14))){
var inst_30588 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
var statearr_30643_32664 = state_30595__$1;
(statearr_30643_32664[(2)] = inst_30588);

(statearr_30643_32664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (10))){
var state_30595__$1 = state_30595;
var statearr_30644_32665 = state_30595__$1;
(statearr_30644_32665[(2)] = fc);

(statearr_30644_32665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (8))){
var inst_30583 = (state_30595[(2)]);
var state_30595__$1 = state_30595;
if(cljs.core.truth_(inst_30583)){
var statearr_30645_32666 = state_30595__$1;
(statearr_30645_32666[(1)] = (12));

} else {
var statearr_30646_32667 = state_30595__$1;
(statearr_30646_32667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_30647 = [null,null,null,null,null,null,null,null,null];
(statearr_30647[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_30647[(1)] = (1));

return statearr_30647;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_30595){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30595);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30648){if((e30648 instanceof Object)){
var ex__29714__auto__ = e30648;
var statearr_30649_32668 = state_30595;
(statearr_30649_32668[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32669 = state_30595;
state_30595 = G__32669;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_30595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_30595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30650 = f__29890__auto__();
(statearr_30650[(6)] = c__29889__auto___32649);

return statearr_30650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30677){
var state_val_30678 = (state_30677[(1)]);
if((state_val_30678 === (7))){
var inst_30672 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30681_32672 = state_30677__$1;
(statearr_30681_32672[(2)] = inst_30672);

(statearr_30681_32672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (1))){
var inst_30655 = init;
var state_30677__$1 = (function (){var statearr_30684 = state_30677;
(statearr_30684[(7)] = inst_30655);

return statearr_30684;
})();
var statearr_30686_32673 = state_30677__$1;
(statearr_30686_32673[(2)] = null);

(statearr_30686_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (4))){
var inst_30658 = (state_30677[(8)]);
var inst_30658__$1 = (state_30677[(2)]);
var inst_30659 = (inst_30658__$1 == null);
var state_30677__$1 = (function (){var statearr_30687 = state_30677;
(statearr_30687[(8)] = inst_30658__$1);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30659)){
var statearr_30688_32674 = state_30677__$1;
(statearr_30688_32674[(1)] = (5));

} else {
var statearr_30689_32675 = state_30677__$1;
(statearr_30689_32675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (6))){
var inst_30662 = (state_30677[(9)]);
var inst_30658 = (state_30677[(8)]);
var inst_30655 = (state_30677[(7)]);
var inst_30662__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30655,inst_30658) : f.call(null,inst_30655,inst_30658));
var inst_30663 = cljs.core.reduced_QMARK_(inst_30662__$1);
var state_30677__$1 = (function (){var statearr_30693 = state_30677;
(statearr_30693[(9)] = inst_30662__$1);

return statearr_30693;
})();
if(inst_30663){
var statearr_30694_32676 = state_30677__$1;
(statearr_30694_32676[(1)] = (8));

} else {
var statearr_30695_32677 = state_30677__$1;
(statearr_30695_32677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (3))){
var inst_30674 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30677__$1,inst_30674);
} else {
if((state_val_30678 === (2))){
var state_30677__$1 = state_30677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30677__$1,(4),ch);
} else {
if((state_val_30678 === (9))){
var inst_30662 = (state_30677[(9)]);
var inst_30655 = inst_30662;
var state_30677__$1 = (function (){var statearr_30698 = state_30677;
(statearr_30698[(7)] = inst_30655);

return statearr_30698;
})();
var statearr_30699_32678 = state_30677__$1;
(statearr_30699_32678[(2)] = null);

(statearr_30699_32678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (5))){
var inst_30655 = (state_30677[(7)]);
var state_30677__$1 = state_30677;
var statearr_30700_32679 = state_30677__$1;
(statearr_30700_32679[(2)] = inst_30655);

(statearr_30700_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (10))){
var inst_30670 = (state_30677[(2)]);
var state_30677__$1 = state_30677;
var statearr_30701_32681 = state_30677__$1;
(statearr_30701_32681[(2)] = inst_30670);

(statearr_30701_32681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30678 === (8))){
var inst_30662 = (state_30677[(9)]);
var inst_30665 = cljs.core.deref(inst_30662);
var state_30677__$1 = state_30677;
var statearr_30702_32683 = state_30677__$1;
(statearr_30702_32683[(2)] = inst_30665);

(statearr_30702_32683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29711__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29711__auto____0 = (function (){
var statearr_30710 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30710[(0)] = cljs$core$async$reduce_$_state_machine__29711__auto__);

(statearr_30710[(1)] = (1));

return statearr_30710;
});
var cljs$core$async$reduce_$_state_machine__29711__auto____1 = (function (state_30677){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30677);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30715){if((e30715 instanceof Object)){
var ex__29714__auto__ = e30715;
var statearr_30720_32684 = state_30677;
(statearr_30720_32684[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32685 = state_30677;
state_30677 = G__32685;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29711__auto__ = function(state_30677){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29711__auto____1.call(this,state_30677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29711__auto____0;
cljs$core$async$reduce_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29711__auto____1;
return cljs$core$async$reduce_$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30721 = f__29890__auto__();
(statearr_30721[(6)] = c__29889__auto__);

return statearr_30721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));

return c__29889__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30727){
var state_val_30728 = (state_30727[(1)]);
if((state_val_30728 === (1))){
var inst_30722 = cljs.core.async.reduce(f__$1,init,ch);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30727__$1,(2),inst_30722);
} else {
if((state_val_30728 === (2))){
var inst_30724 = (state_30727[(2)]);
var inst_30725 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30724) : f__$1.call(null,inst_30724));
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30727__$1,inst_30725);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29711__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29711__auto____0 = (function (){
var statearr_30739 = [null,null,null,null,null,null,null];
(statearr_30739[(0)] = cljs$core$async$transduce_$_state_machine__29711__auto__);

(statearr_30739[(1)] = (1));

return statearr_30739;
});
var cljs$core$async$transduce_$_state_machine__29711__auto____1 = (function (state_30727){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30727);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30742){if((e30742 instanceof Object)){
var ex__29714__auto__ = e30742;
var statearr_30745_32687 = state_30727;
(statearr_30745_32687[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32688 = state_30727;
state_30727 = G__32688;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29711__auto__ = function(state_30727){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29711__auto____1.call(this,state_30727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29711__auto____0;
cljs$core$async$transduce_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29711__auto____1;
return cljs$core$async$transduce_$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30752 = f__29890__auto__();
(statearr_30752[(6)] = c__29889__auto__);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));

return c__29889__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30755 = arguments.length;
switch (G__30755) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_30783){
var state_val_30784 = (state_30783[(1)]);
if((state_val_30784 === (7))){
var inst_30765 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30797_32690 = state_30783__$1;
(statearr_30797_32690[(2)] = inst_30765);

(statearr_30797_32690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (1))){
var inst_30758 = cljs.core.seq(coll);
var inst_30759 = inst_30758;
var state_30783__$1 = (function (){var statearr_30799 = state_30783;
(statearr_30799[(7)] = inst_30759);

return statearr_30799;
})();
var statearr_30800_32695 = state_30783__$1;
(statearr_30800_32695[(2)] = null);

(statearr_30800_32695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (4))){
var inst_30759 = (state_30783[(7)]);
var inst_30763 = cljs.core.first(inst_30759);
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30783__$1,(7),ch,inst_30763);
} else {
if((state_val_30784 === (13))){
var inst_30777 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30801_32696 = state_30783__$1;
(statearr_30801_32696[(2)] = inst_30777);

(statearr_30801_32696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (6))){
var inst_30768 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
if(cljs.core.truth_(inst_30768)){
var statearr_30802_32697 = state_30783__$1;
(statearr_30802_32697[(1)] = (8));

} else {
var statearr_30803_32698 = state_30783__$1;
(statearr_30803_32698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (3))){
var inst_30781 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30783__$1,inst_30781);
} else {
if((state_val_30784 === (12))){
var state_30783__$1 = state_30783;
var statearr_30805_32699 = state_30783__$1;
(statearr_30805_32699[(2)] = null);

(statearr_30805_32699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (2))){
var inst_30759 = (state_30783[(7)]);
var state_30783__$1 = state_30783;
if(cljs.core.truth_(inst_30759)){
var statearr_30806_32700 = state_30783__$1;
(statearr_30806_32700[(1)] = (4));

} else {
var statearr_30807_32701 = state_30783__$1;
(statearr_30807_32701[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (11))){
var inst_30774 = cljs.core.async.close_BANG_(ch);
var state_30783__$1 = state_30783;
var statearr_30808_32702 = state_30783__$1;
(statearr_30808_32702[(2)] = inst_30774);

(statearr_30808_32702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (9))){
var state_30783__$1 = state_30783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30809_32703 = state_30783__$1;
(statearr_30809_32703[(1)] = (11));

} else {
var statearr_30810_32704 = state_30783__$1;
(statearr_30810_32704[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (5))){
var inst_30759 = (state_30783[(7)]);
var state_30783__$1 = state_30783;
var statearr_30811_32705 = state_30783__$1;
(statearr_30811_32705[(2)] = inst_30759);

(statearr_30811_32705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (10))){
var inst_30779 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
var statearr_30814_32706 = state_30783__$1;
(statearr_30814_32706[(2)] = inst_30779);

(statearr_30814_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30784 === (8))){
var inst_30759 = (state_30783[(7)]);
var inst_30770 = cljs.core.next(inst_30759);
var inst_30759__$1 = inst_30770;
var state_30783__$1 = (function (){var statearr_30815 = state_30783;
(statearr_30815[(7)] = inst_30759__$1);

return statearr_30815;
})();
var statearr_30818_32707 = state_30783__$1;
(statearr_30818_32707[(2)] = null);

(statearr_30818_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_30823 = [null,null,null,null,null,null,null,null];
(statearr_30823[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_30823[(1)] = (1));

return statearr_30823;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_30783){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_30783);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e30827){if((e30827 instanceof Object)){
var ex__29714__auto__ = e30827;
var statearr_30828_32708 = state_30783;
(statearr_30828_32708[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32709 = state_30783;
state_30783 = G__32709;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_30783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_30783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_30832 = f__29890__auto__();
(statearr_30832[(6)] = c__29889__auto__);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));

return c__29889__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30854 = (function (ch,cs,meta30855){
this.ch = ch;
this.cs = cs;
this.meta30855 = meta30855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30856,meta30855__$1){
var self__ = this;
var _30856__$1 = this;
return (new cljs.core.async.t_cljs$core$async30854(self__.ch,self__.cs,meta30855__$1));
}));

(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30856){
var self__ = this;
var _30856__$1 = this;
return self__.meta30855;
}));

(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30854.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30855","meta30855",304935279,null)], null);
}));

(cljs.core.async.t_cljs$core$async30854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30854");

(cljs.core.async.t_cljs$core$async30854.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30854.
 */
cljs.core.async.__GT_t_cljs$core$async30854 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30854(ch__$1,cs__$1,meta30855){
return (new cljs.core.async.t_cljs$core$async30854(ch__$1,cs__$1,meta30855));
});

}

return (new cljs.core.async.t_cljs$core$async30854(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29889__auto___32725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_31001){
var state_val_31002 = (state_31001[(1)]);
if((state_val_31002 === (7))){
var inst_30997 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31013_32729 = state_31001__$1;
(statearr_31013_32729[(2)] = inst_30997);

(statearr_31013_32729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (20))){
var inst_30894 = (state_31001[(7)]);
var inst_30912 = cljs.core.first(inst_30894);
var inst_30913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30912,(0),null);
var inst_30914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30912,(1),null);
var state_31001__$1 = (function (){var statearr_31014 = state_31001;
(statearr_31014[(8)] = inst_30913);

return statearr_31014;
})();
if(cljs.core.truth_(inst_30914)){
var statearr_31015_32730 = state_31001__$1;
(statearr_31015_32730[(1)] = (22));

} else {
var statearr_31016_32731 = state_31001__$1;
(statearr_31016_32731[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (27))){
var inst_30944 = (state_31001[(9)]);
var inst_30951 = (state_31001[(10)]);
var inst_30863 = (state_31001[(11)]);
var inst_30946 = (state_31001[(12)]);
var inst_30951__$1 = cljs.core._nth(inst_30944,inst_30946);
var inst_30952 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30951__$1,inst_30863,done);
var state_31001__$1 = (function (){var statearr_31018 = state_31001;
(statearr_31018[(10)] = inst_30951__$1);

return statearr_31018;
})();
if(cljs.core.truth_(inst_30952)){
var statearr_31019_32733 = state_31001__$1;
(statearr_31019_32733[(1)] = (30));

} else {
var statearr_31020_32737 = state_31001__$1;
(statearr_31020_32737[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (1))){
var state_31001__$1 = state_31001;
var statearr_31021_32738 = state_31001__$1;
(statearr_31021_32738[(2)] = null);

(statearr_31021_32738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (24))){
var inst_30894 = (state_31001[(7)]);
var inst_30919 = (state_31001[(2)]);
var inst_30920 = cljs.core.next(inst_30894);
var inst_30872 = inst_30920;
var inst_30873 = null;
var inst_30874 = (0);
var inst_30875 = (0);
var state_31001__$1 = (function (){var statearr_31026 = state_31001;
(statearr_31026[(13)] = inst_30872);

(statearr_31026[(14)] = inst_30873);

(statearr_31026[(15)] = inst_30874);

(statearr_31026[(16)] = inst_30919);

(statearr_31026[(17)] = inst_30875);

return statearr_31026;
})();
var statearr_31030_32742 = state_31001__$1;
(statearr_31030_32742[(2)] = null);

(statearr_31030_32742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (39))){
var state_31001__$1 = state_31001;
var statearr_31035_32743 = state_31001__$1;
(statearr_31035_32743[(2)] = null);

(statearr_31035_32743[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (4))){
var inst_30863 = (state_31001[(11)]);
var inst_30863__$1 = (state_31001[(2)]);
var inst_30864 = (inst_30863__$1 == null);
var state_31001__$1 = (function (){var statearr_31040 = state_31001;
(statearr_31040[(11)] = inst_30863__$1);

return statearr_31040;
})();
if(cljs.core.truth_(inst_30864)){
var statearr_31041_32747 = state_31001__$1;
(statearr_31041_32747[(1)] = (5));

} else {
var statearr_31042_32748 = state_31001__$1;
(statearr_31042_32748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (15))){
var inst_30872 = (state_31001[(13)]);
var inst_30873 = (state_31001[(14)]);
var inst_30874 = (state_31001[(15)]);
var inst_30875 = (state_31001[(17)]);
var inst_30890 = (state_31001[(2)]);
var inst_30891 = (inst_30875 + (1));
var tmp31031 = inst_30872;
var tmp31032 = inst_30873;
var tmp31033 = inst_30874;
var inst_30872__$1 = tmp31031;
var inst_30873__$1 = tmp31032;
var inst_30874__$1 = tmp31033;
var inst_30875__$1 = inst_30891;
var state_31001__$1 = (function (){var statearr_31043 = state_31001;
(statearr_31043[(13)] = inst_30872__$1);

(statearr_31043[(14)] = inst_30873__$1);

(statearr_31043[(15)] = inst_30874__$1);

(statearr_31043[(18)] = inst_30890);

(statearr_31043[(17)] = inst_30875__$1);

return statearr_31043;
})();
var statearr_31045_32752 = state_31001__$1;
(statearr_31045_32752[(2)] = null);

(statearr_31045_32752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (21))){
var inst_30923 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31056_32753 = state_31001__$1;
(statearr_31056_32753[(2)] = inst_30923);

(statearr_31056_32753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (31))){
var inst_30951 = (state_31001[(10)]);
var inst_30955 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30951);
var state_31001__$1 = state_31001;
var statearr_31058_32754 = state_31001__$1;
(statearr_31058_32754[(2)] = inst_30955);

(statearr_31058_32754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (32))){
var inst_30943 = (state_31001[(19)]);
var inst_30944 = (state_31001[(9)]);
var inst_30945 = (state_31001[(20)]);
var inst_30946 = (state_31001[(12)]);
var inst_30957 = (state_31001[(2)]);
var inst_30958 = (inst_30946 + (1));
var tmp31049 = inst_30943;
var tmp31050 = inst_30944;
var tmp31051 = inst_30945;
var inst_30943__$1 = tmp31049;
var inst_30944__$1 = tmp31050;
var inst_30945__$1 = tmp31051;
var inst_30946__$1 = inst_30958;
var state_31001__$1 = (function (){var statearr_31059 = state_31001;
(statearr_31059[(19)] = inst_30943__$1);

(statearr_31059[(9)] = inst_30944__$1);

(statearr_31059[(21)] = inst_30957);

(statearr_31059[(20)] = inst_30945__$1);

(statearr_31059[(12)] = inst_30946__$1);

return statearr_31059;
})();
var statearr_31061_32758 = state_31001__$1;
(statearr_31061_32758[(2)] = null);

(statearr_31061_32758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (40))){
var inst_30970 = (state_31001[(22)]);
var inst_30974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30970);
var state_31001__$1 = state_31001;
var statearr_31066_32759 = state_31001__$1;
(statearr_31066_32759[(2)] = inst_30974);

(statearr_31066_32759[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (33))){
var inst_30961 = (state_31001[(23)]);
var inst_30963 = cljs.core.chunked_seq_QMARK_(inst_30961);
var state_31001__$1 = state_31001;
if(inst_30963){
var statearr_31069_32760 = state_31001__$1;
(statearr_31069_32760[(1)] = (36));

} else {
var statearr_31071_32761 = state_31001__$1;
(statearr_31071_32761[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (13))){
var inst_30884 = (state_31001[(24)]);
var inst_30887 = cljs.core.async.close_BANG_(inst_30884);
var state_31001__$1 = state_31001;
var statearr_31074_32762 = state_31001__$1;
(statearr_31074_32762[(2)] = inst_30887);

(statearr_31074_32762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (22))){
var inst_30913 = (state_31001[(8)]);
var inst_30916 = cljs.core.async.close_BANG_(inst_30913);
var state_31001__$1 = state_31001;
var statearr_31077_32764 = state_31001__$1;
(statearr_31077_32764[(2)] = inst_30916);

(statearr_31077_32764[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (36))){
var inst_30961 = (state_31001[(23)]);
var inst_30965 = cljs.core.chunk_first(inst_30961);
var inst_30966 = cljs.core.chunk_rest(inst_30961);
var inst_30967 = cljs.core.count(inst_30965);
var inst_30943 = inst_30966;
var inst_30944 = inst_30965;
var inst_30945 = inst_30967;
var inst_30946 = (0);
var state_31001__$1 = (function (){var statearr_31079 = state_31001;
(statearr_31079[(19)] = inst_30943);

(statearr_31079[(9)] = inst_30944);

(statearr_31079[(20)] = inst_30945);

(statearr_31079[(12)] = inst_30946);

return statearr_31079;
})();
var statearr_31080_32765 = state_31001__$1;
(statearr_31080_32765[(2)] = null);

(statearr_31080_32765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (41))){
var inst_30961 = (state_31001[(23)]);
var inst_30976 = (state_31001[(2)]);
var inst_30977 = cljs.core.next(inst_30961);
var inst_30943 = inst_30977;
var inst_30944 = null;
var inst_30945 = (0);
var inst_30946 = (0);
var state_31001__$1 = (function (){var statearr_31082 = state_31001;
(statearr_31082[(19)] = inst_30943);

(statearr_31082[(25)] = inst_30976);

(statearr_31082[(9)] = inst_30944);

(statearr_31082[(20)] = inst_30945);

(statearr_31082[(12)] = inst_30946);

return statearr_31082;
})();
var statearr_31084_32766 = state_31001__$1;
(statearr_31084_32766[(2)] = null);

(statearr_31084_32766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (43))){
var state_31001__$1 = state_31001;
var statearr_31086_32767 = state_31001__$1;
(statearr_31086_32767[(2)] = null);

(statearr_31086_32767[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (29))){
var inst_30985 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31089_32768 = state_31001__$1;
(statearr_31089_32768[(2)] = inst_30985);

(statearr_31089_32768[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (44))){
var inst_30994 = (state_31001[(2)]);
var state_31001__$1 = (function (){var statearr_31091 = state_31001;
(statearr_31091[(26)] = inst_30994);

return statearr_31091;
})();
var statearr_31092_32769 = state_31001__$1;
(statearr_31092_32769[(2)] = null);

(statearr_31092_32769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (6))){
var inst_30934 = (state_31001[(27)]);
var inst_30933 = cljs.core.deref(cs);
var inst_30934__$1 = cljs.core.keys(inst_30933);
var inst_30935 = cljs.core.count(inst_30934__$1);
var inst_30936 = cljs.core.reset_BANG_(dctr,inst_30935);
var inst_30942 = cljs.core.seq(inst_30934__$1);
var inst_30943 = inst_30942;
var inst_30944 = null;
var inst_30945 = (0);
var inst_30946 = (0);
var state_31001__$1 = (function (){var statearr_31094 = state_31001;
(statearr_31094[(19)] = inst_30943);

(statearr_31094[(28)] = inst_30936);

(statearr_31094[(27)] = inst_30934__$1);

(statearr_31094[(9)] = inst_30944);

(statearr_31094[(20)] = inst_30945);

(statearr_31094[(12)] = inst_30946);

return statearr_31094;
})();
var statearr_31095_32770 = state_31001__$1;
(statearr_31095_32770[(2)] = null);

(statearr_31095_32770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (28))){
var inst_30943 = (state_31001[(19)]);
var inst_30961 = (state_31001[(23)]);
var inst_30961__$1 = cljs.core.seq(inst_30943);
var state_31001__$1 = (function (){var statearr_31096 = state_31001;
(statearr_31096[(23)] = inst_30961__$1);

return statearr_31096;
})();
if(inst_30961__$1){
var statearr_31097_32771 = state_31001__$1;
(statearr_31097_32771[(1)] = (33));

} else {
var statearr_31099_32772 = state_31001__$1;
(statearr_31099_32772[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (25))){
var inst_30945 = (state_31001[(20)]);
var inst_30946 = (state_31001[(12)]);
var inst_30948 = (inst_30946 < inst_30945);
var inst_30949 = inst_30948;
var state_31001__$1 = state_31001;
if(cljs.core.truth_(inst_30949)){
var statearr_31101_32773 = state_31001__$1;
(statearr_31101_32773[(1)] = (27));

} else {
var statearr_31102_32774 = state_31001__$1;
(statearr_31102_32774[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (34))){
var state_31001__$1 = state_31001;
var statearr_31104_32775 = state_31001__$1;
(statearr_31104_32775[(2)] = null);

(statearr_31104_32775[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (17))){
var state_31001__$1 = state_31001;
var statearr_31107_32776 = state_31001__$1;
(statearr_31107_32776[(2)] = null);

(statearr_31107_32776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (3))){
var inst_30999 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31001__$1,inst_30999);
} else {
if((state_val_31002 === (12))){
var inst_30929 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31109_32777 = state_31001__$1;
(statearr_31109_32777[(2)] = inst_30929);

(statearr_31109_32777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (2))){
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31001__$1,(4),ch);
} else {
if((state_val_31002 === (23))){
var state_31001__$1 = state_31001;
var statearr_31110_32778 = state_31001__$1;
(statearr_31110_32778[(2)] = null);

(statearr_31110_32778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (35))){
var inst_30983 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31112_32779 = state_31001__$1;
(statearr_31112_32779[(2)] = inst_30983);

(statearr_31112_32779[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (19))){
var inst_30894 = (state_31001[(7)]);
var inst_30904 = cljs.core.chunk_first(inst_30894);
var inst_30905 = cljs.core.chunk_rest(inst_30894);
var inst_30906 = cljs.core.count(inst_30904);
var inst_30872 = inst_30905;
var inst_30873 = inst_30904;
var inst_30874 = inst_30906;
var inst_30875 = (0);
var state_31001__$1 = (function (){var statearr_31117 = state_31001;
(statearr_31117[(13)] = inst_30872);

(statearr_31117[(14)] = inst_30873);

(statearr_31117[(15)] = inst_30874);

(statearr_31117[(17)] = inst_30875);

return statearr_31117;
})();
var statearr_31118_32780 = state_31001__$1;
(statearr_31118_32780[(2)] = null);

(statearr_31118_32780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (11))){
var inst_30872 = (state_31001[(13)]);
var inst_30894 = (state_31001[(7)]);
var inst_30894__$1 = cljs.core.seq(inst_30872);
var state_31001__$1 = (function (){var statearr_31124 = state_31001;
(statearr_31124[(7)] = inst_30894__$1);

return statearr_31124;
})();
if(inst_30894__$1){
var statearr_31126_32781 = state_31001__$1;
(statearr_31126_32781[(1)] = (16));

} else {
var statearr_31127_32782 = state_31001__$1;
(statearr_31127_32782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (9))){
var inst_30931 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31128_32783 = state_31001__$1;
(statearr_31128_32783[(2)] = inst_30931);

(statearr_31128_32783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (5))){
var inst_30870 = cljs.core.deref(cs);
var inst_30871 = cljs.core.seq(inst_30870);
var inst_30872 = inst_30871;
var inst_30873 = null;
var inst_30874 = (0);
var inst_30875 = (0);
var state_31001__$1 = (function (){var statearr_31130 = state_31001;
(statearr_31130[(13)] = inst_30872);

(statearr_31130[(14)] = inst_30873);

(statearr_31130[(15)] = inst_30874);

(statearr_31130[(17)] = inst_30875);

return statearr_31130;
})();
var statearr_31133_32787 = state_31001__$1;
(statearr_31133_32787[(2)] = null);

(statearr_31133_32787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (14))){
var state_31001__$1 = state_31001;
var statearr_31139_32788 = state_31001__$1;
(statearr_31139_32788[(2)] = null);

(statearr_31139_32788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (45))){
var inst_30991 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31152_32789 = state_31001__$1;
(statearr_31152_32789[(2)] = inst_30991);

(statearr_31152_32789[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (26))){
var inst_30934 = (state_31001[(27)]);
var inst_30987 = (state_31001[(2)]);
var inst_30988 = cljs.core.seq(inst_30934);
var state_31001__$1 = (function (){var statearr_31165 = state_31001;
(statearr_31165[(29)] = inst_30987);

return statearr_31165;
})();
if(inst_30988){
var statearr_31166_32794 = state_31001__$1;
(statearr_31166_32794[(1)] = (42));

} else {
var statearr_31167_32795 = state_31001__$1;
(statearr_31167_32795[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (16))){
var inst_30894 = (state_31001[(7)]);
var inst_30902 = cljs.core.chunked_seq_QMARK_(inst_30894);
var state_31001__$1 = state_31001;
if(inst_30902){
var statearr_31168_32796 = state_31001__$1;
(statearr_31168_32796[(1)] = (19));

} else {
var statearr_31169_32797 = state_31001__$1;
(statearr_31169_32797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (38))){
var inst_30980 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31170_32798 = state_31001__$1;
(statearr_31170_32798[(2)] = inst_30980);

(statearr_31170_32798[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (30))){
var state_31001__$1 = state_31001;
var statearr_31171_32800 = state_31001__$1;
(statearr_31171_32800[(2)] = null);

(statearr_31171_32800[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (10))){
var inst_30873 = (state_31001[(14)]);
var inst_30875 = (state_31001[(17)]);
var inst_30883 = cljs.core._nth(inst_30873,inst_30875);
var inst_30884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30883,(0),null);
var inst_30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30883,(1),null);
var state_31001__$1 = (function (){var statearr_31172 = state_31001;
(statearr_31172[(24)] = inst_30884);

return statearr_31172;
})();
if(cljs.core.truth_(inst_30885)){
var statearr_31173_32802 = state_31001__$1;
(statearr_31173_32802[(1)] = (13));

} else {
var statearr_31174_32803 = state_31001__$1;
(statearr_31174_32803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (18))){
var inst_30927 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31175_32804 = state_31001__$1;
(statearr_31175_32804[(2)] = inst_30927);

(statearr_31175_32804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (42))){
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31001__$1,(45),dchan);
} else {
if((state_val_31002 === (37))){
var inst_30863 = (state_31001[(11)]);
var inst_30970 = (state_31001[(22)]);
var inst_30961 = (state_31001[(23)]);
var inst_30970__$1 = cljs.core.first(inst_30961);
var inst_30971 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30970__$1,inst_30863,done);
var state_31001__$1 = (function (){var statearr_31181 = state_31001;
(statearr_31181[(22)] = inst_30970__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_30971)){
var statearr_31182_32805 = state_31001__$1;
(statearr_31182_32805[(1)] = (39));

} else {
var statearr_31183_32806 = state_31001__$1;
(statearr_31183_32806[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (8))){
var inst_30874 = (state_31001[(15)]);
var inst_30875 = (state_31001[(17)]);
var inst_30877 = (inst_30875 < inst_30874);
var inst_30878 = inst_30877;
var state_31001__$1 = state_31001;
if(cljs.core.truth_(inst_30878)){
var statearr_31184_32807 = state_31001__$1;
(statearr_31184_32807[(1)] = (10));

} else {
var statearr_31185_32808 = state_31001__$1;
(statearr_31185_32808[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29711__auto__ = null;
var cljs$core$async$mult_$_state_machine__29711__auto____0 = (function (){
var statearr_31186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31186[(0)] = cljs$core$async$mult_$_state_machine__29711__auto__);

(statearr_31186[(1)] = (1));

return statearr_31186;
});
var cljs$core$async$mult_$_state_machine__29711__auto____1 = (function (state_31001){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_31001);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e31190){if((e31190 instanceof Object)){
var ex__29714__auto__ = e31190;
var statearr_31193_32813 = state_31001;
(statearr_31193_32813[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32814 = state_31001;
state_31001 = G__32814;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29711__auto__ = function(state_31001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29711__auto____1.call(this,state_31001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29711__auto____0;
cljs$core$async$mult_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29711__auto____1;
return cljs$core$async$mult_$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_31198 = f__29890__auto__();
(statearr_31198[(6)] = c__29889__auto___32725);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31204 = arguments.length;
switch (G__31204) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32839 = arguments.length;
var i__4790__auto___32840 = (0);
while(true){
if((i__4790__auto___32840 < len__4789__auto___32839)){
args__4795__auto__.push((arguments[i__4790__auto___32840]));

var G__32841 = (i__4790__auto___32840 + (1));
i__4790__auto___32840 = G__32841;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31229){
var map__31230 = p__31229;
var map__31230__$1 = (((((!((map__31230 == null))))?(((((map__31230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31230):map__31230);
var opts = map__31230__$1;
var statearr_31236_32842 = state;
(statearr_31236_32842[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31241_32843 = state;
(statearr_31241_32843[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31246_32844 = state;
(statearr_31246_32844[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31222){
var G__31223 = cljs.core.first(seq31222);
var seq31222__$1 = cljs.core.next(seq31222);
var G__31224 = cljs.core.first(seq31222__$1);
var seq31222__$2 = cljs.core.next(seq31222__$1);
var G__31225 = cljs.core.first(seq31222__$2);
var seq31222__$3 = cljs.core.next(seq31222__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31223,G__31224,G__31225,seq31222__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31259 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31260){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31260 = meta31260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31261,meta31260__$1){
var self__ = this;
var _31261__$1 = this;
return (new cljs.core.async.t_cljs$core$async31259(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31260__$1));
}));

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31261){
var self__ = this;
var _31261__$1 = this;
return self__.meta31260;
}));

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31259.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31260","meta31260",1311175072,null)], null);
}));

(cljs.core.async.t_cljs$core$async31259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31259");

(cljs.core.async.t_cljs$core$async31259.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31259.
 */
cljs.core.async.__GT_t_cljs$core$async31259 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31259(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31260){
return (new cljs.core.async.t_cljs$core$async31259(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31260));
});

}

return (new cljs.core.async.t_cljs$core$async31259(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29889__auto___32857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_31399){
var state_val_31400 = (state_31399[(1)]);
if((state_val_31400 === (7))){
var inst_31300 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31404_32858 = state_31399__$1;
(statearr_31404_32858[(2)] = inst_31300);

(statearr_31404_32858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (20))){
var inst_31312 = (state_31399[(7)]);
var state_31399__$1 = state_31399;
var statearr_31405_32859 = state_31399__$1;
(statearr_31405_32859[(2)] = inst_31312);

(statearr_31405_32859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (27))){
var state_31399__$1 = state_31399;
var statearr_31406_32860 = state_31399__$1;
(statearr_31406_32860[(2)] = null);

(statearr_31406_32860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (1))){
var inst_31284 = (state_31399[(8)]);
var inst_31284__$1 = calc_state();
var inst_31288 = (inst_31284__$1 == null);
var inst_31289 = cljs.core.not(inst_31288);
var state_31399__$1 = (function (){var statearr_31407 = state_31399;
(statearr_31407[(8)] = inst_31284__$1);

return statearr_31407;
})();
if(inst_31289){
var statearr_31408_32861 = state_31399__$1;
(statearr_31408_32861[(1)] = (2));

} else {
var statearr_31409_32862 = state_31399__$1;
(statearr_31409_32862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (24))){
var inst_31340 = (state_31399[(9)]);
var inst_31349 = (state_31399[(10)]);
var inst_31367 = (state_31399[(11)]);
var inst_31367__$1 = (inst_31340.cljs$core$IFn$_invoke$arity$1 ? inst_31340.cljs$core$IFn$_invoke$arity$1(inst_31349) : inst_31340.call(null,inst_31349));
var state_31399__$1 = (function (){var statearr_31410 = state_31399;
(statearr_31410[(11)] = inst_31367__$1);

return statearr_31410;
})();
if(cljs.core.truth_(inst_31367__$1)){
var statearr_31411_32863 = state_31399__$1;
(statearr_31411_32863[(1)] = (29));

} else {
var statearr_31412_32864 = state_31399__$1;
(statearr_31412_32864[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (4))){
var inst_31303 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31303)){
var statearr_31413_32865 = state_31399__$1;
(statearr_31413_32865[(1)] = (8));

} else {
var statearr_31414_32866 = state_31399__$1;
(statearr_31414_32866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (15))){
var inst_31334 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31334)){
var statearr_31415_32867 = state_31399__$1;
(statearr_31415_32867[(1)] = (19));

} else {
var statearr_31416_32868 = state_31399__$1;
(statearr_31416_32868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (21))){
var inst_31339 = (state_31399[(12)]);
var inst_31339__$1 = (state_31399[(2)]);
var inst_31340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31339__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31339__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31339__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31399__$1 = (function (){var statearr_31417 = state_31399;
(statearr_31417[(12)] = inst_31339__$1);

(statearr_31417[(13)] = inst_31341);

(statearr_31417[(9)] = inst_31340);

return statearr_31417;
})();
return cljs.core.async.ioc_alts_BANG_(state_31399__$1,(22),inst_31342);
} else {
if((state_val_31400 === (31))){
var inst_31375 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31375)){
var statearr_31418_32869 = state_31399__$1;
(statearr_31418_32869[(1)] = (32));

} else {
var statearr_31419_32870 = state_31399__$1;
(statearr_31419_32870[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (32))){
var inst_31348 = (state_31399[(14)]);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31399__$1,(35),out,inst_31348);
} else {
if((state_val_31400 === (33))){
var inst_31339 = (state_31399[(12)]);
var inst_31312 = inst_31339;
var state_31399__$1 = (function (){var statearr_31420 = state_31399;
(statearr_31420[(7)] = inst_31312);

return statearr_31420;
})();
var statearr_31421_32871 = state_31399__$1;
(statearr_31421_32871[(2)] = null);

(statearr_31421_32871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (13))){
var inst_31312 = (state_31399[(7)]);
var inst_31323 = inst_31312.cljs$lang$protocol_mask$partition0$;
var inst_31324 = (inst_31323 & (64));
var inst_31325 = inst_31312.cljs$core$ISeq$;
var inst_31326 = (cljs.core.PROTOCOL_SENTINEL === inst_31325);
var inst_31327 = ((inst_31324) || (inst_31326));
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31327)){
var statearr_31422_32872 = state_31399__$1;
(statearr_31422_32872[(1)] = (16));

} else {
var statearr_31423_32873 = state_31399__$1;
(statearr_31423_32873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (22))){
var inst_31348 = (state_31399[(14)]);
var inst_31349 = (state_31399[(10)]);
var inst_31347 = (state_31399[(2)]);
var inst_31348__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31347,(0),null);
var inst_31349__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31347,(1),null);
var inst_31353 = (inst_31348__$1 == null);
var inst_31355 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31349__$1,change);
var inst_31356 = ((inst_31353) || (inst_31355));
var state_31399__$1 = (function (){var statearr_31424 = state_31399;
(statearr_31424[(14)] = inst_31348__$1);

(statearr_31424[(10)] = inst_31349__$1);

return statearr_31424;
})();
if(cljs.core.truth_(inst_31356)){
var statearr_31425_32879 = state_31399__$1;
(statearr_31425_32879[(1)] = (23));

} else {
var statearr_31426_32880 = state_31399__$1;
(statearr_31426_32880[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (36))){
var inst_31339 = (state_31399[(12)]);
var inst_31312 = inst_31339;
var state_31399__$1 = (function (){var statearr_31427 = state_31399;
(statearr_31427[(7)] = inst_31312);

return statearr_31427;
})();
var statearr_31428_32881 = state_31399__$1;
(statearr_31428_32881[(2)] = null);

(statearr_31428_32881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (29))){
var inst_31367 = (state_31399[(11)]);
var state_31399__$1 = state_31399;
var statearr_31429_32882 = state_31399__$1;
(statearr_31429_32882[(2)] = inst_31367);

(statearr_31429_32882[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (6))){
var state_31399__$1 = state_31399;
var statearr_31430_32883 = state_31399__$1;
(statearr_31430_32883[(2)] = false);

(statearr_31430_32883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (28))){
var inst_31363 = (state_31399[(2)]);
var inst_31364 = calc_state();
var inst_31312 = inst_31364;
var state_31399__$1 = (function (){var statearr_31431 = state_31399;
(statearr_31431[(7)] = inst_31312);

(statearr_31431[(15)] = inst_31363);

return statearr_31431;
})();
var statearr_31432_32884 = state_31399__$1;
(statearr_31432_32884[(2)] = null);

(statearr_31432_32884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (25))){
var inst_31392 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31433_32885 = state_31399__$1;
(statearr_31433_32885[(2)] = inst_31392);

(statearr_31433_32885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (34))){
var inst_31390 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31434_32886 = state_31399__$1;
(statearr_31434_32886[(2)] = inst_31390);

(statearr_31434_32886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (17))){
var state_31399__$1 = state_31399;
var statearr_31435_32887 = state_31399__$1;
(statearr_31435_32887[(2)] = false);

(statearr_31435_32887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (3))){
var state_31399__$1 = state_31399;
var statearr_31436_32888 = state_31399__$1;
(statearr_31436_32888[(2)] = false);

(statearr_31436_32888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (12))){
var inst_31394 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31399__$1,inst_31394);
} else {
if((state_val_31400 === (2))){
var inst_31284 = (state_31399[(8)]);
var inst_31292 = inst_31284.cljs$lang$protocol_mask$partition0$;
var inst_31293 = (inst_31292 & (64));
var inst_31294 = inst_31284.cljs$core$ISeq$;
var inst_31295 = (cljs.core.PROTOCOL_SENTINEL === inst_31294);
var inst_31296 = ((inst_31293) || (inst_31295));
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31296)){
var statearr_31437_32889 = state_31399__$1;
(statearr_31437_32889[(1)] = (5));

} else {
var statearr_31438_32890 = state_31399__$1;
(statearr_31438_32890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (23))){
var inst_31348 = (state_31399[(14)]);
var inst_31358 = (inst_31348 == null);
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31358)){
var statearr_31439_32892 = state_31399__$1;
(statearr_31439_32892[(1)] = (26));

} else {
var statearr_31440_32894 = state_31399__$1;
(statearr_31440_32894[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (35))){
var inst_31381 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
if(cljs.core.truth_(inst_31381)){
var statearr_31441_32895 = state_31399__$1;
(statearr_31441_32895[(1)] = (36));

} else {
var statearr_31442_32896 = state_31399__$1;
(statearr_31442_32896[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (19))){
var inst_31312 = (state_31399[(7)]);
var inst_31336 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31312);
var state_31399__$1 = state_31399;
var statearr_31443_32897 = state_31399__$1;
(statearr_31443_32897[(2)] = inst_31336);

(statearr_31443_32897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (11))){
var inst_31312 = (state_31399[(7)]);
var inst_31320 = (inst_31312 == null);
var inst_31321 = cljs.core.not(inst_31320);
var state_31399__$1 = state_31399;
if(inst_31321){
var statearr_31444_32898 = state_31399__$1;
(statearr_31444_32898[(1)] = (13));

} else {
var statearr_31445_32899 = state_31399__$1;
(statearr_31445_32899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (9))){
var inst_31284 = (state_31399[(8)]);
var state_31399__$1 = state_31399;
var statearr_31446_32900 = state_31399__$1;
(statearr_31446_32900[(2)] = inst_31284);

(statearr_31446_32900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (5))){
var state_31399__$1 = state_31399;
var statearr_31447_32902 = state_31399__$1;
(statearr_31447_32902[(2)] = true);

(statearr_31447_32902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (14))){
var state_31399__$1 = state_31399;
var statearr_31448_32904 = state_31399__$1;
(statearr_31448_32904[(2)] = false);

(statearr_31448_32904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (26))){
var inst_31349 = (state_31399[(10)]);
var inst_31360 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31349);
var state_31399__$1 = state_31399;
var statearr_31449_32905 = state_31399__$1;
(statearr_31449_32905[(2)] = inst_31360);

(statearr_31449_32905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (16))){
var state_31399__$1 = state_31399;
var statearr_31450_32906 = state_31399__$1;
(statearr_31450_32906[(2)] = true);

(statearr_31450_32906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (38))){
var inst_31386 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31451_32907 = state_31399__$1;
(statearr_31451_32907[(2)] = inst_31386);

(statearr_31451_32907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (30))){
var inst_31341 = (state_31399[(13)]);
var inst_31340 = (state_31399[(9)]);
var inst_31349 = (state_31399[(10)]);
var inst_31370 = cljs.core.empty_QMARK_(inst_31340);
var inst_31371 = (inst_31341.cljs$core$IFn$_invoke$arity$1 ? inst_31341.cljs$core$IFn$_invoke$arity$1(inst_31349) : inst_31341.call(null,inst_31349));
var inst_31372 = cljs.core.not(inst_31371);
var inst_31373 = ((inst_31370) && (inst_31372));
var state_31399__$1 = state_31399;
var statearr_31452_32908 = state_31399__$1;
(statearr_31452_32908[(2)] = inst_31373);

(statearr_31452_32908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (10))){
var inst_31284 = (state_31399[(8)]);
var inst_31308 = (state_31399[(2)]);
var inst_31309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31308,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31308,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31308,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31312 = inst_31284;
var state_31399__$1 = (function (){var statearr_31453 = state_31399;
(statearr_31453[(16)] = inst_31309);

(statearr_31453[(17)] = inst_31310);

(statearr_31453[(7)] = inst_31312);

(statearr_31453[(18)] = inst_31311);

return statearr_31453;
})();
var statearr_31458_32909 = state_31399__$1;
(statearr_31458_32909[(2)] = null);

(statearr_31458_32909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (18))){
var inst_31331 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31459_32910 = state_31399__$1;
(statearr_31459_32910[(2)] = inst_31331);

(statearr_31459_32910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (37))){
var state_31399__$1 = state_31399;
var statearr_31460_32911 = state_31399__$1;
(statearr_31460_32911[(2)] = null);

(statearr_31460_32911[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (8))){
var inst_31284 = (state_31399[(8)]);
var inst_31305 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31284);
var state_31399__$1 = state_31399;
var statearr_31461_32912 = state_31399__$1;
(statearr_31461_32912[(2)] = inst_31305);

(statearr_31461_32912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29711__auto__ = null;
var cljs$core$async$mix_$_state_machine__29711__auto____0 = (function (){
var statearr_31467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31467[(0)] = cljs$core$async$mix_$_state_machine__29711__auto__);

(statearr_31467[(1)] = (1));

return statearr_31467;
});
var cljs$core$async$mix_$_state_machine__29711__auto____1 = (function (state_31399){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_31399);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e31468){if((e31468 instanceof Object)){
var ex__29714__auto__ = e31468;
var statearr_31469_32915 = state_31399;
(statearr_31469_32915[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32916 = state_31399;
state_31399 = G__32916;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29711__auto__ = function(state_31399){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29711__auto____1.call(this,state_31399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29711__auto____0;
cljs$core$async$mix_$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29711__auto____1;
return cljs$core$async$mix_$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_31470 = f__29890__auto__();
(statearr_31470[(6)] = c__29889__auto___32857);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31476 = arguments.length;
switch (G__31476) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31482 = arguments.length;
switch (G__31482) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31480_SHARP_){
if(cljs.core.truth_((p1__31480_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31480_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31480_SHARP_.call(null,topic)))){
return p1__31480_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31480_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31484 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31485){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31485 = meta31485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31486,meta31485__$1){
var self__ = this;
var _31486__$1 = this;
return (new cljs.core.async.t_cljs$core$async31484(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31485__$1));
}));

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31486){
var self__ = this;
var _31486__$1 = this;
return self__.meta31485;
}));

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31485","meta31485",-2070177569,null)], null);
}));

(cljs.core.async.t_cljs$core$async31484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31484");

(cljs.core.async.t_cljs$core$async31484.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31484.
 */
cljs.core.async.__GT_t_cljs$core$async31484 = (function cljs$core$async$__GT_t_cljs$core$async31484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31485){
return (new cljs.core.async.t_cljs$core$async31484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31485));
});

}

return (new cljs.core.async.t_cljs$core$async31484(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29889__auto___32924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_31573){
var state_val_31574 = (state_31573[(1)]);
if((state_val_31574 === (7))){
var inst_31568 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31575_32929 = state_31573__$1;
(statearr_31575_32929[(2)] = inst_31568);

(statearr_31575_32929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (20))){
var state_31573__$1 = state_31573;
var statearr_31576_32933 = state_31573__$1;
(statearr_31576_32933[(2)] = null);

(statearr_31576_32933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (1))){
var state_31573__$1 = state_31573;
var statearr_31578_32934 = state_31573__$1;
(statearr_31578_32934[(2)] = null);

(statearr_31578_32934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (24))){
var inst_31549 = (state_31573[(7)]);
var inst_31560 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31549);
var state_31573__$1 = state_31573;
var statearr_31579_32935 = state_31573__$1;
(statearr_31579_32935[(2)] = inst_31560);

(statearr_31579_32935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (4))){
var inst_31495 = (state_31573[(8)]);
var inst_31495__$1 = (state_31573[(2)]);
var inst_31496 = (inst_31495__$1 == null);
var state_31573__$1 = (function (){var statearr_31580 = state_31573;
(statearr_31580[(8)] = inst_31495__$1);

return statearr_31580;
})();
if(cljs.core.truth_(inst_31496)){
var statearr_31581_32939 = state_31573__$1;
(statearr_31581_32939[(1)] = (5));

} else {
var statearr_31582_32940 = state_31573__$1;
(statearr_31582_32940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (15))){
var inst_31543 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31584_32941 = state_31573__$1;
(statearr_31584_32941[(2)] = inst_31543);

(statearr_31584_32941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (21))){
var inst_31565 = (state_31573[(2)]);
var state_31573__$1 = (function (){var statearr_31585 = state_31573;
(statearr_31585[(9)] = inst_31565);

return statearr_31585;
})();
var statearr_31586_32945 = state_31573__$1;
(statearr_31586_32945[(2)] = null);

(statearr_31586_32945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (13))){
var inst_31523 = (state_31573[(10)]);
var inst_31525 = cljs.core.chunked_seq_QMARK_(inst_31523);
var state_31573__$1 = state_31573;
if(inst_31525){
var statearr_31588_32946 = state_31573__$1;
(statearr_31588_32946[(1)] = (16));

} else {
var statearr_31589_32947 = state_31573__$1;
(statearr_31589_32947[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (22))){
var inst_31557 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31557)){
var statearr_31590_32948 = state_31573__$1;
(statearr_31590_32948[(1)] = (23));

} else {
var statearr_31591_32949 = state_31573__$1;
(statearr_31591_32949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (6))){
var inst_31553 = (state_31573[(11)]);
var inst_31549 = (state_31573[(7)]);
var inst_31495 = (state_31573[(8)]);
var inst_31549__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31495) : topic_fn.call(null,inst_31495));
var inst_31552 = cljs.core.deref(mults);
var inst_31553__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31552,inst_31549__$1);
var state_31573__$1 = (function (){var statearr_31592 = state_31573;
(statearr_31592[(11)] = inst_31553__$1);

(statearr_31592[(7)] = inst_31549__$1);

return statearr_31592;
})();
if(cljs.core.truth_(inst_31553__$1)){
var statearr_31593_32953 = state_31573__$1;
(statearr_31593_32953[(1)] = (19));

} else {
var statearr_31594_32955 = state_31573__$1;
(statearr_31594_32955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (25))){
var inst_31562 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31595_32959 = state_31573__$1;
(statearr_31595_32959[(2)] = inst_31562);

(statearr_31595_32959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (17))){
var inst_31523 = (state_31573[(10)]);
var inst_31532 = cljs.core.first(inst_31523);
var inst_31534 = cljs.core.async.muxch_STAR_(inst_31532);
var inst_31535 = cljs.core.async.close_BANG_(inst_31534);
var inst_31536 = cljs.core.next(inst_31523);
var inst_31506 = inst_31536;
var inst_31507 = null;
var inst_31508 = (0);
var inst_31509 = (0);
var state_31573__$1 = (function (){var statearr_31596 = state_31573;
(statearr_31596[(12)] = inst_31508);

(statearr_31596[(13)] = inst_31535);

(statearr_31596[(14)] = inst_31507);

(statearr_31596[(15)] = inst_31506);

(statearr_31596[(16)] = inst_31509);

return statearr_31596;
})();
var statearr_31599_32960 = state_31573__$1;
(statearr_31599_32960[(2)] = null);

(statearr_31599_32960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (3))){
var inst_31570 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31573__$1,inst_31570);
} else {
if((state_val_31574 === (12))){
var inst_31545 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31601_32961 = state_31573__$1;
(statearr_31601_32961[(2)] = inst_31545);

(statearr_31601_32961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (2))){
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31573__$1,(4),ch);
} else {
if((state_val_31574 === (23))){
var state_31573__$1 = state_31573;
var statearr_31602_32962 = state_31573__$1;
(statearr_31602_32962[(2)] = null);

(statearr_31602_32962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (19))){
var inst_31553 = (state_31573[(11)]);
var inst_31495 = (state_31573[(8)]);
var inst_31555 = cljs.core.async.muxch_STAR_(inst_31553);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31573__$1,(22),inst_31555,inst_31495);
} else {
if((state_val_31574 === (11))){
var inst_31523 = (state_31573[(10)]);
var inst_31506 = (state_31573[(15)]);
var inst_31523__$1 = cljs.core.seq(inst_31506);
var state_31573__$1 = (function (){var statearr_31603 = state_31573;
(statearr_31603[(10)] = inst_31523__$1);

return statearr_31603;
})();
if(inst_31523__$1){
var statearr_31604_32963 = state_31573__$1;
(statearr_31604_32963[(1)] = (13));

} else {
var statearr_31605_32964 = state_31573__$1;
(statearr_31605_32964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (9))){
var inst_31547 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31606_32965 = state_31573__$1;
(statearr_31606_32965[(2)] = inst_31547);

(statearr_31606_32965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (5))){
var inst_31503 = cljs.core.deref(mults);
var inst_31504 = cljs.core.vals(inst_31503);
var inst_31505 = cljs.core.seq(inst_31504);
var inst_31506 = inst_31505;
var inst_31507 = null;
var inst_31508 = (0);
var inst_31509 = (0);
var state_31573__$1 = (function (){var statearr_31607 = state_31573;
(statearr_31607[(12)] = inst_31508);

(statearr_31607[(14)] = inst_31507);

(statearr_31607[(15)] = inst_31506);

(statearr_31607[(16)] = inst_31509);

return statearr_31607;
})();
var statearr_31608_32967 = state_31573__$1;
(statearr_31608_32967[(2)] = null);

(statearr_31608_32967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (14))){
var state_31573__$1 = state_31573;
var statearr_31612_32969 = state_31573__$1;
(statearr_31612_32969[(2)] = null);

(statearr_31612_32969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (16))){
var inst_31523 = (state_31573[(10)]);
var inst_31527 = cljs.core.chunk_first(inst_31523);
var inst_31528 = cljs.core.chunk_rest(inst_31523);
var inst_31529 = cljs.core.count(inst_31527);
var inst_31506 = inst_31528;
var inst_31507 = inst_31527;
var inst_31508 = inst_31529;
var inst_31509 = (0);
var state_31573__$1 = (function (){var statearr_31614 = state_31573;
(statearr_31614[(12)] = inst_31508);

(statearr_31614[(14)] = inst_31507);

(statearr_31614[(15)] = inst_31506);

(statearr_31614[(16)] = inst_31509);

return statearr_31614;
})();
var statearr_31615_32970 = state_31573__$1;
(statearr_31615_32970[(2)] = null);

(statearr_31615_32970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (10))){
var inst_31508 = (state_31573[(12)]);
var inst_31507 = (state_31573[(14)]);
var inst_31506 = (state_31573[(15)]);
var inst_31509 = (state_31573[(16)]);
var inst_31516 = cljs.core._nth(inst_31507,inst_31509);
var inst_31517 = cljs.core.async.muxch_STAR_(inst_31516);
var inst_31518 = cljs.core.async.close_BANG_(inst_31517);
var inst_31520 = (inst_31509 + (1));
var tmp31609 = inst_31508;
var tmp31610 = inst_31507;
var tmp31611 = inst_31506;
var inst_31506__$1 = tmp31611;
var inst_31507__$1 = tmp31610;
var inst_31508__$1 = tmp31609;
var inst_31509__$1 = inst_31520;
var state_31573__$1 = (function (){var statearr_31616 = state_31573;
(statearr_31616[(12)] = inst_31508__$1);

(statearr_31616[(14)] = inst_31507__$1);

(statearr_31616[(15)] = inst_31506__$1);

(statearr_31616[(17)] = inst_31518);

(statearr_31616[(16)] = inst_31509__$1);

return statearr_31616;
})();
var statearr_31617_32971 = state_31573__$1;
(statearr_31617_32971[(2)] = null);

(statearr_31617_32971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (18))){
var inst_31539 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31618_32972 = state_31573__$1;
(statearr_31618_32972[(2)] = inst_31539);

(statearr_31618_32972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (8))){
var inst_31508 = (state_31573[(12)]);
var inst_31509 = (state_31573[(16)]);
var inst_31511 = (inst_31509 < inst_31508);
var inst_31512 = inst_31511;
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31512)){
var statearr_31622_32973 = state_31573__$1;
(statearr_31622_32973[(1)] = (10));

} else {
var statearr_31623_32974 = state_31573__$1;
(statearr_31623_32974[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_31624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31624[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_31624[(1)] = (1));

return statearr_31624;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_31573){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_31573);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e31625){if((e31625 instanceof Object)){
var ex__29714__auto__ = e31625;
var statearr_31626_32975 = state_31573;
(statearr_31626_32975[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32976 = state_31573;
state_31573 = G__32976;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_31573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_31573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_31627 = f__29890__auto__();
(statearr_31627[(6)] = c__29889__auto___32924);

return statearr_31627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31643 = arguments.length;
switch (G__31643) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31677 = arguments.length;
switch (G__31677) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31679 = arguments.length;
switch (G__31679) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29889__auto___32984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_31723){
var state_val_31724 = (state_31723[(1)]);
if((state_val_31724 === (7))){
var state_31723__$1 = state_31723;
var statearr_31730_32985 = state_31723__$1;
(statearr_31730_32985[(2)] = null);

(statearr_31730_32985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (1))){
var state_31723__$1 = state_31723;
var statearr_31732_32986 = state_31723__$1;
(statearr_31732_32986[(2)] = null);

(statearr_31732_32986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (4))){
var inst_31686 = (state_31723[(7)]);
var inst_31688 = (inst_31686 < cnt);
var state_31723__$1 = state_31723;
if(cljs.core.truth_(inst_31688)){
var statearr_31734_32991 = state_31723__$1;
(statearr_31734_32991[(1)] = (6));

} else {
var statearr_31735_32992 = state_31723__$1;
(statearr_31735_32992[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (15))){
var inst_31719 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31736_32994 = state_31723__$1;
(statearr_31736_32994[(2)] = inst_31719);

(statearr_31736_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (13))){
var inst_31712 = cljs.core.async.close_BANG_(out);
var state_31723__$1 = state_31723;
var statearr_31739_32995 = state_31723__$1;
(statearr_31739_32995[(2)] = inst_31712);

(statearr_31739_32995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (6))){
var state_31723__$1 = state_31723;
var statearr_31740_32996 = state_31723__$1;
(statearr_31740_32996[(2)] = null);

(statearr_31740_32996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (3))){
var inst_31721 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31723__$1,inst_31721);
} else {
if((state_val_31724 === (12))){
var inst_31708 = (state_31723[(8)]);
var inst_31708__$1 = (state_31723[(2)]);
var inst_31709 = cljs.core.some(cljs.core.nil_QMARK_,inst_31708__$1);
var state_31723__$1 = (function (){var statearr_31742 = state_31723;
(statearr_31742[(8)] = inst_31708__$1);

return statearr_31742;
})();
if(cljs.core.truth_(inst_31709)){
var statearr_31744_32997 = state_31723__$1;
(statearr_31744_32997[(1)] = (13));

} else {
var statearr_31746_32998 = state_31723__$1;
(statearr_31746_32998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (2))){
var inst_31685 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31686 = (0);
var state_31723__$1 = (function (){var statearr_31747 = state_31723;
(statearr_31747[(9)] = inst_31685);

(statearr_31747[(7)] = inst_31686);

return statearr_31747;
})();
var statearr_31748_32999 = state_31723__$1;
(statearr_31748_32999[(2)] = null);

(statearr_31748_32999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (11))){
var inst_31686 = (state_31723[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31723,(10),Object,null,(9));
var inst_31695 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31686) : chs__$1.call(null,inst_31686));
var inst_31696 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31686) : done.call(null,inst_31686));
var inst_31697 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31695,inst_31696);
var state_31723__$1 = state_31723;
var statearr_31749_33001 = state_31723__$1;
(statearr_31749_33001[(2)] = inst_31697);


cljs.core.async.impl.ioc_helpers.process_exception(state_31723__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (9))){
var inst_31686 = (state_31723[(7)]);
var inst_31699 = (state_31723[(2)]);
var inst_31700 = (inst_31686 + (1));
var inst_31686__$1 = inst_31700;
var state_31723__$1 = (function (){var statearr_31751 = state_31723;
(statearr_31751[(10)] = inst_31699);

(statearr_31751[(7)] = inst_31686__$1);

return statearr_31751;
})();
var statearr_31752_33002 = state_31723__$1;
(statearr_31752_33002[(2)] = null);

(statearr_31752_33002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (5))){
var inst_31706 = (state_31723[(2)]);
var state_31723__$1 = (function (){var statearr_31753 = state_31723;
(statearr_31753[(11)] = inst_31706);

return statearr_31753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31723__$1,(12),dchan);
} else {
if((state_val_31724 === (14))){
var inst_31708 = (state_31723[(8)]);
var inst_31714 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31708);
var state_31723__$1 = state_31723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31723__$1,(16),out,inst_31714);
} else {
if((state_val_31724 === (16))){
var inst_31716 = (state_31723[(2)]);
var state_31723__$1 = (function (){var statearr_31757 = state_31723;
(statearr_31757[(12)] = inst_31716);

return statearr_31757;
})();
var statearr_31758_33007 = state_31723__$1;
(statearr_31758_33007[(2)] = null);

(statearr_31758_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (10))){
var inst_31690 = (state_31723[(2)]);
var inst_31691 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31723__$1 = (function (){var statearr_31759 = state_31723;
(statearr_31759[(13)] = inst_31690);

return statearr_31759;
})();
var statearr_31761_33008 = state_31723__$1;
(statearr_31761_33008[(2)] = inst_31691);


cljs.core.async.impl.ioc_helpers.process_exception(state_31723__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31724 === (8))){
var inst_31704 = (state_31723[(2)]);
var state_31723__$1 = state_31723;
var statearr_31762_33009 = state_31723__$1;
(statearr_31762_33009[(2)] = inst_31704);

(statearr_31762_33009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_31764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31764[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_31764[(1)] = (1));

return statearr_31764;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_31723){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_31723);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e31765){if((e31765 instanceof Object)){
var ex__29714__auto__ = e31765;
var statearr_31766_33010 = state_31723;
(statearr_31766_33010[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33011 = state_31723;
state_31723 = G__33011;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_31723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_31723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_31768 = f__29890__auto__();
(statearr_31768[(6)] = c__29889__auto___32984);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31771 = arguments.length;
switch (G__31771) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29889__auto___33013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_31804){
var state_val_31805 = (state_31804[(1)]);
if((state_val_31805 === (7))){
var inst_31784 = (state_31804[(7)]);
var inst_31783 = (state_31804[(8)]);
var inst_31783__$1 = (state_31804[(2)]);
var inst_31784__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31783__$1,(0),null);
var inst_31785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31783__$1,(1),null);
var inst_31786 = (inst_31784__$1 == null);
var state_31804__$1 = (function (){var statearr_31808 = state_31804;
(statearr_31808[(9)] = inst_31785);

(statearr_31808[(7)] = inst_31784__$1);

(statearr_31808[(8)] = inst_31783__$1);

return statearr_31808;
})();
if(cljs.core.truth_(inst_31786)){
var statearr_31809_33014 = state_31804__$1;
(statearr_31809_33014[(1)] = (8));

} else {
var statearr_31810_33015 = state_31804__$1;
(statearr_31810_33015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (1))){
var inst_31772 = cljs.core.vec(chs);
var inst_31773 = inst_31772;
var state_31804__$1 = (function (){var statearr_31812 = state_31804;
(statearr_31812[(10)] = inst_31773);

return statearr_31812;
})();
var statearr_31813_33016 = state_31804__$1;
(statearr_31813_33016[(2)] = null);

(statearr_31813_33016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (4))){
var inst_31773 = (state_31804[(10)]);
var state_31804__$1 = state_31804;
return cljs.core.async.ioc_alts_BANG_(state_31804__$1,(7),inst_31773);
} else {
if((state_val_31805 === (6))){
var inst_31800 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31815_33017 = state_31804__$1;
(statearr_31815_33017[(2)] = inst_31800);

(statearr_31815_33017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (3))){
var inst_31802 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31804__$1,inst_31802);
} else {
if((state_val_31805 === (2))){
var inst_31773 = (state_31804[(10)]);
var inst_31776 = cljs.core.count(inst_31773);
var inst_31777 = (inst_31776 > (0));
var state_31804__$1 = state_31804;
if(cljs.core.truth_(inst_31777)){
var statearr_31817_33018 = state_31804__$1;
(statearr_31817_33018[(1)] = (4));

} else {
var statearr_31818_33022 = state_31804__$1;
(statearr_31818_33022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (11))){
var inst_31773 = (state_31804[(10)]);
var inst_31793 = (state_31804[(2)]);
var tmp31816 = inst_31773;
var inst_31773__$1 = tmp31816;
var state_31804__$1 = (function (){var statearr_31819 = state_31804;
(statearr_31819[(10)] = inst_31773__$1);

(statearr_31819[(11)] = inst_31793);

return statearr_31819;
})();
var statearr_31820_33023 = state_31804__$1;
(statearr_31820_33023[(2)] = null);

(statearr_31820_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (9))){
var inst_31784 = (state_31804[(7)]);
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31804__$1,(11),out,inst_31784);
} else {
if((state_val_31805 === (5))){
var inst_31798 = cljs.core.async.close_BANG_(out);
var state_31804__$1 = state_31804;
var statearr_31827_33024 = state_31804__$1;
(statearr_31827_33024[(2)] = inst_31798);

(statearr_31827_33024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (10))){
var inst_31796 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31830_33025 = state_31804__$1;
(statearr_31830_33025[(2)] = inst_31796);

(statearr_31830_33025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (8))){
var inst_31773 = (state_31804[(10)]);
var inst_31785 = (state_31804[(9)]);
var inst_31784 = (state_31804[(7)]);
var inst_31783 = (state_31804[(8)]);
var inst_31788 = (function (){var cs = inst_31773;
var vec__31779 = inst_31783;
var v = inst_31784;
var c = inst_31785;
return (function (p1__31769_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31769_SHARP_);
});
})();
var inst_31789 = cljs.core.filterv(inst_31788,inst_31773);
var inst_31773__$1 = inst_31789;
var state_31804__$1 = (function (){var statearr_31835 = state_31804;
(statearr_31835[(10)] = inst_31773__$1);

return statearr_31835;
})();
var statearr_31838_33026 = state_31804__$1;
(statearr_31838_33026[(2)] = null);

(statearr_31838_33026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_31841 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31841[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_31841[(1)] = (1));

return statearr_31841;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_31804){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_31804);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e31844){if((e31844 instanceof Object)){
var ex__29714__auto__ = e31844;
var statearr_31846_33027 = state_31804;
(statearr_31846_33027[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33029 = state_31804;
state_31804 = G__33029;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_31804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_31804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_31847 = f__29890__auto__();
(statearr_31847[(6)] = c__29889__auto___33013);

return statearr_31847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31859 = arguments.length;
switch (G__31859) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29889__auto___33031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_31893){
var state_val_31894 = (state_31893[(1)]);
if((state_val_31894 === (7))){
var inst_31871 = (state_31893[(7)]);
var inst_31871__$1 = (state_31893[(2)]);
var inst_31872 = (inst_31871__$1 == null);
var inst_31873 = cljs.core.not(inst_31872);
var state_31893__$1 = (function (){var statearr_31898 = state_31893;
(statearr_31898[(7)] = inst_31871__$1);

return statearr_31898;
})();
if(inst_31873){
var statearr_31899_33036 = state_31893__$1;
(statearr_31899_33036[(1)] = (8));

} else {
var statearr_31900_33038 = state_31893__$1;
(statearr_31900_33038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (1))){
var inst_31866 = (0);
var state_31893__$1 = (function (){var statearr_31901 = state_31893;
(statearr_31901[(8)] = inst_31866);

return statearr_31901;
})();
var statearr_31902_33039 = state_31893__$1;
(statearr_31902_33039[(2)] = null);

(statearr_31902_33039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (4))){
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31893__$1,(7),ch);
} else {
if((state_val_31894 === (6))){
var inst_31888 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31903_33040 = state_31893__$1;
(statearr_31903_33040[(2)] = inst_31888);

(statearr_31903_33040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (3))){
var inst_31890 = (state_31893[(2)]);
var inst_31891 = cljs.core.async.close_BANG_(out);
var state_31893__$1 = (function (){var statearr_31904 = state_31893;
(statearr_31904[(9)] = inst_31890);

return statearr_31904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31893__$1,inst_31891);
} else {
if((state_val_31894 === (2))){
var inst_31866 = (state_31893[(8)]);
var inst_31868 = (inst_31866 < n);
var state_31893__$1 = state_31893;
if(cljs.core.truth_(inst_31868)){
var statearr_31905_33042 = state_31893__$1;
(statearr_31905_33042[(1)] = (4));

} else {
var statearr_31906_33043 = state_31893__$1;
(statearr_31906_33043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (11))){
var inst_31866 = (state_31893[(8)]);
var inst_31880 = (state_31893[(2)]);
var inst_31881 = (inst_31866 + (1));
var inst_31866__$1 = inst_31881;
var state_31893__$1 = (function (){var statearr_31907 = state_31893;
(statearr_31907[(10)] = inst_31880);

(statearr_31907[(8)] = inst_31866__$1);

return statearr_31907;
})();
var statearr_31912_33044 = state_31893__$1;
(statearr_31912_33044[(2)] = null);

(statearr_31912_33044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (9))){
var state_31893__$1 = state_31893;
var statearr_31914_33045 = state_31893__$1;
(statearr_31914_33045[(2)] = null);

(statearr_31914_33045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (5))){
var state_31893__$1 = state_31893;
var statearr_31918_33050 = state_31893__$1;
(statearr_31918_33050[(2)] = null);

(statearr_31918_33050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (10))){
var inst_31885 = (state_31893[(2)]);
var state_31893__$1 = state_31893;
var statearr_31919_33051 = state_31893__$1;
(statearr_31919_33051[(2)] = inst_31885);

(statearr_31919_33051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31894 === (8))){
var inst_31871 = (state_31893[(7)]);
var state_31893__$1 = state_31893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31893__$1,(11),out,inst_31871);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_31927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31927[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_31927[(1)] = (1));

return statearr_31927;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_31893){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_31893);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e31932){if((e31932 instanceof Object)){
var ex__29714__auto__ = e31932;
var statearr_31937_33052 = state_31893;
(statearr_31937_33052[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31932;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33053 = state_31893;
state_31893 = G__33053;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_31893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_31893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_31939 = f__29890__auto__();
(statearr_31939[(6)] = c__29889__auto___33031);

return statearr_31939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31946 = (function (f,ch,meta31947){
this.f = f;
this.ch = ch;
this.meta31947 = meta31947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31948,meta31947__$1){
var self__ = this;
var _31948__$1 = this;
return (new cljs.core.async.t_cljs$core$async31946(self__.f,self__.ch,meta31947__$1));
}));

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31948){
var self__ = this;
var _31948__$1 = this;
return self__.meta31947;
}));

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31957 = (function (f,ch,meta31947,_,fn1,meta31958){
this.f = f;
this.ch = ch;
this.meta31947 = meta31947;
this._ = _;
this.fn1 = fn1;
this.meta31958 = meta31958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31959,meta31958__$1){
var self__ = this;
var _31959__$1 = this;
return (new cljs.core.async.t_cljs$core$async31957(self__.f,self__.ch,self__.meta31947,self__._,self__.fn1,meta31958__$1));
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31959){
var self__ = this;
var _31959__$1 = this;
return self__.meta31958;
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31942_SHARP_){
var G__31969 = (((p1__31942_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31942_SHARP_) : self__.f.call(null,p1__31942_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31969) : f1.call(null,G__31969));
});
}));

(cljs.core.async.t_cljs$core$async31957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31947","meta31947",946884153,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31946","cljs.core.async/t_cljs$core$async31946",-678073808,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31958","meta31958",219323704,null)], null);
}));

(cljs.core.async.t_cljs$core$async31957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31957");

(cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31957.
 */
cljs.core.async.__GT_t_cljs$core$async31957 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31957(f__$1,ch__$1,meta31947__$1,___$2,fn1__$1,meta31958){
return (new cljs.core.async.t_cljs$core$async31957(f__$1,ch__$1,meta31947__$1,___$2,fn1__$1,meta31958));
});

}

return (new cljs.core.async.t_cljs$core$async31957(self__.f,self__.ch,self__.meta31947,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31980 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31980) : self__.f.call(null,G__31980));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31947","meta31947",946884153,null)], null);
}));

(cljs.core.async.t_cljs$core$async31946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31946");

(cljs.core.async.t_cljs$core$async31946.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31946.
 */
cljs.core.async.__GT_t_cljs$core$async31946 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31946(f__$1,ch__$1,meta31947){
return (new cljs.core.async.t_cljs$core$async31946(f__$1,ch__$1,meta31947));
});

}

return (new cljs.core.async.t_cljs$core$async31946(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31993 = (function (f,ch,meta31994){
this.f = f;
this.ch = ch;
this.meta31994 = meta31994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31995,meta31994__$1){
var self__ = this;
var _31995__$1 = this;
return (new cljs.core.async.t_cljs$core$async31993(self__.f,self__.ch,meta31994__$1));
}));

(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31995){
var self__ = this;
var _31995__$1 = this;
return self__.meta31994;
}));

(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31994","meta31994",1551699676,null)], null);
}));

(cljs.core.async.t_cljs$core$async31993.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31993");

(cljs.core.async.t_cljs$core$async31993.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31993");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31993.
 */
cljs.core.async.__GT_t_cljs$core$async31993 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31993(f__$1,ch__$1,meta31994){
return (new cljs.core.async.t_cljs$core$async31993(f__$1,ch__$1,meta31994));
});

}

return (new cljs.core.async.t_cljs$core$async31993(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32016 = (function (p,ch,meta32017){
this.p = p;
this.ch = ch;
this.meta32017 = meta32017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32018,meta32017__$1){
var self__ = this;
var _32018__$1 = this;
return (new cljs.core.async.t_cljs$core$async32016(self__.p,self__.ch,meta32017__$1));
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32018){
var self__ = this;
var _32018__$1 = this;
return self__.meta32017;
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32017","meta32017",-1381481008,null)], null);
}));

(cljs.core.async.t_cljs$core$async32016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32016");

(cljs.core.async.t_cljs$core$async32016.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32016.
 */
cljs.core.async.__GT_t_cljs$core$async32016 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32016(p__$1,ch__$1,meta32017){
return (new cljs.core.async.t_cljs$core$async32016(p__$1,ch__$1,meta32017));
});

}

return (new cljs.core.async.t_cljs$core$async32016(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32051 = arguments.length;
switch (G__32051) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29889__auto___33059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_32087){
var state_val_32088 = (state_32087[(1)]);
if((state_val_32088 === (7))){
var inst_32083 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32091_33060 = state_32087__$1;
(statearr_32091_33060[(2)] = inst_32083);

(statearr_32091_33060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (1))){
var state_32087__$1 = state_32087;
var statearr_32092_33065 = state_32087__$1;
(statearr_32092_33065[(2)] = null);

(statearr_32092_33065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (4))){
var inst_32065 = (state_32087[(7)]);
var inst_32065__$1 = (state_32087[(2)]);
var inst_32066 = (inst_32065__$1 == null);
var state_32087__$1 = (function (){var statearr_32093 = state_32087;
(statearr_32093[(7)] = inst_32065__$1);

return statearr_32093;
})();
if(cljs.core.truth_(inst_32066)){
var statearr_32094_33066 = state_32087__$1;
(statearr_32094_33066[(1)] = (5));

} else {
var statearr_32095_33067 = state_32087__$1;
(statearr_32095_33067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (6))){
var inst_32065 = (state_32087[(7)]);
var inst_32070 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32065) : p.call(null,inst_32065));
var state_32087__$1 = state_32087;
if(cljs.core.truth_(inst_32070)){
var statearr_32098_33068 = state_32087__$1;
(statearr_32098_33068[(1)] = (8));

} else {
var statearr_32100_33070 = state_32087__$1;
(statearr_32100_33070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (3))){
var inst_32085 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32087__$1,inst_32085);
} else {
if((state_val_32088 === (2))){
var state_32087__$1 = state_32087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32087__$1,(4),ch);
} else {
if((state_val_32088 === (11))){
var inst_32073 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32107_33074 = state_32087__$1;
(statearr_32107_33074[(2)] = inst_32073);

(statearr_32107_33074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (9))){
var state_32087__$1 = state_32087;
var statearr_32110_33075 = state_32087__$1;
(statearr_32110_33075[(2)] = null);

(statearr_32110_33075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (5))){
var inst_32068 = cljs.core.async.close_BANG_(out);
var state_32087__$1 = state_32087;
var statearr_32111_33076 = state_32087__$1;
(statearr_32111_33076[(2)] = inst_32068);

(statearr_32111_33076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (10))){
var inst_32076 = (state_32087[(2)]);
var state_32087__$1 = (function (){var statearr_32112 = state_32087;
(statearr_32112[(8)] = inst_32076);

return statearr_32112;
})();
var statearr_32113_33077 = state_32087__$1;
(statearr_32113_33077[(2)] = null);

(statearr_32113_33077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (8))){
var inst_32065 = (state_32087[(7)]);
var state_32087__$1 = state_32087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32087__$1,(11),out,inst_32065);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_32116 = [null,null,null,null,null,null,null,null,null];
(statearr_32116[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_32116[(1)] = (1));

return statearr_32116;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_32087){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_32087);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e32117){if((e32117 instanceof Object)){
var ex__29714__auto__ = e32117;
var statearr_32118_33080 = state_32087;
(statearr_32118_33080[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33081 = state_32087;
state_32087 = G__33081;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_32087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_32087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_32119 = f__29890__auto__();
(statearr_32119[(6)] = c__29889__auto___33059);

return statearr_32119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32121 = arguments.length;
switch (G__32121) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_32187){
var state_val_32188 = (state_32187[(1)]);
if((state_val_32188 === (7))){
var inst_32183 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32196_33083 = state_32187__$1;
(statearr_32196_33083[(2)] = inst_32183);

(statearr_32196_33083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (20))){
var inst_32151 = (state_32187[(7)]);
var inst_32162 = (state_32187[(2)]);
var inst_32163 = cljs.core.next(inst_32151);
var inst_32136 = inst_32163;
var inst_32137 = null;
var inst_32138 = (0);
var inst_32139 = (0);
var state_32187__$1 = (function (){var statearr_32197 = state_32187;
(statearr_32197[(8)] = inst_32138);

(statearr_32197[(9)] = inst_32137);

(statearr_32197[(10)] = inst_32136);

(statearr_32197[(11)] = inst_32162);

(statearr_32197[(12)] = inst_32139);

return statearr_32197;
})();
var statearr_32202_33084 = state_32187__$1;
(statearr_32202_33084[(2)] = null);

(statearr_32202_33084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (1))){
var state_32187__$1 = state_32187;
var statearr_32207_33085 = state_32187__$1;
(statearr_32207_33085[(2)] = null);

(statearr_32207_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (4))){
var inst_32125 = (state_32187[(13)]);
var inst_32125__$1 = (state_32187[(2)]);
var inst_32126 = (inst_32125__$1 == null);
var state_32187__$1 = (function (){var statearr_32212 = state_32187;
(statearr_32212[(13)] = inst_32125__$1);

return statearr_32212;
})();
if(cljs.core.truth_(inst_32126)){
var statearr_32213_33086 = state_32187__$1;
(statearr_32213_33086[(1)] = (5));

} else {
var statearr_32214_33087 = state_32187__$1;
(statearr_32214_33087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (15))){
var state_32187__$1 = state_32187;
var statearr_32223_33088 = state_32187__$1;
(statearr_32223_33088[(2)] = null);

(statearr_32223_33088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (21))){
var state_32187__$1 = state_32187;
var statearr_32228_33089 = state_32187__$1;
(statearr_32228_33089[(2)] = null);

(statearr_32228_33089[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (13))){
var inst_32138 = (state_32187[(8)]);
var inst_32137 = (state_32187[(9)]);
var inst_32136 = (state_32187[(10)]);
var inst_32139 = (state_32187[(12)]);
var inst_32147 = (state_32187[(2)]);
var inst_32148 = (inst_32139 + (1));
var tmp32220 = inst_32138;
var tmp32221 = inst_32137;
var tmp32222 = inst_32136;
var inst_32136__$1 = tmp32222;
var inst_32137__$1 = tmp32221;
var inst_32138__$1 = tmp32220;
var inst_32139__$1 = inst_32148;
var state_32187__$1 = (function (){var statearr_32234 = state_32187;
(statearr_32234[(8)] = inst_32138__$1);

(statearr_32234[(9)] = inst_32137__$1);

(statearr_32234[(10)] = inst_32136__$1);

(statearr_32234[(14)] = inst_32147);

(statearr_32234[(12)] = inst_32139__$1);

return statearr_32234;
})();
var statearr_32235_33090 = state_32187__$1;
(statearr_32235_33090[(2)] = null);

(statearr_32235_33090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (22))){
var state_32187__$1 = state_32187;
var statearr_32236_33091 = state_32187__$1;
(statearr_32236_33091[(2)] = null);

(statearr_32236_33091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (6))){
var inst_32125 = (state_32187[(13)]);
var inst_32134 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32125) : f.call(null,inst_32125));
var inst_32135 = cljs.core.seq(inst_32134);
var inst_32136 = inst_32135;
var inst_32137 = null;
var inst_32138 = (0);
var inst_32139 = (0);
var state_32187__$1 = (function (){var statearr_32237 = state_32187;
(statearr_32237[(8)] = inst_32138);

(statearr_32237[(9)] = inst_32137);

(statearr_32237[(10)] = inst_32136);

(statearr_32237[(12)] = inst_32139);

return statearr_32237;
})();
var statearr_32238_33092 = state_32187__$1;
(statearr_32238_33092[(2)] = null);

(statearr_32238_33092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (17))){
var inst_32151 = (state_32187[(7)]);
var inst_32155 = cljs.core.chunk_first(inst_32151);
var inst_32156 = cljs.core.chunk_rest(inst_32151);
var inst_32157 = cljs.core.count(inst_32155);
var inst_32136 = inst_32156;
var inst_32137 = inst_32155;
var inst_32138 = inst_32157;
var inst_32139 = (0);
var state_32187__$1 = (function (){var statearr_32239 = state_32187;
(statearr_32239[(8)] = inst_32138);

(statearr_32239[(9)] = inst_32137);

(statearr_32239[(10)] = inst_32136);

(statearr_32239[(12)] = inst_32139);

return statearr_32239;
})();
var statearr_32240_33093 = state_32187__$1;
(statearr_32240_33093[(2)] = null);

(statearr_32240_33093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (3))){
var inst_32185 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32187__$1,inst_32185);
} else {
if((state_val_32188 === (12))){
var inst_32171 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32243_33094 = state_32187__$1;
(statearr_32243_33094[(2)] = inst_32171);

(statearr_32243_33094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (2))){
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32187__$1,(4),in$);
} else {
if((state_val_32188 === (23))){
var inst_32181 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32245_33095 = state_32187__$1;
(statearr_32245_33095[(2)] = inst_32181);

(statearr_32245_33095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (19))){
var inst_32166 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32246_33096 = state_32187__$1;
(statearr_32246_33096[(2)] = inst_32166);

(statearr_32246_33096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (11))){
var inst_32136 = (state_32187[(10)]);
var inst_32151 = (state_32187[(7)]);
var inst_32151__$1 = cljs.core.seq(inst_32136);
var state_32187__$1 = (function (){var statearr_32247 = state_32187;
(statearr_32247[(7)] = inst_32151__$1);

return statearr_32247;
})();
if(inst_32151__$1){
var statearr_32248_33097 = state_32187__$1;
(statearr_32248_33097[(1)] = (14));

} else {
var statearr_32249_33098 = state_32187__$1;
(statearr_32249_33098[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (9))){
var inst_32173 = (state_32187[(2)]);
var inst_32174 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32187__$1 = (function (){var statearr_32250 = state_32187;
(statearr_32250[(15)] = inst_32173);

return statearr_32250;
})();
if(cljs.core.truth_(inst_32174)){
var statearr_32252_33099 = state_32187__$1;
(statearr_32252_33099[(1)] = (21));

} else {
var statearr_32253_33100 = state_32187__$1;
(statearr_32253_33100[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (5))){
var inst_32128 = cljs.core.async.close_BANG_(out);
var state_32187__$1 = state_32187;
var statearr_32254_33101 = state_32187__$1;
(statearr_32254_33101[(2)] = inst_32128);

(statearr_32254_33101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (14))){
var inst_32151 = (state_32187[(7)]);
var inst_32153 = cljs.core.chunked_seq_QMARK_(inst_32151);
var state_32187__$1 = state_32187;
if(inst_32153){
var statearr_32255_33102 = state_32187__$1;
(statearr_32255_33102[(1)] = (17));

} else {
var statearr_32256_33103 = state_32187__$1;
(statearr_32256_33103[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (16))){
var inst_32169 = (state_32187[(2)]);
var state_32187__$1 = state_32187;
var statearr_32257_33104 = state_32187__$1;
(statearr_32257_33104[(2)] = inst_32169);

(statearr_32257_33104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32188 === (10))){
var inst_32137 = (state_32187[(9)]);
var inst_32139 = (state_32187[(12)]);
var inst_32144 = cljs.core._nth(inst_32137,inst_32139);
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32187__$1,(13),out,inst_32144);
} else {
if((state_val_32188 === (18))){
var inst_32151 = (state_32187[(7)]);
var inst_32160 = cljs.core.first(inst_32151);
var state_32187__$1 = state_32187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32187__$1,(20),out,inst_32160);
} else {
if((state_val_32188 === (8))){
var inst_32138 = (state_32187[(8)]);
var inst_32139 = (state_32187[(12)]);
var inst_32141 = (inst_32139 < inst_32138);
var inst_32142 = inst_32141;
var state_32187__$1 = state_32187;
if(cljs.core.truth_(inst_32142)){
var statearr_32258_33105 = state_32187__$1;
(statearr_32258_33105[(1)] = (10));

} else {
var statearr_32259_33106 = state_32187__$1;
(statearr_32259_33106[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29711__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29711__auto____0 = (function (){
var statearr_32260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32260[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29711__auto__);

(statearr_32260[(1)] = (1));

return statearr_32260;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29711__auto____1 = (function (state_32187){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_32187);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e32261){if((e32261 instanceof Object)){
var ex__29714__auto__ = e32261;
var statearr_32262_33107 = state_32187;
(statearr_32262_33107[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33108 = state_32187;
state_32187 = G__33108;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29711__auto__ = function(state_32187){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29711__auto____1.call(this,state_32187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29711__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29711__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_32263 = f__29890__auto__();
(statearr_32263[(6)] = c__29889__auto__);

return statearr_32263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));

return c__29889__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32265 = arguments.length;
switch (G__32265) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32267 = arguments.length;
switch (G__32267) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32269 = arguments.length;
switch (G__32269) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29889__auto___33112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_32293){
var state_val_32294 = (state_32293[(1)]);
if((state_val_32294 === (7))){
var inst_32288 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
var statearr_32295_33116 = state_32293__$1;
(statearr_32295_33116[(2)] = inst_32288);

(statearr_32295_33116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (1))){
var inst_32270 = null;
var state_32293__$1 = (function (){var statearr_32296 = state_32293;
(statearr_32296[(7)] = inst_32270);

return statearr_32296;
})();
var statearr_32297_33117 = state_32293__$1;
(statearr_32297_33117[(2)] = null);

(statearr_32297_33117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (4))){
var inst_32273 = (state_32293[(8)]);
var inst_32273__$1 = (state_32293[(2)]);
var inst_32274 = (inst_32273__$1 == null);
var inst_32275 = cljs.core.not(inst_32274);
var state_32293__$1 = (function (){var statearr_32298 = state_32293;
(statearr_32298[(8)] = inst_32273__$1);

return statearr_32298;
})();
if(inst_32275){
var statearr_32299_33118 = state_32293__$1;
(statearr_32299_33118[(1)] = (5));

} else {
var statearr_32300_33119 = state_32293__$1;
(statearr_32300_33119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (6))){
var state_32293__$1 = state_32293;
var statearr_32301_33124 = state_32293__$1;
(statearr_32301_33124[(2)] = null);

(statearr_32301_33124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (3))){
var inst_32290 = (state_32293[(2)]);
var inst_32291 = cljs.core.async.close_BANG_(out);
var state_32293__$1 = (function (){var statearr_32302 = state_32293;
(statearr_32302[(9)] = inst_32290);

return statearr_32302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32293__$1,inst_32291);
} else {
if((state_val_32294 === (2))){
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32293__$1,(4),ch);
} else {
if((state_val_32294 === (11))){
var inst_32273 = (state_32293[(8)]);
var inst_32282 = (state_32293[(2)]);
var inst_32270 = inst_32273;
var state_32293__$1 = (function (){var statearr_32303 = state_32293;
(statearr_32303[(7)] = inst_32270);

(statearr_32303[(10)] = inst_32282);

return statearr_32303;
})();
var statearr_32304_33128 = state_32293__$1;
(statearr_32304_33128[(2)] = null);

(statearr_32304_33128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (9))){
var inst_32273 = (state_32293[(8)]);
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32293__$1,(11),out,inst_32273);
} else {
if((state_val_32294 === (5))){
var inst_32270 = (state_32293[(7)]);
var inst_32273 = (state_32293[(8)]);
var inst_32277 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32273,inst_32270);
var state_32293__$1 = state_32293;
if(inst_32277){
var statearr_32306_33129 = state_32293__$1;
(statearr_32306_33129[(1)] = (8));

} else {
var statearr_32307_33130 = state_32293__$1;
(statearr_32307_33130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (10))){
var inst_32285 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
var statearr_32308_33131 = state_32293__$1;
(statearr_32308_33131[(2)] = inst_32285);

(statearr_32308_33131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (8))){
var inst_32270 = (state_32293[(7)]);
var tmp32305 = inst_32270;
var inst_32270__$1 = tmp32305;
var state_32293__$1 = (function (){var statearr_32309 = state_32293;
(statearr_32309[(7)] = inst_32270__$1);

return statearr_32309;
})();
var statearr_32310_33132 = state_32293__$1;
(statearr_32310_33132[(2)] = null);

(statearr_32310_33132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_32311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32311[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_32311[(1)] = (1));

return statearr_32311;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_32293){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_32293);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e32312){if((e32312 instanceof Object)){
var ex__29714__auto__ = e32312;
var statearr_32313_33136 = state_32293;
(statearr_32313_33136[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33140 = state_32293;
state_32293 = G__33140;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_32293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_32293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_32314 = f__29890__auto__();
(statearr_32314[(6)] = c__29889__auto___33112);

return statearr_32314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32316 = arguments.length;
switch (G__32316) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29889__auto___33145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_32354){
var state_val_32355 = (state_32354[(1)]);
if((state_val_32355 === (7))){
var inst_32350 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32356_33146 = state_32354__$1;
(statearr_32356_33146[(2)] = inst_32350);

(statearr_32356_33146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (1))){
var inst_32317 = (new Array(n));
var inst_32318 = inst_32317;
var inst_32319 = (0);
var state_32354__$1 = (function (){var statearr_32357 = state_32354;
(statearr_32357[(7)] = inst_32319);

(statearr_32357[(8)] = inst_32318);

return statearr_32357;
})();
var statearr_32358_33147 = state_32354__$1;
(statearr_32358_33147[(2)] = null);

(statearr_32358_33147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (4))){
var inst_32322 = (state_32354[(9)]);
var inst_32322__$1 = (state_32354[(2)]);
var inst_32323 = (inst_32322__$1 == null);
var inst_32324 = cljs.core.not(inst_32323);
var state_32354__$1 = (function (){var statearr_32359 = state_32354;
(statearr_32359[(9)] = inst_32322__$1);

return statearr_32359;
})();
if(inst_32324){
var statearr_32360_33148 = state_32354__$1;
(statearr_32360_33148[(1)] = (5));

} else {
var statearr_32361_33150 = state_32354__$1;
(statearr_32361_33150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (15))){
var inst_32344 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32362_33151 = state_32354__$1;
(statearr_32362_33151[(2)] = inst_32344);

(statearr_32362_33151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (13))){
var state_32354__$1 = state_32354;
var statearr_32363_33152 = state_32354__$1;
(statearr_32363_33152[(2)] = null);

(statearr_32363_33152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (6))){
var inst_32319 = (state_32354[(7)]);
var inst_32340 = (inst_32319 > (0));
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32340)){
var statearr_32364_33153 = state_32354__$1;
(statearr_32364_33153[(1)] = (12));

} else {
var statearr_32365_33154 = state_32354__$1;
(statearr_32365_33154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (3))){
var inst_32352 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32354__$1,inst_32352);
} else {
if((state_val_32355 === (12))){
var inst_32318 = (state_32354[(8)]);
var inst_32342 = cljs.core.vec(inst_32318);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32354__$1,(15),out,inst_32342);
} else {
if((state_val_32355 === (2))){
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32354__$1,(4),ch);
} else {
if((state_val_32355 === (11))){
var inst_32334 = (state_32354[(2)]);
var inst_32335 = (new Array(n));
var inst_32318 = inst_32335;
var inst_32319 = (0);
var state_32354__$1 = (function (){var statearr_32366 = state_32354;
(statearr_32366[(7)] = inst_32319);

(statearr_32366[(8)] = inst_32318);

(statearr_32366[(10)] = inst_32334);

return statearr_32366;
})();
var statearr_32367_33164 = state_32354__$1;
(statearr_32367_33164[(2)] = null);

(statearr_32367_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (9))){
var inst_32318 = (state_32354[(8)]);
var inst_32332 = cljs.core.vec(inst_32318);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32354__$1,(11),out,inst_32332);
} else {
if((state_val_32355 === (5))){
var inst_32319 = (state_32354[(7)]);
var inst_32327 = (state_32354[(11)]);
var inst_32318 = (state_32354[(8)]);
var inst_32322 = (state_32354[(9)]);
var inst_32326 = (inst_32318[inst_32319] = inst_32322);
var inst_32327__$1 = (inst_32319 + (1));
var inst_32328 = (inst_32327__$1 < n);
var state_32354__$1 = (function (){var statearr_32368 = state_32354;
(statearr_32368[(11)] = inst_32327__$1);

(statearr_32368[(12)] = inst_32326);

return statearr_32368;
})();
if(cljs.core.truth_(inst_32328)){
var statearr_32369_33171 = state_32354__$1;
(statearr_32369_33171[(1)] = (8));

} else {
var statearr_32370_33172 = state_32354__$1;
(statearr_32370_33172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (14))){
var inst_32347 = (state_32354[(2)]);
var inst_32348 = cljs.core.async.close_BANG_(out);
var state_32354__$1 = (function (){var statearr_32372 = state_32354;
(statearr_32372[(13)] = inst_32347);

return statearr_32372;
})();
var statearr_32373_33173 = state_32354__$1;
(statearr_32373_33173[(2)] = inst_32348);

(statearr_32373_33173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (10))){
var inst_32338 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32374_33174 = state_32354__$1;
(statearr_32374_33174[(2)] = inst_32338);

(statearr_32374_33174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (8))){
var inst_32327 = (state_32354[(11)]);
var inst_32318 = (state_32354[(8)]);
var tmp32371 = inst_32318;
var inst_32318__$1 = tmp32371;
var inst_32319 = inst_32327;
var state_32354__$1 = (function (){var statearr_32375 = state_32354;
(statearr_32375[(7)] = inst_32319);

(statearr_32375[(8)] = inst_32318__$1);

return statearr_32375;
})();
var statearr_32376_33175 = state_32354__$1;
(statearr_32376_33175[(2)] = null);

(statearr_32376_33175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_32377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32377[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_32377[(1)] = (1));

return statearr_32377;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_32354){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_32354);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e32378){if((e32378 instanceof Object)){
var ex__29714__auto__ = e32378;
var statearr_32379_33176 = state_32354;
(statearr_32379_33176[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33177 = state_32354;
state_32354 = G__33177;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_32354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_32354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_32380 = f__29890__auto__();
(statearr_32380[(6)] = c__29889__auto___33145);

return statearr_32380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32382 = arguments.length;
switch (G__32382) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29889__auto___33185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29890__auto__ = (function (){var switch__29710__auto__ = (function (state_32424){
var state_val_32425 = (state_32424[(1)]);
if((state_val_32425 === (7))){
var inst_32420 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32426_33186 = state_32424__$1;
(statearr_32426_33186[(2)] = inst_32420);

(statearr_32426_33186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (1))){
var inst_32383 = [];
var inst_32384 = inst_32383;
var inst_32385 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32424__$1 = (function (){var statearr_32427 = state_32424;
(statearr_32427[(7)] = inst_32385);

(statearr_32427[(8)] = inst_32384);

return statearr_32427;
})();
var statearr_32428_33187 = state_32424__$1;
(statearr_32428_33187[(2)] = null);

(statearr_32428_33187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (4))){
var inst_32388 = (state_32424[(9)]);
var inst_32388__$1 = (state_32424[(2)]);
var inst_32389 = (inst_32388__$1 == null);
var inst_32390 = cljs.core.not(inst_32389);
var state_32424__$1 = (function (){var statearr_32429 = state_32424;
(statearr_32429[(9)] = inst_32388__$1);

return statearr_32429;
})();
if(inst_32390){
var statearr_32430_33188 = state_32424__$1;
(statearr_32430_33188[(1)] = (5));

} else {
var statearr_32431_33189 = state_32424__$1;
(statearr_32431_33189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (15))){
var inst_32414 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32432_33190 = state_32424__$1;
(statearr_32432_33190[(2)] = inst_32414);

(statearr_32432_33190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (13))){
var state_32424__$1 = state_32424;
var statearr_32433_33191 = state_32424__$1;
(statearr_32433_33191[(2)] = null);

(statearr_32433_33191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (6))){
var inst_32384 = (state_32424[(8)]);
var inst_32409 = inst_32384.length;
var inst_32410 = (inst_32409 > (0));
var state_32424__$1 = state_32424;
if(cljs.core.truth_(inst_32410)){
var statearr_32434_33192 = state_32424__$1;
(statearr_32434_33192[(1)] = (12));

} else {
var statearr_32435_33193 = state_32424__$1;
(statearr_32435_33193[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (3))){
var inst_32422 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32424__$1,inst_32422);
} else {
if((state_val_32425 === (12))){
var inst_32384 = (state_32424[(8)]);
var inst_32412 = cljs.core.vec(inst_32384);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32424__$1,(15),out,inst_32412);
} else {
if((state_val_32425 === (2))){
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32424__$1,(4),ch);
} else {
if((state_val_32425 === (11))){
var inst_32388 = (state_32424[(9)]);
var inst_32392 = (state_32424[(10)]);
var inst_32402 = (state_32424[(2)]);
var inst_32403 = [];
var inst_32404 = inst_32403.push(inst_32388);
var inst_32384 = inst_32403;
var inst_32385 = inst_32392;
var state_32424__$1 = (function (){var statearr_32436 = state_32424;
(statearr_32436[(7)] = inst_32385);

(statearr_32436[(11)] = inst_32404);

(statearr_32436[(12)] = inst_32402);

(statearr_32436[(8)] = inst_32384);

return statearr_32436;
})();
var statearr_32437_33200 = state_32424__$1;
(statearr_32437_33200[(2)] = null);

(statearr_32437_33200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (9))){
var inst_32384 = (state_32424[(8)]);
var inst_32400 = cljs.core.vec(inst_32384);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32424__$1,(11),out,inst_32400);
} else {
if((state_val_32425 === (5))){
var inst_32388 = (state_32424[(9)]);
var inst_32385 = (state_32424[(7)]);
var inst_32392 = (state_32424[(10)]);
var inst_32392__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32388) : f.call(null,inst_32388));
var inst_32393 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32392__$1,inst_32385);
var inst_32394 = cljs.core.keyword_identical_QMARK_(inst_32385,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32395 = ((inst_32393) || (inst_32394));
var state_32424__$1 = (function (){var statearr_32438 = state_32424;
(statearr_32438[(10)] = inst_32392__$1);

return statearr_32438;
})();
if(cljs.core.truth_(inst_32395)){
var statearr_32439_33201 = state_32424__$1;
(statearr_32439_33201[(1)] = (8));

} else {
var statearr_32440_33202 = state_32424__$1;
(statearr_32440_33202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (14))){
var inst_32417 = (state_32424[(2)]);
var inst_32418 = cljs.core.async.close_BANG_(out);
var state_32424__$1 = (function (){var statearr_32442 = state_32424;
(statearr_32442[(13)] = inst_32417);

return statearr_32442;
})();
var statearr_32443_33203 = state_32424__$1;
(statearr_32443_33203[(2)] = inst_32418);

(statearr_32443_33203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (10))){
var inst_32407 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32444_33204 = state_32424__$1;
(statearr_32444_33204[(2)] = inst_32407);

(statearr_32444_33204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (8))){
var inst_32388 = (state_32424[(9)]);
var inst_32392 = (state_32424[(10)]);
var inst_32384 = (state_32424[(8)]);
var inst_32397 = inst_32384.push(inst_32388);
var tmp32441 = inst_32384;
var inst_32384__$1 = tmp32441;
var inst_32385 = inst_32392;
var state_32424__$1 = (function (){var statearr_32445 = state_32424;
(statearr_32445[(14)] = inst_32397);

(statearr_32445[(7)] = inst_32385);

(statearr_32445[(8)] = inst_32384__$1);

return statearr_32445;
})();
var statearr_32446_33205 = state_32424__$1;
(statearr_32446_33205[(2)] = null);

(statearr_32446_33205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29711__auto__ = null;
var cljs$core$async$state_machine__29711__auto____0 = (function (){
var statearr_32447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32447[(0)] = cljs$core$async$state_machine__29711__auto__);

(statearr_32447[(1)] = (1));

return statearr_32447;
});
var cljs$core$async$state_machine__29711__auto____1 = (function (state_32424){
while(true){
var ret_value__29712__auto__ = (function (){try{while(true){
var result__29713__auto__ = switch__29710__auto__(state_32424);
if(cljs.core.keyword_identical_QMARK_(result__29713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29713__auto__;
}
break;
}
}catch (e32448){if((e32448 instanceof Object)){
var ex__29714__auto__ = e32448;
var statearr_32449_33206 = state_32424;
(statearr_32449_33206[(5)] = ex__29714__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33213 = state_32424;
state_32424 = G__33213;
continue;
} else {
return ret_value__29712__auto__;
}
break;
}
});
cljs$core$async$state_machine__29711__auto__ = function(state_32424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29711__auto____1.call(this,state_32424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29711__auto____0;
cljs$core$async$state_machine__29711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29711__auto____1;
return cljs$core$async$state_machine__29711__auto__;
})()
})();
var state__29891__auto__ = (function (){var statearr_32450 = f__29890__auto__();
(statearr_32450[(6)] = c__29889__auto___33185);

return statearr_32450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29891__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
