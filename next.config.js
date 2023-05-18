/** @type {import('next').NextConfig} */

const nextConfig = {
  

  images: {
    minimumCacheTTL: 2592000,
    domains: ['api.animesultra.net','api.toonanime.org',"cdn.statically.io"],
   deviceSizes: [16, 32, 48, 64,120, 128,160,200,256],
   

  },
  httpAgentOptions: {
     keepAlive: false,
  },

  env: {
    API_URL: "https://api.toonanime.org",
    
  
},
 eslint: {
    dirs: ['pages','components'],
    ignoreDuringBuilds: true,
  },

}


module.exports = nextConfig
