import React from 'react';
// import { Button, List, Listmessage } from 'react-native-elements';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  // StatusBar,
  // Image,
} from 'react-native';


function formatTime(time) {
  let d = new Date(time);
  return (''+d).slice(0,24);
}

const ChatMessages = ({
  updateCurrentMessage,
  currentMessage,
  activeRoom,
  messages,
  submitMessage,
}) => {
  return (
    <View style={styles.container}>
    <ScrollView style={{flex:1}}> 
    {/* adding flex:1 here instead of flexgrow:1 to prevent footer from being pushed out of screen/disappear */}
      {
        messages.map((message, i) => (
          <View style={styles.rowText} key={i}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.sender}>{message.username}</Text>
              <Text style={styles.timestamp}>{formatTime(message.createdAt)}</Text>
            </View>
            <Text style={styles.message}>{message.text}</Text>
          </View>
        ))
      }
    </ScrollView>
      <KeyboardAvoidingView 
        behavior="padding"
        keyboardVerticalOffset={64}
      >
        <View style={styles.footer}>
          <TextInput
            ref={ref => this.textInputRef = ref}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Type your message here..."
            onChangeText={(text)=>updateCurrentMessage(text)}
          />
          <TouchableOpacity onPress={()=>{submitMessage(); this.textInputRef.clear()}}>
            <Text style={styles.send}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  // row: {
  //   flexDirection: 'row',
  //   padding: 20,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#eee',
  // },
  // avatar: {
  //   borderRadius: 20,
  //   width: 40,
  //   height: 40,
  //   marginRight: 10,
  // },
  rowText: {
    // flex: 1,
    flexDirection: 'column',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
    marginTop: 10,
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

export default ChatMessages;