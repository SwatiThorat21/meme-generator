import React from "react";
import memesData from "../memesData";

function Meme() {
const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    let memesArray = memesData.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
   
    setMemeImage(memesArray[randomNumber].url)
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="top-text"
        ></input>
        <input
          type="text"
          className="form-input"
          placeholder="bottom-text"
        ></input>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
        <img src={memeImage} alt="meme-img" className="meme-image"></img>
    </main>
  );
}

export default Meme;
