import { useState } from "react";
import "./styles.css";

export default function App() {
  var emojidictionary={"🙂":"smiling","😨":"fear","🤔":"thinking","😠":"angry","🤗":"hugging"};
   var [meaning,setmeaning]=useState("");
  function emojiinputhandler(Event)
  {
    var emoji=Event.target.value;

    var meaning=emojidictionary[emoji];
    //console.log(emoji);
    setmeaning(meaning);

  }
  return (

    <div className="App">
      <input onChange={emojiinputhandler}/>
      <h2/>meaning {meaning}
      
    </div>
  );
}
