import React,{useEffect} from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import NewsResponse from "../NewsResponse";



function News({ newsResults }) {
  return (
    <div>
      <Header />
      <NewsList newsResults={newsResults}/>
      <Pagination main='news'/>
    </div>
  );
}

export default News;

export async function getServerSideProps(context) {
  const pageIndex = context.query.page || "1";
  const useDummyData = false;
  const data = useDummyData
    ? NewsResponse
    : await fetch(
        `https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=${pageIndex}&time_utc_offset=28800&lang_ID=1`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "investing-cryptocurrency-markets.p.rapidapi.com",
            "x-rapidapi-key":
              "ddb2864c62mshd3a06510c7ee159p1b122fjsnd2e3399bdbd7",
          },
        }
      ).then((res) => res.json());

  return {
    props: {
      newsResults: data,
    },
  };
}
