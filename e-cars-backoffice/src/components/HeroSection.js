import React,{ useState }  from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useHistory } from 'react-router-dom';

function HeroSection() {
  var [username, setUsername] = useState(''),
  [password, setPassword] = useState('');
  let history = useHistory();



  const login = async event => {
    const request = new Request(
      process.env.REACT_APP_API_URL + '/user/login',
      {
        method: 'POST',
        body: JSON.stringify({ username: username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }
    );
    return fetch(request)
      .then((response) => {
       
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
      
        return response.json();
      })
      .then((auth) => {
          
        localStorage.setItem(
          'auth',
          JSON.stringify({ ...auth, fullName: username })
        );
        console.log('TOKEN 1' + auth.access_token);
        localStorage.setItem('access_token',auth.access_token );
        history.push('/home');

      })
      .catch(() => {
        (window.confirm('ECHECS DE LOGIN: VERIFIER VOS ACCES ET RÉESSAYER'));
        throw new Error('Network error');
      });
  };


  return (
    <div className='hero-container'>
      <div>
							<form className='loginForm' onSubmit={login}>
								<div className='champ' >
									<div className='label'>
            						username:
									</div>
           
									<input
										id='username'
										name='username'
										type='text'
										onChange={event => setUsername(event.target.value)}
										value={username}
									/>
            
								</ div>

								<div className='champ' >
									<div className='label'>
            						password:
									</div>
									<input
										id='password'
										name='password'
										type='password'
										value={password}
										onChange={event => setPassword(event.target.value)}
									/>
            
								</ div>
        
								<div className='demande' onClick={login} type='submit'>LOGIN</div>
							</form>
						</div>
    </div>
  );
}

export default HeroSection;
