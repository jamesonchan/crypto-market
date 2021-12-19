import React from "react";
import {
  DatabaseIcon,
  NewspaperIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";

function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="bg-[#2b3752]">
      <div className="flex justify-evenly shadow-lg">
        <Link href="/">
          <a
            className={`headerOptions ${
              router.pathname === "/" && "text-yellow-300 border-b-yellow-300"
            }`}
          >
            <DatabaseIcon className="h-6" />
            <span className="hidden sm:inline-flex">Coins</span>
          </a>
        </Link>
        <Link href="/news?page=1">
          <a
            className={`headerOptions ${
              router.pathname === "/news" &&
              "text-yellow-300 border-b-yellow-300"
            }`}
          >
            <NewspaperIcon className="h-6" />
            <span className="hidden sm:inline-flex">News</span>
          </a>
        </Link>
        <Link href="/tech">
          <a
            className={`headerOptions ${
              router.pathname === "/tech" &&
              "text-yellow-300 border-b-yellow-300"
            }`}
          >
            <ChartBarIcon className="h-6" />
            <span className="hidden sm:inline-flex">Technical Analysis</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
