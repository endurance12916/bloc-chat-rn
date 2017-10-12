import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

// this component is called by and a part of the MainScreen. In here, the user can select whether to go to profile, or rooms. The MainScreen also contains the logout button from AuthButton.

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) { // if the user goes back to HomeScreen before logging in
    return <Text>Please log in to continue</Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}>
        {'Thanks for logging in!'}
      </Text>
      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Rooms' }))}
        title="Select a Chat Room"
      />
      <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
        title="My Profile"
      />
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps)(LoginStatusMessage);
