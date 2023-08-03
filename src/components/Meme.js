import React from "react";

function Meme() {
 
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMems] = React.useState([]);

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data=>setAllMems(data.data.memes))
  },[])

  function getMemeImage() {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    let url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="main_section">
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="top-text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="form-input"
          placeholder="bottom-text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme-img" className="meme-image"></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
