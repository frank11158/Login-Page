import { AUTH } from '../const/actionsTypes';
import * as api from '../../api/index';

export const loadUser = () => async (dispatch) => {
  const localUser = JSON.parse(localStorage.getItem('user_info'));
  console.log('User', localUser);

  if (localUser) {
    // TODO: if access token is expired, refresh it
    dispatch({ type: AUTH, payload: localUser });
  }
};

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    const email = data.user.email;
    const accessToken = data.token.accessToken;
    const refreshToken = data.token.refreshToken;
    const payload = { email, accessToken, refreshToken };
    console.log('Logged in!', payload);

    dispatch({ type: AUTH, payload });
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

export const signinGoogle =
  (googleAccessToken, navigate) => async (dispatch) => {
    try {
      const { data } = await api.signInGoogle(googleAccessToken);
      const email = data.user.email;
      const accessToken = data.token.accessToken;
      const refreshToken = data.token.refreshToken;
      const payload = { email, accessToken, refreshToken };
      console.log('Logged in with Google!', payload);

      dispatch({ type: AUTH, payload });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    const email = data.user.email;
    const accessToken = data.token.accessToken;
    const refreshToken = data.token.refreshToken;
    const payload = { email, accessToken, refreshToken };
    console.log('Signed up!', payload);

    dispatch({ type: AUTH, payload });
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

export const signupGoogle =
  (googleAccessToken, navigate) => async (dispatch) => {
    try {
      const { data } = await api.signInGoogle(googleAccessToken);
      const email = data.user.email;
      const accessToken = data.token.accessToken;
      const refreshToken = data.token.refreshToken;
      const payload = { email, accessToken, refreshToken };
      console.log('Signed up with Google!', payload);

      dispatch({ type: AUTH, payload });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

export const refresh = (formData) => async (dispatch) => {
  try {
    const { data } = await api.refresh(formData);
    const email = data.user.email;
    const accessToken = data.token.accessToken;
    const refreshToken = data.token.refreshToken;
    const payload = { email, accessToken, refreshToken };
    console.log('Token refreshed!', payload);

    dispatch({ type: AUTH, payload });
  } catch (err) {
    console.log(err);
  }
};
