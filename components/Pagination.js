import React, { useEffect } from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { animateScroll } from "react-scroll";


function Pagination() {
  const router = useRouter();
  const pageIndex = Number(router.query.page) || 0;

    const scrollToTop = ()=>{
        animateScroll.scrollToTop()
    }

  return (
    <div className=" py-5 flex text-yellow-300 max-w-xs mx-auto justify-between">
      <Link href={`/news?page=${pageIndex <= 1 ? pageIndex : pageIndex - 1}`}>
        <ArrowCircleLeftIcon className="h-8 cursor-pointer" onClick={scrollToTop}/>
      </Link>
      <Link href={`/news?page=${pageIndex + 1}`}>
        <ArrowCircleRightIcon className="h-8 cursor-pointer" onClick={scrollToTop} />
      </Link>
    </div>
  );
}

export default Pagination;
