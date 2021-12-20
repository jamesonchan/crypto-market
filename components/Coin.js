import React from "react";
import numeral from "numeral";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Coin({
  id,
  symbol,
  change,
  iconUrl,
  name,
  price,
  marketCap,
  volume,
  allTimeHigh: { price: ahPrice },
}) {
  const priceFormat = price < 0.1 ? numeral(price).format('0.00000') : numeral(price).format('0.00') 
  const marketCapFormat = numeral(marketCap).format("0.0 a").toUpperCase();
  const volumeFormat = numeral(volume).format("0.0 a").toUpperCase();
  const ahPriceFormat = numeral(ahPrice * 1).format("0.00");

  const router = useRouter()


  return (
    <div className="px-3">
      <div onClick={()=>router.push(`/search/${id}`)} className="text-white flex py-3 px-5 border-b border-b-gray-500 cursor-pointer items-center hover:bg-gray-600">
        {/* symbol and full name */}
        <div  className="flex items-center space-x-4 pl-2 w-[350px] sm:w-[300px]">
          <img src={iconUrl} alt="" className="h-7" />
          <div className="flex-grow">
            <h1 className="font-bold text-md">{symbol}</h1>
            <p className="text-sm">{name}</p>
          </div>
          <p className="font-semibold">
            ${priceFormat}
          </p>
        </div>
        <div className="numberList hidden md:inline-flex">
          <p className="flex-grow"></p>
          <p>${marketCapFormat}</p>
        </div>
        <div className="numberList hidden md:inline-flex">
          <p className="flex-grow"></p>
          <p>${volumeFormat}</p>
        </div>
        <div className="numberList hidden lg:inline-flex">
          <p className="flex-grow"></p>
          <p>${ahPriceFormat}</p>
        </div>
        <div className="numberList">
          <p className="flex-grow"></p>
          {change > 0 ? (
            <p className="text-green-400 flex items-center">
              {change}%<ChevronUpIcon className="h-5" />
            </p>
          ) : (
            <p className="text-red-400 flex items-center">
              {change}%<ChevronDownIcon className="h-5" />
            </p>
          )}
        </div>
        <div className="numberList hidden lg:inline-flex">
          <p className="flex-grow"></p>
          <p className="font-semibold text-blue-300 hover:underline ">See More</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
