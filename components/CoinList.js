import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import { searchState } from "../atoms/SearchAtom";
import { useRecoilState } from "recoil";

function CoinList({ results }) {
  return (
    <div className="bg-gray-700 mt-10 max-w-7xl mx-auto rounded-xl pb-10 ">
      <div className="px-3 sticky top-0 bg-gray-700 rounded-xl">
        <div className="flex border-b-2 border-b-gray-800 text-yellow-300 font-bold">
          <div className="numberList w-[80px]">
            <p className="flex-grow"></p>
            <p>Coin</p>
          </div>
          <div className="numberList w-[220px]">
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
          <div className="numberList w-[200px] sm:w-[180px]">
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
