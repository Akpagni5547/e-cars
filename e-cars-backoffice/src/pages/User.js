/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import '../App.css';
import UseFetch from '../services/UseFetch';
import Navbar from '../components/Navbar';



export default function Users() {
  const{DATA : CARSDATA}=UseFetch(process.env.REACT_APP_API_URL + 'user/'); 
   
  return <div className='page'>
     <Navbar />
    <div className=''> LISTE DES USERS</div>
    {CARSDATA!=null?
				(
					<div className='grid_container'>
            <table>
                <thead>
                          <tr>
                        
                            <th>id</th>
                            <th>username</th>
                            <th>lastname</th>
                            <th>firstname</th>
                                   
                          </tr> 
                </thead>
                        {
							CARSDATA.map((item)=>(
                <tbody>
                  <tr key={item.id} >
                        <th>{item.id}</th>
                        <th>{item.firstname}</th>
                        <th>{item.lastname}</th>
                        <th>{item.username}</th>

                  </tr>
                </tbody>

							))
						}

            </table>
					
					</div>
				):(
					<div className='grid_container'> DESOLÉ! PAS D&apos;USER DISPONIBLE </div>
				)  
			}
  </div>;
}
