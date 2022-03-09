import React, { useState } from 'react'
import WalletModal from './WalletModal'
import { useAccount, useNetwork } from 'wagmi'
import { shortenAddress } from 'src/utils/helpers'
import clsx from 'clsx'

const Header = () => {
  const [showWalletModal, setShowWalletModal] = useState(false)

  const [{ data: network }, switchNetwork] = useNetwork()
  const [{ data: accountData }] = useAccount()

  return (
    <div className="sticky top-0 flex items-center justify-between w-full p-3 bg-white md:p-5">
      <h1 className="text-xl font-bold md:text-4xl xl:text-5xl">Molly.loans</h1>
      <div className="hidden text-2xl md:space-x-6 md:block">
        <a href="" className="text-indigo-700">
          Liquid loan
        </a>
        <a href="" className="text-gray-400">
          Submit to the program
        </a>
      </div>
      <div className="flex items-center">
        <button
          onClick={() =>
            network.chain?.unsupported && switchNetwork
              ? switchNetwork(1287)
              : setShowWalletModal(true)
          }
          className={clsx(
            'inline-flex items-center justify-between px-2 py-1 space-x-2 bg-gray-200 rounded-lg',
            {
              'bg-red-300': network.chain?.unsupported && switchNetwork
            }
          )}
        >
          {accountData?.address && !network.chain?.unsupported ? (
            <>
              <img
                src="/static/moonbeam.jpeg"
                className="w-5 h-5 rounded-full"
                alt=""
              />
              <span className="text-base">{network.chain?.name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </>
          ) : network.chain?.unsupported && switchNetwork ? (
            <span className="mx-2">Switch Network</span>
          ) : (
            <span className="mx-2">Connect Wallet</span>
          )}
        </button>
        {accountData?.address && (
          <span className="px-4 py-1">
            {shortenAddress(accountData?.address)}
          </span>
        )}
        <WalletModal
          show={showWalletModal}
          onClose={() => setShowWalletModal(false)}
        />
      </div>
    </div>
  )
}

export default Header
