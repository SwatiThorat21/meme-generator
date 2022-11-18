import React from "react";

function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" className="form-input" placeholder="top-text"></input>
        <input type="text" className="form-input" placeholder="bottom-text"></input>
        <button className="form-button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

export default Meme;
