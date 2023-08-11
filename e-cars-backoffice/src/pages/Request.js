import React, {useState} from 'react';
import './Request.css';
import '../App.css';

import GetList from '../services/GetList';
import Navbar from '../components/Navbar';
import ModalDelete from '../components/ModalDelete';
import ModalUpdate from '../components/ModalUpate';



export default function Request() {

  const{DATA : CARSDATA}=GetList('/request/'); 
  var [openModal, setOpenModal] = useState(false),
   [object, setObject]= useState(null),
   [openModal1, setOpenModal1] = useState(false);
   
  return <div className='page'>
    <Navbar/>
    <div className='true_page'>
    <div className='sidebar'>

      
    </div>
    <div className='principal'>
    
    {CARSDATA!=null?
				(
					<div className='grid_container'>
            <div className='table'>
            <div className='thead'>
                          
                          <div className='th'>id</div>
                          <div className='th'>Nom Client</div>
                          <div className='th'>Email Client</div>
                          <div className='th'>Phone Client</div>
                          <div className='th'>Modele</div>
                          <div className='th'>Marque</div>
                          <div className='th'>Etat</div>
                          <div className='th'>Date de creation</div>
  
              </div>

                        {
							CARSDATA.map((item)=>(
                <div key={item.id} className='tbody'>
                 
                         <div onClick={()=>{setObject(item); setOpenModal(true);}} className='th' type='submit'>{item.id}</div>
                         <div className='th'>{item.client?.name}</div>
                         <div className='th'>{item.client?.email}</div>
                         <div className='th'>{item.client?.phone}</div>
                         <div className='th'>{item.car?.model}</div>
                         <div className='th'>{item.car?.brand}</div>
                         <div onClick={()=>{setObject(item); setOpenModal1(true);}} className='th'>{item.state}</div>
                         <div className='th'>{item.createdAt}</div>   
                </div>

							))
						}

            </div>
					
					</div>
				):(
					<div className='grid_container'> DESOLÉ! PAS DE DEMANDE DISPONIBLE </div>
				)  
			}
    </div>

    </div>
    <ModalDelete
				open={openModal} 
				onClose={() => setOpenModal(false)} object={object} url='/request' />
    <ModalUpdate
				open={openModal1} 
				onClose={() => setOpenModal1(false)} object={object} url='/request' />

 
 
  </div>;
}
