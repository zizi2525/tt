import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import Image from 'next/image';
import { FaPlay,FaLanguage} from "react-icons/fa"
import {BiTimeFive,BiPieChart,BiPlayCircle} from "react-icons/bi"
import {BsFillBadgeCcFill,BsFillBadgeHdFill} from "react-icons/bs"
import Link from 'next/link';

const Slider = ({ data }) => {
    const truncate = (str, max, suffix) => {
        return str.length < max
          ? str
          : `${str.substr(
              0,
              str.substr(0, max - suffix.length).lastIndexOf(" ")
            )}${suffix}`;
      };




    return (
        <section style={{ height: '480px'}} className="pt-16 ">
        
        <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    effect={"fade"}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                      
                    }}
                    pagination={{
                      clickable: true,

                    }}
                    
                    
                    modules={[Autoplay, Navigation]}
                >
                {data.map((item, index) => (
                      <SwiperSlide key={index}>
            <div className='relative flex flex-row-1  items-center h-[380px] rounded-xl   md:mx-6 xl:mt-6 mt-2 '  >
              <div className='cover-img relative ' style={{width: 'auto', height: 'auto'}}>
    <Image src={`https://cdn.statically.io/img/api.toonanime.org/${item.img}`} alt={item.name}  
                     fill
                           sizes="(max-width: 419px) 30vw,(max-width: 639px) 50vw, (max-width: 767px) 70vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 30vw"
                      objectFit='cover'
                      priority
                      
                      
                     blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NkiFl1DwADUAHmsr7HFwAAAABJRU5ErkJggg=='
                      placeholder='blur'
                     responsive="true"  className='poster  absolute object-cover   blur-0 '></Image> 
              
             
              </div>
              <div className="z-10 md:flex md:flex-col md:basis-3/4 justify-start ml-6 self-start md:mt-10 md:mr-6 md:space-x-2 md:space-y-2 " >
               <div className="text-white font-extrabold md:text-xl lg:text-3xl xl:text-3xl text-xl md:p-12 lg:p-12 xl:p-12 p-4 md:pt-4 lg:pt-4 xl:pt-3 pt-12 md:pb-6 lg:pb-6 xl:pb-6 pb-0">
          { truncate(item.name,50," ...").split("<br/>").map((line, index) => {
            return <p key={index}>{line}</p>;
          })}
        </div>
                <div className='flex-row space-x-2 text-white uppercase text-xs lg:flex xl:flex pl-12 hidden'>
                   
                    <div className='flex'>
                   <BsFillBadgeCcFill
              color="#ff0040"
              style={{ marginLeft: 0.5, marginBottom: 1, marginTop: 0.5 }}
              size={17}
              className="mr-1"
            />    <p
            style={{ fontSize: 10 }}
            className="text-white font-semibold pr-2"
          >{item.language}</p></div>
                    <div className='flex'>
                   <BiPlayCircle
              color="#ff0040"
              style={{ marginLeft: 0.5, marginBottom: 1, marginTop: 0.5 }}
              size={17}
              className="mr-1"
            />    <p
            style={{ fontSize: 10 }}
            className="text-white font-semibold pr-2"
          >{item.lastEpisode} Episodes  </p></div>
                    <div className='flex'>
                    
                    </div>
                    <div className='flex'>
                    <BiTimeFive
              color="#ff0040"
              style={{ marginLeft: 0.5, marginBottom: 1, marginTop: 0.5 }}
              size={17}
              className="mr-1"
            />    <p
            style={{ fontSize: 10 }}
            className="text-white font-semibold pr-2"
          >
          {item.runtime}
          </p></div>
        
          <div className='flex'>
                    <BsFillBadgeHdFill
              color="#ff0040"
              style={{ marginLeft: 0.5, marginBottom: 1, marginTop: 0.5 }}
              size={17}
              className="mr-1"
            />    <p
            style={{ fontSize: 10 }}
            className="text-white font-semibold pr-2"
          >
          
          </p></div>
                </div>
                <div className='pt-5 text-xs hidden  uppercase space-x-1  lg:flex xl:flex pl-12 '>
                 
                    {item.genres.split(',').map((tag, index) => (
                         <div key={index} className="flex">
                         <p
                           style={{ fontSize: 10 }}
                           className="text-white font-semibold pr-2 rounded-lg bg-gray-700 px-2 py-1"
                         >
                           {tag}
                         </p>
                         </div>
                    ))}
                    
                </div>
                <p
          style={{ fontSize: 12, width:' 65%' }}
          className="md:text-white lg:text-white xl:text-white text-gray-100 md:font-semibold lg:font-semibold xl:font-semibold font-normal md:pl-12 md:pt-6 lg:pl-12 lg:pt-6 xl:pl-12 xl:pt-6 pl-6 pt-2"
          id="description"
        >
      { truncate(item.synopsis,250," ...")}
        </p>
        <div className="pt-7 pl-12">
                                    
                                    <Link href={item.url} className=" inline-flex relative items-center font-extrabold text-white  uppercase  group btn p-3 rounded-md before:bg-tacolor-500 ">
                                    <FaPlay className="inline-block z-10 group-hover:animate-pulse " />
                                        <span> regarder</span>
                            
                         </Link>
                         

                         
                         </div>

                
               </div>
               <div className="hidden justify-center fill md:flex flex-row basis-1/4 b relative " style={{width: 'auto', height: 'auto'}}>
         <Image src={`https://cdn.statically.io/img/api.toonanime.org/${item.img}`} height={360} width={300}
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NkiFl1DwADUAHmsr7HFwAAAABJRU5ErkJggg=='
              placeholder='blur'
             responsive="true"
           
           
           
           
         
         alt={item.name} className='z-20 rounded-xl m-5 max-h-[360px] brightness-90 relative  ' />  
              
            
               </div>
                </div>               
    
     
    
                    
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
                }


export default Slider