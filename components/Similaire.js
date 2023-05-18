import { FaGripLinesVertical ,FaPlayCircle} from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";



export default function Similaire({title,like} ) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function a() {
            var response = await fetch(`https://api.toonanime.org/api/animefilter?type=&limite=5&status=&annee=&language=&sort&genres=${like.split(',')[0]}&page=1&title=`);
            response = await response.json();
            setData(response.data);
        }
        a();
        
    }, []);
    
const truncate = (str, max, suffix) => {
    if (str.length > max) {
        str = str.substring(0, max + 1);
        str = str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
        str = str + suffix;
            
    }
    return str;
};


    




    return (
        <div className=" rounded-lg p-2 mt-4  ">
        <span className="flex bg-gradient-to-r from-tacolor to-bgta_color text-md font-bold shadow-lg p-3 rounded-lg w-full items-center text-white">
          {" "}
          <FaGripLinesVertical size={28} className="text-white " />
          <h3 className="text-white ">
            Anime Similiare a {title}
          </h3>{" "}
        </span>
        <div
              className="flex flex-wrap justify-start  bg-zinc-200  dark:bg-zinc-900 py-4 gap-0.25 "
              id="similaire"
            >
                
                    {data.map((item, index) => {
                        return (
                          <Link
                            key={`similaire-${index}`}
                            href={`/anime/${item.id}-${item.url}`}
                            passHref
                            className="anime w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5  "
                          >
                            <div className="group  relative shrink-0  group shadow-xl rounded-md hover:cursor-pointer mb-2   bg-tacolor-800 bg-opacity-75 overflow-hidden my-2 mx-2 ml-2 md:ml-2 shadow-black hover:shadow-zinc-800 transition-all duration-200 cursor-pointer ">
                              <FaPlayCircle
                                size={40}
                                className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  "
                              ></FaPlayCircle>
                              <FaPlayCircle
                                size={40}
                                className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block "
                              ></FaPlayCircle>
                              <div id="list-skeleton" className="h-80 rounded-md ">
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "relative",
                                  }}
                                >
                                
                                    <Image
                                      alt={item.title}
                                      src={`https://cdn.statically.io/img/api.toonanime.org${item.image}`}
                                      className="rounded-md group-hover:brightness-50 group-hover:duration-1000 object-cover group-hover:scale-105 transition-all duration-500"
                                      fill
                                    />
                                 
                                  {item.language == "vostfr" ? (
                                    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold ">VOSTFR</span>
                                  ) : (
                                    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">VF</span>
                                  )}
                                  <br />
                              
                                    <span className="relative top-8 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">
                                      Ep {item.lastepisode}
                                    </span>
                                  
            
                                  <br />
                               
                                  {item.status == "En cours" ? (
                                    <span className="relative top-28 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">
                                      {item.status}
                                    </span>
                                  ) : (
                                    <span
                                      className={`relative  top-28 rounded-r-lg px-2 py-2 ${
                                        item.status == "Prochainement"
                                          ? "bg-pink-500"
                                          : "bg-red-800"
                                      }  text-xs text-white font-bold capitalize`}
                                    >
                                      {item.status}
                                    </span>
                                  )}
            
                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black "></div>
                                  <p
                                    id="item-name"
                                    className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0  "
                                  >
                                    {truncate(item.title, 40, "...")}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                        })}
                    </div>
                    </div>
    )
                    }
        







