




export default async function handler(req, res) {
    function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}
let today = new Date();
    var dateStr = today;
    var day = getDayName(dateStr, "fr-FR");
    try {
      var url = `https://api.toonanime.org/api/planing?day=${day}`;
      var response = await fetch(url);
      response  = await response.json();
      
      var a = response;
     
     
      response = [];
      for (var i = 0; i < a.length; i++) {
       
        var data = {
          id :a[i].id,
          name: a[i].title,
          img: a[i].cover,
          url: "/anime/"+a[i].id+'-'+a[i].url,
          time:a[i].time,
          type: a[i].type,
          status: a[i].status,
          language: a[i].language,
          lastepisode: a[i].lastepisode,
         
  
        };
        
      
        response.push(data);
      }
      
      res.status(200).json({ response });
    } catch {
      res.status(200).json({response: [] });
    }
  }
  