import "./Card.scss";

export default function Card({content}){
  
  return(
    <article className="card">
      {content.map(function(item){
        switch(item.type){
          case "heading":
            return <h2 className="card__title">{item.text}</h2>
          case "text":
            return <p className="card__text">{item.text}</p>
          case "image":
            return <img className="card__image" src={item.src} alt={item.alt}/>
          default:
            return null
        }
      })}
    </article>
  )
}