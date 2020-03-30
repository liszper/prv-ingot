(ns app.hello
  (:require 
    [reagent.core :as r]
    [clojure.core.async :as async]
    ["incognito-js" :as incognito-js]
    ["papp-sdk" :as papp]
    ))

(incognito-js/goServices.implementGoMethodUseWasm)
(def ^:export wallet (incognito-js/WalletInstance.))

(js/console.log papp)

;(papp/start
;  (clj->js {})
;  (fn [error sdk]
;    (if error
;      (js/console.log "pApp failed!")
;      (js/console.log "pApp suceeded!")
;      )))

(defn wallets [state]
  [:div
   [:h3 "pApp Wallet"]

   [:h3 "Wallet with SDK"]
   (if-let [accounts (js->clj (:accounts @state))]
     (doall
     (map
     (fn [account]
       [:div
        [:h4 "Name: "(-> account .-name)]
        [:h4 "Your generated PRV address: "(-> account .-nativeToken .-accountKeySet .-publicKeyCheckEncode)]
        [:h4 "Validator key: "(-> account .-nativeToken .-accountKeySet .-validatorKey)]
        ;[:h4 "Balance: "(-> account .-nativeToken (.getAvaiableBalance)) " PRV"]
        [:div "Others: "
         (map
           (fn [id]
             [:p id])
           (js->clj (-> account .-privacyTokenIds))
           )
         ]
        ])
     accounts 
     ))
     [:h4 "empty"]
     )
   [:br]
   [:input {:type "button" :value "Generate wallet"
            :on-click #(do
                         (.then
                           (.init wallet "my-passphrase" "TEST-WALLET")
                           (fn [] 
                             (swap! state assoc :accounts (.getAccounts (.-masterAccount wallet)))))
                         )}]
   ;[:input {:type "button" :value "Follow pBTC"
   ;         :on-click #(do
   ;                      (.followTokenById
   ;                        (first (js->clj (.getAccounts (.-masterAccount wallet))))
   ;                        "b832e5d3b1f01a4f0623f7fe91d6673461e1f5d37d91fe78c5c2e6183ff39696")
   ;                      )}]
   
   ])

(def state (r/atom {}))

(defn hello []
  [:<>
   [:p "Hello anonymous!"]
   [wallets state]])
