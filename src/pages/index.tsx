import Head from 'next/head'

export default function Home() {
  return (
    <div className="container h-screen mx-auto">
      <Head>
        <title>Molly Loans</title>
      </Head>
      <div className="my-20 text-center">
        <h1 className="mb-5 text-4xl font-bold">Molly Loans</h1>
      </div>
    </div>
  )
}
