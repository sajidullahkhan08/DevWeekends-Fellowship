import "./TourCard.css";

// This component is highly reusable. It doesn't know WHERE the data comes from,
// it just knows it needs a 'tour' object to render.
function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} className="tour-image" />
      <div className="tour-info">
        <h3>{tour.title}</h3>
        <p className="tour-location">📍 {tour.location}</p>
        <div className="tour-footer">
          <span className="tour-price">${tour.price}</span>
          <button className="view-btn">View Details</button>
        </div>
      </div>
    </div>
  );
}
export default TourCard;
