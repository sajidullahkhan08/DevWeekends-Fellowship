import "./Destination.css";

function Destination({ heading, text, img1, img2, reverse }) {
  return (
    <div className={`destination ${reverse ? "reverse" : ""}`}>
      <div className="destination-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="destination-images">
        <img src={img1} alt="Destination 1" className="dest-img-1" />
        <img src={img2} alt="Destination 2" className="dest-img-2" />
      </div>
    </div>
  );
}

export default Destination;
