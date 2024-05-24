import React, { useState, useEffect } from 'react';
import { Button } from '../util/Button';
import '../css/SIgnUp-Login.css'
import SignUpPicture from '../Assets/Sign-up-picture.png';
import { app } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const auth = getAuth(app); // Initialize auth from the Firebase app

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }
  
      // Create the user account
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      // Update the user's display name
      await updateProfile(user, {
        displayName: username,
      });
  
      // Send email verification
      await sendEmailVerification(auth.currentUser);
  

      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };
  

  useEffect(() => {
    if (registrationSuccess) {
      alert('Registration successful! Please check your email to verify your account.');
      window.location.href = '/log-in'; // Redirect to login page
    }
  }, [registrationSuccess]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='sign-up-page-container'>
        <img src={SignUpPicture} alt='sign-up' style= {{width: '90vh', height: 'auto'}}/>
        <div className='sign-up-section-container'>
          <div className='header-text'>
            <h2>Sign Up</h2>
          </div>
          <div className='input-container'>  
            <div className='input'>
              <p>Username</p>
              <input type='text' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} /> 
            </div>
            <div className='input'>
              <p>Email</p>
              <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
            </div>
            <div className='input'>
              <p>Password</p>
              <input type={showPassword ? 'text' : 'password'} placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
              <button type='button' className='show-password-button' onClick={togglePasswordVisibility}>
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} size='xl'/> : <FontAwesomeIcon icon={faEye} size='xl'/>}
              </button>
            </div>
            <div className='input'>
              <p>Confirm password</p>
              <input type='password' placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
            </div>
          </div>
          <div className='sign-up-button'>
            <Button buttonStyle='btn--outline' buttonSize='btn--medium--long' onClick={handleRegister}>Sign Up</Button>
          </div>
          <div className='sign-up-footer-text'>
            <p> Already have an account? <a href="/log-in">Login</a> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
