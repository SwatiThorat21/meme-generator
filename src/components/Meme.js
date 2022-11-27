import React from "react";
import memesData from "../memesData";

function Meme() {
// const [memeImage, setMemeImage] = React.useState("");

const [meme, setMeme] = React.useState({
  topText: "",
  bottomTxt: "",
  randomImage: "http://i.imgflip.com/1bij.jpg"
})

const[allMemeImages, setallMemeImages] = React.useState(memesData)

  function getMemeImage() {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
   let url = memesArray[randomNumber].url;
    setMeme(prevMeme =>{
      return{
        ...prevMeme,
        randomImage: url
      }
    })
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

        <img src={meme.randomImage} alt="meme-img" className="meme-image"></img>

    </main>
  );
}

export default Meme;
