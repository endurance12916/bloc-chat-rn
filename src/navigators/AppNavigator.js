import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../containers/LoginScreen.container';
import RoomsScreen from '../containers/RoomsScreen.container';
import MainScreen from '../containers/MainScreen.container';
import ProfileScreen from '../containers/ProfileScreen.container';
// import ChatScreen from '../containers/ChatScreen.container';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  Rooms: { screen: RoomsScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.navReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);