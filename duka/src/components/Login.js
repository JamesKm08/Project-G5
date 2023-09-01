import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

import './Login.css'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Logging in with',email,password);
  };

  return (
    
    <div className='form-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>

        <div className="social-icons">
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faGoogle} />
          </span>
        </div>


      </form> 
    </div>
    
    
  )
}

export default Login
