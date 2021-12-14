import React from "react";
import Doge from "../images/doge-removebg-preview.png";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import SearchHeaderOptions from "./SearchHeaderOptions";


function Header() {
  return (
    <div className="">
      <div className="bg-[#3a5b83] border-b-2 border-t-2 border-t-gray-500 border-b-gray-400">
        {/* top section */}
        <div className=" max-w-[1500px] mx-auto ">
          <div className="md:px-[90px] px-6 items-center flex justify-between">
            <Image
              src={Doge}
              width={80}
              height={80}
              objectFit="contain"
              className="cursor-pointer"
            />
            <div className="bg-[#171b25] p-2 rounded-md flex items-center w-[150px] md:w-[200px]">
              <input
                className="text-white w-full bg-transparent outline-none focus:placeholder:text-transparent text-sm p-1 px-2"
                type="text"
                placeholder="Search Crypto..."
              />
              <SearchIcon className="h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* bottom section */}
     <SearchHeaderOptions />
    </div>
  );
}

export default Header;
