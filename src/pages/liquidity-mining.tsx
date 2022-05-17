import React from 'react'
import Layout from 'src/components/shared/Layout'
import { MOLLY_DISCORD_URL, MOLLY_TWITTER_URL } from 'src/utils/constants'

const liquidityMining = () => {
  return (
    <Layout>
      <div className="container max-w-2xl px-3 py-6 mx-auto md:px-0">
        <div className="p-4 mb-4 text-[19px] text-gray-400 bg-gray-100 rounded-lg">
          <div>
            Just dm us on twitter -
            <a
              href={MOLLY_TWITTER_URL}
              className="text-[#6eabff] ml-2"
              target="_blank"
              rel="noreferrer"
            >
              {MOLLY_TWITTER_URL}
            </a>
          </div>
          <div>
            Or on discord -{' '}
            <a
              href={MOLLY_DISCORD_URL}
              className="text-[#6eabff]"
              target="_blank"
              rel="noreferrer"
            >
              {MOLLY_DISCORD_URL}
            </a>
          </div>
          <div className="mt-3">
            <img
              src="/static/winkemoji.svg"
              alt=""
              draggable={false}
              className="h-6"
            />
          </div>
        </div>
        <div className="p-4 text-[19px] space-y-5 text-gray-400 border-2 border-gray-100 rounded-lg">
          <p>
            Anyone can submit for a pool, eithier you are a DAO, Protocol,
            Company, Venture Fund, Reasearh group, single Individual or just an
            anon from ct with audience, that possible would like to loan some
            funds to you.
          </p>
          <p>
            In future, creation will be fully permissionless, so no dms are
            gonna be needed. For now it's just the quick solution.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default liquidityMining
