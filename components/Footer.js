import { BsDiscord, BsInstagram, BsTwitter, BsMailbox2, BsQuestionCircleFill, BsExclamationCircleFill,BsFillTriangleFill } from "react-icons/bs"
import{FaAngleUp} from "react-icons/fa"
import Image from "next/image"
import { useState,useEffect } from "react"

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
useEffect(() => {
  window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
          setShowTopBtn(true);
      } else {
          setShowTopBtn(false);
      }
  });
}, []);
var cc= "ToonAnime".split('')
const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};
  return (
    <>    
    <footer className="my-6 p-4 mt-4 sm:p-6 border-t-2 border-black-900 lg:my-8 bg-zinc-200 dark:bg-zinc-900 ">
      <div className="grid grid-cols-3 md:grid-cols-3 text-xs md:text-sm">
        <div className="md:ml-6  ">
        <h3 className="mb-6 font-semibold flex "><span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-tacolor relative inline-blocktransistion-all duration-200 hover:animate-bounce "><strong className="relative text-gray-200 ">legal</strong></span> <BsExclamationCircleFill size={20} className=" ml-3 " /></h3>
          <ul>
            <li className="mb-4 text-gray-400 font-semibold">
            ToonAime ne stocke en aucun cas des videos sur ses serveurs.
            </li>
          </ul>
        </div>
        <div className="md:ml-6">
          <h3 className="mb-6 font-semibold flex "><span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-gradient-to-l from-tacolor via-purple-500 to-bgta_color-500 relative inline-block animate-pulse transistion-all duration-200 hover:animate-bounce "><strong className="relative text-l text-zinc-200">ToonAnime</strong></span> <BsQuestionCircleFill size={20} className=" ml-3 " /></h3>
          <ul>
            <li className="mb-4 text-gray-400 font-semibold">
              Meilleur site regarder anime vf et vostfr gratuitement.
            </li>
          </ul>
        </div>
        <div className="md:ml-6 ">
        <h3 className="mb-6 font-semibold flex "><span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-tacolor relative inline-block  transistion-all duration-200 hover:animate-bounce "><strong className="relative text-gray-200">Contact</strong></span> </h3>
          <ul>
    
            <li className="mb-4 flex">
              <BsMailbox2 size={20} className=" mr-3 " />
              <a href="/contact" className="text-gray-600 hover:underline dark:text-gray-400 font-semibold">Mail</a>
            </li>
     <li className="mb-4 flex">
            <BsTwitter size={20} className=" mr-3 " />
              <a href="https://twitter.com/ToonAnime_" className="text-gray-600 hover:underline dark:text-gray-400 font-semibold">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 "></hr>


      <div className="flex items-center justify-evenly">
     
        <div className="flex gap-4 p-2 rounded-md  self-end  float-right social-wrapper">
          Copyright  © <span className="before:block before:absolute before:-inset-0.5 before:-skew-y-3  before:bg-gradient-to-l from-tacolor via-purple-500 to-bgta_color-500 relative inline-block  "><strong className="relative text-l text-zinc-200">ToonAnime</strong></span> {new Date().getFullYear()}
        </div>
      </div>
    </footer>
    <div className="top-to-btm">
    {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
</div>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var _Hasync= _Hasync|| [];
    _Hasync.push(['Histats.start', '1,4314873,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
_Hasync.push(['Histats.framed_page', '']);
            (function() {
              var hs = document.createElement('script');
              hs.type = 'text/javascript';
              hs.async = true;
              hs.src = ('//s10.histats.com/js15_as.js');
              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
            })();
          `,
        }}
      />
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?4314873&101" alt="cool hit counter" border="0" /></a></noscript>
    </>
  )
}

export default Footer