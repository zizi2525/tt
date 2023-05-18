import { useState, useEffect } from "react"
import { NextSeo } from "next-seo"
import { FaPlayCircle, FaRegPlayCircle,FaList } from "react-icons/fa"
import Link from "next/link"
import Player from "@/components/Player"
import Pub from "@/components/pub"
import Pub1 from "@/components/pub1"
import Similaire from "@/components/Similaire"

export default function Episode({ data }) {
    const [episodes, setEpisodes] = useState([]);
    const truncate = (str, max, suffix) => {
      return str.length < max
        ? str
        : `${str.substr(
            0,
            str.substr(0, max - suffix.length).lastIndexOf(" ")
          )}${suffix}`;
    };

    useEffect(() => {
        async function a() {

          var response = await fetch(data.target);
          response = await response.json();
        
          var soupTwo = response;
      
          var episodes = soupTwo.episodes;
          
          var allep = episodes
          var img = data.img;
          
          var debut 
          for (var key in allep) {
            debut = key;
            break;
          }
          var fin = data.lastEpisode;
          
          var eps = {};
          for (var i = debut; i <= fin; i++){

            eps[i]=({
              name: [i],
              url: data.url+'/regarder?ep='+[i],
              type: data.langue,
            });
          }
          eps;
          setEpisodes(eps);
         
         
          var continueWatching = JSON.parse(
            window.localStorage.getItem("continues")
          );
       
          if (continueWatching === null) {
            continueWatching = [];
          }
          continueWatching = continueWatching.filter(
            (item) => item.name !== data.anime
          );
          continueWatching.unshift({
            name: data.anime,
            url:data.url+'/regarder?ep='+data.currentEpisode,
            episode: data.currentEpisode,
            alternative_title:data.alternative_title,
            lastEpisode: data.lastEpisode,
            status: data.status,
            totalepisode: data.totalEpisodes,
            language : data.langue,
            img,
          });
          window.localStorage.setItem(
            "continues",
            JSON.stringify(continueWatching.slice(0, 20))
          );
        }
        a();
      }, [data]);
      var newdescription = truncate(data.description, 200, "...");
    return (
        <>
       
       <NextSeo
      title={`${data.name} episode ${data.currentEpisode} - ToonAnime`}
      description={ `${data.name} episode ${data.currentEpisode}- ${newdescription} - ToonAnime`}
      additionalMetaTags={[{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }, 
      {
        name: 'robots',
        content: 'noindex, nofollow'
        },
      {
        httpEquiv: 'Content-Type',
        content: 'text/html; charset=utf-8'
      }, {
        httpEquiv: 'Content-Language',
        content: 'fr'
      }, {
        
       
        name: 'keywords',
        content:`${data.name} episode ${data.currentEpisode} en Streaming,anime sama,toonanime, anime app,${data.otherNames} episode ${data.currentEpisode} ${data.language}`
      },{
        name: 'apple-mobile-web-app-status-bar',
        content: '#101317'
      },{
        
      },]}
      
     
    />
            <div className="grid grid-cols-6 pb-16 pt-16 ">
            <div ><Pub/></div>
                    <div className="col-span-6 mx-3 my-3 lg:col-span-4 lg:mx-0 mt-6 mb-6  bg-zinc-200 dark:bg-zinc-800 ">

                              
                            <Player 
            name={data.name}
            anime={data.anime}
            info={newdescription}
            langue={data.langue}
            img={data.img}
            url={data.url}
            category={data.category}
            currentEpisode={data.currentEpisode}
            episodes={episodes}
            totalEpisode={data.totalEpisodes}
            videoData={data.videoData}
            alternative_title={data.alternative_title}
            saisonId = {data.saisonId}
            saisonName = {data.saisonName}
            id = {data.id}
            lastEpisode = {data.lastEpisode}
            firstEpisode = {data.firstEpisode}
           
          />

                    
<div className=" rounded-lg p-2 mt-4  m-2">
                            <span className="flex bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3  rounded-lg w-full items-center text-white"><FaList className=" mr-3"/>List Saison</span>
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
                              <Similaire like={data.genres} title={data.name} />
                            </div>
                            <div ><Pub1/></div>
             
                </div>


        
        </>
    )
}
export async function getServerSideProps(context) {
 
  
    var urlSource = context.req.url;
   
    var urlS =context.resolvedUrl;

    var animes = urlS
    var anime = animes.split('/')[2].split('-')[0]
    var cepisode = animes.split('/')[3].replace('regarder?ep=','')
    
  
    var urlTarget = `${process.env.CDN}/api/episode/${anime}/${cepisode}`;
    
    var response = await fetch(urlTarget);
    response = await response.json();
    var soup = response;
    var allUl = soup.episode;
    
    var firstEpisode 
    for (var value in soup.episodes ) {
      firstEpisode = value
      break
    
    }

    
    var img= soup.cover
    var allEpisodes=[]
      for (var key in allUl ) { 

      if(allUl[key].includes('sibnet')){
       
        allEpisodes.unshift({title:'ToonVip',url:allUl[key].replace("video.sibnet.ru/shell.php?videoid=","mb.toonanime.xyz/dist/newsibt.html?title="+soup.title+"&poster="+`https://cdn.statically.io/img/api.toonanime.org/${soup.cover}`+"&id=")})
        allEpisodes.push({title:'Sibnet',url:allUl[key]})
    }
      

    else if (allUl[key].includes('toonanime')){
        allEpisodes.push({title:'ToonVIP1',url:allUl[key].replace("index.html","sama.html")})
      }
      else if (allUl[key].includes('anime-sama.fr')){
        allEpisodes.push({title:'ToonVip2',url:"https://mb.toonanime.xyz/dist/ss.html?id="+allUl[key]})
      }
      else if(allUl[key].includes('hydrax')){
      allEpisodes.push({title:'Hydrax',url:allUl[key] })
    }
   
    else if(allUl[key].includes('uqload')){
      allEpisodes.push({title:'Uqload',url:allUl[key]})
  }
  else if(allUl[key].includes('myvi')){
    allEpisodes.push({title:'Myvi',url:allUl[key]})
}
else if(allUl[key].includes('upvid')){
  allEpisodes.push({title:'Upvid',url:allUl[key]})
}
else if(allUl[key].includes('vudeo')){
  allEpisodes.push({title:'Vudeo',url:allUl[key]})
}
else if(allUl[key].includes('vk')){
  allEpisodes.push({title:'VK',url:allUl[key]})
}

else{
  allEpisodes.push({title:'Lecteur '+[key],url:allUl[key]})
}
    }
    allEpisodes    
 
   img
    var currentEpisode =cepisode;
    var src = allEpisodes;
    
 
    var data = {
        currentEpisode,
        id: soup.id,
        name: soup.title,
        anime: soup.title,
        img: `https://cdn.statically.io/img/api.toonanime.org/${soup.cover}`,
        type:soup.type,
        description: soup.synopsis1,
        genres: soup.genres,
        langue:soup.language,
        studio:soup.studio,
        year: soup.date_de_sortie,
        avertissement:soup.avertissement,
        url:"/anime/"+soup.id+'-'+soup.url,
        link:"/anime/"+soup.id+'-'+soup.url,
        target:process.env.CDN+"/api/episode/"+soup.id+'/'+currentEpisode,
        status: soup.status,
        alternative_title: soup.alternative_title,
        totalEpisodes: soup.totalepisode,
        lastEpisode: soup.lastepisode,
        runtime: soup.runtime,
        saisonId: soup.saisonId,
        saisonNum: soup.saisonNum,
        age: soup.age,
        originaltitle: soup.originaltitle,
        type: soup.type,
        saison: Object.values(soup.saison),
        episodes :soup.episodes,
        videoData: src  ,
        currentEpisode: currentEpisode,
        firstEpisode: firstEpisode,
    };
    
    return { props: { data } };
  
}