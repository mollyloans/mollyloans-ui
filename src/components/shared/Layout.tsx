import Head from 'next/head'
import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="h-screen">
      <Head>
        <title>Molly Loans</title>
      </Head>
      <Header />
      <div className="flex flex-col justify-between h-full">
        <div className="mt-20">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
