import { useId, useState, useEffect } from "react";

export default function MainContent() {
  const [memeData, setMemeData] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2xscjb.png",
  });
  const { topText, bottomText, randomImage } = memeData;

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
    setMemeData((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  }

  const handleRandomMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomNumber];
    setMemeData((prevMemeData) => ({
      ...prevMemeData,
      randomImage: url,
    }));
  };

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
            value={topText}
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
            value={bottomText}
          />
        </div>
        <button className="form-btn" onClick={handleRandomMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-container">
        <img className="meme-image" src={randomImage} alt="sampleMeme" />
        <h2 className="meme-text top">{topText}</h2>
        <h2 className="meme-text bottom">{bottomText}</h2>
      </div>
    </main>
  );
}
