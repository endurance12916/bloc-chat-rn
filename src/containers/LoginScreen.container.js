import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveUser, usernameChanged } from '../actions/actionCreators';
import _ from 'lodash';

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

class LoginScreen extends Component {
  onButtonPress() {
    if (_.isEmpty(this.props.username)) {
      return alert('Please create an username.')
    }
    let username = this.props.username;
    this.props.setActiveUser(username);
    this.props.navigation.dispatch({ type: 'Login' })
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ReactNative Chat!
        </Text>
        <FormLabel>Create an username</FormLabel>
        <FormInput 
          ref={input => this.input = input} 
          style={styles.username}
          onChangeText={this.onUsernameChange.bind(this)}
          />
        <Button
          onPress={this.onButtonPress.bind(this)}
          title="Log in"
        />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

export default connect(
  (state) => ({activeUser: state.userReducer.activeUser, username: state.userReducer.username}),
  (dispatch) => bindActionCreators({setActiveUser, usernameChanged}, dispatch)
)(LoginScreen);