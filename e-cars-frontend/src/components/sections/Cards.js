import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import CardCar from "../subcomponents/CardCar";
import UseFetch from "../../services/UseFetch";

function Cards() {
	const{DATA : CARSDATA}=UseFetch(process.env.REACT_APP_API_URL + "car/");  
	return (
		<div className='cards'>
			{CARSDATA!=null?
				(
					<div className='grid_container'>
						{
							CARSDATA.map((item)=>(
								<CardCar key={item.id} car={item} className="grid_item"></CardCar>
							))
						}
					</div>
				):(
					<div className='grid_container'> DESOLÉ! PAS D&apos;ECARS DISPONIBLE </div>
				)  
			}
			<Link
				to='/fleet'
			>
				<button className='FLEET '>VOIR TOUTES NOTRE FLOTTE</button>
              
			</Link>
		</div>
	);
}

export default Cards;
