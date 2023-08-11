import React ,{ useState } from "react";

import "./Dropdown.css";
function DropDown ({selected, setSelected ,options, STANDAR }){
	const [isActive, setIsActive] = useState(false);
	/* const options= [' Choisir un modèle','BERLING','SUV','4X4','TOUT'] */
	return (
		<div className="dropdown">
			{selected? (<div className="dropdown_btn" onClick={(e)=>setIsActive(!isActive)}>
				{selected}
				<span className='V'> v</span>
			</div>):
				(<div className="dropdown_btn" onClick={(e)=>setIsActive(!isActive)}>
					{STANDAR}
					<span className='V'> v</span>
				</div>)
			}

			{ isActive && (   <div className="dropdown_content">
				{options.map(option=>(
					<div key={option.id} onClick={e=>{setSelected(option);
						setIsActive(false);}
					} className="dropdown_item">
						{option}
					</div>
				))}
           
           
			</div>)}

		</div>
	);

}
export default DropDown; 