import React, { useState } from "react";
import "./DispoSection.css";
import DatePicker from "../subcomponents/DatePicker";
import DropDown from "../subcomponents/Dropdown";





function DispoSection(
 
) {
	const [selected, setSelected] = useState("");
	const [driver, setDriver] = useState("");
	const [date, setDate] = useState(new Date());
	const [date1, setDate1] = useState(new Date());
	const OPTIONS1= [" Choisir un modèle","BERLING","SUV","4X4","TOUT"];
	const OPTIONS2= [" AVEC CHAUFFEUR","SANS CHAUFFEUR"];
	const STANDAR=[" Date de Départ", " Date de Retour","Choisir un modèle","Choisir un option"];
  
	return (
		<div className='DispoSection_container'>
        
			<div className='flotingDiv'>
        
				<div className="customSelect">
					<span>01 </span> Choisissez le modèle
					<DropDown STANDAR={STANDAR[2]} selected={selected} setSelected={setSelected} options={OPTIONS1}></DropDown>
				</div>
				<div className="customSelect">
					<span>02 </span>Choisissez une période
					<div className='dateChoice'>
						<DatePicker date={date}  setDate={setDate} STANDAR={STANDAR[0]} ></DatePicker>
						<DatePicker date={date1}  setDate={setDate1}  STANDAR={STANDAR[1]} ></DatePicker>
					</div>

				</div>

				<div className="customSelect">
					<span>03 </span>Chauffeur
					<DropDown STANDAR={STANDAR[3]} selected={driver} setSelected={setDriver} options={OPTIONS2}></DropDown>
				</div>
				<div className='Trouver'>TROUVER</div>
				<div className='filterPart'>
					<div className='flt'> Filtre : </div>
					<div className='boxBn'>Boite Auto </div>
					<div className='boxBn'> Boite Manuelle </div>
				</div>
        
			</div>
       

       
      
		</div>
	);
}

export default DispoSection;
