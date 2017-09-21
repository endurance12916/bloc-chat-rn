// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './components/App';
// // import registerServiceWorker from './registerServiceWorker';
// import React, { Component } from 'react'
// import { Provider } from 'react-redux';
// import store from './store';
// import MessagesContainer from './containers/messages.container'

// import * as firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyCXeADl350Vv4FALlgr4O4VtWztXWJFw3g",
//   authDomain: "bloc-chat-4d62e.firebaseapp.com",
//   databaseURL: "https://bloc-chat-4d62e.firebaseio.com",
//   projectId: "bloc-chat-4d62e",
//   storageBucket: "bloc-chat-4d62e.appspot.com",
//   messagingSenderId: "393276418132"
// };
// firebase.initializeApp(config);
// // import { StyleSheet, Text, View } from 'react-native';

// // export default class Main extends React.Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Hello world!</Text>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// const Main = () => {
//   return (
//       <Provider store={store}>
//           <MessagesContainer />
//       </Provider>
//   );
// }

// export default Main