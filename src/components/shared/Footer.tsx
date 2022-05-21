import Link from 'next/link'
import React from 'react'
import {
  MOLLY_AUDITS_URL,
  MOLLY_BUG_BOUNTY_URL,
  MOLLY_DISCORD_URL,
  MOLLY_DOCS_URL,
  MOLLY_FORUM_URL,
  MOLLY_GITHUB_URL,
  MOLLY_ROADMAP_URL,
  MOLLY_SNAPSHOT_URL,
  MOLLY_SUBSTACK_URL,
  MOLLY_TELEGRAM_URL,
  MOLLY_TWITTER_URL
} from 'src/utils/constants'

const Footer = () => {
  return (
    <div>
      <div className="py-10 bg-gray-100">
        <div className="container max-w-3xl mx-auto">
          <div className="flex items-start justify-between">
            <div className="flex flex-col justify-center">
              <img
                src="/static/molly-loans-lined.png"
                alt=""
                className="h-28"
              />
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <h6 className="text-[19px] text-[#6c727f]">Community</h6>
              <ul className="text-[#9ca3ae] text-[19px]">
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_TWITTER_URL}>
                    <a target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_TELEGRAM_URL}>
                    <a target="_blank" rel="noreferrer">
                      Telegram
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_DISCORD_URL}>
                    <a target="_blank" rel="noreferrer">
                      Discord
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_SUBSTACK_URL}>
                    <a target="_blank" rel="noreferrer">
                      Substack
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <h6 className="text-[19px] text-[#6c727f]">Development</h6>
              <ul className="text-[#9ca3ae] text-[19px]">
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_DOCS_URL}>
                    <a target="_blank" rel="noreferrer">
                      Docs
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_GITHUB_URL}>
                    <a target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_AUDITS_URL}>
                    <a target="_blank" rel="noreferrer">
                      Audits
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_BUG_BOUNTY_URL}>
                    <a target="_blank" rel="noreferrer">
                      Bug bounty
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <h6 className="text-[19px] text-[#6c727f]">Governance</h6>
              <ul className="text-[#9ca3ae] text-[19px]">
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_ROADMAP_URL}>
                    <a target="_blank" rel="noreferrer">
                      Roadmap
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_FORUM_URL}>
                    <a target="_blank" rel="noreferrer">
                      Forum
                    </a>
                  </Link>
                </li>
                <li className="transition duration-200 ease-in-out hover:underline">
                  <Link href={MOLLY_SNAPSHOT_URL}>
                    <a target="_blank" rel="noreferrer">
                      Snapshot
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white bg-[#6EABFF] flex justify-between items-center py-2.5 p-2">
        <div className="flex items-center space-x-3">
          <a href={MOLLY_TWITTER_URL} target="_blank" rel="noreferrer">
            <img src="static/footer/twitter.svg" className="h-5" alt="" />
          </a>
          <a href={MOLLY_TELEGRAM_URL} target="_blank" rel="noreferrer">
            <img src="static/footer/telegram.svg" className="h-5" alt="" />
          </a>
          <a href={MOLLY_GITHUB_URL} target="_blank" rel="noreferrer">
            <img alt="" src="static/footer/github.svg" className="h-5" />
          </a>
          <a href={MOLLY_DISCORD_URL} target="_blank" rel="noreferrer">
            <img alt="" src="static/footer/discord.svg" className="h-5" />
          </a>
          <a href={MOLLY_SUBSTACK_URL} target="_blank" rel="noreferrer">
            <img alt="" src="static/footer/substack.svg" className="h-5" />
          </a>
        </div>
        <div>Molly Loans &copy; 2022</div>
      </div>
    </div>
  )
}

export default Footer
