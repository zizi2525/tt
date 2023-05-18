import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle,FaSpinner} from "react-icons/fa";
import { NextSeo } from "next-seo";
import {RiBookOpenFill} from "react-icons/ri";
import Pub from '@/components/pub';
import Pub1 from '@/components/pub1';
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate';
import Listskelton from '@/components/Listskelton';

const ListAnime = ({ data }) => {
  const router = useRouter()

  const [datas , setDatas] = useState([])
  const [total, setTotal] = useState("")
  var [url, setUrl] = useState("")
  const [currentpage, setCurrentpage] = useState("")
  const [loading, setLoading] = useState(false)

  var [genres, setGenres] = useState([])
  var page = router.asPath.split("=")[1]
  if (page === undefined){
    page = 1
  }
 


   useEffect(() => {
 


    if (url === ""){
      url="https://api.toonanime.org/api/animefilter?page="+page+"&limite=20&status=&annee=&language=&sort=&genres=&title=&type="
    }


   
    setUrl(url)
    setLoading(true)

    async function a() {
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data)
        setTotal(data.total_pages)
        setCurrentpage(data.currentpage)
        setLoading(false)
      })
    }

      
    
    a();
    
    
  
   
  }, [url]);

  


  const handleChange = async (e) => {
 

  
   
    var url = document.getElementById('filter').getAttribute('sid')
  

     setUrl (url)
  
    if (e.target.id==="title"){
  
      setUrl(url.replace(/title=(.*?)&/, `title=${e.target.value}&`))
    
    
  
    }
   else if (e.target.id ==="language"){
      router.push(`/animes`, `/animes?page=1`)
      setCurrentpage(1)

      setUrl(url.replace(/language=(.*?)&/, `language=${e.target.value}&`).replace(/page=(.*?)&/, `page=1&`) )
      
      
   }
    else if (e.target.id ==="type"){
      router.push(`/animes`, `/animes?page=1`)
      setCurrentpage(1)
      setUrl(url.replace(/type=(.*?)&/, `type=${e.target.value}&`).replace(/page=(.*?)&/, `page=1&`))
    
    }
    else if (e.target.id ==="status"){
      router.push(`/animes`, `/animes?page=1`)
      setCurrentpage(1)
      setUrl(url.replace(/status=(.*?)&/, `status=${e.target.value}&`).replace(/page=(.*?)&/, `page=1&`))
    
    }
    else if (e.target.id ==="annee"){
      router.push(`/animes`, `/animes?page=1`)
      setCurrentpage(1)
      setUrl(url.replace(/annee=(.*?)&/, `annee=${e.target.value}&`).replace(/page=(.*?)&/, `page=1&`))
 
    }
    else if (e.target.id ==="sort"){
      router.push(`/animes`, `/animes?page=1`)
      setCurrentpage(1)
      setUrl(url.replace(/sort=(.*?)&/, `sort=${e.target.value}&`).replace(/page=(.*?)&/, `page=1&`))
 
    }
    else if (e.target.id ==="genres"){
      
      if (e.target.checked){
        router.push(`/animes`, `/animes?page=1`)
        setCurrentpage(1)
        genres.push(e.target.value)
        setUrl(url.replace(/genres=(.*?)&/, `genres=${genres}&`).replace(/page=(.*?)&/, `page=1&`))
    
        setGenres(genres)
        setCurrentpage(1)

      }
      else{
        router.push(`/animes`, `/animes?page=1`)
        setCurrentpage(1)
        genres = genres.filter(item => item !== e.target.value)

        setUrl(url.replace(/genres=(.*?)&/, `genres=${genres}&`).replace(/page=(.*?)&/, `page=1&`))
        setGenres(genres)
        setCurrentpage(1)
      }

      
      

     
    }
      
 
  }

  const handlePage = async (e) => {
    
    var url = document.getElementById('filter').getAttribute('sid')
    setUrl(url.replace(/page=(.*?)&/, `page=${e.selected+1}&`))
    router.push(`/animes?page=${e.selected+1}`)

    var response = await (await fetch(url)).json();
 
    setDatas(response.data)
    setTotal(response.total_pages)
    setCurrentpage(e.selected+1)
  

  
  }



