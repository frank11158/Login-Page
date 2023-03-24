import React, { useState } from 'react';
import SignUp from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signup, signupGoogle } from '../../redux/actions/auth';

const InitState = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Signup() {
  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const [sForm, setsForm] = useState(InitState);

  const handleChange = (e) =>
    setsForm({
      ...sForm,
      [e.target.name]: e.target.value,
    });

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    dispatch(signupGoogle(accessToken, nagivate));
  }

  function validateInput(e) {
    // input validations
    e.preventDefault();
    if (
      sForm.userName !== '' &&
      sForm.password !== '' &&
      sForm.confirmPassword !== '' &&
      sForm.email !== '' &&
      sForm.password === sForm.confirmPassword &&
      sForm.password.length >= 4
    ) {
      dispatch(signup(sForm, nagivate));
    }
  }

  return (
    <div className={SignUp.loginContainer}>
      <div className={SignUp.loginContainerv2}>
        <h1>Create your account</h1>

        <div className={SignUp.inputContainer}>
          <label>USER NAME</label>
          <input
            onChange={handleChange}
            name='userName'
            placeholder='enter user name'
            type='text'
          />
        </div>
        <div className={SignUp.inputContainer}>
          <label>EMAIL</label>
          <input
            name='email'
            onChange={handleChange}
            placeholder='enter your email'
            type='email'
          />
        </div>

        <div className={SignUp.inputContainer}>
          <label>PASSWORD</label>
          <input
            name='password'
            onChange={handleChange}
            placeholder='enter your password'
            type='password'
          />
        </div>

        <div className={SignUp.inputContainer}>
          <label>CONFIRM PASSWORD</label>
          <input
            name='confirmPassword'
            onChange={handleChange}
            placeholder='retype your password'
            type='password'
          />
        </div>

        <div className={SignUp.footerContainer}>
          <div>
            Already Signed Up? <Link to='/login'>Login</Link>
          </div>
        </div>

        <button onClick={validateInput} className={SignUp.loginBTN}>
          REGISTER
        </button>

        <span className={SignUp.or}>or</span>

        <button onClick={() => login()} className={SignUp.googleBTN}>
          <i class='fa-brands fa-google'></i> Sign up with google
        </button>
      </div>
    </div>
  );
}

export default Signup;
