import React from "react";
import "../App.css";
import Cards from "../components/sections/Cards";
import DispoSection from "../components/sections/DispoSection";


import "./Fleet.css";

export default function Fleet() {
	return (
		<>
			<div className='Ap2'>
				<div className='herop-container'>
					<div className='diag'>
            Notre flotte
					</div>
				</div>
			</div>
			<DispoSection />
    
			<div className='nve'> Nos véhicules <span> E-cars</span></div>
			<Cards/>
     
		</>
	);
}
