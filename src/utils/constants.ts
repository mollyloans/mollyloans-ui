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

export const MOLLY_TWITTER_URL = 'https://twitter.com/mollyloans'
export const MOLLY_TELEGRAM_URL = 'https://twitter.com/mollyloans'
export const MOLLY_DISCORD_URL = 'https://discord.gg/mollyloans'
export const MOLLY_SUBSTACK_URL = 'https://mollyloans.substack.com'

export const MOLLY_DOCS_URL = 'https://docs.molly.loans'
export const MOLLY_GITHUB_URL = 'https://github.com/mollyloans'
export const MOLLY_AUDITS_URL = 'https://docs.molly.loans/security/audits'
export const MOLLY_BUG_BOUNTY_URL =
  'https://docs.molly.loans/security/bug-bounty'

export const MOLLY_ROADMAP_URL = 'https://docs.molly.loans/governance/roadmap'
export const MOLLY_FORUM_URL = 'https://forum.molly.loans'
export const MOLLY_SNAPSHOT_URL = 'https://snapshot.molly.loans'
