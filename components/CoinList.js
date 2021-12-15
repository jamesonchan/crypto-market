import React from "react";
import Coin from "./Coin";

function CoinList({ results }) {
  return (
    <div className="bg-gray-700 mt-10 max-w-7xl mx-auto rounded-xl pb-10">
      <div className="px-3">
        <div className="flex border-b-2 border-b-gray-800 text-yellow-300 font-bold">
          <div className="numberList w-[110px]">
            <p className="flex-grow"></p>
            <p>Coin</p>
          </div>
          <div className="numberList w-[190px]">
            <p className="flex-grow"></p>
            <p>Price</p>
          </div>
          <div className="numberList hidden md:inline-flex">
            <p className="flex-grow"></p>
            <p>Market Cap</p>
          </div>
          <div className="numberList hidden md:inline-flex">
            <p className="flex-grow"></p>
            <p>Daily Volume</p>
          </div>
          <div className="numberList hidden w-[180px] lg:inline-flex">
            <p className="flex-grow"></p>
            <p>All-time High</p>
          </div>
          <div className="numberList w-[180px]">
            <p className="flex-grow"></p>
            <p>Daily Change</p>
          </div>
          <div className="numberList w-[180px]  hidden lg:inline-flex">
            <p className="flex-grow"></p>
            <p></p>
          </div>
        </div>
      </div>
      {results.data.coins.map((result) => (
        <Coin key={result.id} {...result} />
      ))}
    </div>
  );
}

export default CoinList;
