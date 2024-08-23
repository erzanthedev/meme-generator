import { useId } from "react";
import sampleMeme from "../assets/sample-meme.png";

export default function MainContent() {
  const id = useId();
  return (
    <main>
      <form className="form">
        <div className="form-input-wrapper">
          <label className="form-label" htmlFor={id + "-topText"}>
            Top Text
          </label>
          <input className="form-inputs" type="text" id={id + "-topText"} />
        </div>
        <div className="form-input-wrapper">
          <label className="form-label" htmlFor={id + "-bottomText"}>
            Bottom Text
          </label>
          <input className="form-inputs" type="text" id={id + "-bottomText"} />
        </div>
        <button className="form-btn">Get a new meme image 🖼</button>
      </form>
      <div className="meme-container">
        <img className="meme-image" src={sampleMeme} alt="sampleMeme" />
        <h2 className="meme-text top">Shut up</h2>
        <h2 className="meme-text bottom">and take my money</h2>
      </div>
    </main>
  );
}
