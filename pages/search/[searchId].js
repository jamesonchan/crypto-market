import React from "react";
import Header from "../../components/Header";
import TargetCoinPage from "../../components/TargetCoinPage";

function Search({ searchResults }) {
    
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      <TargetCoinPage searchResults={searchResults}/>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const id = context.query.searchId;
  const data = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "ddb2864c62mshd3a06510c7ee159p1b122fjsnd2e3399bdbd7",
    },
  }).then((res) => res.json());

  return {
    props: {
      searchResults: data,
    },
  };
}
