
import React,{ useState }  from 'react';
import './Modal.css';

import axios from 'axios';
const ModalUpdate =  ({ open, onClose, object, url })=>{

	
	 /* [date, setDate] = useState(new Date()); */
	 

  
   
	const handleSubmit = async event => {
		console.log('Submit ran');
		event.preventDefault(); // 👈️ prevent page refresh
  
		// 👇️ access input values here
	
		 axios({
			method: 'PATCH',
			url: process.env.REACT_APP_API_URL + url + '/' + object.id,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer '+ localStorage.getItem('access_token')
			},
			data: {
				state:'TRAITÉE'}
		}).then(function(response1) {
			
			console.log(response1.data);
			onClose(true);
			(window.confirm('DEMANDE MODIFIÉE AVEC SUCCES'));

		

		})
			.catch(function(error) {
		
			
				(window.confirm('ECHECS DE LA DEMANDE, REESAYEZ'));
       
		
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
				}} className='vraiModal2' >
					
					<div className='modalRight'>
						<p className='closeBtn2' onClick={onClose}>
               				Retour 
						</p>
						<div>
							<div className='requestForm' onSubmit={handleSubmit}>
								<div> Confirmer-vous le traitement de la requete d&apos;ID {object.id} ?</div>
				
								<div className='demande' onClick={handleSubmit} type='submit'>CONFIRMER</div>
							</div>
						</div>
					</div>
         
				</div>
        
			</div>
      		Modal
		</div>
	);
};

export default ModalUpdate;