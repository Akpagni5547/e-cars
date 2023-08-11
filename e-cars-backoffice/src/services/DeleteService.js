import axios from 'axios';
import { useEffect, useState } from 'react';

const DeleteService = (url,object ) => {
    const [DATA, DATACHANGE] = useState(null);
    const [ISLOADED, CHANGELOAD] = useState(true);
    useEffect(() => {	  
    axios({
        method: 'DELETE',
        url: process.env.REACT_APP_API_URL+ url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
    }).then(function(response) {
        
        console.log(response.data);
        DATACHANGE(true);

    }).catch(function(error) {
        DATACHANGE(false);
        CHANGELOAD(false);
    });
    },)
    return {DATA,ISLOADED };

};
export default DeleteService;