import React from "react";
import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full bg-[#3a5b83] text-base font-bold text-gray-200 mt-10 border-t-2 border-t-gray-500">
      <div className="px-8 py-3 bg-[#2b3752]">
        <p>United States</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-yellow-300" /> Doge since 2013
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How crypto works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Setting</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
