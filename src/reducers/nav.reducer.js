import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction, // This line defines where the app starts. This is secondAction which is 'Login', which returns action object with routeName "Login", therefore we start from login page upon wake up. If change this line to firstAction, the app will start from the HomePage(MainScreen)
  tempNavState // This line provides the route to the MainScreen, without it, the links wouldn't work in the Login Screen. If I change it to Profile, then the links will direct to Profile page with no means to get back to MainPage
);

// console.log("firstAction", firstAction);
// console.log("tempNavState", tempNavState);
// console.log("secondAction", secondAction);
// console.log("initialNavState", initialNavState);

export const navReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'SET_ACTIVE_ROOM':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Chat' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}