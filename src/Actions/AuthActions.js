export const SIGNUP = 'auth/signup';
export const LOGIN = 'auth/login';
export const LOGOUT = 'auth/logout';
export const PASSWORD_RESET = 'auth/reset_password';
export const PASSWORD_CHANGE = 'auth/change_password';

export const SignUp = credentials => ({
  type: SignUp,
  payload: credentials,
});

export const Login = credentials => ({
  type: LOGIN,
  payload: credentials,
});

export const Logout = () => ({
  type: LOGOUT,
});

export const ResetPassword = email => ({
  type: PASSWORD_RESET,
  payload: email,
});

export const ChangePassword = newPassword => ({
  type: PASSWORD_CHANGE,
  payload: newPassword,
});
