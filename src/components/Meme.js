import React from "react";
import memesData from "../memesData";

function Meme() {
  // const [memeImage, setMemeImage] = React.useState("");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomTxt: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages] = React.useState(memesData);

  function getMemeImage() {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
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
      <div className="meme">
        <img src={meme.randomImage} alt="meme-img" className="meme-image"></img>
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Mordor</h2>
      </div>
    </main>
  );
}

export default Meme;
