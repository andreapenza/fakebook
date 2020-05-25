import Actions from '../Actions';
import {connect} from 'react-redux';
import {SignInScreen, SignUpScreen, ResetPasswordScreen} from '../Screens';

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: credentials => dispatch(Actions.Auth.LOGIN(credentials)),
    onLogout: () => dispatch(Actions.Auth.LOGOUT),
    onPasswordForget: () => dispatch(Actions.Auth.PASSWORD_RESET),
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScreen);

const ResetPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordScreen);

export {LoginContainer, SignUpContainer, ResetPasswordContainer};
