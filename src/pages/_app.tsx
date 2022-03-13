import '../styles/globals.css'

import { providers } from 'ethers'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import ErrorBoundary from 'src/components/ErrorBoundary'
import { SUPPORTED_CHAIN_ID, SUPPORTED_CHAIN_NAME } from 'src/utils/constants'
import { Provider } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL as string

const supportedChains = [
  {
    id: SUPPORTED_CHAIN_ID,
    name: SUPPORTED_CHAIN_NAME,
    // nativeCurrency: { name: 'Dev', symbol: 'DEV', decimal: 18 },
    rpcUrls: [rpcUrl],
    blockExplorers: [
      { name: 'Moonscan', url: 'https://moonbeam.moonscan.io/' }
    ],
    testnet: true
  }
]

const connectors = () => {
  return [
    new InjectedConnector({ chains: supportedChains }),
    new WalletConnectConnector({
      options: {
        rpc: {
          [SUPPORTED_CHAIN_ID]: rpcUrl
        },
        qrcode: true
      }
    })
  ]
}

const provider = () =>
  new providers.StaticJsonRpcProvider(rpcUrl, {
    chainId: SUPPORTED_CHAIN_ID,
    name: SUPPORTED_CHAIN_NAME
  })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider
        autoConnect
        connectorStorageKey="molly.wallet"
        connectors={connectors}
        provider={provider}
      >
        <Toaster position="bottom-left" />
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  )
}
export default MyApp
