import Head from 'next/head'
import React from 'react'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="h-screen">
      <Head>
        <title>Molly Loans</title>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
