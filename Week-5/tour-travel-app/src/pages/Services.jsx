import Hero from "../components/Hero/Hero";
import RecentTrips from "../components/RecentTrips/RecentTrips";

function Services() {
  const heroData = {
    heading: "Our Services",
    text: "Discover what we offer",
    buttonText: "View Services",
  };

  return (
    <>
      <Hero heroData={heroData} />
      <RecentTrips />
    </>
  );
}

export default Services;
