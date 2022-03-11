import React, { useState } from 'react'
import WalletModal from './WalletModal'
import { useAccount, useNetwork } from 'wagmi'
import { shortenAddress } from 'src/utils/helpers'
import clsx from 'clsx'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { HOME } from 'src/utils/paths'
import InfoMenu from './InfoMenu'

const Header = () => {
  const [showWalletModal, setShowWalletModal] = useState(false)

  const [{ data: network }, switchNetwork] = useNetwork()
  const [{ data: accountData }] = useAccount()

  return (
    <div className="sticky top-0 flex items-center justify-between w-full p-3 bg-white md:p-5">
      <Link href={HOME}>
        <a>
          <img
            src="/static/logo.svg"
            alt=""
            draggable={false}
            className="hidden h-8 md:block"
          />
        </a>
      </Link>
      <div className="hidden text-2xl md:space-x-6 md:block">
        <a href="" className="text-[#6200f8]">
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
            'inline-flex items-center border-2 border-gray-200 justify-between px-2 py-1 space-x-2 bg-gray-200 rounded-lg',
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
          <CopyToClipboard
            text={accountData.address}
            onCopy={() => toast.success('Address copied')}
          >
            <span className="px-4 py-1 ml-2 border-2 border-gray-200 rounded-lg">
              {shortenAddress(accountData.address)}
            </span>
          </CopyToClipboard>
        )}
        <span className="ml-2">
          <InfoMenu />
        </span>
        <WalletModal
          show={showWalletModal}
          onClose={() => setShowWalletModal(false)}
        />
      </div>
    </div>
  )
}

export default Header
