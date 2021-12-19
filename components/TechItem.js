import React from "react";

function TechItem({ article_href, article_title, article_data,article_author }) {
  const regex = /(<([^>]+)>)/gi;
  const textOnly = article_data.replace(regex, "");
  return (
    <div className="p-3">
      <div className="text-white text-sm">
        <a
          className="hover:underline font-semibold"
          href={article_href ? article_href : "http://www.investing.com"}
        >
          {article_href ? article_href : "http://www.investing.com"}
        </a>
        <h1 className="font-semibold text-blue-500 text-lg hover:underline">
          {article_title}
        </h1>
        <p className="line-clamp-3">{textOnly}</p>
        <p className="font-semibold text-yellow-300">Author: {article_author}</p>
      </div>
    </div>
  );
}

export default TechItem;
