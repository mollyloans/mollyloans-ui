import clsx from 'clsx'
import React from 'react'

import { CloseIcon } from '../icons/CloseIcon'

interface Props {
  show: boolean
  onClose: () => void
  type: string
}

const Modal: React.FC<Props> = (props) => {
  return (
    <div
      className={clsx(
        'top-0 bottom-0 z-20 left-0 right-0 min-h-screen bg-gray-100 bg-opacity-70 backdrop-filter backdrop-blur flex flex-row items-start justify-center',
        {
          hidden: !props.show,
          absolute: props.show
        }
      )}
    >
      <div className="relative z-20 max-w-lg shadow flex flex-col mt-20 rounded-2xl items-center mx-4 bg-white lg:mt-[10%] lg:mx-0 min-h-30">
        <div className="px-5 py-4">
          <div className="flex items-center justify-between w-full pb-1">
            <h1 className="text-lg text-gray-400 opacity-80">{props.type}</h1>
            <button
              className="flex items-center justify-center border-gray-700 rounded-lg focus:outline-none"
              onClick={() => props.onClose()}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="p-2 mb-2 flex divide-x justify-center bg-gray-100 rounded-lg min-w-[400px]">
              <div className="flex-1 text-center">USDC</div>
              <div className="flex-1 text-center">(mmollyUSDCs1)</div>
            </div>
            <span className="text-base leading-3 text-gray-400 opacity-80">
              Balance
            </span>
            <div className="flex items-center">
              <input
                step="0.01"
                min="0"
                placeholder={'0.00'}
                type="number"
                className="w-full px-2 py-2 font-semibold bg-gray-100 border-gray-200 rounded-l-lg outline-none"
              />
              <button className="px-2 py-2 font-semibold bg-gray-100 border-gray-200 rounded-r-lg focus:outline-none">
                max
              </button>
            </div>
            <button className="inline-block w-full p-2 mt-1 text-xl text-white bg-black rounded-lg Approve">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
    // <Transition appear show as={Fragment}>
    //   <Dialog
    //     open={props.show}
    //     as="div"
    //     className={clsx(
    //       'top-0 bottom-0 overflow-y-auto z-20 left-0 right-0 min-w-max flex flex-col items-center justify-center',
    //       {
    //         fixed: props.show
    //       }
    //     )}
    //     onClose={props.onClose}
    //   >
    //     <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50" />

    //   </Dialog>
    // </Transition>
  )
}

export default Modal
