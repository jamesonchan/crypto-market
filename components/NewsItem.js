import React from "react";
import Image from "next/image";

function NewsItem({
  HEADLINE,
  last_updated,
  news_provider_name,
  third_party_url,
  BODY,
}) {
  const regex = /(<([^>]+)>)/gi;
  const textOnly = BODY.replace(regex, "");
  return (
    <div className="p-3">
      {/* description box */}
      <div className="text-white text-sm">
        <a
          href={third_party_url ? third_party_url : "https://invst.ly/wwx4j"}
          className="font-semibold hover:underline "
        >
          {third_party_url ? third_party_url : "https://invst.ly/wwx4j"}
        </a>
        <h1 className="font-semibold text-blue-500 text-lg hover:underline">
          {HEADLINE}
        </h1>
        <p className="line-clamp-3">{textOnly}</p>
        <p className="font-semibold text-yellow-300">Provided by {news_provider_name}</p>
        <p className="text-white">Last updated: {last_updated}</p>
      </div>
    </div>
  );
}

export default NewsItem;
