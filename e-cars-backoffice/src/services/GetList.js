import { useEffect, useState } from 'react';

const GetList =  (url) => {
    const [DATA, DATACHANGE] = useState(null);
    const [ISLOADED, CHANGELOAD] = useState(true);
    const [errorinfo, SetError] = useState(null);
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+ url, 
		{method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
    }).then(res => {
			console.log(res);
			if (!res.ok) {
				throw Error('Failed to fatch the DATA');
			}
			return res.json();
		}).then(result => {
			setTimeout(() => {
				DATACHANGE(result);
				CHANGELOAD(false);
			}, 3000);
		}).catch(res => {
			SetError(res.message);
			CHANGELOAD(false);
		});

	}, [url]);
	return {DATA,ISLOADED,errorinfo};
        
};
export default GetList;