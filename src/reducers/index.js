import { combineReducers } from 'redux';
import { roomsReducer } from './rooms.reducer';
import userReducer from './user.reducer';
import { navReducer } from './nav.reducer';
import { authReducer } from './auth.reducer'
import { messagesReducer } from './messages.reducer'

const rootReducer = combineReducers({
  messagesReducer,
  roomsReducer,
  userReducer,
  navReducer,
  authReducer
})

export default rootReducer;