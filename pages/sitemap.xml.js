const EXTERNAL_DATA_URL = 'https://api.toonanime.org/api/sitemap';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xmlns:xhtml="http://www.w3.org/1999/xhtml"
   xsi:schemaLocation="
         http://www.sitemaps.org/schemas/sitemap/0.9
         http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     <url>
       <loc>https://toonanime.org</loc>
       <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
       <changefreq>always</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>https://toonanime.org/animes</loc>
       <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
       <changefreq>always</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
     <loc>https://toonanime.org/planing</loc>
     <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
     <changefreq>always</changefreq>
     <priority>0.9</priority>
   </url>
   <url>
   <loc>https://toonanime.org/animes-vostfr</loc>
   <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>always</changefreq>
       <priority>0.9</priority>
 </url>
 <url>
 <loc>https://toonanime.org/animes-vf</loc>
 <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
 <changefreq>always</changefreq>
 <priority>0.9</priority>
</url>
${posts
    .map((post) => {
         return `
       <url>
           <loc>${`${post}`}</loc>
           <lastmod>2023-01-20</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;