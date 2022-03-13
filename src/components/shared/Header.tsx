import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import toast from 'react-hot-toast'
import { shortenAddress } from 'src/utils/helpers'
import { HOME, SUBMIT } from 'src/utils/paths'
import { useAccount, useNetwork } from 'wagmi'

import ChevronDown from '../icons/ChevronDown'
import InfoMenu from '../InfoMenu'
import WalletModal from '../WalletModal'

const Header = () => {
  const router = useRouter()
  const [showWalletModal, setShowWalletModal] = useState(false)

  const [{ data: network }, switchNetwork] = useNetwork()
  const [{ data: accountData }] = useAccount()

  const switchToNetwork = async () => {
    if (switchNetwork) {
      let data = await switchNetwork(1287)
      if (data.error) {
        toast.error(`${data.error.message}, please add chain to wallet.`)
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
      <div className="hidden text-2xl md:space-x-6 md:block">
        <Link href={HOME}>
          <a
            className={clsx('text-gray-400', {
              'text-[#6eabff]': isActivePath(HOME)
            })}
          >
            Liquid loan
          </a>
        </Link>
        <Link href={SUBMIT}>
          <a
            className={clsx('text-gray-400', {
              'text-[#6eabff]': isActivePath(SUBMIT)
            })}
          >
            Submit to the program
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <button
          onClick={() =>
            network.chain?.unsupported && switchNetwork
              ? switchToNetwork()
              : setShowWalletModal(true)
          }
          className={clsx(
            'inline-flex items-center primary-outline justify-between px-2 py-1 space-x-2 bg-gray-200',
            {
              'bg-red-300 !border-red-300':
                network.chain?.unsupported && switchNetwork
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
              <ChevronDown />
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
            <span className="px-4 py-1 ml-2 primary-outline">
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
