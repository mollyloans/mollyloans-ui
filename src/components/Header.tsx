import React from 'react'

const Header = () => {
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
        <button className="inline-flex items-center justify-between px-2 py-1 space-x-2 bg-gray-200 rounded-lg">
          <img
            src="/static/moonbeam.jpeg"
            className="w-5 h-5 rounded-full"
            alt=""
          />
          <span className="text-base">Moonbeam</span>
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
        </button>
        <span className="px-4 py-1">0x01...3464</span>
      </div>
    </div>
  )
}

export default Header
