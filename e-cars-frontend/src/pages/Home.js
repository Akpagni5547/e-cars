import React from "react";
import "../App.css";
import Cards from "../components/sections/Cards";
import HeroSection from "../components/sections/HeroSection";
import Welcome from "../components/sections/Welcome";
import Confiance from "../components/sections/Confiance";


function Home() {
	return (
		<>
			<HeroSection />
			<Welcome/>
			<Cards />
			<Confiance/>
			

		</>
	);
}

export default Home;
