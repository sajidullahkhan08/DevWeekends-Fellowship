import "./Hero.css";

function Hero({ heroData }) {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{heroData.heading}</h1>
        <p>{heroData.text}</p>
        <button className="hero-btn">{heroData.buttonText}</button>
      </div>
    </div>
  );
}

export default Hero;
