import React, {useState} from "react";
import useHover from "../../hooks/useHover";
import Modal from "./Modal";


function CardCar({car}) {
  
	const [openModal, setOpenModal] = useState(false);

	const marqModel= car.brand +" "+car.model;

	const [hoverRef, isHovered] = useHover();

    
	return (
    
		<>
			<div onClick={()=>setOpenModal(true)} className='cards_car'>
        
				<div ref={hoverRef}  className='top_space' style={{backgroundImage:isHovered? undefined:`url("${car.image1}")`}}>
					<div
						className='PLUS'
        
					>
          			En savoir plus
					</div>


				</div>

				<div className='botm_space'> 
					<div className='btn_space1'>

          
						<h3 className='btn_space1_h'> {marqModel}  </h3>
						<div className='btn_space1_b'>
							<ul className='nav-menuC'>
								<li>{car.year} </li>
								<li> |</li>
								<li>{car.mileage} KM </li>
								<li> |</li> 
								<li>{car.motor} </li>
								<li> |</li>
								<li>{car.box} </li> 
							</ul> 
						</div>
					</div>
					<div  className='btn_space2'>
						<div className='btn_space2_h'> À partir de</div>
						<div className='btn_space2_b'> {car.price} CFA/Jour</div>
					</div>
       
				</div>
			</div>
			<Modal car={car} marqModel={marqModel}
				open={openModal} 
				onClose={() => setOpenModal(false)} />


		</>
	);
}

export default CardCar;
