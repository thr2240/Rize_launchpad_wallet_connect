import "../styles/globals.css";
import "../styles/swiper.css";
import type { AppProps } from "next/app";
import { defaultTheme, ChainProvider } from "@cosmos-kit/react";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
import { wallets as leapWallets } from "@cosmos-kit/leap";

import { TailwindModal } from "../components";
import { ThemeProvider } from "../contexts/theme";

import { SignerOptions } from "@cosmos-kit/core";
import { chains, assets } from "chain-registry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <ChainProvider
      chains={chains}
      assetLists={assets}
      wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
      walletConnectOptions={{
        signClient: {
          projectId: "a8510432ebb71e6948cfd6cde54b70f7",
          relayUrl: "wss://relay.walletconnect.org",
          metadata: {
            name: "CosmosKit Template",
            description: "CosmosKit dapp template",
            url: "https://docs.cosmoskit.com/",
            icons: [],
          },
        },
      }}
      endpointOptions={{
        endpoints: {
          coreum: {
            rpc: ["https://rize2day.com/cosmwasm"],
            rest: ["https://rize2day.com/rest"],
          },
        },
      }}
      wrappedWithChakra={true}
      // signerOptions={signerOptions}
      walletModal={TailwindModal}
    >
      <ThemeProvider>
        <div className="min-h-screen text-black bg-white dark:bg-gray-bg dark:text-white">
          <Component {...pageProps} />
        </div>
        <ToastContainer />
      </ThemeProvider>
    </ChainProvider>
  );
}

export default CreateCosmosApp;
