import {DiscussionEmbed} from "disqus-react"


const DisqusComments = ({ id,title,url }) => {
    const disqusShortname = "toonanime" 
     const disqusConfig = {
      url: url,
      identifier: id.toString(),
      title: title
    }  
    return (
      <div>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
export default DisqusComments;