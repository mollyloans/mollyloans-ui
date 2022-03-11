import React from 'react'
import Layout from 'src/components/Layout'

const LoanPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto my-10">
        <div className="flex space-x-4">
          <div className="flex flex-col w-3/4 space-y-4">
            <div className="p-2 px-4 w-full bg-[#ffeaf4] rounded-lg">
              <div className="inline-flex items-start justify-start space-x-3">
                <span className="p-1 bg-white rounded-lg">
                  <img
                    src="/static/cwy.png"
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                </span>
                <div>
                  <h6 className="text-2xl">Loan issuer - Chewy</h6>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex items-center text-lg">
                  Twitter
                  <img
                    src="/static/twitter-icon.svg"
                    className="w-5 h-5 ml-2"
                    alt=""
                  />
                </span>
                <span className="flex items-center text-lg">
                  Website
                  <img
                    src="/static/website-icon.svg"
                    className="w-5 h-5 ml-2"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="w-full p-2 px-4 bg-gray-100 rounded-lg">
              <h6 className="text-2xl">Deposit funds</h6>
              <p className="text-[19px] text-gray-500">
                Maximum amount to loan:
              </p>
              <h6 className="text-[19px] text-gray-500">153,440 USDC</h6>
              <div className="mt-1 mb-3">
                <label className="mb-1 text-[19px]" htmlFor="amount">
                  Available: 0 USDC
                </label>
                <div className="flex items-center">
                  <input
                    id="amount"
                    type="number"
                    placeholder="0.0"
                    className="w-full px-2 py-1 text-xl border-2 border-r-0 border-gray-200 rounded-l-lg outline-none"
                  />
                  <button className="text-[19px] px-2 py-1 bg-white border-2 border-l-0 border-gray-200 rounded-r-lg focus:outline-none">
                    max
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="w-full py-0.5 text-lg text-white bg-black rounded-lg border-2 focus:outline-none border-black">
                  Approve
                </button>
                <button className="w-full py-0.5 text-lg text-gray-400 rounded-lg bg-gray-50 border-2 focus:outline-none border-gray-200">
                  Deposit
                </button>
              </div>
            </div>
            <div className="p-2 px-4 bg-white border rounded-lg shadow border-gray-50">
              <h6 className="text-2xl">Loan interest</h6>
              <span className="flex items-center text-xl tracking-wider md:text-3xl text-[#6200f8]">
                20% APY
              </span>
              <p className="text-lg text-gray-500">
                1 USDC = 1 receipt chewyUSDCs1
              </p>
              <p className="text-lg text-gray-500">
                1 chewyUSDCs1 = 1.2 USDC after loan
              </p>
              <p className="text-lg text-gray-500">expiry (In 12 months)</p>
            </div>
          </div>
          <div className="w-2/4 space-y-4">
            <div className="p-2 px-4 bg-white border rounded-lg shadow border-gray-50">
              <h6 className="text-2xl">Loaning asset:</h6>
              <span className="flex items-center tracking-wider">
                USDC
                <img
                  src="/static/usdc.svg"
                  className="w-4 h-4 ml-2 rounded-full"
                  alt=""
                  draggable={false}
                />
              </span>
              <span className="text-[19px] text-gray-400">
                Contract (Moonbeam)
              </span>
            </div>
            <div className="p-2 px-4 bg-[#ffeaf4] rounded-lg">
              <h6 className="text-2xl">Raise info</h6>
              <p className="text-lg text-gray-500">Raise cap 1,000,000 USDC</p>
              <p className="text-lg text-gray-500">Raised 847,560 USDC</p>
              <p className="text-lg text-gray-500">
                153,440 USDC left for raise
              </p>
              <h6 className="text-2xl text-red-400">Raise end in 12h: 57m</h6>
            </div>
            <div className="p-2 px-4 bg-gray-100 rounded-lg">
              <h6 className="mb-2 text-2xl">
                Lockup<span className="ml-2 text-gray-400">(12 Months)</span>
              </h6>
              <div className="space-y-4 text-[19px] text-gray-500">
                <p>Tokens are subject to the 12 months lockup period.</p>
                <p>
                  After depositing, you'll receive receipt tokens for each USDC
                  deposited, that can be sold any time (On the Curve pool for
                  example).
                </p>
                <p>
                  After loan period ends, receipt tokens are gonna be burnable
                  for deposited USDC + accrued interest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LoanPage
