import React from "react";
import Header from "../components/Header";

function News({newsResults}) {
    console.log(newsResults)
  return (
    <div>
      <Header />
    </div>
  );
}

export default News;

export async function getServerSideProps(context) {
  const data = await fetch(
    "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=2&time_utc_offset=28800&lang_ID=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
        "x-rapidapi-key": "ddb2864c62mshd3a06510c7ee159p1b122fjsnd2e3399bdbd7",
      },
    }
  ).then(res=>res.json())

  return{
      props:{
          newsResults:data
      }
  }
}
