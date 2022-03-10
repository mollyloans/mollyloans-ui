import Link from 'next/link'
import React from 'react'
import { LOAN } from 'src/utils/paths'

const PartnerCard = () => {
  return (
    <div className="p-5 bg-[#ffeaf4] rounded-lg">
      <div className="inline-flex items-center justify-start space-x-3">
        <img src="/static/cwy.png" className="rounded-full w-14 h-14" alt="" />
        <div>
          <span className="text-base uppercase">Chewy</span>
          <h6 className="text-xl">23% APY</h6>
        </div>
      </div>
      <div className="mb-3 space-y-1">
        <span className="flex items-center tracking-wider">
          Loaning asset - USDC
          <img
            src="/static/usdc.svg"
            className="w-4 h-4 ml-2 rounded-full"
            draggable={false}
            alt=""
          />
        </span>
        <span className="flex items-center tracking-wider">
          Locked for 6 months
        </span>
        <span className="flex items-center tracking-wider">Raise cap $1m</span>
        <span className="flex items-center tracking-wider">Raised $810k</span>
        <span className="flex items-center tracking-wider">
          Raise ends in 47h:23m
        </span>
      </div>
      <Link href={`${LOAN}/cwy`} passHref>
        <button className="w-full p-2 text-lg text-white bg-black rounded-xl">
          Loan to CHEWY
        </button>
      </Link>
    </div>
  )
}

export default PartnerCard
