import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

// this component is called by MainScreen.container. This is the logout button at the bottom of the MainScreen.

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => {
  return (
    <Button
      title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
      onPress={isLoggedIn ? logout : loginScreen}
    />
);
}

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
