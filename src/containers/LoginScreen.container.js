import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveUser } from '../actions/actionCreators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  username: {
    width: 200,
    margin: 10,
  },
});


const LoginScreen = ({ navigation }) => {
  handleSubmit = (event) => {
    console.log('event', event)
    event.preventDefault();
    let userName = this.userName;
    this.props.setActiveUser(userName.value);
    Cookies.set('user', userName.value);
    console.log('handleSubmit called', this.props.activeUser)
  }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ReactNative Chat!
        </Text>
        <FormLabel>Create an username</FormLabel>
        <FormInput style={styles.username}/>
        <Button
          onPress={(event) => {this.handleSubmit;navigation.dispatch({ type: 'Login' });}}
          title="Log in"
        />
      </View>
    );
  }

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

// export default LoginScreen;

export default connect(
  (state) => ({activeUser: state.userReducer.activeUser}),
  (dispatch) => bindActionCreators({setActiveUser}, dispatch)
)(LoginScreen);