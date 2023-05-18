import Link from "next/link";
import Image from "next/image";
import { FaGripLinesVertical,FaPlayCircle,FaAngleDoubleRight } from "react-icons/fa";
import {BsFillTrashFill} from "react-icons/bs"

export default function List({ pageTitle, data,link }) {
  const truncate = (str, max, suffix) => {
    return str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;
  };
  const RemoveproAll = (e,liste) => {

   
   var watchList = JSON.parse(
        window.localStorage.getItem(liste)
        );
   /*      if (watchList === null) {
            watchList = [];
        }
        watchList = watchList.filter(
            (item) => item.name === title
        ); */
        window.localStorage.removeItem(
          liste,
        JSON.stringify(watchList)
        );
        //next div for tjis target
     e.target.closest("div").nextElementSibling.innerHTML =  '<p className="text-center"> Votre Liste est vide</p>'
     //add to classlist
      e.target.closest("div").nextElementSibling.classList.add("justify-center")

      

}
const RemoveproOne = (e,liste,title) => {
console.log(e.target)
 
 var remove1 = JSON.parse(
      window.localStorage.getItem(liste)
      );
     if (remove1  === null) {
      remove1  = [];
      }
      

var index = remove1.findIndex(function(item, i){
  return item.name === title
});
console.log(index)

remove1.splice(index, 1);



console.log(remove1)
window.localStorage.setItem(
  liste,
  JSON.stringify(remove1)
); 
if (remove1.length === 0) {
  e.target.closest("div").innerHTML = "Aucun élément dans la liste"
}

try {
var x = e.target.closest("div");
x.style.display = "none";

}
catch(err) {
}






 
     

}
  return (
    <>
    
      <div className=
        {link === "/profile" ? (
          "flex place-items-center my-6  md:rounded-md bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3 "
        ):( "flex place-items-center my-6 md:mx-6 md:rounded-md bg-gradient-to-r from-tacolor  to-bgta_color text-md font-bold shadow-lg p-3 "
        )
        }
        >
               {link === "/profile" ? (
        <FaPlayCircle size={28} className="text-white mr-3 "  />
        ):(
          <FaGripLinesVertical size={28} className="text-white  "  />
        )
        }
        <h2 title={pageTitle}
          style={{ fontSize: 20 }}
          id="listinfo"
          className="font-semibold  text-white capitalize"
        >
          {pageTitle}
        </h2>
        {link === "/profile" ? (
          pageTitle === "Continuer de Regarder" ? (
            <button id="supc" className="relative ml-auto flex top-[-2px] right-0 rounded-lg px-2 py-2 floa z-10 bg-red-500 text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200 " onClick={(e) => RemoveproAll(e,"continues")}>
                       <BsFillTrashFill size={20} className=" cursor-pointer  transition-all duration-200" ></BsFillTrashFill>
         </button>
          ) : 
          pageTitle  === "Favoris" ? (
            <button id="supf" className="relative ml-auto flex top-[-2px] right-0 rounded-lg px-2 py-2 floa z-10 bg-red-500 text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200 " onClick={(e) => RemoveproAll(e,"Favoris")}>
                        <BsFillTrashFill size={20} className=" cursor-pointer  transition-all duration-200" ></BsFillTrashFill>
          </button>
          )
          : (
            <button id="supl" className="relative ml-auto flex top-[-2px] right-0 rounded-lg px-2 py-2 floa z-10 bg-red-500 text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200 " onClick={(e) => RemoveproAll(e,"watchList")}>
                        <BsFillTrashFill size={20} className=" cursor-pointer  transition-all duration-200" ></BsFillTrashFill>
          </button>
          )

      ):(
        <a className="ml-auto text-white flex flex-wrap justify-center items-center " style={{fontSize:20}} href={link} ><span className="mr-2">Plus</span><FaAngleDoubleRight className="mt-2"></FaAngleDoubleRight></a>
        )
      }
      </div>
     {link =="/profile" ? (

                  
      

           <div
          id="holder"
          className="flex flex-wrap justify-start   rounded-lg  bg-zinc-200  dark:bg-zinc-900  bg-opacity-70 mt-5 mb-5 py-5" style={{minHeight: '360px'}}
        >
                {data.map((item, index) => {
                  return (
                    <>
                    <div key={index}  className="card relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5   ">

                 
                {pageTitle === "Continuer de Regarder" ? (
                     <button id="supc" className=" absolute top-[-2px] right-0 rounded-md p-2 floa z-10 bg-red-500 text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200 " onClick={(e) => RemoveproOne(e,"continues",item.name,"supc")}>   
                       <BsFillTrashFill size={20} className="relative ml-auto flex" ></BsFillTrashFill>
                       </button>
          ) : 
          pageTitle  === "Favoris" ? (
            <button id="supf" className="absolute top-[-2px] right-0 rounded-md p-2  floa z-10 bg-red-500 text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200 " onClick={(e) => RemoveproOne(e,"Favoris",item.name,"supf")}>   
            <BsFillTrashFill size={20} className="relative ml-auto flex" ></BsFillTrashFill>
            </button>
          )
          : (
            <button id="supw" className="absolute top-[-2px] right-0 rounded-md p-2 floa z-10 bg-red-500 text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200 " onClick={(e) => RemoveproOne(e,"watchList",item.name,"supw")}>  
            <BsFillTrashFill size={20} className="relative ml-auto flex" ></BsFillTrashFill>
            </button>
          )}

   
              
                    <Link  href={item.url} passHref  >
                    
                      <div className="group relative shrink-0 shadow-xl rounded-md hover:cursor-pointer mb-2  bg-opacity-75 overflow-hidden m-1 shadow-black hover:shadow-zinc-600 transition-all duration-200 cursor-pointer ">
                     
          
        
        
                      <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                      <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                        <div
                          id="list-skeleton"
                          className="h-80 rounded-md "
                        >
                            <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <Image
            alt={item.name}
            src={item.img}
            fill
            sizes="(max-width: 768px) 20vw,50vw"
            responsive="true"
           
            
           
          />
        
           {item.language == "vostfr" ? (
   
    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase before:content-['vostfr']"></span>
  ) : (
    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase before:content-['vf']"></span>)    }
          <br />
          {pageTitle == "Continuer de Regarder" ? ( <span className="relative top-8 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.episode} / {item. lastEpisode}</span>
          ) : (
            <span className="relative top-8 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastEpisode}</span>
          )}
          
          <br />
          {pageTitle == "Continuer de Regarder"  ? ( 
              item.status === "En cours" && (
            item.episode < item.lastEpisode ? (
              <span className="relative  top-12 float-right rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize animate-pulse duration-75">nouvel épisode</span>
            ) : (
             null
            )
              )
          ) : (
            
          null
        
          )}
          {item.status== "En cours" ? (
                            <span className="relative top-28 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                        ) : (
                            <span className="relative  top-28 rounded-r-lg px-2 py-2 bg-red-800 text-xs text-white font-bold capitalize">{item.status}</span>
                        )}
        
        
         
        
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black "></div>
                        <p
                          id="item-name"
                          className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0  "
                        >
                          {truncate(item.name, 40, "...")}
                        </p>
                     
                   
                      
                      </div>
                      
        </div>
        
                          
        </div>
                    </Link>
                    </div>
                    </>
                  );
                })}
              </div> 
        ) : (

      
          <div
          id="holder"
          className="flex flex-wrap justify-start   rounded-lg mt-5  bg-zinc-200  dark:bg-zinc-900  bg-opacity-70 md:p-5 md:ml-9 md:mr-9" style={{minHeight: '360px'}}
        >
                {data.map((item, index) => {
                  return (
                    
                    <Link key={index} href={item.url} passHref className="anime w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5  xl:w-1/6" >
                      <div className="group  relative shrink-0  group shadow-xl rounded-md hover:cursor-pointer mb-2   bg-tacolor-800 bg-opacity-75 overflow-hidden my-2 mx-2 ml-2 md:ml-2 shadow-black hover:shadow-zinc-800 transition-all duration-200 cursor-pointer ">
                     
          
        
        
                      <FaPlayCircle size={40}   className="animate-ping duration-300 text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block hover:z-20 hover:b  " ></FaPlayCircle>
                      <FaPlayCircle size={40}   className=" text-tacolor absolute inset-0 z-10 top-[40%] left-[40%] hidden group-hover:block " ></FaPlayCircle>
                        <div
                          id="list-skeleton"
                          className="h-80 rounded-md "
                        >
                            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                              {pageTitle=== "Continuer de Regarder" ? (
          <Image
            alt={item.name}
            src={item.img}
            className="rounded-md group-hover:brightness-50 group-hover:duration-1000 object-cover group-hover:scale-105 transition-all duration-500"
            fill
           
           
          
         
          />
                              ):(
                                <Image
                                alt={item.name}
                                src={`https://cdn.statically.io/img/api.toonanime.org/${item.img}`}
                                className="rounded-md group-hover:brightness-50 group-hover:duration-1000 object-cover group-hover:scale-105 transition-all duration-500"
                             fill
                           
                        
           
                              />
                              )
        }
           {item.language == "vostfr" ? (
   
    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase before:content-['vostfr']"></span>
  ) : (
    <span className="relative top-4 rounded-r-lg px-2 py-2 bg-tacolor text-xs text-white font-bold uppercase before:content-['vf']"></span>)    }
          <br />
          {pageTitle == "Continuer de Regarder" ? ( <span className="relative top-8 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.episode} / {item.lastEpisode}</span>
          ) : (
            <span className="relative top-8 rounded-r-lg px-2 py-2 bg-bgta_color text-xs text-white font-bold capitalize">Ep {item.lastEpisode}</span>
          )}
          
          <br />
          {pageTitle == "Continuer de Regarder"  ? ( 
              item.status === "En cours" && (
            item.episode < item.lastEpisode ? (
              <span className="relative  top-12 float-right rounded-l-lg px-2 py-2 bg-yellow-500 text-xs text-black font-bold capitalize animate-pulse duration-75">nouvel épisode</span>
            ) : (
             null
            )
              )
          ) : (
            
          null
        
          )}
          {item.status== "En cours" ? (
                            <span className="relative top-28 rounded-r-lg px-2 py-2 bg-green-500 text-xs text-white font-bold capitalize">{item.status}</span>
                        ) : (
                            <span className={`relative  top-28 rounded-r-lg px-2 py-2 ${item.status =="Prochainement" ? ( "bg-pink-500") :('bg-red-800')}  text-xs text-white font-bold capitalize`}>{item.status}</span>
                        )}
        
        
        
         
        
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black "></div>
                        <p
                          id="item-name"
                          className="absolute inset-0 flex flex-col items-center justify-end  py-4 break-words w-auto font-semibold md:text-base lg:text-base   xl:text-base text-sm text-white m-4 mt-2.5 mb-0  "
                        >
                          {truncate(item.name, 40, "...")}
                        </p>
                     
                   
                      
                      </div>
                      
        </div>
        
                          
        </div>
                    </Link>
                  );
                })}
              </div>
          )}
    </>
  );
}
