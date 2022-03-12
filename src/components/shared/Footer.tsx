import Link from 'next/link'
import React from 'react'
import {
  MOLLY_BLOG_URL,
  MOLLY_DISCORD_URL,
  MOLLY_DOCS_URL,
  MOLLY_GITHUB_URL,
  MOLLY_TWITTER_URL
} from 'src/utils/constants'

const Footer = () => {
  return (
    <div className="pt-10 pb-20 bg-gray-100">
      <div className="container max-w-3xl mx-auto">
        <ul className="flex mb-4 items-center space-x-6 text-[19px] text-gray-500">
          <li>
            <Link href={MOLLY_DISCORD_URL}>
              <a target="_blank" rel="noreferrer">
                <img
                  src="/static/discord-gray-icon.svg"
                  className="w-6 h-6"
                  alt=""
                  draggable={false}
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href={MOLLY_TWITTER_URL}>
              <a target="_blank" rel="noreferrer">
                <img
                  src="/static/twitter-gray-icon.svg"
                  draggable={false}
                  className="w-6 h-6"
                  alt=""
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href={MOLLY_GITHUB_URL}>
              <a target="_blank" rel="noreferrer">
                <img
                  draggable={false}
                  src="/static/github-gray-icon.svg"
                  className="w-6 h-6"
                  alt=""
                />
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center space-x-6 text-[19px] text-gray-500">
          <li>
            <Link href={MOLLY_DOCS_URL}>
              <a target="_blank" rel="noreferrer">
                Docs
              </a>
            </Link>
          </li>
          <li>
            <Link href={MOLLY_BLOG_URL}>
              <a target="_blank" rel="noreferrer">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a target="_blank" rel="noreferrer">
                $MOLLY Token
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a target="_blank" rel="noreferrer">
                Audits
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a target="_blank" rel="noreferrer">
                Bug bounty
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
