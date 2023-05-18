
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle} from "react-icons/fa";
import {RiBookOpenFill} from "react-icons/ri";
import { NextSeo } from 'next-seo';
import Pub from '@/components/pub';
import Pub1 from '@/components/pub1';
import Listskelton from '@/components/Listskelton';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router'

const ListAnime = () => {

  const [datas , setDatas] = useState([])
  const [total, setTotal] = useState()
  var [url, setUrl] = useState("")
  const [currentpage, setCurrentpage] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  var page = router.asPath.split("=")[1]
  if (page === undefined){
    page = 1
  }


   useEffect(() => {
    if (url === ""){
      url="https://api.toonanime.org/api/animefilter?page="+page+"&limite=20&status=&annee=&language=vf&sort=&genres=&title=&type="
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
    }
      );
    }
    a();
    
    
  
   
  }, [url]);

  


  const handleChange = async (e) => {
 

  
   
    var url = document.getElementById('filter').getAttribute('sid')
  

     setUrl (url)
  
    if (e.target.id==="title"){
  
      setUrl(url.replace(/title=(.*?)&/, `title=${e.target.value}&`))
    
  
    }

    else if (e.target.id ==="sort"){
      router.push(`/animes-vf`, `/animes-vf?page=1`)
      setCurrentpage(1)
      setUrl(url.replace(/sort=(.*?)&/, `sort=${e.target.value}&`))
    }


 
  }

  const handlePage = async (e) => {
    var url = document.getElementById('filter').getAttribute('sid')
   console.log(e.target)
    setUrl(url.replace(/page=(.*?)&/, `page=${e.selected+1}&`))
    router.push(`/animes-vf`, `/animes-vf?page=${e.selected+1}`)

    setLoading(true)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
    setDatas(data.data)
    setTotal(data.total_pages)
    setCurrentpage(e.selected+1)
    setLoading(false)
    });

  
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
      title="Liste des Animes vf - ToonAnime"
      description="Liste des Animes vf  - ToonAnime"
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
        content: 'liste anime vf ,anime vf streaming,toonanime'
      },{
        name: 'apple-mobile-web-app-status-bar',
        content: '#101317'
      },{
        
      },]}
  
     
    />

                <div className="grid grid-cols-6 pb-16 pt-16">
                <div ><Pub/></div>
                    <div className="col-span-6 mx-3 lg:col-span-4 lg:mx-0 mt-6 z-10" onChange={handleChange}>
                    
                        <div className="flex flex-inline text-4xl lg:text-5xl uppercase  font-bold mb-10 text-white bg-zinc-200  dark:bg-zinc-900 rounded-lg  p-3 items-center bg-gradient-to-r from-tacolor  to-bgta_color text-md shadow-lg  ">
                        <RiBookOpenFill className="text-3xl " />
        <h1 className="text-2xl uppercase pl-5 ">animes VF</h1>

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
                          
                         
                    
                          <div className="mx-5">
                            <select  id="sort" className="w-full m-2 py-2 px-4  capitalize flex-warp  rounded-md shadow-sm shadow-black" >
                            <option value="default">D&eacute;fault</option>
<option value="latest-updated">Derni&egrave;re mise à jour
</option>

<option value="name-az" >Titre A-Z
</option>
<option value="release-date">Dernier Ajout
</option>



                          
                            </select>

                          </div>
                          </div>
                         
                          </div>
                        <div className="flex flex-wrap justify-start   rounded-lg  bg-zinc-200  dark:bg-zinc-900  bg-opacity-70 mt-5 mb-5 py-5  " style={{minHeight:"100vh"}}>
                            {loading && <Listskelton style="anime w-1/2 sm:w-1/3 md:w-1/4  xl:w-1/5 pb-2" num="20"  />}
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
