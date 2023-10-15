"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import playAudio from "@/images/icon-play.svg";
import newWindow from "@/images/icon-new-window.svg";
import Loading from "@/components/Loading";

const rutaDinamica = ({ params }) => {
  const { word } = params;
  const [data, setData] = useState();
  const [play , setPlay] = useState(false);
  

  const handlePlay = (sound) =>{
    setPlay(!play)
    const audio = new Audio(sound);
    
      audio.play();
   
  }
 

  

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        let data = await res.json();
        setData(data);
        
      } catch (error) {
        // Manejar errores
        console.error("Error al obtener datos:", error.message);
        setError(true)
      }
    };

    getData();
  }, [word]);

  if (!data) {
    return <Loading/>;
  }
 
  return (
    <section>
      <div className=" px-[30px] md:px-0 container h-auto pb-[100px] dark:text-white ">
        <div className="flex flex-col ">
          <div className="flex flex-row   justify-between items-center  ">
            <div>
              <h1 className="text-[40px]">{data[0].word}</h1>
              <h2 className="text-purpleFont">{data[0].phonetic}</h2>
            </div>
            <button onClick={() => handlePlay(data[0].phonetics[0].audio)} className="w-[50px] h-[50px]">
            
              <Image
                className="w-auto h-auto"
                src={playAudio}
                width={30}
                height={30}
                priority="true"
                alt="icono Audio phonetic word"
              />
            </button>
          </div>
        </div>

        {data[0].meanings.map((element, i) => {
          return (
            <div key={i} className="flex flex-col  ">
              <div className="flex flex-row items-center gap-3">
                <h1 className="text-[28px] my-[20px]">
                  {element.partOfSpeech}
                </h1>

                <div className="bg-gray-200 w-full h-[1px]" />
              </div>
              <div>
                <h1 className="text-gray-300 mb-[20px] text-[20px]">Meaning</h1>
                <h2>
                  {element.definitions.map((e, i) => (
                    <ul key={i} className="ps-[20px]">
                      <li className="list-disc  text-purple-500 ">
                        <span className="text-black dark:text-white">
                          {e.definition}
                        </span>
                      </li>
                      <li className="text-gray-300 my-[10px] ">{e.example}</li>
                    </ul>
                  ))}
                </h2>
                {element.synonyms.length !== 0 ? (
                  <p className="text-gray-300 flex gap-5 text-[20px] my-[20px]">
                    Synonyms{" "}
                    <span className="text-purpleFont">
                      {element.synonyms[0]} - {element.synonyms[1]}{" "}
                    </span>{" "}
                  </p>
                ) : (
                  ""
                )}
                {element.antonyms.length !== 0 ? (
                  <p className="text-gray-300 flex gap-5 text-[20px] my-[20px]">
                    Antonyms{" "}
                    <span className="text-purpleFont">
                      {element.antonyms[0]} - {element.antonyms[1]}{" "}
                    </span>{" "}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
        <div>
          <div className="bg-gray-200 w-full h-[1px]" />

          {data[0].sourceUrls.lengt !== 0 ? (
            <div className="flex flex-col">
              <h1 className="text-gray-300 text-[20px] my-[20px]">Source</h1>
              <a
                className="underline flex gap-2 items-center hover:text-blue-600"
                href={`${data[0].sourceUrls}`}
                target="_blank"
              >
                {data[0].sourceUrls}
                <Image
                  className="w-auto h-auto"
                  width={20}
                  height={20}
                  priority="true"
                  src={newWindow}
                  alt="icon new window with URL"
                />
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default rutaDinamica;