var truncate = (str, max, suffix) => {
  return str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(" ")
      )}${suffix}`;
};

  
  

    return (
      <>

<NextSeo
      title="Liste des Animes Vf et Vostfr  - ToonAnime"
      description="Catalogue des animes vf et vostfr en streaming  gratuit - ToonAnime "
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
        content: 'Catalogue anime vf,Catalogue anime vostfr ,anime streaming'
      },{
        name: 'apple-mobile-web-app-status-bar',
        content: '#101317'
      },{
        
      },]}
  
     
    />

                <div className="grid grid-cols-6 pb-16 pt-16">
                <div ><Pub/></div>
                    <div className="col-span-6 mx-3 lg:col-span-4 lg:mx-0 mt-6 z-10" onChange={handleChange}>
                    
                        <div className="flex flex-inline text-4xl lg:text-5xl uppercase  font-bold mb-10 bg-zinc-200  dark:bg-zinc-900 rounded-lg  p-3 items-center bg-gradient-to-r from-tacolor  to-bgta_color text-md shadow-lg text-white  ">
                        <RiBookOpenFill className="text-3xl " />
        <h1 className="text-2xl uppercase pl-5 ">Liste d&apos;animes</h1>

      </div>
                       <div id="filter" className="bg-zinc-200  dark:bg-zinc-900 rounded-lg pt-5"  onBlur={handleChange} sid={url} >
                        <form className="relative block mb- mx-4 focus:border-zinc-700">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                                <button
                                  
                                    type="submit"
                                    
                                >
                                    <svg
                                        className=
                                             "md:w-5 md:h-5 xl:w-5 xl:h-5 lg:w-5 lg:h-5 h-4 w-4 text-tacolor"
                                               
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <input
                                type="text"
                               id="title"
                                spellCheck={false}
                             
                               
                                className="block md:p-3 md:pl-10 lg:p-3 lg:pl-10 xl:p-3 xl:pl-10 pl-9 p-3 w-full rounded-lg text-xs focus:outline-none font-bold border-2 focus:border-zinc-700 transition-all duration-200"
                                placeholder="Recherche..."
                           
                            />
                            </form>
                            <div className="sm:flex sm:flex-row grid grid-cols-2 sm:justify-center items-center ">
                          
                         
                          <div className=" mx-5 ">
                            <select  id="language"  className="w-full  m-2 py-2 px-4 capitalize flex rounded-md shadow-md shadow-black" >
                              <option value="">Langue</option>
                              <option value="vf">VF</option>
                              <option value="vostfr">VOSTFR</option>
                            </select>
                          </div>
                          <div className=" mx-5 ">
                            <select  id="status" className="w-full m-2 py-2   px-4 capitalize flex rounded-md shadow-md shadow-black" >
                            <option value="">Status</option>
                              <option value="En cours">en Cours</option>
                              <option value="Termin&eacute;">Termin&eacute;</option>

                          
                            </select>

                          </div>
                        
                          <div className="mx-5 ">
                            <select  id="annee" className="m-2 py-2 w-full  px-4 capitalize flex rounded-md shadow-md shadow-black overflow-auto max-h-16" >
                            <option value="">Ann&eacute;e</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                              <option value="2014">2014</option>
                              <option value="2013">2013</option>
                              <option value="2012">2012</option>
                              <option value="2011">2011</option>
                              <option value="2010">2010</option>
                    </select>

                          </div>
                          <div className="mx-5">
                            <select  id="sort" className="w-full m-2 py-2 px-4  capitalize flex-warp  rounded-md shadow-md shadow-black" >
                            <option value="default">D&eacute;fault</option>
<option  value="latest-updated">Derni&egrave;re mise à jour
</option>

<option value="name-az" >Titre A-Z
</option>
<option value="release-date">Dernier Ajout
</option>



                          
                            </select>

                          </div>
                          </div>
                          <div className="flex flex-wrap justify-start">
                            <div  className="flex flex-wrap  m-2 py-2 px-4 capitalize w-full font-bold bg-zinc-200  dark:bg-zinc-900 rounded-lg"   >
                          


<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Action" className="peer hidden" /><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Action</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Aventure" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Aventure</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Com&eacute;die" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Com&eacute;die</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Drame" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Drame</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Ecchi" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Ecchi</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Fantastique" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Fantastique</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Harem" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Harem</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Historique" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Historique</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Horreur" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Horreur</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Mecha" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Mecha</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Musique" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Musique</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Fantasy" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Fantasy</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Psychologique" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Psychologique</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Romance" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Romance</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Science-Fiction" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Science-Fiction</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Slice of Life" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Tranche de vie</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Sport" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Sport</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Thriller" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Thriller</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Isekai" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Isekai</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Josei" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Josei</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Shounen" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Shounen</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Shoujo" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Shoujo</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Seinen" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Seinen</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Surnaturel" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Surnaturel</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Yaoi" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Yaoi</span></label>
<label className="inline-flex items-center m-1 "><input type="checkbox"   id="genres" value="Yuri" className="peer hidden"/><span className="select-none cursor-pointer rounded-md border-2 dark:border-gray-200 border-zinc-600 py-1 px-2 text-xs dark:text-gray-200 transition-colors duration-200 ease-in-out dark:peer-checked:bg-gray-200 dark:peer-checked:text-gray-900 dark:peer-checked:border-gray-200 peer-checked:bg-gray-800 peer-checked:text-gray-100 peer-checked:border-gray-800 " >Yuri</span></label>


                               
                               </div>
                          </div>
                          </div>
                        <div id="holder" className="flex flex-wrap justify-start   rounded-lg  bg-zinc-200  dark:bg-zinc-900  bg-opacity-70 mt-5 mb-5 py-5" style={{minHeight:"100vh"}}>
                            { loading && <Listskelton style="anime w-1/2 sm:w-1/3 md:w-1/4  xl:w-1/5 pb-2" num="20"  /> }
                            {datas.map((item,index) => (
                             
                            
                             
                                  <Link key={index} href={`/anime/${item.id}-${item.url}`} passHref className="anime w-1/2 sm:w-1/3 md:w-1/4  xl:w-1/5 pb-2">
                                  <div className="group  relative shrink-0  group shadow-xl rounded-md hover:cursor-pointer mb-2    bg-opacity-75 overflow-hidden my-2 mx-2 ml-2 md:ml-2 shadow-black hover:shadow-zinc-800 transition-all duration-200 cursor-pointer ">
                                 
                      
                    
                    
                                  <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                                  <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                                    <div
                                      id="list-skeleton"
                                      className="h-80  rounded-md "
                                    >
                                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                                        

                                        <Image
                                alt={item.title}
                                src={`https://cdn.statically.io/img/api.toonanime.org/${item.image}`}
                                className="rounded-md group-hover:brightness-50 group-hover:duration-1000 object-cover group-hover:scale-105 transition-all duration-500"
                             fill

                       
                      

                      />
                      
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
                    
                    
                     
                    
                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ">
                                    <p
                                      id="item-name"
                                      className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0 "
                                    >
                                      {truncate(item.title, 30, "...")}
                                    </p>
                             
                               
                                  </div>
                                  </div>
                                  
                    </div>
                    
                                      
                    </div>
                                </Link>
                            ))}
                   </div>
                  
                       

                   <ReactPaginate
        previousLabel={'←'}
        nextLabel={'→'}
        breakLabel={'...'}
        pageCount={total}
        marginPagesDisplayed={2}
      
        pageRangeDisplayed={10}
        onPageChange={handlePage}
        onLoad={handlePage}
        containerClassName={'flex flex-wrap justify-center'}
        activeLinkClassName={'border-tacolor border-b-2 border-tacolor text-tacolor'}
        pageClassName={'rounded-md px-3 py-1 mx-1 font-semibold text-sm text-white bg-bgta_color'}
        previousClassName={' bg-bgta_color  rounded-md px-3 py-1 mx-1 font-semibold text-sm text-white'}
        nextClassName={' bg-bgta_color  rounded-md px-3 py-1 mx-1 font-semibold text-sm text-white'}
        breakClassName={' bg-bgta_color  rounded-md px-3 py-1 mx-1 font-semibold text-sm text-white'}
        hrefBuilder={(currentpage) => '?page='+currentpage}
        renderOnZeroPageCount={null}
        forcePage={currentpage-1}


      />




     </div>
     <div ><Pub1/></div>
                </div>


       
      </>

    )


}


export default ListAnime
