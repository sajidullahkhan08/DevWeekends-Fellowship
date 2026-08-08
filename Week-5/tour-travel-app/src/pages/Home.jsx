import Hero from "../components/Hero/Hero";
import Destination from "../components/Destination/Destination";
import RecentTrips from "../components/RecentTrips/RecentTrips";

function Home() {
  const heroData = {
    heading: "Explore the World",
    text: "Discover amazing destinations and create unforgettable memories",
    buttonText: "Start Your Journey",
  };

  return (
    <>
      <Hero heroData={heroData} />
      <Destination
        heading="Popular Destinations"
        text="Explore the most visited places around the world. From pristine beaches to majestic mountains, we have it all."
        img1="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
        img2="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
      />
      <Destination
        heading="Hidden Gems"
        text="Discover off-the-beaten-path locations that will take your breath away. Adventure awaits in every corner."
        img1="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
        img2="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800"
        reverse={true}
      />
      <RecentTrips />
    </>
  );
}

export default Home;
