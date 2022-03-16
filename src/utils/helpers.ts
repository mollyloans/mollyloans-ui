import { SUPPORTED_NETWORKS } from './constants'

export const shortenAddress = (address: string, chars = 4) => {
  return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`
}

export const getWalletLogo = (name: string) => {
  switch (name) {
    case 'MetaMask':
      return '/static/metamask.svg'
    case 'WalletConnect':
      return '/static/walletconnect.svg'
    default:
      return '/static/metamask.svg'
  }
}

const moonbeamRpcUrl = process.env.NEXT_PUBLIC_RPC_URL as string

export const getNetworkRpc = (id: number) => {
  switch (id) {
    case 1287:
      return moonbeamRpcUrl
    case 250:
      return 'https://rpc.ftm.tools'
    default:
      return '/static/moonbeam.svg'
  }
}

export const getNetworkLogo = (id: number) => {
  switch (id) {
    case 1287:
      return '/static/moonbeam.jpeg'
    case 250:
      return '/static/fantom.png'
    default:
      return '/static/moonbeam.svg'
  }
}

export const getNetworkInfo = (id: number) => {
  return SUPPORTED_NETWORKS.find((n) => n.id === id)
}
