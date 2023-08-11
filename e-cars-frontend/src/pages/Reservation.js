import React from "react";
import "../App.css";
import Cards from "../components/sections/Cards";
import HeroPage from "../components/sections/HeroPage";
import Location from "../components/sections/Location";
import "./About.css";
import "./Reservation.css";
import Sidebar from "../components/sections/Sidebar";


export default function Reservations() {
	return (
		<>
			<div className='Ap1'>
			<div className='herop-container'>
			<div className='diag'>
            Reservation
			</div>
			</div>
			</div>
			<div className='reservation_page'>
			<Sidebar/>
			<div className='reservation_now'>
			<div className='nve'> Vos reservatins <span> E-cars</span> en cours</div>
			<Cards/>

			</div>
			
			</div>
     
			
     
		</>
	);
}
