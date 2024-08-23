import trollFace from "../assets/troll-face.png";

export default function Header() {
  return (
    <nav>
      <img className="header-logo" src={trollFace} alt="" />
      <h2 className="header-title">Meme Generator</h2>
      <h3 className="header-text">React Course - Project 3</h3>
    </nav>
  );
}
