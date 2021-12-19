import React from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import TechList from "../components/TechList";
import TechResponse from "../TechResponse";

function Tech({ techResults }) {
  return (
    <div>
      <Header />
      <TechList techResults={techResults} />
      <Pagination main='tech'/>
    </div>
  );
}

export default Tech;

export async function getServerSideProps(context) {
  const pageIndex = context.query.page || "1";
  const useDummyData = false;
  const data = useDummyData
    ? TechResponse
    : await fetch(
        `https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-analysis?pair_ID=1057391&time_utc_offset=28800&lang_ID=1&page=${pageIndex}`,
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
      techResults: data,
    },
  };
}
