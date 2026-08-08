import Hero from "../components/Hero/Hero";

function About() {
  const heroData = {
    heading: "About Us",
    text: "Learn more about our journey and mission",
    buttonText: "Learn More",
  };

  return (
    <>
      <Hero heroData={heroData} />
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, TravelAgency has been dedicated to providing
          exceptional travel experiences...
        </p>
        <h2>Our Mission</h2>
        <p>To make world-class travel accessible to everyone...</p>
      </div>
    </>
  );
}

export default About;
