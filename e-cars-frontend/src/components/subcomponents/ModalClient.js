
import React,{ useState }  from "react";
import "./Modal.css";
import DatePicker   from "react-datepicker";

import axios from "axios";

const ModalClient =  ({car, open, onClose })=>{

	 const [name, setName] = useState(""),
	 [email, setEmail] = useState(""),
	 [delivery_adress, setDeliveryAdress] = useState(""),
	 [phone, setPhone] = useState(""),
	 [driver, setDriver] = useState(false),
	 [date, setDate] = useState(new Date()),
	 [date1, setDate1] = useState(new Date()),
	 STANDAR=[" Date de Départ", " Date de Retour","Choisir un modèle","Choisir un option"],
	 [style, setStyle] = useState(car.image1);

	 const handleSetDriver=()=>{
		if(driver ==!true){
			setDriver(true);
		}
		else setDriver(false);
	 };

	 /* [date, setDate] = useState(new Date()); */

  
   
	const handleSubmit = async event => {
		console.log("handleSubmit ran");
		event.preventDefault(); // 👈️ prevent page refresh
  
		// 👇️ access input values here
		console.log("firstName 👉️", name);
		console.log("lastName 👉️", email);
		 axios({
			method: "POST",
			url: "http://localhost:3001/client",
			headers: {
				"Content-Type": "application/json",
			},
			data: {
				phone:phone,
				name: name,
				email: email



			}
		}).then(function(response1) {
			
			console.log(response1.data);

			axios({
				method: "POST",
				url: "http://localhost:3001/request",
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					client: response1.data.id,
					state: "NOUVEAU",
					car: car.id,
					driver_w: driver,
					delivery: false,
					delivery_adress: "Retrait Rieviera 4",
					final_price: driver? car.driver: car.price,

				}
			}).then(function(response) {
				
				console.log(response.data);
				(window.confirm("DEMANDE ENVOYÉE AVEC SUCCES"));
				onClose(true);
				return 1;
	
			}).catch(function(error) {
		
				onClose(true);
				(window.confirm("ECHECS DE LA DEMANDE"));
       
		
				return 0;
			});
		

		})
			.catch(function(error) {
		
				onClose(true);
				(window.confirm("ECHECS DE LA DEMANDE"));
       
		
				return 0;
			});
        
  
		// 👇️ clear all input values in the form
		
		setName("");
		setEmail("");
	};
  
   
	if (!open) return null;

 
	return (
		<div onClick={onClose} className='overlay'>
			<div
				onClick={onClose}
				className='modalContainer'
          
			> 
				<div  onClick={(e) => {
					e.stopPropagation();
				}} className='vraiModal' >
					<div className='modelLeft'>
						<img className='imageSelected' src={style} alt='logo'/>
           
					</div>
					<div className='modalRight'>
						<p className='closeBtn' onClick={onClose}>
               				Retour 
						</p>
						<div>
							<form className='requestForm' onSubmit={handleSubmit}>
								<div className='champ' >
									<div className='label'>
            						Nom complet:
									</div>
           
									<input
										id="name"
										name="name"
										type="text"
										onChange={event => setName(event.target.value)}
										value={name}
									/>
            
								</ div>

								<div className='champ' >
									<div className='label'>
            						Email:
									</div>
									<input
										id="email"
										name="email"
										type="text"
										value={email}
										onChange={event => setEmail(event.target.value)}
									/>
            
								</ div>
								<div className='champ' >
									<div className='label'>
            						Telephone:
									</div>
									<input
										id="phone"
										name="phone"
										type="text"
										value={phone}
										onChange={event => setPhone(event.target.value)}
									/>
            
								</ div>

								<div className='champ' >
									<div className='label'>
            						 Avec chauffeur? :
									</div>
           
									<input
										type ="checkbox" value ={driver} onChange={()=>handleSetDriver()}
									/>
            
								</ div>

			
        
								<div className='demande' onClick={handleSubmit} type="submit">DEMANDER</div>
							</form>
						</div>
					</div>
         
				</div>
        
			</div>
      		Modal
		</div>
	);
};

export default ModalClient;