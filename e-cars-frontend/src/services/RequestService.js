import axios from "axios";

const RequestService = (client) => {
    axios({
        method: "POST",
        url: process.env.REACT_APP_API_URL+"request",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            client: client.id,
            state: "NOUVEAU",
            car: car.id
        }
    }).then(function(response) {
        
        console.log(response.data);
        (window.confirm("DEMANDE ENVOYÉE AVEC SUCCES"));
       
        return 1;

    }).catch(function(error) {

        (window.confirm("ECHECS DE LA DEMANDE"));


        return 0;
    });

};
export default RequestService;

