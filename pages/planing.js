import { BsFillCalendarEventFill,BsFillBadgeCcFill} from "react-icons/bs"
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaGripLinesVertical,FaPlayCircle,FaAngleDoubleRight,FaLanguage } from "react-icons/fa";
import { NextSeo } from "next-seo";
import Pub from "@/components/pub";
import Pub1 from "@/components/pub1";
export async function getServerSideProps({context}) {
    
    // Fetch data from external API
    const data = await (await fetch(`https://api.toonanime.org/api/allplaning`)).json();
   
    // Returning the fetched data
    return { props: { data } }
  }
const Planing = ({ data }) => {
    var truncate = (str, max, suffix) => {
        return str.length < max
          ? str
          : `${str.substr(
              0,
              str.substr(0, max - suffix.length).lastIndexOf(" ")
            )}${suffix}`;
      };


const [current, setCurrent] = useState(false);
const [currentvf, setCurrentvf] = useState(false);
let today = new Date();
function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}
 

var dateStr = today;
const todayday = getDayName(dateStr, "fr-FR");
const weekday = [{ id: "1", day: "lundi" }, { id: "2", day: "mardi" }, { id: "3", day: "mercredi" }, { id: "4", day: "jeudi" }, { id: "5", day: "vendredi" }, { id: "6", day: "samedi" }, { id: "7", day: "dimanche" }]

const lundi = data.filter((item) => item.day === 1);
const mardi = data.filter((item) => item.day === 2);
const mercredi =data.filter((item) => item.day === 3);
const jeudi =data.filter((item) => item.day === 4);
const vendredi =data.filter((item) => item.day === 5);
const samedi =data.filter((item) => item.day === 6);
const dimanche =data.filter((item) => item.day === 7);
useEffect(() => {
  //scorll to current day id on load
  const element = document.getElementById(todayday);
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}, [])
function filtervf(e){
  const value = e.target.value;
 


    setCurrentvf(true)
    setCurrent(false)
   var hold=document.getElementsByClassName('animePlanning')
    for (var i = 0; i < hold.length; i++) {
      if (hold[i].classList.contains('vostfr')) {
      
        hold[i].style.display = "none";
      } else {
        hold[i].style.display = "block";
      }
    }
  
}
function filter(e){

    setCurrent(true)
    setCurrentvf(false)
    var hold=document.getElementsByClassName('animePlanning')
    
    for (var i = 0; i < hold.length; i++) {
      if (hold[i].classList.contains('vostfr')) {
       
        hold[i].style.display = "block";
      } else {
        hold[i].style.display = "none";
      }
    }
  

}
   



