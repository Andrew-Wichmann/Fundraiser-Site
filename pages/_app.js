import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";

import "@styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <div className="container">
      <Head>
        <title>Andrew Wichmann's 2022 Marathon Fundraising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Andrew Wichmann Marathon Fundraising" />
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

export default Application;
