goog.provide('app.hello');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
var module$node_modules$incognito_js$build$web$module$index=shadow.js.require("module$node_modules$incognito_js$build$web$module$index", {});
var module$node_modules$papp_sdk$dist$papp_sdk_min=shadow.js.require("module$node_modules$papp_sdk$dist$papp_sdk_min", {});
module$node_modules$incognito_js$build$web$module$index.goServices.implementGoMethodUseWasm();
app.hello.wallet = (new module$node_modules$incognito_js$build$web$module$index.WalletInstance());
goog.exportSymbol('app.hello.wallet', app.hello.wallet);
console.log(module$node_modules$papp_sdk$dist$papp_sdk_min);
app.hello.wallets = (function app$hello$wallets(state){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"pApp Wallet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Wallet with SDK"], null),(function (){var temp__5733__auto__ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(temp__5733__auto__)){
var accounts = temp__5733__auto__;
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (account){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Name: ",account.name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Your generated PRV address: ",account.nativeToken.accountKeySet.publicKeyCheckEncode], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Validator key: ",account.nativeToken.accountKeySet.validatorKey], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Others: ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),id], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(account.privacyTokenIds))], null)], null);
}),accounts));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"empty"], null);
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Generate wallet",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.hello.wallet.init("my-passphrase","TEST-WALLET").then((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"accounts","accounts",-935308676),app.hello.wallet.masterAccount.getAccounts());
}));
})], null)], null)], null);
});
app.hello.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.hello.hello = (function app$hello$hello(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hello anonymous!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.hello.wallets,app.hello.state], null)], null);
});

//# sourceMappingURL=app.hello.js.map
