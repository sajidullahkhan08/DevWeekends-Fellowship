import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import { toursData } from "./data/tours";

function App() {
  // State lives at the top (App level) and is drilled down.
  const [companyName] = useState("Wanderlust Travels");
  const [tours] = useState(toursData);

  return (
    <div className="app">
      {/* Drilling companyName down to Navbar -> BrandName */}
      <Navbar companyName={companyName} />

      <Hero />

      {/* Drilling tours array down to Destinations -> TourCard */}
      <Destinations tours={tours} />

      {/* Drilling companyName down to Footer */}
      <Footer companyName={companyName} />
    </div>
  );
}

export default App;
