import { useId } from "react";

export default function MainContent() {
  const id = useId();
  return (
    <main>
      <form className="form">
        <div className="form-input-wrapper">
          <label htmlFor={id + "-topText"}>Top Text</label>
          <input type="text" id={id + "-topText"} />
        </div>
        <div className="form-input-wrapper">
          <label htmlFor={id + "-bottomText"}>Bottom Text</label>
          <input type="text" id={id + "-bottomText"} />
        </div>
        <button className="form-btn">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
