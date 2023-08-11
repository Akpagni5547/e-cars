
import React,{ useState }  from 'react';
import './Modal.css';

import axios from 'axios';
const ModalDelete =  ({ open, onClose, object, url })=>{

	
	 /* [date, setDate] = useState(new Date()); */

  
   
	const handleSubmit = async event => {
		console.log('handleSubmit ran');
		event.preventDefault(); // 👈️ prevent page refresh
  
		// 👇️ access input values here
	
		 axios({
			method: 'DELETE',
			url: process.env.REACT_APP_API_URL + url + '/' + object.id,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer '+ localStorage.getItem('access_token')
			}
		}).then(function(response1) {
			
			console.log(response1.data);
			onClose(true);
			(window.confirm('ECAR SUPPRIMÉE AVEC SUCCES'));

		

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
				}} className='vraiModal2' >
					
					<div className='modalRight'>
						<p className='closeBtn2' onClick={onClose}>
               				Retour 
						</p>
						<div>
							<div className='requestForm' onSubmit={handleSubmit}>
								<div> Confirmer-vous la suppression de l&apos;element d&apos;ID {object.id} ?</div>
								<div className='demande' onClick={handleSubmit} type='submit'>SUPPRIMER</div>
							</div>
						</div>
					</div>
         
				</div>
        
			</div>
      		Modal
		</div>
	);
};

export default ModalDelete;