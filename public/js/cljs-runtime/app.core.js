goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.hello');
/**
 * Render the toplevel component for this app.
 */
app.core.render = (function app$core$render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.hello], null),document.getElementById("app"));
});
/**
 * Run application startup logic.
 */
app.core.main = (function app$core$main(){
return app.core.render();
});
goog.exportSymbol('app.core.main', app.core.main);

//# sourceMappingURL=app.core.js.map
