import Head from "next/head";
import * as S from "@/styles";
import Banner from "@/components/Banner";
import Document from "@/components/Document";
import Search from "@/components/Search";

export default function Home() {
  return (
    <>
      <S.GlobalStyle />
      <Head>
        <title>Regras - Zero City</title>
        <meta name="description" content="Regras da Zero City - Uma cidade do Zero Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Search />
      <Banner />
      <Document />
    </>
  );
}
