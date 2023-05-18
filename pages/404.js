import Image from "next/image"
import { NextSeo } from "next-seo"
export default  function notFound() {
    return (
        <>
        <NextSeo noindex={true}  nofollow={true}
        title="Page introuvable - ToonAnime"
        description="Page introuvable sur toonanime"
        additionalMetaTags={[{
            name: 'robots',
            content: 'noindex, nofollow'
            }, {
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

        <div className="flex flex-wrap justify-center pt-7">
            <div className="grid grid-cols-6 pb-16 pt-16"> 
            <div></div>
            <div className="col-span-6 mx-3 lg:col-span-4 lg:mx-0 mt-6 z-10 ">
                <div className="flex flex-col  justify-center ">
          
            <Image src="/404.png" width={250} height={250} className="self-center"   />
            <br />
      
            
            <p className="text-xl font-extrabold uppercase ">La page que vous recherchez n&apos;existe pas</p>
          
            </div>
            </div>
            <div></div>
            </div>
           


            
        </div>
        </>
    )
}

