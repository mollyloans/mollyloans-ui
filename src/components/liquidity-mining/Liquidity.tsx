import React, { useState } from 'react'

import Modal from './Modal'

const Liquidity = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('Stake')

  return (
    <div className="overflow-hidden rounded-lg">
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          type={modalType}
        />
      )}
      <div className="flex px-2.5 items-center space-x-1 bg-[#6eabff] text-white">
        <div className="flex mr-2 -space-x-1">
          <img src="/static/mollytoken.svg" alt="" className="w-4 h-4 " />
          <img src="/static/usdc.svg" alt="" className="w-4 h-4" />
        </div>
        <div>Spookyswap MOLLY/USDC LP</div>
      </div>
      <div className="flex items-center p-1 pl-2 pr-4 space-x-6 bg-gray-100">
        <table className="w-full py-1">
          <thead className="text-sm text-gray-400 border-b">
            <th className="text-left">Balance</th>
            <th className="text-right">Staked</th>
            <th className="text-right">Pool TVL</th>
            <th className="text-right">Est. APR</th>
            <th className="text-right">Earned rewards</th>
          </thead>
          <tbody>
            <td className="text-left">0</td>
            <td className="text-right">0</td>
            <td className="text-right">$45k</td>
            <td className="text-right">117.62 %</td>
            <td className="text-right">
              <span className="flex items-center justify-end space-x-1 leading-3">
                <span>1364.12 MOLLY</span>
                <img src="/static/mollytoken.svg" alt="" className="w-3 h-3" />
              </span>
            </td>
          </tbody>
        </table>
        <div className="flex items-center space-x-2 text-white">
          <button
            onClick={() => {
              setShowModal(true)
              setModalType('Stake')
            }}
            className="px-4 bg-[#6eabff] w-20 rounded-lg py-1.5"
          >
            Stake
          </button>
          <button
            onClick={() => {
              setShowModal(true)
              setModalType('Unstake')
            }}
            className="px-4 bg-[#6eabff] w-20 rounded-lg py-1.5"
          >
            Unstake
          </button>
        </div>
      </div>
    </div>
  )
}

export default Liquidity
