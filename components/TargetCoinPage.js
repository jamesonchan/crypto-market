import React from "react";
import numeral from "numeral";

function TargetCoinPage({ searchResults }) {
  const {
    symbol,
    change,
    iconUrl,
    name,
    price,
    marketCap,
    volume,
    allTimeHigh: { price: ahPrice },
    description,
  } = searchResults.data.coin;

  const priceFormat =
    price < 0.1
      ? numeral(price).format("0.00000")
      : numeral(price).format("0.0000");
  const marketCapFormat = numeral(marketCap).format("0.0 a").toUpperCase();
  const volumeFormat = numeral(volume).format("0.0 a").toUpperCase();
  const ahPriceFormat = numeral(ahPrice * 1).format("0.00");

  const regex = /(<([^>]+)>)/gi;
  const textOnly = description.replace(regex, "");

  return (
    <div className="bg-gray-700 max-w-6xl mx-auto mt-10 rounded-lg p-3 text-white">
      <div className="flex items-center space-x-4 pl-2 w-[400px] sm:w-[300px]">
        <img src={iconUrl} alt="" className="h-12" />
        <div className="flex-grow">
          <h1 className="font-bold text-2xl">{symbol}</h1>
          <p className="text-lg">{name}</p>
        </div>
        <p className="font-semibold text-xl">${priceFormat}</p>
      </div>
      <div className="p-3 flex space-x-5">
        <div className="text-white">
            <h1 className="text-gray-300 font-semibold">Market Cap</h1>
            <p className="font-bold text-xl">${marketCapFormat}</p>
        </div>
        <div className="text-white">
            <h1 className="text-gray-300 font-semibold">Volume</h1>
            <p className="font-bold text-xl">${volumeFormat}</p>
        </div>
        <div className="text-white">
            <h1 className="text-gray-300 font-semibold">All time high</h1>
            <p className="font-bold text-xl">${ahPriceFormat}</p>
        </div>
      </div>
      <div className="p-3">
            <p>{textOnly}</p>
        </div>
    </div>
  );
}

export default TargetCoinPage;
