import TripCard from "../TripCard/TripCard";
import "./RecentTrips.css";

function RecentTrips() {
  const trips = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      heading: "Mountain Adventure",
      text: "Explore the breathtaking peaks and valleys of the Himalayas.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      heading: "Beach Paradise",
      text: "Relax on pristine white sand beaches with crystal clear waters.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
      heading: "City Exploration",
      text: "Discover the vibrant culture and architecture of historic cities.",
    },
  ];

  return (
    <div className="recent-trips">
      <div className="trips-header">
        <h2>Recent Trips</h2>
        <p>Check out our latest adventures and popular destinations</p>
      </div>
      <div className="trips-container">
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            img={trip.img}
            heading={trip.heading}
            text={trip.text}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentTrips;
