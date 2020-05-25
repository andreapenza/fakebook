import Actions from '../Actions';

const initialState = {
  loading: true,
  token: null,
  email: '',
  password: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.Auth.LOGIN:
      return state;
    case Actions.Auth.LOGOUT:
      return state;
    case Actions.Auth.PASSWORD_RESET:
      return state;
    case Actions.Auth.PASSWORD_CHANGE:
      return state;
    default:
      return state;
  }
};

export default authReducer;
