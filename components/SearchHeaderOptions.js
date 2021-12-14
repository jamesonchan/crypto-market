import React from "react";
import { DatabaseIcon, NewspaperIcon, ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import SearchHeaderOption from "./SearchHeaderOption";

function SearchHeaderOptions() {
  return (
    <div className="bg-[#2b3752]">
      <div className="flex justify-evenly shadow-lg">
        <SearchHeaderOption Icon={DatabaseIcon} title="Coins" selected />
        <SearchHeaderOption Icon={NewspaperIcon} title="News" />
        <SearchHeaderOption Icon={ChartBarIcon} title="Technical Analysis" />
        <SearchHeaderOption Icon={CurrencyDollarIcon} title="Markets" />
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
