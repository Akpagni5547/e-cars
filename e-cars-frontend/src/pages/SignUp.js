import "../App.css";
import "./SignUp.css";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

import React, { useState } from "react";

function LoginForm() {
  // Declare state variables to store the username and password
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  var history = useHistory();

  // Define a submission handler function that will be called when the user submits the form
  var handleSubmit = async event => {
	const request = new Request(
		process.env.REACT_APP_API_URL + "user/login",
		{
		  method: "POST",
		  body: JSON.stringify({ username: username, password }),
		  headers: new Headers({ "Content-Type": "application/json" }),
		}
	  );
	  event.preventDefault();

	  // Check the login data here (for example, by sending an HTTP request to a server)
	  console.log(`Submitting login with username ${username} and password ${password}`);
	  return fetch(request)
      .then((response) => {
       
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
      
        return response.json();
      })
      .then((auth) => {
          
        localStorage.setItem(
          "auth",
          JSON.stringify({ ...auth, fullName: username })
        );
        console.log("TOKEN 1" + auth.access_token);
        localStorage.setItem("access_token",auth.access_token );
        history.push("/");

      })
      .catch(() => {
        (window.confirm("ECHECS DE LOGIN: VERIFIER VOS ACCES ET RÉESSAYER"));
        throw new Error("Network error");
      });

  };

  // Define event handlers to update the state variables when the user enters text into the form fields
  var handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  var handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
  <div className="SignUp">
	<form  className="login-form" onSubmit={handleSubmit}>
      <label>
    	Username:
        <input className="login-input" type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input  className="login-input"type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button className="login-button" type="submit">Log in</button>
    </form>
  </div>

  );
}


export default LoginForm ;
