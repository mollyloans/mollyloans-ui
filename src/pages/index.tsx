import Layout from 'src/components/Layout'
import PartnerCard from 'src/components/PartnerCard'

export default function Home() {
  return (
    <Layout>
      <div className="container max-w-4xl px-3 py-6 mx-auto md:px-0">
        <div className="text-center">
          <a
            className="text-lg tracking-wider text-gray-400"
            href="https://mollyloans.gitbook.io/"
            target="_blank"
          >
            {`=> To help understand how "liquid loans" work, check out our docs page <=`}
          </a>
        </div>
        <div className="grid max-w-xl gap-6 mx-auto my-10 md:my-20 md:grid-cols-2">
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </div>
    </Layout>
  )
}
