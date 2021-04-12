import RoadmapCard from "./RoadmapCard.js"
import axios from 'axios'
import { useEffect, useState} from "react"
export default function Roadmap() {
  var [content, setContent] = useState([])
  useEffect(
    function() {
      axios
        .get("/card.json")
        .then((response) => {
          setContent(response.data.roadmap);
        });
      },
    [setContent]
  );
  return(
    <div className="Roadmap">
      <h2 className="Roadmap__title">Roadmap</h2>
      {content.map((item, i) => <RoadmapCard key={i}  content={item}/>)}
        
    </div>
  )
}