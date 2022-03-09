import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { chain, Connector, Provider } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { providers } from 'ethers'
import ErrorBoundary from 'src/components/ErrorBoundary'

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL as string

const supportedChains = [
  {
    id: 1287,
    name: 'Moonbeam Alpha',
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
          1287: rpcUrl
        },
        qrcode: true
      }
    })
  ]
}

const provider = () =>
  new providers.StaticJsonRpcProvider(rpcUrl, {
    chainId: 1287,
    name: 'moonbase-alphanet'
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
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  )
}
export default MyApp
