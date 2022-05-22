import React from 'react'

import Liquidity from './Liquidity'
import Loan from './Loan'

const LiquidityMining = () => {
  return (
    <div className="container max-w-2xl px-3 py-6 mx-auto space-y-6 md:px-0">
      <div>
        <div className="mb-1 text-2xl text-gray-400">Loans</div>
        <Loan />
      </div>
      <div>
        <div className="mb-1 text-2xl text-gray-400">Liquidity</div>
        <Liquidity />
      </div>
    </div>
  )
}

export default LiquidityMining
