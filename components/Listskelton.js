

import { FaSpinner } from 'react-icons/fa';


const Listskelton = ({style,num}) => {

  const arr = Array.from({ length: num}, (_, i) => i);



  

    return (


      arr.map((item, index) =>

 
   <div className={style} key={index}>  <div className="group  relative shrink-0  group shadow-xl rounded-md hover:cursor-pointer mb-2    bg-opacity-75 overflow-hidden my-2 mx-2 ml-2 md:ml-2 shadow-black hover:shadow-zinc-800 transition-all duration-200 cursor-pointer ">    <div
   id="list-skeleton"
   className="h-80  rounded-md  "
 >
     <div style={{width: '100%', height: '100%', position: 'relative'}}>   <div id="loading" className="loadingi">
       <FaSpinner className="animate-spin  h-20 w-20 text-tacolor"  /> 

</div> </div> </div> </div>  </div>
    )   
    )
    
    
}





export default Listskelton