import jwtDecode from "jwt-decode";

function checkTokenExpiration() {
	const token = localStorage.getItem("access_token"); // retrieve token from local storage
	if (token) {
	  const decodedToken = jwtDecode(token); // decode token to retrieve expiration date
	  const expirationDate = new Date(decodedToken.exp * 1000); // convert expiration date to Date object
	  if (expirationDate < new Date()) { // check expiration date
		console.log("Token has expired");
		return true;
	  } else {
		console.log("Token has not expired");
		return false;
	  }
	} else {
	  console.log("No token found");
	  return false;

	}
  }
  export default checkTokenExpiration ;
