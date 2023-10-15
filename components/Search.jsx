"use client";
import Link from "next/link";
import Image from "next/image";
import serchIcon from "@/images/icon-search.svg";
import useWord from "@/hooks/useWord";

const Search = () => {
  const { inputValue, setInputValue, handleSubmit, handleChange } = useWord();
  return (
    <section>
      <form
        id="form"
        onSubmit={handleSubmit}
        className=" px-[30px] md:px-0 container flex  flex-row py-[50px] "
      >
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for any word... "
          type="text"
          className="bg-grayInput  dark:bg-darkInput rounded-l-2xl  w-full h-14 focus:outline-none ps-5 "
        />
        <button className="bg-grayInput dark:bg-darkInput   rounded-r-2xl pe-5 ">
          <Link href={inputValue}>
            <Image
              
              width={20}
              height={20}
              priority="true"
              src={serchIcon}
              alt="serch icon "
            />
          </Link>
        </button>
      </form>
    </section>
  );
};

export default Search;
