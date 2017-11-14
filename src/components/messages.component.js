import React from 'react';
// import { Button, List, Listmessage } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Image,
} from 'react-native';


function formatTime(time) {
  let d = new Date(time);
  return (''+d).slice(0,24);
}

const Messages = ({
  updateCurrentMessage,
  currentMessage,
  activeRoom,
  messages,
  submitMessage,
}) => {
  return (
    <View style={styles.container}>
      {
        messages.map((message, i) => (
          <View style={styles.rowText} key={i}>
            <Text style={styles.sender}>{message.username}</Text>
            <Text style={styles.timestamp}>{formatTime(message.createdAt)}</Text>
            <Text style={styles.message}>{message.text}</Text>
          </View>
        ))
      }
      <KeyboardAvoidingView behavior="padding">
        {/* <View style={styles.footer}>
          <TextInput
            value={this.state.typing}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type something nice"
            onChangeText={text => this.setState({typing: text})}
          />
          <TouchableOpacity onPress={this.sendMessage}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.footer}>
          <TextInput
            /* value={input => this.input = input} */
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type something nice"
            onChangeText={(text)=>updateCurrentMessage(text)}
          />
          <TouchableOpacity onPress={()=>submitMessage()}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  // avatar: {
  //   borderRadius: 20,
  //   width: 40,
  //   height: 40,
  //   marginRight: 10,
  // },
  rowText: {
    flex: 1,
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default Messages;