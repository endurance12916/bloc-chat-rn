import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveUser } from '../actions/actionCreators';
import Profile from '../components/Profile.component';

class ProfileScreen extends Component {
  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default connect(
  (state) => ({activeUser: state.userReducer.activeUser})
)(ProfileScreen);