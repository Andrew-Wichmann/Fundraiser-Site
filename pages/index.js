import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andrew Wichmann's 2022 Marathon Fundraising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Andrew Wichmann Marathon Fundraising" />
        <div className="frontpage-content">
          <h1>Welcome to Andrew Wichmann's fundraising page!</h1>
          <p className="description">
            Andrew is running the Chicago Marathon on October 9th 2022 with the <a href="https://www.chicagoparksfoundation.org/">ChiParks charity</a>.
          </p>
          <p className="description">
            He needs to raise $2,000 and would like to earn that money rather than simply asking for it.
          </p>
          <p className="description">
            By signing up as a donor, you can pledge a donation for each mile biked, every lap swum, and every step taken during his training.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
