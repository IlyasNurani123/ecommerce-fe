import { auth } from '../action/type';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: {},
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user,
      };

    case auth.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};
