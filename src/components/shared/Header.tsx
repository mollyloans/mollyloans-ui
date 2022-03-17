import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { DEFAULT_CHAIN_ID, DEFAULT_CHAIN_NAME } from 'src/utils/constants'
import {
  getNetworkInfo,
  getNetworkLogo,
  shortenAddress
} from 'src/utils/helpers'
import { HOME, SUBMIT } from 'src/utils/paths'
import { useAccount, useNetwork } from 'wagmi'

import ChevronDown from '../icons/ChevronDown'
import InfoMenu from '../InfoMenu'
import WalletModal from '../WalletModal'

const Header = () => {
  const router = useRouter()
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [selectedChain] = useState(250)

  const [{ data: network }, switchNetwork] = useNetwork()
  const [{ data: accountData }] = useAccount()

  const switchToNetwork = async () => {
    if (switchNetwork) {
      let data = await switchNetwork(DEFAULT_CHAIN_ID)
      if (data.error) {
        toast.error(
          `${data.error.message}, please add ${DEFAULT_CHAIN_NAME} network to wallet.`
        )
      }
    }
  }

  const isActivePath = (path: string) => path === router.pathname

  return (
    <div className="fixed top-0 flex items-center justify-between w-full p-3 bg-white md:p-5">
      <Link href={HOME}>
        <a>
          <img
            src="/molly-logo.svg"
            alt=""
            draggable={false}
            className="hidden h-8 md:block"
          />
        </a>
      </Link>
      <div
        className={clsx('hidden text-2xl md:space-x-6 md:block', {
          'mr-24': !accountData?.address || switchNetwork
        })}
      >
        <Link href={HOME}>
          <a
            className={clsx('text-gray-400', {
              'text-[#6eabff]': isActivePath(HOME),
              'hover:text-black': !isActivePath(HOME)
            })}
          >
            Liquid loans
          </a>
        </Link>
        <Link href={SUBMIT}>
          <a
            className={clsx('text-gray-400', {
              'text-[#6eabff]': isActivePath(SUBMIT),
              'hover:text-black': !isActivePath(SUBMIT)
            })}
          >
            Submit to the program
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        {accountData?.address && !network.chain?.unsupported && (
          <button
            onClick={() => setShowWalletModal(true)}
            className="inline-flex justify-center w-full focus:outline-none"
          >
            <span
              className={clsx(
                'inline-flex items-center primary-outline justify-between px-2 py-1 space-x-2 bg-gray-200'
              )}
            >
              <span className="flex items-center space-x-2">
                <img
                  src={getNetworkLogo(selectedChain)}
                  className="w-5 h-5 rounded-full"
                  alt=""
                />
                <span className="text-base">
                  {getNetworkInfo(selectedChain)?.name}
                </span>
              </span>
              <ChevronDown />
            </span>
          </button>
        )}
        <button
          onClick={() =>
            network.chain?.unsupported && switchNetwork
              ? switchToNetwork()
              : setShowWalletModal(true)
          }
          className={clsx(
            'inline-flex ml-2 items-center primary-outline justify-between px-2 py-1',
            {
              'bg-red-300 !border-red-300':
                network.chain?.unsupported && switchNetwork
            }
          )}
        >
          {accountData?.address && !network.chain?.unsupported ? (
            <span className="text-base">
              {shortenAddress(accountData.address)}
            </span>
          ) : network.chain?.unsupported && switchNetwork ? (
            <span className="mx-2">Switch Network</span>
          ) : (
            <span className="mx-2">Connect Wallet</span>
          )}
        </button>
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
