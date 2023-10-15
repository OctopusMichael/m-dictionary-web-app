"use client";

import { Frown } from "lucide-react";

export default function Error() {
  return (
    <div className="px-[30px] md:px-0 container flex flex-col  gap-5 justify-center items-center ">
     
      <div className="flex flex-col gap-2 justify-center items-center text-red-500">
        <span className="text-[30px] md:text-[50px]">ERROR!</span>
        <span className="text-[50px] md:text-[60px]">404</span>
        <span className="text-[30px] md:text-[50px]"> PAGE NOT FOUND </span>
        <span><Frown  className="text-red-600" /></span>
      </div>
      <p className="text-3xl text-red-600 text-center dark:text-white"> </p>
    </div>
  );
}
