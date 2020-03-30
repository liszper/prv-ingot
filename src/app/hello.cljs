(ns app.hello
  (:require 
    [reagent.core :as r]
    [clojure.core.async :as async]
    ["incognito-js" :as incognito-js]
    ["papp-sdk" :as papp]
    [async-await.core :refer [async await]]
    ))

(def state (r/atom {}))

(async
  (let []
    (await (incognito-js/goServices.implementGoMethodUseWasm))
    (swap! state assoc :wasm-ready? true)))
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
   [:p "WASM ready? "(if (:wasm-ready? @state) "true" "false (please be patient, it takes a few minutes at the first time)")]
   ;[:h3 "pApp Wallet"]

   [:h3 "Wallet with SDK v2"]
   (if-let [accounts (js->clj (:accounts @state))]
     (doall
     (map
     (fn [account]
       [:div
        [:h4 "Name: "(-> account .-name)]
        [:h4 "Your generated PRV address: "(-> account .-nativeToken .-accountKeySet .-publicKeyCheckEncode)]
        [:h4 "Validator key: "(-> account .-nativeToken .-accountKeySet .-validatorKey)]
        ;[:h4 "Balance: "(-> account .-nativeToken (.getAvaiableBalance)) " PRV"]
        ;[:div "Others: "
        ; (map
        ;   (fn [id]
        ;     [:p id])
        ;   (js->clj (-> account .-privacyTokenIds))
        ;   )
        ; ]
        ])
     accounts 
     ))
     [:p "empty"]
     )
   [:br]
   [:input 
    (merge
      {:type "button" :value "Generate wallet"
       :on-click #(do
                    (.then
                      (.init wallet "my-passphrase" "TEST-WALLET")
                      (fn [] 
                        (swap! state assoc :accounts (.getAccounts (.-masterAccount wallet)))))
                    )}
      (when-not (:wasm-ready? @state)
        {:disabled "disabled"}
        )
      )]

   ;[:input {:type "button" :value "Follow pBTC"
   ;         :on-click #(do
   ;                      (.followTokenById
   ;                        (first (js->clj (.getAccounts (.-masterAccount wallet))))
   ;                        "b832e5d3b1f01a4f0623f7fe91d6673461e1f5d37d91fe78c5c2e6183ff39696")
   ;                      )}]
   
   ])

(defn hello []
  [:<>
   [wallets state]])
