import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginStyles from './Login.module.css';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signinGoogle, signin, loadUser } from '../../redux/actions/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    dispatch(signinGoogle(accessToken, navigate));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(signin({ email, password }, navigate));
    }
  }

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className={LoginStyles.loginContainer}>
      <div className={LoginStyles.loginContainerv2}>
        <h1>Sign in to us</h1>

        <div className={LoginStyles.inputContainer}>
          <label>EMAIL</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='enter your email'
            type='email'
          />
        </div>

        <div className={LoginStyles.inputContainer}>
          <label>PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='enter your password'
            type='password'
          />
        </div>

        <button onClick={handleSubmit} className={LoginStyles.loginBTN}>
          LOGIN
        </button>

        <span className={LoginStyles.or}>or</span>

        <button onClick={() => login()} className={LoginStyles.googleBTN}>
          <i class='fa-brands fa-google'></i> Sign in with google
        </button>

        <span className={LoginStyles.notreg}>
          Not registered yet?{' '}
          <Link className={LoginStyles.singupBTN} to='/signup'>
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
