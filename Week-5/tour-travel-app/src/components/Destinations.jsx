import TourCard from "./TourCard";
import "./Destinations.css";

// PROPS DRILLING: App passes the whole 'tours' array here.
// This component maps over it and passes individual 'tour' objects down to TourCard.
function Destinations({ tours }) {
  return (
    <section className="destinations" id="tours">
      <h2>Popular Destinations</h2>
      <div className="tours-grid">
        {tours.map((tour) => (
          // Drilling the individual tour object down to TourCard
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
export default Destinations;
