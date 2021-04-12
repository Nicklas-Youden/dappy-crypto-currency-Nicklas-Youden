import Card from "./Card.js"
import axios from 'axios'
import { useEffect, useState} from "react"
export default function HighLights() {
  var [content, setContent] = useState([])
  useEffect(
    function() {
      axios
        .get("/card.json")
        .then((response) => {
          setContent(response.data.Cards);
        });
      },
    [setContent]
  );
  return(
    <>
      {content.map((item, i) => <Card key={i}  content={item}/>)}
        
    </>
  )
}