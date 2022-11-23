import React from "react";
import memesData from "../memesData";

function Meme() {
function getMemeImage(){
  let memesArray = memesData.data.memes;
  console.log(memesArray);

}



  return (
    <main>
      <form className="form">
        <input type="text" className="form-input" placeholder="top-text"></input>
        <input type="text" className="form-input" placeholder="bottom-text"></input>
        <button className="form-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

export default Meme;
