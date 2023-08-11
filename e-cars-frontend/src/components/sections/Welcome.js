import React, { useState } from "react";
import "./Welcome.css";
import DatePicker from "../subcomponents/DatePicker";
import DropDown from "../subcomponents/Dropdown";





function Welcome(
 
) {
	const [selected, setSelected] = useState(""),
	 [driver, setDriver] = useState(""),
	 [date, setDate] = useState(new Date()),
	 [date1, setDate1] = useState(new Date()),
	 OPTIONS1= ["Choisir un modèle","BERLING","SUV","4X4","TOUT"],
	 OPTIONS2= ["AVEC CHAUFFEUR","SANS CHAUFFEUR"],
	 STANDAR=[" Date de Départ", " Date de Retour","Choisir un modèle","Choisir un option"];
  
	return (
		<div className='bienvenueContainer'>
			<div className='flotingDiv'>
				<div className="customSelect">
					<span>01 </span> Choisissez le modèle
					<DropDown STANDAR={STANDAR[2]} selected={selected} setSelected={setSelected} options={OPTIONS1}></DropDown>
				</div>
				<div className="customSelect">
					<span>02 </span>Choisissez une période
					<div className='dateChoice'>
						<DatePicker date={date}  setDate={setDate} STANDAR={STANDAR[0]}  ></DatePicker>
						<DatePicker date={date1}  setDate={setDate1}  STANDAR={STANDAR[1]} ></DatePicker>
					</div>

				</div>

				<div className="customSelect">
					<span>03 </span>Chauffeur
					<DropDown STANDAR={STANDAR[3]} selected={driver} setSelected={setDriver} options={OPTIONS2}></DropDown>
				</div>
				<div className='Trouver'>TROUVER</div>
        
			</div>
     
			<div className='container1'>
        
				<div className='petitText'> Location de Véhicules Premium</div>
				<div className='grandText'>Bienvenue à < span className='TextRed'> E-Cars</span></div>
				<div className='petitText'>
       				Un Service SMS
				</div>
			</div>
			<div className='container2'>

				<figure className='item1'>
					<img className='imgB' id="space"  src='images/Groupe16810.svg' alt='logo'/>
					<figcaption>SIMPLE</figcaption>
				</figure>
				<figure className='item2'>
					<img className='imgB'  id="space" src='images/Groupe16809.svg' alt=''/>
					<figcaption>MODERNE</figcaption>
				</figure>
				<figure className='item3'>
					<img className='imgB' id="space" src='images/Groupe16808.svg' alt=''/>
					<figcaption>SECURISÉ</figcaption>
				</figure>
			</div>
    
   
   
     
		</div>
	);
}

export default Welcome;