const clearfilter = event => {
    setCurrent(false)
    setCurrentvf(false)
    var hold=document.getElementsByClassName('animePlanning')
    for (var i = 0; i < hold.length; i++) {
      hold[i].style.display = "block";
    }
 
};
        

    return (
        <>
 
 <NextSeo
      title="Planing des Animes Vf et Vostfr  - ToonAnime"
      description="planning de sortie des anime vf et vostfr par jour et par heure. "
      additionalMetaTags={[{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }, 
      {
        httpEquiv: 'Content-Type',
        content: 'text/html; charset=utf-8'
      }, {
        httpEquiv: 'Content-Language',
        content: 'fr'
      }, {
        name: 'robots',
        content: 'index, follow'
      }, {
        name: 'googlebot',
        content: 'index, follow'
      }, {
       
        name: 'keywords',
        content: 'planing anime vf,planning anime vostfr ,planning anime par heure'
      },{
        name: 'apple-mobile-web-app-status-bar',
        content: '#101317'
      },{
        
      },]}
  
      
    />
                <div className="grid grid-cols-6 pb-16 pt-16">
                    <div ><Pub/></div>
                    <div className="col-span-6 mx-3 lg:col-span-4 lg:mx-0 mt-6 z-10">
                      
                              
                        <div className="flex flex-inline text-4xl lg:text-5xl uppercase text-white/90  font-bold mb-10 bg-zinc-200  dark:bg-zinc-900 rounded-lg  p-3 items-center bg-gradient-to-r from-tacolor  to-bgta_color text-md shadow-lg  ">
                        <BsFillCalendarEventFill className="text-3xl " />
        <h1 className="text-2xl uppercase pl-5  ">Planing</h1>

      </div>
                        <div className="sm:flex sm:flex-row grid grid-cols-2 sm:justify-start items-center   bg-zinc-200  dark:bg-zinc-900 rounded-lg p-2 ">
                          <span className="text-base lg:text-lg  py-2 px-4 font-base font-semibold mt-2 pr-1 m-2 pb-2">Filtre </span>
                          {currentvf  ? ( 
                                <>
                                <button  onClick={filtervf} value="vostfr" 
                                className="flex   hover:opacity-80 text-white shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline outline-1 m-2 py-1 p-3  my-2 transition-all duration-200 hover:cursor-pointer bg-tacolor-500">
                         <FaLanguage className="h-7 w-7 mr-4" />vf</button>
                         </>
                                  ) : (
                                    <>
                                    <button  onClick={filtervf} value="vostfr" 
                                    className="flex bg-black/90 hover:opacity-80 text-white shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline outline-1 m-2 py-1 p-3  my-2 transition-all duration-200 hover:cursor-pointer">
                             <FaLanguage className="h-7 w-7 mr-4" />vf</button>
                             </>
                                  )}
                               
                      
                               {current ? ( 
                                <>
                                <button  onClick={filter} value="vostfr" 
                                className="flex hover:opacity-80 text-white shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline outline-1 m-2 py-1 p-3  my-2 transition-all duration-200 hover:cursor-pointer bg-tacolor-500">
                         <BsFillBadgeCcFill className="h-7 w-7 mr-4" />vostfr</button>
                         </>
                                  ) : (
                                    <>
                                    <button  onClick={filter} value="vostfr" 
                                    className="flex bg-black/90 hover:opacity-80 text-white shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline outline-1 m-2 py-1 p-3  my-2 transition-all duration-200 hover:cursor-pointer">
                             <BsFillBadgeCcFill className="h-7 w-7 mr-4" />vostfr</button>
                             </>
                                  )}
                               
                          
                              <button  onClick={clearfilter} 
                                    className="flex bg-black/90 hover:opacity-80 text-white shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline outline-1 m-2 py-1 p-3  my-2 transition-all duration-200 hover:cursor-pointer">
                      
                              <svg
                                            className="block h-7 w-7"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                        </button>
                                        </div>
                        <div className="mt-2 w-full flex flex-col  rounded-md    bg-zinc-200  dark:bg-zinc-900  bg-opacity-70">
                  
      
                            {Object.keys(weekday).map((key) => (
                           
                            
                                <div key={`day${key}`} 
                                className={
                                  todayday === weekday[key].day
                                    ? "text-tacolor-400 px-2 rounded  bg-zinc-600  transition duration-75 "
                                    : "px-2 rounded  "
                                }
                            >
                                   
                                        <h2 className="text-center text-2xl font-bold uppercase mt-6 mb-4 border-b-4 border-tacolor">
                                            {weekday[key].day}
                                        </h2>
                                    
                                   
                                {weekday[key].day === "lundi"   && 
                                    <div key="lundi" id="lundi"  className="flex flex-rows overflow-auto ">
                                    {lundi.map((item,index) => (
                                   
                                      <div id="holder" className=" mb-6 bg-opacity-70 rounded ">
                                        <Link key={`anime${index}`} id="lundi" href={`/anime/${item.id}-${item.url}`} passHref  className={`animePlanning ${item.language}`} >
                                        <div className="relative group shadow-xl   hover:cursor-pointer  transition-all duration-200 cursor-pointer w-28 md:w-36 my-5 mx-2">
                                       
                            
                          
                          
                                        <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                        <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                          <div
                                            id="list-skeleton"
                                            className="h-56  rounded-md"
                                          >
                                              <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                              alt={item.title}
                              src={`https://cdn.statically.io/img/api.toonanime.org/${item.cover}`}
                              className="rounded-md group-hover:brightness-50 group-hover:duration-1000 "
                              fill
                             
                            />
                            <span className="relative top-2  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
                            <span className="relative top-2 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">{item.language}</span>
                            <br />
                            <span className="relative top-4 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
                            <br />
                            
                           
                          
                            {item.status== "En cours" ? (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                                          ) : (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                                          )}
                          
                          
                           
                          
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                                          <p
                                            id="item-name"
                                            className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0   "
                                          >
                                            {truncate(item.title, 30, "...")}
                                          </p>
                                      
                                     
                                        </div>
                                        </div>
                                        
                          </div>
                          
                                            
                          </div>
                                      </Link>
                                       </div>
                                       
                                    )
                                ) }
                             
                                </div>
                                }
                   
                                  {weekday[key].day === "mardi"   &&
                                    <div key="mardi" id="mardi"  className="flex flex-rows overflow-auto ">
                              
                                    {mardi.map((item,index) => (
                                        <Link key={`anime${index}`} id="mardi" href={`/anime/${item.id}-${item.url}`} passHref  className={`animePlanning ${item.language}`}>
                                        <div className="relative group shadow-xl   hover:cursor-pointer  transition-all duration-200 cursor-pointer w-28 md:w-36 my-5 mx-2">
                                       
                            
                          
                          
                                        <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                        <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                          <div
                                            id="list-skeleton"
                                            className="h-56  rounded-md"
                                          >
                                              <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                              alt={item.title}
                              src={`https://cdn.statically.io/img/api.toonanime.org/${item.cover}`}
                              className="rounded-md group-hover:brightness-50 group-hover:duration-1000 "
                              fill
                             
                            />
                            <span className="relative top-2  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
                                <span className="relative top-2 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">{item.language}</span>
                            <br />
                            <span className="relative top-4 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
                            <br />
                            
                           
                          
                            {item.status== "En cours" ? (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                                          ) : (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                                          )}
                          
                          
                           
                          
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                                          <p
                                            id="item-name"
                                            className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0   "
                                          >
                                            {truncate(item.title, 30, "...")}
                                          </p>
                                      
                                     
                                        </div>
                                        </div>
                                        
                          </div>
                          
                                            
                          </div>
                                      </Link>
                                    )
                                ) }
                                  </div>
                                }
                                     
                                     {weekday[key].day === "mercredi"   &&
                                    <div key="merc" id="mercredi"  className="flex flex-rows overflow-auto ">
                                    {mercredi.map((item,index) => (
                                        <Link key={`anime${index}`} id="mercredi" href={`/anime/${item.id}-${item.url}`} passHref  className={`animePlanning ${item.language}`}>
                                        <div className="relative group shadow-xl   hover:cursor-pointer  transition-all duration-200 cursor-pointer w-28 md:w-36 my-5 mx-2">
                                       
                            
                          
                          
                                        <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                        <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                          <div
                                            id="list-skeleton"
                                            className="h-56  rounded-md"
                                          >
                                              <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                              alt={item.title}
                              src={`https://cdn.statically.io/img/api.toonanime.org/${item.cover}`}
                              className="rounded-md group-hover:brightness-50 group-hover:duration-1000 "
                              fill
                             
                            />
                            <span className="relative top-2  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
                                <span className="relative top-2 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">{item.language}</span>
                            <br />
                            <span className="relative top-4 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
                            <br />
                            
                           
                          
                            {item.status== "En cours" ? (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                                          ) : (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                                          )}
                          
                          
                           
                          
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                                          <p
                                            id="item-name"
                                            className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0   "
                                          >
                                            {truncate(item.title, 30, "...")}
                                          </p>
                                      
                                     
                                        </div>
                                        </div>
                                        
                          </div>
                          
                                            
                          </div>
                                      </Link>
                                    )
                                ) }
                                  </div>
                                }
                                     {weekday[key].day === "jeudi"   &&
                                    <div key="jeu" id="jeudi"  className="flex flex-rows overflow-auto ">
                                    {jeudi.map((item,index) => (
                                        <Link key={`anime${index}`} id="jeudi"  href={`/anime/${item.id}-${item.url}`} passHref  className={`animePlanning ${item.language}`}>
                                        <div className="relative group shadow-xl   hover:cursor-pointer  transition-all duration-200 cursor-pointer w-28 md:w-36 my-5 mx-2">
                                       
                            
                          
                          
                                        <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                        <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                          <div
                                            id="list-skeleton"
                                            className="h-56  rounded-md"
                                          >
                                              <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                              alt={item.title}
                              src={`https://cdn.statically.io/img/api.toonanime.org/${item.cover}`}
                              className="rounded-md group-hover:brightness-50 group-hover:duration-1000 "
                              fill
                             
                            />
                            <span className="relative top-2  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
                                <span className="relative top-2 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">{item.language}</span>
                            <br />
                            <span className="relative top-4 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
                            <br />
                            
                           
                          
                            {item.status== "En cours" ? (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                                          ) : (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                                          )}
                          
                          
                           
                          
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                                          <p
                                            id="item-name"
                                            className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0   "
                                          >
                                            {truncate(item.title, 20, "...")}
                                          </p>
                                      
                                     
                                        </div>
                                        </div>
                                        
                          </div>
                          
                                            
                          </div>
                                      </Link>
                                    )
                                ) }
                                  </div>
                                }
                                     {weekday[key].day === "vendredi"   &&
                                    <div key="vend" id="vendredi"  className="flex flex-rows overflow-auto ">
                                    {
                                    vendredi.map((item,index) => (
                                        <Link key={`anime${index}`}  id="vendredi" href={`/anime/${item.id}-${item.url}`} passHref  className={`animePlanning ${item.language}`}>
                                        <div className="relative group shadow-xl   hover:cursor-pointer  transition-all duration-200 cursor-pointer w-28 md:w-36 my-5 mx-2">
                                       
                            
                          
                          
                                        <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                        <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                          <div
                                            id="list-skeleton"
                                            className="h-56  rounded-md"
                                          >
                                              <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                              alt={item.title}
                              src={`https://cdn.statically.io/img/api.toonanime.org/${item.cover}`}
                              className="rounded-md group-hover:brightness-50 group-hover:duration-1000 "
                              fill
                             
                            />
                            <span className="relative top-2  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
                                <span className="relative top-2 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">{item.language}</span>
                            <br />
                            <span className="relative top-4 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
                            <br />
                            
                           
                          
                            {item.status== "En cours" ? (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                                          ) : (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                                          )}
                          
                          
                           
                          
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                                          <p
                                            id="item-name"
                                            className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0   "
                                          >
                                            {truncate(item.title, 30, "...")}
                                          </p>
                                      
                                     
                                        </div>
                                        </div>
                                        
                          </div>
                          
                                            
                          </div>
                                      </Link>
                                    )
                                ) }
                                  </div>
                                }

                                     {weekday[key].day === "samedi"   &&
                                    <div key="same" id="samedi"  className="flex flex-rows overflow-auto ">
                                    {samedi.map((item,index) => (
                                        <Link key={`anime${index}`} id="samedi" href={`/anime/${item.id}-${item.url}`} passHref  className={`animePlanning ${item.language}`}>
                                        <div className="relative group shadow-xl   hover:cursor-pointer  transition-all duration-200 cursor-pointer w-28 md:w-36 my-5 mx-2">
                                       
                            
                          
                          
                                        <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                        <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                          <div
                                            id="list-skeleton"
                                            className="h-56  rounded-md"
                                          >
                                              <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                              alt={item.title}
                              src={`https://cdn.statically.io/img/api.toonanime.org/${item.cover}`}
                              className="rounded-md group-hover:brightness-50 group-hover:duration-1000 "
                              fill
                             
                            />
                            <span className="relative top-2  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
                                <span className="relative top-2 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">{item.language}</span>
                            <br />
                            <span className="relative top-4 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
                            <br />
                            
                           
                          
                            {item.status== "En cours" ? (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                                          ) : (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                                          )}
                          
                          
                           
                          
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                                          <p
                                            id="item-name"
                                            className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0   "
                                          >
                                            {truncate(item.title, 30, "...")}
                                          </p>
                                      
                                     
                                        </div>
                                        </div>
                                        
                          </div>
                          
                                            
                          </div>
                                      </Link>
                                    )
                                ) }
                                  </div>
                                }

                                     {weekday[key].day === "dimanche"   &&
                                    <div key="dima"  id="dimanche"  className="flex flex-rows overflow-auto ">
                                    {dimanche.map((item,index) => (
                                        <Link key={`anime${index}`} id="dimanche" href={`/anime/${item.id}-${item.url}`} passHref  className={`animePlanning ${item.language}`}>
                                        <div className="relative group shadow-xl   hover:cursor-pointer  transition-all duration-200 cursor-pointer w-28 md:w-36 my-5 mx-2">
                                       
                            
                          
                          
                                        <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                        <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                          <div
                                            id="list-skeleton"
                                            className="h-56  rounded-md"
                                          >
                                              <div style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                              alt={item.title}
                              src={`https://cdn.statically.io/img/api.toonanime.org/${item.cover}`}
                              className="rounded-md group-hover:brightness-50 group-hover:duration-1000 "
                              fill
                             
                            />
                            <span className="relative top-2  float-right  rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize">{item.time}</span>
                                <span className="relative top-2 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase">{item.language}</span>
                            <br />
                            <span className="relative top-4 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastepisode}</span>
                            <br />
                            
                           
                          
                            {item.status== "En cours" ? (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                                          ) : (
                                              <span className="relative top-8 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                                          )}
                          
                          
                           
                          
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black  ">
                                          <p
                                            id="item-name"
                                            className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0   "
                                          >
                                            {truncate(item.title, 30, "...")}
                                          </p>
                                      
                                     
                                        </div>
                                        </div>
                                        
                          </div>
                          
                                            
                          </div>
                                      </Link>
                                    )
                                ) } </div>
                                     }

                                </div>

                                        
                                   

                               
                                 
                                
                               
                             
                            ))}

                        </div>
                    </div>


                    <div ><Pub1/></div>
                </div>





        </>

    )
}




export default Planing
