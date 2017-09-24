import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { NavigationActions } from 'react-navigation'

import rootReducer from './reducers/index';

const defaultState = {
      roomsReducer: {
        isFetchingRooms: false,
        isAddingRoomToServer: false,
        rooms: [],
        isAddRoomWindowVisible: false,
        activeRoom: {}, 
      },
      messagesReducer: {
        isFetchingMessages: false,
        isAddingMessageToServer: false,
        messages: [],
        currentMessage: 'default message',
      },
      userReducer: {
        activeUser: {},
        isSignInWindowVisible: false,
      },
      navReducer: {
        secondAction: NavigationActions.navigate({ routeName: 'Login'}),
        // secondAction: {},
        tempNavState: {}
      }
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store