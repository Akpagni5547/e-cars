import React, { useState } from "react";
import "./Sidebar.css";
import UseFetch from "../../services/UseFetch";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // state to control if sidebar is open or closed

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // toggle sidebar state
  };
  const{DATA : CARSDATA}=UseFetch(process.env.REACT_APP_API_URL + "car/");
  return (
    <div className="sidebar_page">
      <button className="history_button" onClick={toggleSidebar}>Historique</button>
      <div className={`sidebar_${isOpen ? "open" : "closed"}`}>
        {CARSDATA!=null?
        (
            <div>
            {
            
            CARSDATA.map((item)=>(

            <div key={item.id} className="history_card">
            <div className="history_card_left">
                <div className="name_car">
                    E-car: {item.brand} {item.model}
                </div>
                <div>
                    Prix: {item.price} FCFA
                </div>
    
            </div>
            <div className="history_card_right">
                <div className="image_car" style={{backgroundImage:`url("${item.image2}")`}}>
    
                </div>
            </div>
    
            </div>
            ))}
            </div>
            ):(
            <div className="history_card">
                Historique vide
    
            </div>
        )
        }

    
      </div>
    </div>
  );
};

export default Sidebar;
