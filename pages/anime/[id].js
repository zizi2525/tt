import { useState, useEffect } from "react"
import Image from "next/image"
import { FaPlayCircle, FaRegPlayCircle,FaPlay ,FaGripLinesVertical, FaClock} from "react-icons/fa"
import { BsFillBookmarkPlusFill,BsEyeFill,BsFillBookmarkDashFill,BsFillEyeSlashFill,BsHandThumbsUp,BsHandThumbsDown } from "react-icons/bs";
import Link from "next/link"
import { NextSeo } from "next-seo";
import Pub from "@/components/pub";
import Pub1 from "@/components/pub1";
import Similaire from "@/components/Similaire"
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

export default function Info ({ data }) {
 
    var title = data.name
   
    const [urli, setUrli] = useState([]);
    const [favoris, setFavoris] = useState();
    const [watchlist, setWatching] = useState();

 
const [activeBtn, setActiveBtn] = useState("none");
    const truncate = (str, max, suffix) => {
        return str.length < max
          ? str
          : `${str.substr(
              0,
              str.substr(0, max - suffix.length).lastIndexOf(" ")
            )}${suffix}`;
      };
  
    
   
    useEffect(() => {
        var Favoris = JSON.parse(
            window.localStorage.getItem("Favoris")
            );
            if (Favoris === null) {
                Favoris = [];
            }
            Favoris = Favoris.filter(
                (item) => item.name === title
            );
            if (Favoris.length === 0){
                setFavoris(false)
            }
            else{
                setFavoris(true)
            }
    var watchList = JSON.parse(

        window.localStorage.getItem("watchList")
        );
        if (watchList === null) {
            watchList = [];
        }
        watchList = watchList.filter(
            (item) => item.name === title
        );
        if (watchList.length === 0){
            setWatching(false)
        }
        else{
            setWatching(true)
        }

    var continuwatching = JSON.parse(window.localStorage.getItem("continues"));
    if( continuwatching === null){
        continuwatching = []
    }
    var continuwatching = continuwatching.filter((item) => item.name === title)
       if (continuwatching.length === 0){
        setUrli(data.url+'/regarder?ep='+data.firstEpisode)
       }
         else{
            setUrli(data.url+'/regarder?ep='+continuwatching[0].episode)
            }
     
 
    }, [])

  
    const AddWatchlist = (event) => {
        var watchList = JSON.parse(
            window.localStorage.getItem("watchList")
            );
            if (watchList === null) {
                watchList = [];
            }
            watchList = watchList.filter(
                (item) => item.name !== title
            );
            watchList.unshift({
            name: title,
            url:data.url,
            alternative_title:data.otherNames,
            lastEpisode: data.lastEpisode,
            status: data.status,
            totalepisode: data.totalEpisodes,
            language: data.langue,
            img : `https://cdn.statically.io/img/api.toonanime.org/${data.img}`,
            status:data.status
            });
            window.localStorage.setItem(
            "watchList",
            JSON.stringify(watchList.slice(0, 20))
            );
            setWatching(true)
    }
    const RemoveWatchlist = (event) => {
        var watchList = JSON.parse(
            window.localStorage.getItem("watchList")
            );
            if (watchList === null) {
                watchList = [];
            }
            watchList = watchList.filter(
                (item) => item.name === title
            );
            window.localStorage.removeItem(
            "watchList",
            JSON.stringify(watchList)
            );
            setWatching(false)

    }

    const AddFavoris = (event) => {
        var Favoris = JSON.parse(
            window.localStorage.getItem("Favoris")
          );
       
          if (Favoris === null) {
            Favoris = [];
          }
          Favoris = Favoris.filter(
            (item) => item.name !== title
          );
          Favoris.unshift({
            name: title,
            url:data.url,
            alternative_title:data.otherNames,
            lastEpisode: data.lastEpisode,
            status: data.status,
            totalepisode: data.totalEpisodes,
            language: data.langue,
            img : `https://cdn.statically.io/img/api.toonanime.org/${data.img}`,
            status:data.status
          });
          window.localStorage.setItem(
            "Favoris",
            JSON.stringify(Favoris.slice(0, 20))
          );
        window.localStorage.setItem(
            "Favoris",
            JSON.stringify(Favoris.slice(0, 20))
          );
        setFavoris(true)
       
       
    }
    const RemoveFavoris = (event) => {
        var Favoris = JSON.parse(
            window.localStorage.getItem("Favoris")
          );
       
          Favoris = Favoris.filter(
            (item) => item.name === title
          );
     
          window.localStorage.removeItem("Favoris",JSON.stringify(Favoris))
        setFavoris(false)
       
       
    }


  
    return (
        <>
        <NextSeo
      title={`${data.name} streaming - ToonAnime`}
      description={data.name +' streaming  - ToonAnime '+ truncate(data.description,50," ...")}
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
        content:`${data.name} en Streaming,anime sama,toonanime, anime app,${data.otherNames} ${data.language},anime sama ${data.name},voir ${data.name}  `
      },{
        name: 'apple-mobile-web-app-status-bar',
        content: '#101317'
      },{
        
      },]}
      
     
    />

                <div className="grid grid-cols-6 pb-16 pt-16">
                <div ><Pub/></div>

                    <div className="col-span-6 mx-3 my-3 lg:col-span-4 lg:mx-0 mt-6 mb-6 ">
                      <article>
                        <div className="relative flex flex-col lg:flex-row mx-3 md:mx-10 md:flex-row rounded-md shadow-md p-4 bg-zinc-900 " >
                        <div className='cover-img  '>
              </div>
                            <div className="w-full md:w-1/3 lg:w-1/3 sm:w-2/3 group z-10">
                       
                                <figure className="grid place-items-center rounded-lg  max-w-sm ">
                                    <Image src={`https://cdn.statically.io/img/api.toonanime.org/${data.img}`}  alt={data.name} width={320} height={320}  className="max-w-[60%] lg:max-w-[80%] content-center  rounded-lg shadow-lg  m-2  object-cover" />
                                   
                                   
                                </figure>
 <div className="flex flex-wrap m-2  bg-zinc-700/80 rounded-xl p-2 justify-center gap-0.5 ">
                  <TwitterShareButton
                    url={"https://toonanime.org" + data.url}
                    title={data.name + " - ToonAnime"}
                    hashtags={[
                      "toonanime",
                      "anime",
                      "manga",
                      "toonanime",
                      "animevf ",
                      "animevostfr",
                      `${data.name}`,
                    ]}
                    images={[
                      `https://cdn.statically.io/img/api.toonanime.org/${data.img}`,
                    ]}
                  >
                    <TwitterIcon
                      round
                      size={32}
                      className="text-md text-blue-400 mx-2"
                    />
                  </TwitterShareButton>
                  <FacebookShareButton
                      url={"https://toonanime.org" + data.url}
                    quote={data.name + " - ToonAnime"}
                    hashtag="#toonanime"
                    images={[
                      `https://cdn.statically.io/img/api.toonanime.org/${data.img}`,
                    ]}
                  >
                    <FacebookIcon
                      round
                      size={32}
                      className="text-md text-blue-600 mx-2"
                    />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton
                      url={"https://toonanime.org" + data.url}

                    appId=""
                  > 
                    <FacebookMessengerIcon
                      round
                      size={32}
                      className="text-md text-blue-600 mx-2"
                    />
                  </FacebookMessengerShareButton>
                  <WhatsappShareButton
                      url={"https://toonanime.org" + data.url}
                    title={data.name + " - ToonAnime"}
                    
                  >
                    <WhatsappIcon
                      round
                      size={32}
                      className="text-md text-green-500 mx-2"
                    />
                  </WhatsappShareButton>
                  <TelegramShareButton
                      url={"https://toonanime.org" + data.url}
                    title={data.name + " - ToonAnime"}
                  >
                    <TelegramIcon
                      round
                      size={32}
                      className="text-md text-blue-500 mx-2"
                    />
                  </TelegramShareButton>
                  <LinkedinShareButton
                      url={"https://toonanime.org" + data.url}
                    title={data.name + " - ToonAnime"}
                    summary={data.description}
                    source="https://toonanime.org"
                  >
                    <LinkedinIcon
                      round
                      size={32}
                      className="text-md text-blue-500 mx-2"
                    />
                  </LinkedinShareButton>
                  <RedditShareButton
                      url={"https://toonanime.org" + data.url}
                    title={data.name + " - ToonAnime"}
                  >
                    <RedditIcon

                      round
                      size={32}
                      className="text-md text-red-500 mx-2"
                    />
                  </RedditShareButton>
                  <PinterestShareButton 
                      url={"https://toonanime.org" + data.url}
                    title={data.name + " - ToonAnime"}
                    media={`https://cdn.statically.io/img/api.toonanime.org/${data.img}`}
                  >
                    <PinterestIcon
                      round
                      size={32}
                      className="text-md text-red-500 mx-2"
                    />
                  </PinterestShareButton>


                
              </div>
                                </div>
                            

                             
                           
                            <div className="w-full lg:w-2/3 lg:ml-4 md:w-1/3 shadow-sm  pb-2 z-10">
                                <div className=" rounded-lg p-2 basis-6/12 text-gray-200">
                                    <h1 className="text-2xl font-bold px-7 text-center ">{data.name}</h1>
                                    <h2 className="font-bold py-7 text-center ">{data.otherNames}</h2>
                                    <div className="flex flex-row ">
                                        
                                        <div className="flex flex-col  space-y-2">
                                            <div className="text-sm font-bold break-all "><b >Titre Original</b>: {data.originaltitle}</div>
                                            <div className="text-sm font-bold break-words"><b >Type</b> : {data.type}</div>
                                            <div className="text-sm font-bold break-all"><b >Episodes</b> : {data.lastEpisode} / {data.totalEpisodes}</div>
                                            <div className="text-sm font-bold break-all"><b >Status</b> : {data.status}</div>
                                            <div className="text-sm font-bold break-all"><b >Annee</b> : {data.year}</div>
                                            <div className="text-sm font-bold break-all"><b >Genres</b> : <span className="">{data.genres}</span></div>
                                            <div className="text-sm font-bold break-all"><b >Studio</b> : {data.studio}</div>
                                            <div className="text-sm font-bold break-all"><b >Durée</b> : {data.runtime}</div>
                                            <div className="text-sm font-bold break-all" ><b >Public Averti</b>  : {data.avertissement}</div>
                                            {data.age ? <span className="text-sm font-bold break-all"><b >Age</b> : {data.age}</span> : null}
                                            <div className="mt-7 pt-6    ">
                                      {data.status !== "Prochainement" ? (
                                            <Link href={urli} className="mb-5 inline-flex relative items-center  text-white  uppercase  group btn p-3 rounded-md before:bg-tacolor-500 text-sm ">
                                            <FaPlay className="inline-block z-10 group-hover:animate-pulse " />
                                                <span> regarder</span>
                                                </Link>
                                                ) : (
                                                  <button className="mb-5 inline-flex relative items-center  text-white  uppercase  group btn p-3 rounded-md before:bg-pink-500 text-sm ">
                                            <FaClock className="inline-block z-10 group-hover:animate-pulse " />
                                                <span> Prochainement</span>
                                                </button>
                                                )

                                              }
                                    
                             
                                 {favoris ? <button onClick={RemoveFavoris} className="mb-5 inline-flex relative items-center font-semibold text-white  capitalize  group btn p-3 rounded-md  before:bg-red-500 text-sm ">
                                            <BsFillBookmarkDashFill className="inline-block z-10 group-hover:animate-pulse " />
                                                <span>Supprimer des Favoris</span>
                                                </button> : <button onClick={AddFavoris} className=" mb-5 inline-flex relative items-center font-semibold text-white  capitalize  group btn p-3 rounded-md  before:bg-green-500 text-sm ">
                                            <BsFillBookmarkPlusFill className="inline-block z-10 group-hover:animate-pulse " />
                                                <span> Favoris</span>
                                                    </button>}

                                      

                                        
                            {watchlist ? <button onClick={RemoveWatchlist} className="mb-5 inline-flex relative items-center font-semibold text-white  capitalize  group btn p-3 rounded-md  before:bg-yellow-500 text-sm ">
                            <BsFillEyeSlashFill className="inline-block z-10 group-hover:animate-pulse " />
                                                <span>Supprimer de Watchlist</span>
                                    
                                 </button>
                                    : <button onClick={AddWatchlist} className="mb-5 inline-flex relative items-center font-semibold text-white  capitalize group btn p-3 rounded-md  before:bg-purple-500 text-sm ">
                                            <BsEyeFill className="inline-block z-10 group-hover:animate-pulse " />
                                                <span> Watchlist</span>
                                                </button>
                                                }

                                 
                                 </div>


                                        </div>
                                        </div>
                                  
                                        </div>
                                
                                        </div>
                                        </div>
                                   
                       
                       
                        <div className=" rounded-lg p-2 mt-4  m-2">
                            <span className="flex place-items-center bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3 rounded-md">  <FaGripLinesVertical size={28} className="text-white "  />
                            <h3 className="text-white " style={{ fontSize:18}}>Synopsis </h3> </span>
                            <p className=" mx-2 capitalize shadow-lg p-3 break-normal text-clip whitespace-pre-line bg-zinc-200  dark:bg-zinc-900"  >{data.description.replace('.', '.\n')}</p>
       


                            </div>
                            <div className=" rounded-lg p-2 mt-4  m-2">
                            <span className="bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3  rounded-lg w-full grid items-center text-white">Saison</span>
                            <div className="flex flex-wrap justify-start  bg-zinc-200  dark:bg-zinc-900 p-4 mx-2 gap-2 " id="saison" >
                         
                            {data.saison.map((item, index) => (
                      
                    
                           data.saisonNum == item.num ? (
                            
                            <div  key={`saison${item.id}`} className="flex flex-col justify-center items-center opacity-90" >
                            
                            <span className="capitalize inline-flex items-center p-5 font-bold leading-6 text-sm shadow rounded-md text-white border-2 border-bgta_color/90   bg-bgta_color  hover:bg-bgta_color  transition ease-in-out duration-1500 cursor-pointer ">
                            
                             Saison {item.num} 
                             </span>  </div>
                             ) : (
                                <Link key={`saison${item.id}`} href={"/anime/"+item.id+'-'+item.url}>
                                <div className="flex flex-col justify-center items-center">
                                <span  className="capitalize inline-flex items-center p-5 font-bold leading-6 text-sm shadow rounded-md border-2 border-bgta_color dark:border-bgta_color/90  hover:bg-bgta_color hover:text-white  hover:opacity-100 transition-all  duration-50 cursor-pointer">
                               
                                 Saison {item.num}
                                </span>  </div> </Link>
                                )

  
         ))}

                            </div>
                            </div>
                                   
                            </article>

                    <Similaire like={data.genres} title={data.name} />
                    </div>

                    <div ><Pub1/></div>
                </div>



        </>
    )
}


