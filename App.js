import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './src/store';
import AppWithNavigationState from './src/navigators/AppNavigator';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCXeADl350Vv4FALlgr4O4VtWztXWJFw3g",
  authDomain: "bloc-chat-4d62e.firebaseapp.com",
  databaseURL: "https://bloc-chat-4d62e.firebaseio.com",
  projectId: "bloc-chat-4d62e",
  storageBucket: "bloc-chat-4d62e.appspot.com",
  messagingSenderId: "393276418132"
};
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppWithNavigationState />
      </Provider>
    );
  }
}