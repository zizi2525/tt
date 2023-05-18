

import { useState, useEffect } from "react"
import List from "@/components/Liste"
import { useRouter } from "next/router"
import { FaPlayCircle, FaRegPlayCircle,FaGripLinesVertical,FaAngleDoubleRight, FaCircle } from "react-icons/fa"
import { BsPersonSquare } from "react-icons/bs"
import { NextSeo } from "next-seo"
import Pub1 from "@/components/pub1"
import Pub from "@/components/pub"



const Profil = () => {
    const router = useRouter()
    const [continueWatching, setContinueWatching] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
    var continueWatchingData = JSON.parse(
        window.localStorage.getItem("continues")
      );
      if (continueWatchingData != null) {
   
      
          setContinueWatching(continueWatchingData.slice(0, 20));
        
      }
      //set max continueWatchingData
      

        var favoriteData = JSON.parse(window.localStorage.getItem("Favoris"));
        if (favoriteData != null) {
          
           
              setFavorites(favoriteData.slice(0, 20));
            
        }
        //set max favoritesData
    

     
       var watchListData = JSON.parse(window.localStorage.getItem("watchList"));
        if (watchListData != null) {
            
       
              setWatchList(watchListData.slice(0, 20));
            
        }
        //set max watchListData
    

    }, []);
        
    return (
        <>
       <NextSeo noindex={true}  nofollow={true}
      title="Profil - ToonAnime"
      description="votre profil sur toonanime"
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
      }
        
      ]}
    
     
   
     
    />

                <div className="grid grid-cols-6 pb-16 pt-16">
                  
                    <div><Pub1/></div>
                    <div  className="col-span-6 mx-3 my-3 lg:col-span-4 lg:mx-0 mt-6 mb-6 ">
                                 
                    <div className="flex flex-inline text-4xl lg:text-5xl uppercase text-white font-bold mb-10 bg-zinc-200  dark:bg-zinc-900 rounded-lg  p-3 items-center bg-gradient-to-r from-tacolor  to-bgta_color text-md shadow-lg  ">
                        <BsPersonSquare className="text-3xl " />
        <h1 className="text-2xl uppercase pl-5 ">Votre Profil</h1>

      </div>
      <div className="flex justify-start rounded-lg  bg-zinc-200   dark:bg-zinc-900  bg-opacity-70 mt-5 mb-5 py-5">
          <div className="flex flex-col px-3">
              <h3 className="text-sm font-bold">Note :</h3>
              <p className="italic  text-sm"> Votre profil d&eacute;pend de votre navigateur</p>

              </div>
      </div>
   {continueWatching.length === 0 ? (
    <>
          <div className="flex place-items-center my-4 mx-1 md:rounded-md bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3">
          <FaPlayCircle size={28} className="text-white mr-3 "  />
          <h2
            style={{ fontSize: 20 }}
            id="listinfo"
            className="font-semibold  text-white capitalize"
          >
            Continuer de Regarder
          </h2>
    
        </div>
        <div
                   id="holder"
                   className="flex justify-center rounded-lg  bg-zinc-200  dark:bg-zinc-900  bg-opacity-70 mt-5 mb-5 py-5 "
                 >
                    <p className="text-center">Votre Liste  Continuer de Regarder est vide</p>
                    </div>
                    </>
        ) : (
          <List pageTitle="Continuer de Regarder" link='/profile' data={continueWatching} />
        )}
        {favorites.length === 0 ? (
            <>
                <div className="flex place-items-center my-4 mx-1 md:rounded-md bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3">
                <FaPlayCircle size={28} className="text-white mr-3 "  />
                <h2
                  style={{ fontSize: 20 }}
                  id="listinfo"
                  className="font-semibold  text-white capitalize"
                >
                    Vos Favoris 
                </h2>
       
              </div>
                   <div
                   id="holder"
                   className="flex justify-center rounded-lg  bg-zinc-200  dark:bg-zinc-900  bg-opacity-70 mt-5 mb-5 py-5"
                 >
                    <p className="text-center"> Votre Liste des favoris est vide </p>
                    </div>
                    </>
        ) : (
            <List pageTitle="Favoris" link='/profile' data={favorites} />
        )}
        {watchList.length === 0 ? (
            <>
                <div className="flex place-items-center my-4 mx-1 md:rounded-md bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3">
                <FaPlayCircle size={28} className="text-white mr-3 "  />
                <h2
                  style={{ fontSize: 20 }}
                  id="listinfo"
                  className="font-semibold  text-white capitalize"
                >
                    Votre Watchlist
                </h2>
         
              </div>
               <div
               id="holder"
               className="flex justify-center rounded-lg  bg-zinc-200  dark:bg-zinc-900  bg-opacity-70 mt-5 mb-5 py-5"
             >
                <p className="text-center"> Votre Watchlist Liste est vide</p>
                </div>
                </>
        ) : (
            <List pageTitle="Watchlist" link='/profile' data={watchList} />
        )}
                    </div>
                    
                    
                    <div ><Pub/></div>
                </div>


           

        </>
    )
}

export default Profil