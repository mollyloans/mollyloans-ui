import '../styles/globals.css'

import { providers } from 'ethers'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import ErrorBoundary from 'src/components/ErrorBoundary'
import {
  DEFAULT_CHAIN_ID,
  DEFAULT_CHAIN_NAME,
  SUPPORTED_NETWORKS
} from 'src/utils/constants'
import { getNetworkRpc } from 'src/utils/helpers'
import { Provider } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL as string

const connectors = () => {
  return [
    new InjectedConnector({ chains: SUPPORTED_NETWORKS }),
    new WalletConnectConnector({
      options: {
        rpc: {
          1287: getNetworkRpc(1287),
          250: getNetworkRpc(250)
        },
        qrcode: true
      }
    })
  ]
}

const provider = () =>
  new providers.StaticJsonRpcProvider(rpcUrl, {
    chainId: DEFAULT_CHAIN_ID,
    name: DEFAULT_CHAIN_NAME
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
