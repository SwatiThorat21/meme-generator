import React from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState([]);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    let memeUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: memeUrl,
    }));
  }

  function handleChange(event) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <main className="meme-section">
      <div className="form">
        <input
          type="text"
          placeholder="Top-text"
          className="form-input"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom-text"
          className="form-input"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.imgUrl} alt="meme_img" className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
