import { useId, useState, useEffect } from "react";
import sampleMeme from "../assets/sample-meme.png";

export default function MainContent() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemeImages() {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const results = await response.json();
        setAllMemes(results.data.memes);
      } catch (err) {
        // Handle error
        console.log("Error:", err);
      }
    }

    getMemeImages();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const id = useId();

  return (
    <main>
      <div className="form">
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
      </div>
      <div className="meme-container">
        <img className="meme-image" src={sampleMeme} alt="sampleMeme" />
        <h2 className="meme-text top">{formData.topText}</h2>
        <h2 className="meme-text bottom">{formData.bottomText}</h2>
      </div>
    </main>
  );
}
