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
      <div className="overflow-y-auto">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
