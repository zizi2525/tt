import Slider from "@/components/Slider";
import { useState, useEffect } from "react";
//import  List  from "@/components/Liste";
//import ListPlaning from "@/components/ListePlan";
import { NextSeo } from 'next-seo';
import dynamic from "next/dynamic";
import Script from 'next/script';
const List = dynamic(() => import("@/components/Liste"));
const ListPlaning = dynamic(() => import("@/components/ListePlan"));



const Index = ({}) => {
  const [continueWatching, setContinueWatching] = useState([]);
    const [Datas, setDatas] = useState([]);
    const [Datasvf, setDatasvf] = useState([]); 
    const [Planingday, setPlaningday] = useState([]);
    const [SliderData, setSliderData] = useState([]);
    const [message, setMessage] = useState([]);
    var messageurl=process.env.CDN+"/api/message";
    useEffect(() => {
         async function a() {
            var response = await (await fetch("/api/all?limite=6&order=latest-updated&lan=vf")).json();
            setDatasvf(response.response);
          
          }   
          async function message() {
            var response = await (await fetch("https://api.toonanime.org/api/message")).json();
            setMessage(response.message);
          
          } 
           async function c() {
            var response = await (await fetch("/api/all?limite=6&order=latest-updated&lan=vostfr")).json();
            setDatas(response.response);

          }
          async function h() {
            var response = await (await fetch("/api/all?limite=3&order=like")).json();
            setSliderData(response.response);
          }
          
            async function b() {
            var response = await (await fetch("/api/planing")).json();
            setPlaningday(response.response);
        }
            b();  
             c(); 
             a(); 
             h();
             message() ;

            var continueWatchingData = JSON.parse(
                window.localStorage.getItem("continues")
              );
              if (continueWatchingData != null) {
                setContinueWatching(continueWatchingData.splice(0,6));
              }
    }, []);
   const mmesage = ()=>{
    if(message.length==0){
      return null;
    }
    return (
      <div className="flex justify-start my-6 md:mx-6 md:rounded-md bg-zinc-200 dark:bg-zinc-900 text-md font-bold shadow-lg p-3" >
      <p className="mx-2 font-semibold capitalize"> <strong className="text-tacolor">Note : </strong>
      {message}</p> 
    
    </div>

    )
   }
    return (
        <>
    <NextSeo
      title="ToonAnime - Animes VF et VOSTFR en streaming Gratiuit"
      description="Regarder vos anime vf et vostfr préférés en streaming HD gratuitement et sans inscription sur ToonAnime"
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
       content:"anime vf, anime vostfr, anime en streaming  vf, anime en straming vostfr, regarder anime en ligne, regarder anime vf, regarder anime vostfr, anime streaming, manga vostfr, anime sama, manga vf, scan, scan vf",
      },{
        name: 'apple-mobile-web-app-status-bar',
        content: '#101317'
      },{
        
      },]}
      openGraph={{
        url: 'https://toonanime.org',
        title: 'ToonAnime - Animes vf et Vostfr',
        description: "Regarder vos anime en vf et vostfr   préférés en streaming  HD  gratuitement et sans inscription sur ToonAnime",
        images: [
          {
            url: 'https://toonanime.org/log.png',
            width: 800,
            height: 600,
            alt: 'ToonAnime - Animes VOSTFR et VF ',
          },
          {
            url: 'https://toonanime.org/log.png',
            width: 900,
            height: 800,
            alt: 'ToonAnime - Animes VOSTFR et VF',
          },
          { url: 'https://toonanime.org/log.png' },
          { url: 'https://toonanime.org/log.png' },
        ],
        site_name: 'ToonAnime - Animes VOSTFR et VF',

      }}
      twitter={{
        handle: '@ToonAnime_',
        site: '@ToonAnime_',
        cardType: 'summary_large_image',
      }}
     
    />
           

         
           <Slider data={SliderData}/>
           <div id="message">{mmesage()}</div> 
           {continueWatching.length === 0 ? (
          ""
        ) : (
          <List pageTitle="Continuer de Regarder" link='/profil' data={continueWatching} />
        )}
       <ListPlaning pageTitle="Animes Planing" link='/planing' data={Planingday} />  
    
           
            <List pageTitle="Animes VOSTFR" link='/animes-vostfr' data={Datas} />
    
            <List pageTitle="Animes VF" link='/animes-vf' data={Datasvf} /> 
           

      <Script
  id="adsbygoogle-init"
  strategy="afterInteractive"
  crossOrigin="anonymous"
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1434789286906731"
     ></Script>

     
        </>
    )
}



export default Index
