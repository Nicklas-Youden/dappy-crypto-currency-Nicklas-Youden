import "./RoadmapCard.scss";

export default function RoadmapCard({content}){
  
  return(
    <>
      
    <article className="RoadmapCard">
      {content.map(function(item){
        switch(item.type){
          case "heading":
            return <h3 className="roadmap__title">{item.text}</h3>
          case "text":
            return <p className="roadmap__text">{item.text}</p>
          case "image":
            return <img className="roadmap__image" src={item.src} alt={item.alt}/>
          default:
            return null
        }
      })}
    </article>
    </>
  )
}