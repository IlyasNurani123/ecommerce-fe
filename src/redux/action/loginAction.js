import { auth } from './type';
import { LOGIN_URL } from '../../constants/urlConstant';
import axios from '../../utlis/setAxiosDefault';

const loginRequest = () => {
  return {
    type: auth.LOGIN_REQUEST,
  };
};

const loginSuccess = (user) => {
  return {
    type: auth.LOGIN_SUCCESS,
    user,
  };
};

const loginFailed = (error) => {
  return {
    type: auth.LOGIN_FAILED,
    error,
  };
};

export const loginAsyn = (value, history) => (dispatch) => {
  dispatch(loginRequest());
  const user = {
    email: value.email,
    password: value.password,
  };

  axios
    .post(LOGIN_URL.user)
    .then((response) => {
      console.log('response:', response.data);
      let token = response.data.accessToken;
      localStorage.setItem('access_token', token);
      dispatch(loginSuccess(response));
    })
    .catch((error) => {
      const errors = {
        error: error.response,
      };

      dispatch(loginFailed(errors));
    });
};
