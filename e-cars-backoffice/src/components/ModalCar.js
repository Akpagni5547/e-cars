
import React,{ useState }  from 'react';
import './Modal.css';

import axios from 'axios';
const ModalCar =  ({ open, onClose, method, object })=>{

	 var [model, setModel] = useState(''),
	 [brand, setBrand] = useState(''),
	 [year, setYear] = useState(''),
	 [motor, setMotor] = useState('ELECTRIC'),
	 [mileage, setMileage] = useState(''),
	 [box, setBox] = useState('AUTOMATIQUE'),
	 [price, setPrice] = useState(''),
	 [type, setType] = useState('SUV'),
	 [image1, setImage1] = useState(),
	 [image2, setImage2] = useState(),
	 [image3, setImage3] = useState(),
	 [image4, setImage4] = useState(),
	 [id, setId] = useState('');

	 
	 
	
	 /* [date, setDate] = useState(new Date()); */

  
   
	const handleSubmit = async event => {

		event.preventDefault(); // 👈️ prevent page refresh
		let formData = new FormData();
		model!=null? formData.append('model',model): formData.append('model',object.model);
		brand!=null? formData.append('brand',brand): formData.append('brand',object.brand);
		year!=null? formData.append('year',year): formData.append('year',object.year);
		motor!=null? formData.append('motor',motor): formData.append('motor',object.motor);
		mileage!=null? formData.append('mileage',mileage): formData.append('mileage',object.mileage);
		box!=null? formData.append('box',box): formData.append('box',object.box);
		price!=null? formData.append('price',price): formData.append('price',object.price);
		type!=null? formData.append('type',type): formData.append('type',object.type);
		formData.append('image1',image1);
		 formData.append('image2',image2);
		 formData.append('image3',image3);
		formData.append('image4',image4,);
		console.log('RRRRRRRR'+formData.get('image1'));
		
		
		if(object!=null){

			if(object.id !=null){
			
				setId(object.id);
			}
		}
		// 👇️ access input values here
		
		
		 axios({
			method: method,
			url: process.env.REACT_APP_API_URL +'/car/' + id,
			headers: {
				'Content-Type': 'mutlipart/form-data',
				'Authorization': 'Bearer '+ localStorage.getItem('access_token')
			},
			data: formData
		
		}).then(function(response1) {
			
			console.log(response1.data);
			onClose(true);
			(window.confirm('ECAR ENREGITRÉ AVEC SUCCES'));

		

		})
			.catch(function(error) {
		
			
				(window.confirm('ECHECS DE LA DEMANDE, REMPLISSER CORRECTEMENT LES CHAMPS ET REESAYEZ'));
       
		
				return 0;
			});
        
  
		// 👇️ clear all input values in the form
		
		/* setName('');
		setEmail(''); */
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
					
					<div className='modalRight'>
						<p className='closeBtn' onClick={onClose}>
               				Retour 
						</p>
						<div>
							<form className='requestForm' onSubmit={handleSubmit}>
								<div className='momo'>
								<div className='formR'>
								
								<div className='champ' >
									<div className='label'>
									Modele:
									</div>
		   
									<input
										id='model'
										name='model'
										type='text'
										onChange={event => setModel(event.target.value)}
										value={model}
									/>
			
								</ div>

								<div className='champ' >
									<div className='label'>
									Marque:
									</div>
									<input
										id='brand'
										name='brand'
										type='text'
										value={brand}
										onChange={event => setBrand(event.target.value)}
									/>
			
								</ div>
								<div className='champ' >
									<div className='label'>
									Année:
									</div>
									<input
										id='year'
										name='year'
										type='text'
										value={year}
										onChange={event => setYear(event.target.value)}
									/>
			
								</ div>
								<div className='champ' >
									<div className='label'>
									Moteur:
									</div>
		   
									
									
									<select value={motor} onChange={e=>setMotor(e.target.value)}>
										<option value ='ELECTRIC'>ELECTRIC</option>
										<option value ='ESSENCE'>ESSENCE</option>
										<option value ='DIESEL'>DIESEL</option>
										<option value ='HYBIRDE'>HYBIRDE</option>
									</select>
			
								</ div>
								
								<div className='champ' >
									<div className='label'>
									Kilometrage:
									</div>
		   
									<input
										id='mileage'
										name='mileage'
										type='text'
										onChange={event => setMileage(event.target.value)}
										value={mileage}
									/>
			
								</ div>
								<div className='champ' >
									<div className='label'>
									Boite:
									</div>
		   
									{/* <input
										id='box'
										name='box'
										type='text'
										onChange={event => setBox(event.target.value)}
										value={box}
									/> */}
									<select value={box} onChange={e=>setBox(e.target.value)}>
										<option value='AUTOMATIQUE'>AUTOMATIQUE</option>
										<option value='MANNUELLE'>MANNUELLE</option>
									</select>
			
								</ div>
								
							</div>
							<div className='formR'>
							
								<div className='champ' >
									<div className='label'>
									Prix:
									</div>
		   
									<input
										id='price'
										name='price'
										type='text'
										onChange={event => setPrice(event.target.value)}
										value={price}
									/>
			
								</ div>

								<div className='champ' >
									<div className='label'>
									Type:
									</div>
									{/* <input
										id='type'
										name='type'
										type='text'
										value={type}
										onChange={event => setType(event.target.value)}
									/> */}
									<select value={type} onChange={e=>setType(e.target.value)}>
										<option value='SUV'>SUV</option>
										<option value='BERLIN'>BERLIN</option>
										<option value='4X4'>4X4</option>
									</select>
			
								</ div>
								<div className='champ' >
									<div className='label'>
									 image 1:
									</div>
									<input
										id='image1'
										name='image1'
										type='file'
									
										onChange={event => setImage1(event.target.files[0])}
									/>
			
								</ div>
								<div className='champ' >
									<div className='label'>
									 image 2:
									</div>
									<input
										id='image2'
										name='image2'
										type='file'
										
										onChange={event => setImage2(event.target.files[0])}
									/>
			
								</ div>
								<div className='champ' >
									<div className='label'>
									 image 3:
									</div>
									<input
										id='image3'
										name='image3'
										type='file'
										
										onChange={event => setImage3(event.target.files[0])}
									/>
			
								</ div>
								<div className='champ' >
									<div className='label'>
									 image 4:
									</div>
									<input
										id='image4'
										name='image4'
										type='file'
										onChange={event => setImage4(event.target.files[0])}
									/>
			
								</ div>
						
								
							
								
							</div>
								</div>
								
								
						
					
			
        
								<div className='demande' onClick={handleSubmit} type='submit'>ENREGISTRER</div>
							</form>
						</div>
					</div>
         
				</div>
        
			</div>
      		Modal
		</div>
	);
};

export default ModalCar;