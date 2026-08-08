import "./TripCard.css";

function TripCard({ img, heading, text }) {
  return (
    <div className="trip-card">
      <div className="trip-image">
        <img src={img} alt={heading} />
      </div>
      <div className="trip-info">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TripCard;
