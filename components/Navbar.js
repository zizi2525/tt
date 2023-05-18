import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { BsFillPersonFill,BsMoonFill,BsSunFill,BsFillHouseFill,BsFillCalendarEventFill ,BsQuestionCircleFill} from "react-icons/bs";
import {DiAndroid,DiApple} from "react-icons/di";

import {RiBookOpenFill} from "react-icons/ri";
import {useTheme} from 'next-themes'
import Image from "next/image";

export default function Navbar({ page }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [suggestionHidden, setSuggestionHidden] = useState(true);
    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);
    const truncate = (str, max, suffix) => {
        return str.length < max
            ? str
            : `${str.substr(
                0,
                str.substr(0, max - suffix.length).lastIndexOf(" ")
            )}${suffix}`;
    };
    const clearSuggestion = () => {
        setSuggestionHidden(true);
        setSuggestion([]);
        setSearch("");
    };
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27 || event.keyCode === 13) {
            setSuggestionHidden(true);
            setSuggestion([]);
        }
    }, []);
    useEffect(() => {
        setMounted(true);
       
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);
    const handleChange = async (e) => {
        setSearch(e.target.value);
        if (e.target.value.length >= 2) {
            try {
                var response = await (
                    await fetch(`https://api.toonanime.org/api/search?keyword=${e.target.value}`)
                ).json();
                response = response.slice(0, 6);
                console.log(response);
                setSuggestion(response);
                setSuggestionHidden(false);
            } catch {
                setSuggestionHidden(true);
            }
        } else {
            setSuggestion([]);
        }
    };

    const renderThemeChanger= () => {
        if(!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
          return (
            <>
            <button id="sun" title="clair" onClick={() => setTheme('light')}>
            <BsSunFill className="h-6 w-6  text-yellow-500 " />
            </button>
      
            </>
                           
          )
        }

        else {
          return (
            <>
            <button id="dark" title="sombre" onClick={() => setTheme('dark')} >
            <BsMoonFill className="h-6 w-6 text-zinc-900 "   />
            </button>
          
            </>
          )
        }
     };

    return (
        <>
            <header className="w-full shadow dark:shadow-slate-800 z-20 fixed bg-zinc-100 dark:bg-zinc-900 ">
                <div className="container flex items-center justify-between mx-auto overflow-hidden font-medium max-w-7xl h-16 px-4 md:overflow-visible md:flex-row md:justify-around lg:justify-center">
                    <div className="items-start justify-center w-full space-x-6 text-center text-sm hidden md:w-3/3 md:mt-0 md:flex-row lg:items-center lg:flex lg:justify-start lg:space-x-8">
                       
                    <Link href="/" passHref
                         className={
                            page === "home"
                              ? "text-tacolor-500 flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center  cursor-pointer"
                              : "flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center  cursor-pointer"
                          }
                           >
                                <BsFillHouseFill  size={18} className="mr-3 "  />
                                <span> Accueil</span>
                           
                                </Link>
                                <Link
                            href="/animes" passHref
                            className={
                                page === "animes"
                                  ? "text-tacolor-500 flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center  cursor-pointer"
                                  : "flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center  cursor-pointer"
                              }
                            >
                                <RiBookOpenFill size={18} className="mr-3 "  />
                                <span>Liste Animes</span>
                        </Link>
                        <Link
                            href="/planing" passHref
                            className={
                                page === "planing"
                                  ? "text-tacolor-500 flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center  cursor-pointer"
                                  : "flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center  cursor-pointer"
                              }
                            >
                                <BsFillCalendarEventFill size={18} className="mr-3 "  />
                                <span>Planing</span>
                        </Link>
                    </div>
                    <div className="flex items-center justify-start h-full mr-4 md:w-2/3 md:justify-center md:px-4 ">
                        <Link href="/" className="relative py-2 flex md:py-0" >
                       
                            <Image src="/logo.webp" width={160}  height={90}  alt="Regarder des animes VF et VOSTFR en HD gratuitement"  
   className="w-[80%] sm:w-1/2 md:w-1/2 lg:w-1/2 " loading="eager"  as="image" placeholder="blur" 
  blurDataURL={'/logo.webp'} />
                        </Link>
             
                       <div>{renderThemeChanger()}</div>
    

                    </div>
                    <div className="flex uppercase   mr-3 md:hidden  transition-all duration-200 ">
                        <form className="relative mr-0 block"   onSubmit={e => { e.preventDefault(); }}>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                                <i
                             
                                    disabled={process.browser ? search == "" : true}
                                >
                                    <svg
                                        className={
                                            search != ""
                                                ? "md:w-5 md:h-5 xl:w-5 xl:h-5 lg:w-5 lg:h-5 h-4 w-4 text-tacolor"
                                                : "md:w-5 md:h-5 xl:w-5 xl:h-5 lg:w-5 lg:h-5 h-4 w-4 text-bgta_color"
                                        }
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
                                </i>
                            </div>
                            <input
                                type="text"
                                size="34"
                                spellCheck={false}
                                value={search}
                              
                                onChange={handleChange}
                                className="block md:p-3 md:pl-10 lg:p-3 lg:pl-10 xl:p-3 xl:pl-10 pl-9 p-3 w-full rounded-lg  text-xs focus:outline-none font-bold  border-2"
                                placeholder="Recherche..."

                                onClick={() => setSuggestionHidden(false)}
                                onBlur={(e) => {
                                    try {
                                        if (e.relatedTarget.id === "suggestion") {
                                            setSuggestionHidden(false);
                                        }
                                    } catch {
                                        setSuggestionHidden(true);
                                    }
                                }}
                            />
                          
                        </form>
                    </div>
                    <div className="items-start justify-center w-full space-x-6 text-center text-sm hidden mr-6 w-3/3 mt-0 md:flex-row md:items-center md:flex md:justify-end lg:space-x-8">
              
                        <form className="relative mr-0 block"   onSubmit={e => { e.preventDefault(); }}>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                                <i
                             
                                    disabled={process.browser ? search == "" : true}
                                >
                                    <svg
                                        className={
                                            search != ""
                                                ? "md:w-5 md:h-5 xl:w-5 xl:h-5 lg:w-5 lg:h-5 h-4 w-4 text-tacolor"
                                                : "md:w-5 md:h-5 xl:w-5 xl:h-5 lg:w-5 lg:h-5 h-4 w-4 text-bgta_color"
                                        }
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
                                </i>
                            </div>
                            <input
                                type="text"
                                size="34"
                                spellCheck={false}
                                value={search}
                              
                                onChange={handleChange}
                                className="block md:p-3 md:pl-10 lg:p-3 lg:pl-10 xl:p-3 xl:pl-10 pl-9 p-3 w-full rounded-lg  text-xs focus:outline-none font-bold  border-2"
                                placeholder="Recherche..."

                                onClick={() => setSuggestionHidden(false)}
                                onBlur={(e) => {
                                    try {
                                        if (e.relatedTarget.id === "suggestion") {
                                            setSuggestionHidden(false);
                                        }
                                    } catch {
                                        setSuggestionHidden(true);
                                    }
                                }}
                            />
                            <ul
                                className={
                                    suggestionHidden || search.length < 2
                                        ? "rounded-b-lg absolute w-full bg-zinc-900 opacity-90 mt-1 hidden"
                                        : "rounded-b-lg absolute w-full bg-zinc-900 opacity-90 mt-1"
                                }
                                id="suggestions"
                              
                            >
                                {suggestion.map((item, index) => {
                                    return (
                                        <li
                                            className={
                                                index === suggestion.length - 1
                                                    ? "text-white "
                                                    : "text-white  "
                                            }
                                            
                                            id="suggestion"
                                            tabIndex="0"
                                            key={index}
                                        >

                                            <Link href={`/anime/${item.id}-${item.url}`}  passHref  className="flex rounded border-b-2 opacity-90 border-tacolor hover:bg-zinc-800 hover:opacity-100 hover:scale-105 text-white  pt-1 pl-1 w-full transition-all duration-200" onClick={clearSuggestion}>
                                            
<Image height={20} width={20} alt={item.title} class="h-14 w-14 object-cover m-1 rounded shadow-md shadow-black/50" src={`https://api.toonanime.org${item.image}`} />
<div class="w-full ">
<h3 class="text-xs uppercase font-extrabold text-left">  {truncate(item.title, 25, "...")}</h3>
<p class="text-xs truncate opacity-70 uppercase font-bold  m-1 text-left">Langue : {item.language}</p>
<p class="text-xs truncate opacity-70 capitalize font-bold  m-1 text-left ">Année : {item.date_de_sortie}</p>
</div>


                                               
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </form>
                
                  <Link href="/profil" passHref  
                            className={
                                page === "profil"
                                  ? "text-tacolor-500 lg:flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center cursor-pointer"
                                  : " hidden w-full py-2 lg:flex mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center  cursor-pointer"
                              }>
                       
                                <BsFillPersonFill size={18} className="mr-2 "  />
                                <span>Profil </span>
                        </Link>
                  <Link
                            href="/aide"
                            className="hidden lg:flex w-full py-2 mx-0 font-bold text-left md:w-auto md:px-0 md:mx-2 hover:text-tacolor-500 lg:mx-3 md:text-center ">
                                <BsQuestionCircleFill size={18} className="mr-2 "  />
                                <span>Aide </span>
                        </Link>
                      
                    </div>
                    <div className="lg:hidden z-30 mt-4 ">

        
                        <>
                            <button title="Menu"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="w-fit">

                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
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
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
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
                                    )}
                                </span>
                            </button>
                            
                            <ul className={isOpen ? "block absolute text-gray-900 mt-2 origin-top-right divide-y divide-gray-100 shadow-lg left-px right-px pl-2 pt-5 pb-4 bg-white dark:bg-black dark:text-slate-100 dark:divide-gray-700 dark:shadow-gray-800" : "hidden"} >
                            <li className="group flex items-center w-full px-2 py-2 text-sm">
                            <Link href="/" passHref onClick={() => setIsOpen(false)}
                         className={
                            page === "home"
                              ? "text-tacolor flex w-full  py-2  mx-0 font-bold   hover:text-tacolor-500 lg:mx-3 text-center cursor-pointer"
                              : "flex w-full py-2 mx-0 font-bold   hover:text-tacolor-500  text-center cursor-pointer"
                          }
                           >
                                <BsFillHouseFill  size={18} className="mr-3 "  />
                                <span> Accueil</span>
                           
                                </Link>
                                </li>
                                <li className="group flex items-center w-full px-2 py-2 text-sm">
                                <Link
                            href="/animes" passHref onClick={() => setIsOpen(false)}
                            className={
                                page === "animes"
                                  ? "text-tacolor flex w-full py-2 mx-0 font-bold  px-0  hover:text-tacolor-500  text-center cursor-pointer"
                                  : "flex w-full py-2 mx-0 font-bold  px-0  hover:text-tacolor-500  text-center cursor-pointer"
                              }
                            >
                                <RiBookOpenFill size={18} className="mr-3 "  />
                                <span>Liste Animes</span>
                        </Link>     </li>
                        <li className="group flex items-center w-full px-2 py-2 text-sm">
                        <Link
                            href="/planing" passHref onClick={() => setIsOpen(false)}
                            className={
                                page === "planing"
                                  ? "text-tacolor flex w-full py-2 mx-0 font-bold  px-0  hover:text-tacolor-500 lg:mx-3 text-center cursor-pointer"
                                  : "flex w-full py-2 mx-0 font-bold  px-0  hover:text-tacolor-500 lg:mx-3 text-center cursor-pointer"
                              }
                            >
                                <BsFillCalendarEventFill size={18} className="mr-3 "  />
                                <span>Planing</span>
                        </Link>     </li>
                                <li className="group flex items-center w-full px-2 py-2 text-sm">
                                  
                             
                                <Link href="/profil" passHref onClick={() => setIsOpen(false)}
                            className={
                                page === "profil"
                                  ? "text-tacolor flex w-full py-2 mx-0 font-bold  px-0  hover:text-tacolor-500 lg:mx-3 text-center cursor-pointer"
                                  : "flex w-full py-2 mx-0 font-bold  px-0  hover:text-tacolor-500 lg:mx-3 text-center cursor-pointer"
                              }>
                       
                                <BsFillPersonFill size={18} className="mr-2 "  />
                                <span>Profil </span>
                        </Link>
                        </li>
                        <li className="group flex items-center w-full px-2 py-2 text-sm">
                  <Link onClick={() => setIsOpen(false)}
                            href="/aide"
                            className="flex w-full py-2 mx-0 font-bold text-left px-0  hover:text-tacolor-500 lg:mx-3 md:text-center ">
                                <BsQuestionCircleFill size={18} className="mr-2 "  />
                                <span>Aide </span>
                        </Link>
                        </li>
                      
                              
                                
                            </ul>
                        </>

                    </div>
                </div>
                <ul
                                className={
                                    suggestionHidden || search.length < 2
                                        ? "rounded-b-lg absolute w-full bg-zinc-900 opacity-90 mt-1 hidden"
                                        : "rounded-b-lg absolute w-full bg-zinc-900 opacity-90 mt-1 md:hidden "
                                } style={{zIndex: 999}}
                                id="suggestions"
                            >
                                {suggestion.map((item, index) => {
                                    return (
                                        <li
                                            className={
                                                index === suggestion.length - 1
                                                    ? "text-white  "
                                                    : "text-white z-40 "
                                            }
                                            id="suggestion"
                                            tabIndex="0"
                                            key={index}
                                        >

                                            <Link href={`/anime/${item.id}-${item.url}`}  passHref  className="flex rounded border-b-2 opacity-90 border-tacolor hover:bg-zinc-800 hover:opacity-100 hover:scale-105 text-white  pt-1 pl-1 w-full transition-all duration-200" onClick={clearSuggestion}>
                                            
<Image height={20} width={20} alt={item.title} class="h-14 w-14 object-cover m-1 rounded shadow-md shadow-black/50" src={`https://api.toonanime.org${item.image}`} />
<div class="w-full ">
<h3 class="text-xs uppercase font-extrabold text-left">  {truncate(item.title, 25, "...")}</h3>
<p class="text-xs truncate opacity-70 uppercase font-bold  m-1 text-left">Langue : {item.language}</p>
<p class="text-xs truncate opacity-70 capitalize font-bold  m-1 text-left ">Année : {item.date_de_sortie}</p>
</div>


                                               
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
            </header>

           
        </>
    )
}

