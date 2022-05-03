import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import NewsCategory from "../Components/NewsCategory";

export default function Home() {
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
      <NewsCategory />
    </>
  );
}
