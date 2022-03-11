import React from 'react'
import { Menu } from '@headlessui/react'
import {
  MOLLY_BLOG_URL,
  MOLLY_DISCORD_URL,
  MOLLY_DOCS_URL,
  MOLLY_GITHUB_URL,
  MOLLY_TWITTER_URL
} from 'src/utils/constants'
import Link from 'next/link'

const InfoMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full p-1.5 text-white border-2 rounded-lg focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 text-gray-500 origin-top-right bg-white border-2 border-gray-100 rounded-lg shadow-sm w-44 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            <Link href={MOLLY_DOCS_URL}>
              <a
                rel="noreferrer"
                target="_blank"
                className={`group hover:text-black flex rounded justify-between items-center w-full px-2 py-1`}
              >
                <span>Docs</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={MOLLY_BLOG_URL}>
              <a
                rel="noreferrer"
                target="_blank"
                className={`group hover:text-black flex rounded justify-between items-center w-full px-2 py-1`}
              >
                <span>Blog</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={MOLLY_GITHUB_URL}>
              <a
                rel="noreferrer"
                target="_blank"
                className={`group hover:text-black flex rounded justify-between items-center w-full px-2 py-1`}
              >
                <span>Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={MOLLY_DISCORD_URL}>
              <a
                rel="noreferrer"
                target="_blank"
                className={`group hover:text-black flex rounded justify-between items-center w-full px-2 py-1`}
              >
                <span>Discord</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={MOLLY_TWITTER_URL}>
              <a
                rel="noreferrer"
                target="_blank"
                className={`group hover:text-black flex rounded justify-between items-center w-full px-2 py-1`}
              >
                <span>Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default InfoMenu
