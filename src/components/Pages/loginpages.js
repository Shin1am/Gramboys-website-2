import React, { useState, useEffect, useContext } from 'react';
import { Button } from '../util/Button';
import '../css/SIgnUp-Login.css'
import LoginPicture from '../Assets/Login-picture.png';
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../util/usercontext';
import { setLocalStorageUser, removeLocalStorageUser } from '../util/localstorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const auth = getAuth(app); // Initialize auth from the Firebase app

function LoginPage() {
  const { loginUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      // Perform login operation
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set user context after successful login
      loginUser(user);

      // Save user data in local storage
      setLocalStorageUser(user);

      // Navigate to the desired page (e.g., Home)
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
      <div className='login-page-container'>
        <div className='login-section-container'>
          <div className='login-header-text'>
            <h2>Login</h2>
          </div>
          <div className='input-container'>  
            <div className='input'>
              <p>Email</p>
              <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} onKeyPress={handleKeyPress} /> 
            </div>
            <div className='input'>
              <p>Password</p>
              <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} /> 
            </div>
          </div>
          {error && <p className='error-message'>{error}</p>}
          <div className='login-checkbox'>
            <input type='checkbox' /> 
            <label>Remember me</label>
            <a href='/'>Forgot Password?</a>
          </div>
          <div className='login-footer-section'>
            <div className='sign-up-button'>
              <Button buttonStyle='btn--outline' buttonSize='btn--medium--long' onClick={handleLogin}>Log In</Button>
            </div>
            <div className='login-footer-text'>
              <p> Doesn't have an account yet? <a href="/sign-up">Sign Up</a> </p>
            </div>
          </div>
        </div>
        <div className='login-picture-container'>
          <img src={LoginPicture} alt='login' style={{ width: '90vh', height: 'auto' }} />
        </div>
      </div>
    </>
  )
}

export default LoginPage;
