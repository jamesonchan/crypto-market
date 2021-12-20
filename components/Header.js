import React, { useEffect, useMemo, useState } from "react";
import Doge from "../images/doge-removebg-preview.png";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import SearchHeaderOptions from "./SearchHeaderOptions";
import { searchState } from "../atoms/SearchAtom";
import { useRecoilState } from "recoil";
import { debounce } from "lodash";
import { useRouter } from "next/router";

function Header({ results }) {
  const [searchValue, setSearchValue] = useRecoilState(searchState);
  const [searchResult, setSearchResult] = useState([]);
  const router = useRouter()

  useEffect(() => {
    const result = results?.data.coins.filter((result) =>
      result.name.toLowerCase().includes(searchValue.substring())
    );
    setSearchResult(result);
  }, [searchValue]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const debouncedHandleSearch = useMemo(
    () => debounce(handleSearch, 300),
    [searchValue]
  );

  useEffect(() => {
    return () => {
      debouncedHandleSearch.cancel();
    };
  }, []);



  return (
    <header className="" id="header">
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
            <div className="bg-[#171b25] p-2 relative rounded-md flex items-center w-[150px] md:w-[200px]">
              <input
                className="text-white w-full bg-transparent outline-none focus:placeholder:text-transparent text-sm p-1 px-2"
                type="text"
                placeholder="Search Crypto..."
                onChange={debouncedHandleSearch}
              />
              <SearchIcon className="h-5 text-white" />
              <div
                className={`hidden${
                  searchValue && "top-[20px] absolute"
                } w-[145px] sm:w-[195px] h-[300px] top-[50px] right-0.5 bg-gray-600 rounded-lg bg-opacity-80 shadow-md overflow-hidden transition-all duration-250 overflow-y-scroll py-1 scrollbar-hide z-20`}
              >
                {searchResult?.length === 0 ? (
                  <h1 className="text-white font-bold text-sm sm:text-lg text-center p-5">Bow-wow,results not found...</h1>
                ):(
                  searchResult?.map((result) => (
                    <div key={result.id} className="text-white">
                      <div onClick={()=>router.push(`/search/${result.id}`).then(setSearchValue(''))} className="flex items-center p-3 hover:bg-gray-300 space-x-2 cursor-pointer">
                        <img className="h-5" src={result.iconUrl} alt="" />
                        <div>
                        <h1 className="text-sm font-semibold">{result.name}</h1>
                        <p>{result.symbol}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <SearchHeaderOptions />
    </header>
  );
}

export default Header;
