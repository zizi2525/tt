import Link from "next/link";
import Image from "next/image";
import { FaGripLinesVertical,FaPlayCircle,FaAngleDoubleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import { useEffect, useState } from 'react';
export default function ListPlaning({ pageTitle, data,link }) {
    var truncate = (str, max, suffix) => {
        return str.length < max
          ? str
          : `${str.substr(
              0,
              str.substr(0, max - suffix.length).lastIndexOf(" ")
            )}${suffix}`;
      };

 

    let today = new Date();
    function getDayName(dateStr, locale)
    {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }
    
    var dateStr = today;
    var day = getDayName(dateStr, "fr-FR");




  return (
    
    <>
    
    <section className="lex place-items-center my-6 md:mx-6 mb-7  mr-0  ">
      <div className="flex place-items-center md:rounded-md  mb-4 ml-0 mt-3 bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3">
      <FaGripLinesVertical size={28} className="text-white "  />
      <h2
          style={{ fontSize: 20 }}
          id="listinfo"
          className="font-semibold  text-white capitalize"
        >
          Ce {day}
         
        </h2>
        <Link className="ml-auto text-white flex flex-wrap justify-center items-center" style={{fontSize:20}} href={link} ><span className="mr-2">Plus</span><FaAngleDoubleRight className="mt-2"></FaAngleDoubleRight></Link>
      </div>
     
      <Swiper
  
                   
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },
                      1280: {
                        slidesPerView: 6,
                        spaceBetween: 2,
                      },
                    }}
                    loop={false}
                    navigation={true}
                    effect={"fade"}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                      
                    }}
        
                    style={{
                      "--swiper-navigation-color": "#ff0040",
                      "--swiper-navigation-size": "3.5rem",
                           minHeight: '360px'
                          }
                    }
                    
                    modules={[Navigation]}
                   
                    
                   
                >
    {/*   */}
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="pb-4">
            <Link key={index} href={item.url} passHref className="anime w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5  xl:w-1/6" >
              <div className="group  relative shrink-0  group shadow-xl rounded-md hover:cursor-pointer mb-2  bg-opacity-75 overflow-hidden my-2 mx-2 ml-2 md:ml-2 shadow-black hover:shadow-zinc-800 transition-all duration-200 cursor-pointer">
             
  


              <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
              <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                <div
                  id="list-skeleton"
                  className="h-80 rounded-md w-full "
                >
                    <div style={{width: '100%', height: '100%'}} className="relative">
  <Image
    alt={item.name}
    src={`https://cdn.statically.io/img/api.toonanime.org/${item.img}`}
    className="rounded-md group-hover:brightness-50 group-hover:duration-1000 object-fill "
   fill
     sizes="(max-width: 768px) 33vw,12vw"
  
  
   
  />
  <span className="relative top-4  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
 
  {item.language == "vostfr" ? (
   
    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase before:content-['vostfr']"></span>
  ) : (
    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase before:content-['vf']"></span>)    }
  
  <br />
  <span className="relative top-8 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
  <br />
  
 

  {item.status== "En cours" ? (
                    <span className="relative top-40 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                ) : (
                    <span className="relative top-40 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                )}


 

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                <p
                  id="item-name"
                  className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0 "
                >
                  {truncate(item.name, 30, "...")}
                </p>
            
           
              </div>
              </div>
              
</div>

                  
</div>
            </Link>
            </SwiperSlide>
          );
        })}
        </Swiper>
        </section>
    </>
  );
}
