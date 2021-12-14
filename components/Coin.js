import React from "react";

function Coin({ id, symbol, change, iconUrl, name, price }) {
  return (
    <div className="text-white flex py-3 px-2 border-b cursor-pointer items-center">
      {/* symbol and full name */}
      <div className="flex items-center space-x-4 pl-2 bg-yellow-400 w-[250px]">
        <img src={iconUrl} alt="" className="h-7" />
        <div className="flex-grow">
          <h1 className="font-bold text-md">{symbol}</h1>
          <p className="text-sm">{name}</p>
        </div>
        <p className="font-semibold ">
          ${Math.round((price * 1 + Number.EPSILON) * 100) / 100}
        </p>
      </div>
    </div>
  );
}

export default Coin;
