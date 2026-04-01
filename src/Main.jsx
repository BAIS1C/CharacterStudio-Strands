// Web3ReactProvider STUBBED — blockchain disabled for demo
// Original: import { Web3Provider } from "@ethersproject/providers"
// Original: import { Web3ReactProvider } from "@web3-react/core"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { AudioProvider } from "./context/AudioContext"

import { AccountProvider } from "./context/AccountContext"
import { SceneProvider } from "./context/SceneContext"
import { ViewProvider } from "./context/ViewContext"

import { SoundProvider } from "./context/SoundContext"

// import i18n (needs to be bundled ;))
import "./lib/localization/i18n"

import App from "./App"
import { LanguageProvider } from "./context/LanguageContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AccountProvider>
      <LanguageProvider>
        <AudioProvider>
          <ViewProvider>
            <SceneProvider>
              <SoundProvider>
                <Suspense>
                  <App />
                </Suspense>
              </SoundProvider>
            </SceneProvider>
          </ViewProvider>
        </AudioProvider>
      </LanguageProvider>
    </AccountProvider>
  </React.StrictMode>,
)
