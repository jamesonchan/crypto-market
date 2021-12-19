import Head from "next/head";
import Response from "../Response";
import CoinList from "../components/CoinList";
import Footer from "../components/Footer";
import Header from '../components/Header'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Crypto Market</title>
      </Head>
      {/* header */}
      <Header results={results}/>
      {/*  */}
      <CoinList results={results} />
    </div>
  );
}

export async function getServerSideProps() {
  const useDummyData = false;
  const data = useDummyData
    ? Response
    : await fetch("https://coinranking1.p.rapidapi.com/coins", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "ddb2864c62mshd3a06510c7ee159p1b122fjsnd2e3399bdbd7",
        },
      }).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
