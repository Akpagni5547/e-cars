import React from "react";
import "../App.css";
import Cards from "../components/sections/Cards";
import HeroPage from "../components/sections/HeroPage";
import Location from "../components/sections/Location";
import "./About.css";

export default function About() {
	return (
		<>
			<div className='Ap1'>
				<HeroPage />
			</div>
     
			<Location />
			<div className='nve'> Nos véhicules <span> E-cars</span></div>
			<Cards/>
     
		</>
	);
}
