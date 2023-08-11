import axios from "axios";

const ClientService = (name, email, phone) => {
    axios({
        method: "POST",
        url: process.env.REACT_APP_API_URL+"client",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            name:name,
            email: email,
            phone: phone,

        }
    }).then(function(response) {
        console.log(" response to create client");
        console.log(response.data);
        return response.data;
    })
        .catch(function(error) {
            console.log("no response to created client");
            onClose(true);
            (window.confirm("ECHECS DE LA DEMANDE")); 
            return 0;
        });

};
export default ClientService;
