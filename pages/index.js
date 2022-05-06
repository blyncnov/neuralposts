import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import NewsCategory from "../Components/NewsCategory";

export default function Home({ news }) {
  return (
    <>
      <Head>
        <title>NeuralPost | blog</title>
        <meta
          name="NeuralPost"
          content="NeuralPost | blog about neural networks, machine learning, and artificial intelligence"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NewsCategory news={news} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2022-04-06&sortBy=publishedAt&apiKey=7148b42a6168451e856aa1378a57b288"
  );
  const news = await response.json();

  return {
    props: {
      news,
    },
  };
}