export async function getServerSideProps(context) {
   try {
    var url =context.resolvedUrl;
  
    var anime = url.substring(url.lastIndexOf("/") + 1).replace(".json", "");
    
      var url = `${process.env.CDN}/api/anime/${anime}`;
    
      var response = await fetch(url);
    
      response = await response.json();
      var soup = response;
      
      var allUl = soup.episodes;
    
      
      for (var key in allUl) {
      
        
          var allEpisodes = allUl[key];
          break;
        
      }

         try {
        var first=allEpisodes.title
      } catch (error) {
        first="Episode 1"
      }
      var data = {
        id: soup.id,
        name: soup.title,
        img: `${soup.cover}`,
        type:soup.type,
        description: soup.synopsis1,
        genres: soup.genres,
        langue:soup.language,
        studio:soup.studio,
        year: soup.date_de_sortie,
        avertissement:soup.avertissement,
        url:"/anime/"+soup.id+'-'+soup.url,
        status: soup.status,
        otherNames: soup.alternative_title,
        totalEpisodes: soup.totalepisode,
        lastEpisode: soup.lastepisode,
        runtime: soup.runtime,
        saisonId: soup.saisonId,
        saisonNum: soup.saisonNum,
        age: soup.age,
        originaltitle: soup.originaltitle,
        type: soup.type,
        saison: Object.values(soup.saison),
        episodes :Object.values(soup.episodes),
        totalVotes: soup.totalvote,
        like : soup.like,
        dislike : soup.dislike,
        firstEpisode: first,
     
        
      };
   
      return { props: { data } };
     } catch (error) {
      
      return { notFound: true };
     } 

   
  }
  