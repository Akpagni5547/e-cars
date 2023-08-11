import { useEffect, useState } from 'react';
const UseFetch = (url) => {

	const [DATA, DATACHANGE] = useState(null);
	const [ISLOADED, CHANGELOAD] = useState(true);
	const [errorinfo, SetError] = useState(null);

	useEffect(() => {	  
		fetch(url).then(res => {
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
export default UseFetch;