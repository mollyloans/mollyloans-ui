export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const DEFAULT_CHAIN_ID = 250
export const DEFAULT_CHAIN_NAME = 'Fantom'

// const rpcUrl = process.env.NEXT_PUBLIC_FANTORPC_URL as string
const fantomRpcUrl = 'https://rpc.ftm.tools'

export const SUPPORTED_NETWORKS = [
  // {
  //   id: 1287,
  //   name: 'Moonbeam Alpha',
  //   rpcUrls: [rpcUrl],
  //   blockExplorers: [
  //     { name: 'Moonscan', url: 'https://moonbeam.moonscan.io/' }
  //   ],
  //   testnet: true
  // },
  {
    id: 250,
    name: 'Fantom',
    rpcUrls: [fantomRpcUrl],
    blockExplorers: [{ name: 'FTMScan', url: 'https://ftmscan.com/' }],
    testnet: false
  }
]

export const MOLLY_DOCS_URL = 'https://docs.molly.loans'
export const MOLLY_BLOG_URL = 'http://blog.molly.loans'
export const MOLLY_TWITTER_URL = 'https://twitter.com/mollyloans'
export const MOLLY_DISCORD_URL = 'https://discord.gg/JEQ2BXedzw'
export const MOLLY_GITHUB_URL = 'https://github.com/mollyloans'
