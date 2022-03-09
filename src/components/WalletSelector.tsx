import React, { useEffect, useState } from 'react'
import { getWalletLogo } from 'src/utils/helpers'
import { Connector, useAccount, useConnect, useNetwork } from 'wagmi'

import { Spinner } from './Spinner'

const WalletSelector = ({ onClose }: { onClose: () => void }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const [
    {
      data: { connector, connectors, connected },
      error,
      loading
    },
    connect
  ] = useConnect()
  const [{ data: accountData }] = useAccount()
  const [{ data: networkData }] = useNetwork()

  const onConnect = async (x: Connector) => {
    await connect(x)
    onClose()
  }

  const isConnected = connected && accountData?.address

  return (
    <div className="inline-block w-full p-3 space-y-2 overflow-hidden text-left align-middle transition-all transform">
      {isConnected && (
        <div className="w-full p-4 space-y-2 border border-gray-600 rounded-lg">
          <div className="flex items-center justify-between">
            <h6 className="text-sm text-gray-400">
              Connected with {connector?.name}
            </h6>
            <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-lg">
              {networkData.chain?.name || 'unknown'}
            </span>
          </div>
          <h6 className="font-mono truncate cursor-pointer select-all">
            {accountData?.address}
          </h6>
        </div>
      )}
      {connectors.map((x, i) => {
        return (
          <button
            key={i}
            className={`w-full flex items-center justify-center bg-gray-50 px-4 py-3 overflow-hidden border-2 border-transparent outline-none rounded-lg border-gray-700
            ${x.id !== accountData?.connector?.id && 'hover:bg-gray-100'}
            `}
            onClick={() => onConnect(x)}
            disabled={
              mounted ? !x.ready || x.id === accountData?.connector?.id : false
            }
          >
            <span className="flex items-center justify-between w-full">
              <span className="inline-flex items-center space-x-2">
                <img
                  src={getWalletLogo(x.name)}
                  draggable={false}
                  className="w-6 h-6"
                  alt=""
                />
                <span>
                  {mounted ? x.name : x.id === 'injected' ? x.id : x.name}
                </span>
              </span>
              {mounted ? !x.ready && ' (unsupported)' : ''}
              {loading && x.name === connector?.name && <Spinner />}
              {!loading && x.id === accountData?.connector?.id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
          </button>
        )
      })}
      {error?.message ? (
        <div className="flex items-center py-2 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {error?.message ?? 'Failed to connect'}
        </div>
      ) : null}
    </div>
  )
}

export default WalletSelector
