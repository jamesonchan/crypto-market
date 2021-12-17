import Head from "next/head";
import Response from "../Response";
import Header from "../components/Header";
import CoinList from "../components/CoinList";

export default function Home({ results }) {

 

  return (
    <div className="bg-[#222735]">
      <Head>
        <title>Crypto Market</title>
      </Head>

      {/* Header */}
      <Header />
      {/*  */}
      <CoinList results={results} />
    </div>
  );
}

export async function getServerSideProps() {
  const useDummyData = true;
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
