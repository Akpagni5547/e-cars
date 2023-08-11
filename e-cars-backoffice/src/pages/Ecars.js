import React, { useState, useEffect } from 'react';
import '../App.css';
import './Ecars.css';

import GetList from '../services/GetList';
import Navbar from '../components/Navbar';
import ModalCar from '../components/ModalCar';
import ModalDelete from '../components/ModalDelete';


export default function Ecars() {

  const{DATA : CARSDATA}=GetList('/car/'); 
  var [openModal, setOpenModal] = useState(false),
   [openModal1, setOpenModal1] = useState(false),
   [object, setObject]= useState(null),
   [method, setMethod]= useState(null);
   
   
  return <div className='page'>
    <Navbar/>
    <div className='true_page'>
    <div className='sidebar'>
    <div className='demande' onClick={()=>{setOpenModal(true);setMethod('POST');}} type='submit'> Ajouter une e-car</div>
      
    </div>
    <div className='principal'>
    
    {CARSDATA!=null?
				(
					<div className='grid_container'>

            <div className='table'>
                <div className='thead'>
                          
                            <div className='th'>id</div>
                            <div className='th'>Modele</div>
                            <div className='th'>Marque</div>
                            <div className='th'>Année</div>
                            <div className='th'>Moteur</div>
                            <div className='th'>Kilometrage</div>
                            <div className='th'>Boite</div>
                            <div className='th'>Prix</div>
    
                </div>
                        {
							CARSDATA.map((item)=>(
                <div  key={item.id} className='tbody'>
                          
                        
                <div onClick={()=>{setObject(item); setOpenModal1(true);}} className='th'>{item.id}</div>
                <div onClick={()=>{setObject(item); setOpenModal(true); setMethod('PATCH');}} className='th' >{item.model}</div>
                <div onClick={()=>{setObject(item); setOpenModal(true); setMethod('PATCH');}} className='th'>{item.brand}</div>
                <div onClick={()=>{setObject(item); setOpenModal(true); setMethod('PATCH');}} className='th'>{item.year}</div>
                <div onClick={()=>{setObject(item); setOpenModal(true); setMethod('PATCH');}} className='th'>{item.motor}</div>
                <div onClick={()=>{setObject(item); setOpenModal(true); setMethod('PATCH');}} className='th'>{item.mileage}</div>
                <div onClick={()=>{setObject(item); setOpenModal(true); setMethod('PATCH');}} className='th'>{item.box}</div>
                <div onClick={()=>{setObject(item); setOpenModal(true); setMethod('PATCH');}} className='th'>{item.price} FCFA</div>

              </div>
              

							))
						}

            </div  >
					
					</div>
				):(
					<div className='grid_container'> DESOLÉ! PAS D&apos;ECARS ENREGISTRÉES </div>
				)  
			}
    </div>

    </div>
 

    

      <ModalCar
				open={openModal}
        method={method}
        object={object}  
				onClose={() => setOpenModal(false)} />
            <ModalDelete
				open={openModal1}
				onClose={() => setOpenModal1(false)} object={object} url='/car' />
  </div>;
}
