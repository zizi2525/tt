
export default async function handler(req, res) {
  const  limite  = req.query.limite;
  const  order  = req.query.order;
  const lan  = req.query.lan;
  var url
  if (lan){
    url =  `https://api.toonanime.org/api/animefilter?type=&limite=${limite}&status=&annee=&language=${lan}&sort=${order}&genres=&page=1&title=`;
  }
  else{
    url =  `https://api.toonanime.org/api/animefilter?type=&limite=${limite}&status=&annee=&language=&sort=${order}&genres=&page=1&title=`;
  }

    var response = await fetch(url);
    response  = await response.json();
    
    var a = response.data;
   
    
    response = [];
    for (var i = 0; i < a.length; i++) {
     
      var data = {
        id :a[i].id,
        name: a[i].title,
        img: a[i].image,
        url: "/anime/"+a[i].id+'-'+a[i].url,
        year: a[i].date_de_sortie,
        genres: a[i].genres,
        synopsis: a[i].synopsis1,
        age: a[i].age,
        type: a[i].type,
        status: a[i].status,
        runtime: a[i].runtime,
        studio: a[i].studio,
        originaltitle: a[i].originaltitle,
        alternative_title: a[i].alternative_title,
        saisonNum: a[i].saisonNum,
        saisonId: a[i].saisonId,
        language: a[i].language,
        avertissement: a[i].avertissement,
        totalepisode: a[i].totalepisode,
        lastEpisode: a[i].lastepisode,
        cover: process.env.CDN+a[i].bigImage,

      };
      
      
      response.push(data);
    }
    
    res.status(200).json({ response });

}
