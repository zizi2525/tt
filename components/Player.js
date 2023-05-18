import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import {FaAngleDoubleRight,FaAngleRight,FaAngleLeft,FaAngleDoubleLeft,FaInfoCircle,FaQuestionCircle,FaCheckCircle,FaSpinner} from "react-icons/fa"
import { useRouter } from 'next/router'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
export default function Player({
  name,
  anime,
  info,
  category,
  url,
  langue,
  episodes,
  totalEpisode,
  currentEpisode,
  videoData,
  alternative_title,
  saisonId, 
  saisonName,
  img,
  id,
  lastEpisode ,
  firstEpisode 

}) {
  
  const router = useRouter()

    const [isMounted,setIsMounted] = useState(false)
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
 const [current, setCurrent] = useState("");
 const [selectedOptions, setSelectedOptions] = useState("");
const [selectedlecteur,setselectedlecteur] =useState("");
//controle iframe seektime react

  useEffect(() => {


    setSelectedOptions(router.asPath)
    setIsMounted(true);
    var element = document.querySelector("iframe");
    element.setAttribute("src", videoData[0].url);
    setCurrent(videoData[0].url)
    setselectedlecteur(videoData[0].url)
    async function a() {
     
   
        var continuwatching = JSON.parse(window.localStorage.getItem("continues"));
        if( continuwatching === null){
            continuwatching = []
        }
        var continuwatching = continuwatching.filter((item) => item.name === name)
           if (continuwatching.length === 0){
            return ''
           }
             else{
              document.getElementById("laste").innerHTML = `<div class="text-sm font-semibold mr-2 py-2 px-6"><p>Dernier &eacute;pisode regard&eacute; : &eacute;pisode ${continuwatching[0].episode}</p> </div>`
              
             
                }
                console.log(parseInt(Number(currentEpisode) + 1))
                console.log(firstEpisode)

      if (currentEpisode > Number(firstEpisode) &&  Object.values(episodes).length != 0) {
        setPrevious(episodes[Number(currentEpisode) - 1].url);
       
      } else {
        setPrevious("");
      }
      if (currentEpisode < Number(lastEpisode) && Object.values(episodes).length != 0) {
        setNext(episodes[parseInt(Number(currentEpisode) + 1)].url);
    
      } else {
        setNext("");
      }
    }
    a();


  
    const iframeEle = document.getElementById('iframe');
    const loadingEle = document.getElementById('loading');
    if (current.includes(".mp4")) {
        return;
    }else{
      iframeEle.addEventListener('load', function () {
        // Hide the loading indicator
        loadingEle.style.display = 'none';
    
        // Bring the iframe back
        iframeEle.style.opacity = 1;
      });
    }
    
 
  

  
  }, [episodes, currentEpisode]);


  const clickHandle = (event) => {
   
    setCurrent(event.currentTarget.value)
    setselectedlecteur(event.currentTarget.value)
    var element = document.querySelector("iframe");
    element.setAttribute("src", event.currentTarget.value);
    var button = document.getElementById(event.currentTarget.value);

   
   
}
  const attachEventHandler = () => {
    try {
      document
        .getElementsByClassName("plyr__controls__item plyr__control")[3]
        .addEventListener("click", rotate);
      if (document.getElementsByTagName("video")[0].attributes.src != "") {
        clearInterval(intervalId);
      }
    } catch {}
  };

  try {
    var intervalId = window.setInterval(attachEventHandler, 500);
  } catch {}

  const getOppositeOrientation = () => {
    const { type } = screen.orientation;
    return type.startsWith("portrait") ? "landscape" : "portrait";
  };

  const rotate = async () => {
    try {
      const newOrientation = getOppositeOrientation();
      await screen.orientation.lock(newOrientation);
    } catch {}
  };

  const truncate = (str, max, suffix) => {
    if (str === undefined) {
      return undefined;
    }
    
    return str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;
  };
  function handleSelect(data) {
    setSelectedOptions(data.target.value);

    router.push(data.target.value)
  }
function nextL (data) {
  
  router.push(data)
}
function Info (data) {
  
  router.push(data)
}
function Lastfirst(data){
  router.push(url+'/regarder?ep='+data)

}
const mort = (e,id) => {
  const post = fetch('https://api.toonanime.org/api/mort?title='+e+'&id='+id, {
  })
  .then(response => response.json())
  .then(data => {
   document.getElementById('problem').style.display = 'none'
   document.getElementById('rph').style.display = 'flex'
   document.getElementById('rp').innerText = 'Merci, nous allons corriger le problème dans les plus brefs d&eacute;lais'
  }
  )

}


  return (
    <>
     
                        <div className="flex flex-col lg:flex-row sm:mx-3 md:mx-10 md:flex-row rounded-md  " >
                       
                            <div className="w-full ">
                              <div className="relative flex flex-col justify-start text-white/90  py-5 bg-zinc-300 dark:bg-zinc-900  mb-5  text-md shadow-lg rounded-lg">
                                
                                <h1 className="z-10 text-2xl rounded-sm px-6 font-bold capitalize mb-2">{name} Episode  {currentEpisode} </h1> 
                                <div className='cover-img  '>
              <Image src={img} alt={name} fill className='poster absolute object-cover brightness-50  '></Image>
              </div>
                              <h2 className="text-md italic py-2 px-6 z-10 ">{alternative_title}</h2>
                             </div >

                             <div id="laste" className="flex flex-col justify-start  bg-zinc-300 dark:bg-zinc-900 my-2 rounded-lg py-2 bg-gradient-to-r from-tacolor to-bgta_color text-md font-bold shadow-lg  w-full  text-white">
                             
                       
                               </div>
                               <div className="text-sm font-semibold  py-2 px-6 my-2 relative m-x">
                               <p className="capitalize ">si la vid&eacute;o ne d&eacute;marre pas ou si vous voyez un code d&rsquo;erreur, essayez de changer le lecteur ci dessous ou veuillez vous r&eacute;fferez a la   <span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-tacolor relative inline-block ">
    <span className="relative text-white "><Link href="/aide" className=" text-white" >page Aide</Link></span>
    
  </span></p><p className="inline-flex "><span className="mr-2 mt-3 capitalize">ou signaler </span> <button onClick={() => mort(name+ " Episode "+currentEpisode,id)} id="problem"  className="flex  mr-2 bg-black/90 hover:opacity-80 text-white  shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline  outline-1 py-1 p-3  my-2 transition-all duration-200 hover:cursor-pointer"
                           >   
                            <span className="text-sm font-semibold hidden md:block"> complainte </span>
                            <FaQuestionCircle className="mx-1"/>
                            </button> </p>
                               </div>
                                   <div className="flex flex-wrap m-2  bg-zinc-700/80 rounded-xl p-2 justify-center gap-0.5 ">
                  <TwitterShareButton
                    url={url}
                    title={name + " - ToonAnime"}
                    hashtags={[
                      "toonanime",
                      "anime",
                      "manga",
                      "toonanime",
                      "animevf ",
                      "animevostfr",
                      `${name}`,
                    ]}
                    images={[
                      `https://cdn.statically.io/img/api.toonanime.org/${img}`,
                    ]}
                  >
                    <TwitterIcon
                      round
                      size={32}
                      className="text-md text-blue-400 mx-2"
                    />
                  </TwitterShareButton>
                  <FacebookShareButton
                      url={url}
                    quote={name + "  - ToonAnime"}
                    hashtags={[
                      "toonanime",
                      "anime",
                      "manga",
                      "toonanime",
                      "animevf ",
                      "animevostfr",
                      `${name}`,
                    ]}
                    images={[
                      `https://cdn.statically.io/img/api.toonanime.org/${img}`,
                    ]}
                  >
                    <FacebookIcon
                      round
                      size={32}
                      className="text-md text-blue-600 mx-2"
                    />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton
                      url={url}

                    appId=""
                  > 
                    <FacebookMessengerIcon
                      round
                      size={32}
                      className="text-md text-blue-600 mx-2"
                    />
                  </FacebookMessengerShareButton>
                  <WhatsappShareButton
                      url={url}
                    title={name + "  - ToonAnime"}
                    
                  >
                    <WhatsappIcon
                      round
                      size={32}
                      className="text-md text-green-500 mx-2"
                    />
                  </WhatsappShareButton>
                  <TelegramShareButton
                      url={url}
                    title={name + "  - ToonAnime"}
                  >
                    <TelegramIcon
                      round
                      size={32}
                      className="text-md text-blue-500 mx-2"
                    />
                  </TelegramShareButton>
                  <LinkedinShareButton
                      url={url}
                    title={name + "  - ToonAnime"}
                    summary={info}
                    source="https://toonanime.org"
                  >
                    <LinkedinIcon
                      round
                      size={32}
                      className="text-md text-blue-500 mx-2"
                    />
                  </LinkedinShareButton>
                  <RedditShareButton
                      url={url}
                    title={name + "  - ToonAnime"}
                  >
                    <RedditIcon

                      round
                      size={32}
                      className="text-md text-red-500 mx-2"
                    />
                  </RedditShareButton>
                  <PinterestShareButton 
                      url={url}
                    title={name + "  - ToonAnime"}
                    media={`https://cdn.statically.io/img/api.toonanime.org/${img}`}
                  >
                    <PinterestIcon
                      round
                      size={32}
                      className="text-md text-red-500 mx-2"
                    />
                  </PinterestShareButton>


                
              </div>
    
                              <div id="control" className="flex  justify-evenly md:justify-start  dark:bg-zinc-900 bg-zinc-300 bg-opacity-70 rounded-lg mb-5 p-3">
                             
                          
                              <select
           placeholder="Select Episode"
           value={selectedOptions}
       
       onChange={handleSelect}
       id="episode"
       className="w-auto m-4 px-6 capitalize flex rounded-md shadow-md    shadow-black/80 cursor-pointer py-1 pl-3 pr-7 sm:pr-10 my-2 mx-1 sm:m-2 transition-all duration-200"
     >
   
                              {Object.values(episodes).map((episode, index) => {
          if (parseInt(currentEpisode) - 1 === index) {
            return (
              <option key={`episode${index}`} value={episode.url}>
                
                  Episode
                  {episode.name.length === 1
                    ? ` ${episode.name}`
                    : ` ${episode.name}`}
           
              </option>
            );
          } else {
            return (
              <option key={`episode${index}`} value={episode.url}>
                         Episode
                    {episode.name.length === 1
                      ? ` ${episode.name}`
                      : ` ${episode.name}`}
                </option>
            );
          }
        })}
        </select>
                        

   <select  id="lecteure" placeholder="Select Episode"
           value={selectedlecteur}
       
       onChange={clickHandle} 
    className="w-auto   px-4 capitalize flex rounded-md shadow-md shadow-black cursor-pointer py-1 pl-3 pr-7 sm:pr-10 my-2 mx-1 sm:m-2 transition-all duration-200">
   {videoData.map((link, index) => {
   
   return (
    current === link.url ? ( 
  <option key={`lecteur${index}`}  value={link.url}  >

        {link.title.length === 1
          ? ` 0${link.title}`
          : ` ${link.title}`}
      
    
  </option>
    ) : (
    <option  value={link.url} key={`lecteur${index}`} >
   
        {link.title.length === 1
          ? ` 0${link.title}`
          : ` ${link.title}`}
      
    
  </option>
    )
);

})}
   </select>
   
                            
                       
                              </div>
                              <div  id="rph"  className="relative ml-auto hidden  text-green-500  bg-black/90 hover:opacity-80 shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline  outline-1 py-1 p-3  my-2 transition-all duration-200 hover:cursor-pointer">
                            <FaCheckCircle className="mx-1"/>
                             <span id='rp' className="text-sm font-semibold hidden md:block" ></span>
                             </div>
                             <div  className="relative dark:bg-zinc-900 bg-zinc-300" id="playerHolder" >
                      
                              <div id="loading" className="loadingi">
                              <FaSpinner className="animate-spin  h-20 w-20 text-tacolor"  /> 
           
      </div>
    

      

      <iframe id='iframe' src="" height="500" width="100%" loading="lazy" className="opacity-0" frameborder="0" scrolling="no" allow="autoplay; fullscreen" allowFullScreen webkitallowfullscreen mozallowfullscreen />
   
   
      </div>
        <div className="flex flex-row  bg-black items-center">
         
   
        <div className="flex flex-row basis-1/3 justify-start">




        {!previous ? (null
        
                  ) : (
                  
                    <button onClick={(ns) => Lastfirst(firstEpisode)} id="pepisode"  className="flex bg-black/90 hover:opacity-80 text-white  shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline  outline-1 py-1 p-3 ml-1 sm:ml-5 my-2 transition-all duration-200 hover:cursor-pointer"
                           >   <FaAngleDoubleLeft className="mx-1"/>
                            <span className="text-sm font-semibold hidden md:block"> premier </span>
                            </button>
                         
                          
                      )}
            {!previous ? (null
             
            ) : (
              <button onClick={(pp) => nextL(previous)}  >
                <div
                  className="flex bg-black/90 hover:opacity-80 text-white  shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline  outline-1 py-1 p-3 ml-1 sm:ml-5 my-2 transition-all duration-200 hover:cursor-pointer"
                
                  id="btn-grad"
                >
                  <FaAngleLeft  className="mx-1"/>
                  <span className="text-sm font-semibold hidden md:block"> Pr&eacute;c&eacute;dent</span>
                  
                </div>
              </button>
            )}
           </div>
           <div className="flex flex-row basis-1/3 justify-center">
           <button onClick={(nn) => Info(url)} id="Info" >
                <div
                  className="flex bg-black/90 hover:opacity-80 text-white  shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline  outline-1  py-1 p-3 m-1 sm:m-5 my-2 transition-all duration-200 hover:cursor-pointer"
                
                  id="btn-grad"
                >
                  <FaInfoCircle className=" md:mx-3"/>
                  <span className="text-sm font-semibold hidden md:block"> Info</span>
                  
   
                </div>
              </button>
            </div>
           <div className="flex flex-row basis-1/3 justify-end">
            {!next ? (
             null
            ) : (
              <button onClick={(nv) => nextL(next)}  >
                <div
                  className="flex bg-black/90 hover:opacity-80 text-white  shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline   outline-1 py-1 p-3 m-1 sm:mr-5 my-2 transition-all duration-200 hover:cursor-pointer"
                
                  id="btn-grad"
                >
                  <span className="text-sm hidden md:block">Suivant</span>
                  <FaAngleRight  className="mx-1"/>
                 
                </div>
              </button>
            )}
              {!next ? (
             null
            ) : (
             <button onClick={(ns) => Lastfirst(lastEpisode)} id="lpisodes"  className="flex bg-black/90 hover:opacity-80 text-white  shadow-lg rounded uppercase font-semibold justify-center items-center cursor-pointer outline   outline-1 py-1 p-3 mr-1 sm:mr-5 my-2 transition-all duration-200 hover:cursor-pointer"
                 ><span className="text-sm  hidden md:block">Dernier</span>
             <FaAngleDoubleRight className="mx-1"/></button>
         
          )}
           </div>
      </div>
      </div>
    </div>
 
 

    

                            
                           
    </>
  );
}
