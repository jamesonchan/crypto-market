import React from "react";
import TechItem from "./TechItem";

function TechList({ techResults }) {
  return (
    <div className="bg-gray-700 max-w-6xl mx-auto mt-10 rounded-lg">
      {techResults.data[0].screen_data.analysis.map((result) => (
        <TechItem key={result.article_ID} {...result} />
      ))}
    </div>
  );
}

export default TechList;
