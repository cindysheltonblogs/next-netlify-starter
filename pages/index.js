import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cindy Shelton Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Is Web Development Essential For Small Businesses?" />
        <p className="description">
          If you own a small business, you might consider whether a small business needs a web design or not? The answer is, Yess! Every business needs a website irrespective of its size.  

As a result of Covid-19, when the social world transitioned from a place of interpersonal relationships to online connections, so did the business world. We've got a little choice but to adapt to technology. 

A simple question, If you want to know more about a business, where do you look for it? Internet right? The first thing you and I would do is look for its website online like <Link href="https://digitalgraphiks.ae/dubai/web-design">
  <a target="_blank">web design Dubai</a>
</Link>. 81% of the consumers conduct online research before engaging with a brand. If you don't have a website, your chances to appear on the result page are 0%.

Here is the ultimate guide to why is web development essential for any small business

        </p>
      </main>

      <Footer />
    </div>
  )
}
