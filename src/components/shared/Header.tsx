import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {
  DEFAULT_CHAIN_ID,
  DEFAULT_CHAIN_NAME,
  SUPPORTED_NETWORKS
} from 'src/utils/constants'
import {
  getNetworkInfo,
  getNetworkLogo,
  shortenAddress
} from 'src/utils/helpers'
import { HOME, SUBMIT } from 'src/utils/paths'
import { useAccount, useNetwork } from 'wagmi'

import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import InfoMenu from '../InfoMenu'
import WalletModal from '../WalletModal'

const Header = () => {
  const router = useRouter()
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [selectedChain, setSelectedChain] = useState(1287)

  const [{ data: network }, switchNetwork] = useNetwork()
  const [{ data: accountData }] = useAccount()

  const switchToNetwork = async () => {
    if (switchNetwork) {
      let data = await switchNetwork(DEFAULT_CHAIN_ID)
      if (data.error) {
        toast.error(
          `${data.error.message}, please add ${DEFAULT_CHAIN_NAME} alpha network to wallet.`
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
            src="/static/logo.svg"
            alt=""
            draggable={false}
            className="hidden h-8 md:block"
          />
        </a>
      </Link>
      <div
        className={clsx('hidden text-2xl md:space-x-6 md:block', {
          'mr-40': !accountData?.address
        })}
      >
        <Link href={HOME}>
          <a
            className={clsx('text-gray-400', {
              'text-[#6eabff]': isActivePath(HOME),
              'hover:text-black': !isActivePath(HOME)
            })}
          >
            Liquid loan
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
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button className="inline-flex justify-center w-full focus:outline-none">
                  <span
                    className={clsx(
                      'inline-flex items-center primary-outline w-44 justify-between px-2 py-1 space-x-2 bg-gray-200'
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
                    {open ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 text-gray-500 origin-top-right bg-white shadow-sm w-44 primary-outline focus:outline-none">
                  <div className="px-1 py-1">
                    {SUPPORTED_NETWORKS.map((network, idx) => (
                      <Menu.Item
                        onClick={() => setSelectedChain(network.id)}
                        key={idx}
                      >
                        <div className="flex items-center p-1 space-x-2 rounded hover:bg-gray-100">
                          <img
                            src={getNetworkLogo(network.id)}
                            className="w-5 h-5 rounded-full"
                            alt=""
                          />
                          <span>{network.name}</span>
                        </div>
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </>
            )}
          </Menu>
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
