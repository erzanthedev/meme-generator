import { useId, useState } from "react";
import sampleMeme from "../assets/sample-meme.png";

export default function MainContent() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });

  console.log(formData);

  const id = useId();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <div className="form-input-wrapper">
          <label className="form-label" htmlFor={id + "-topText"}>
            Top Text
          </label>
          <input
            className="form-inputs"
            type="text"
            id={id + "-topText"}
            onChange={handleChange}
            name="topText"
            value={formData.topText}
          />
        </div>
        <div className="form-input-wrapper">
          <label className="form-label" htmlFor={id + "-bottomText"}>
            Bottom Text
          </label>
          <input
            className="form-inputs"
            type="text"
            id={id + "-bottomText"}
            onChange={handleChange}
            name="bottomText"
            value={formData.bottomText}
          />
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
