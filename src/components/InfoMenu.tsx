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
import InfoIcon from './icons/InfoIcon'
import HamburgurIcon from './icons/HamburgurIcon'

const LINKS = [
  {
    name: 'Docs',
    href: MOLLY_DOCS_URL,
    icon: <InfoIcon />
  },
  {
    name: 'Blog',
    href: MOLLY_BLOG_URL,
    icon: <InfoIcon />
  },
  {
    name: 'Discord',
    href: MOLLY_DISCORD_URL,
    icon: <InfoIcon />
  },
  {
    name: 'Github',
    href: MOLLY_GITHUB_URL,
    icon: <InfoIcon />
  },
  {
    name: 'Twitter',
    href: MOLLY_TWITTER_URL,
    icon: <InfoIcon />
  }
]

const InfoMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full p-1.5 text-white primary-outline focus:outline-none">
        <HamburgurIcon />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 text-gray-500 origin-top-right bg-white shadow-sm primary-outline w-44 focus:outline-none">
        <div className="px-1 py-1">
          {LINKS.map((link, idx) => (
            <Menu.Item key={idx}>
              <Link href={link.href}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={`group hover:text-black flex rounded justify-between items-center w-full px-2 py-1`}
                >
                  <span>{link.name}</span>
                  {link.icon}
                </a>
              </Link>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default InfoMenu
