import React from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
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
  // const allMessages = Object.values(messages).map((message, i) => {
  //   return (
  //     <li className="messages-body" key={message.createdAt}>
  //       <div className="username">{message.username}</div>
  //       <div className="timestamp">{formatTime(message.createdAt)}</div>
  //       <div className="user-message">{message.text}</div>
  //     </li>
  //   )
  // })
  renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        {/* <Image style={styles.avatar} source={{uri: item.avatar}} /> */}
        <View style={styles.rowText}>
          <Text style={styles.sender}>{item.username}</Text>
          <Text style={styles.timestamp}>{formatTime(item.createdAt)}</Text>
          <Text style={styles.message}>{item.text}</Text>
        </View>
      </View>
    );
  }
  return (
    // <Col sm={9} className="message-section">
    //   <h2>{activeRoom.name}</h2>
    //   <ul className="list-unstyled">{allMessages}</ul>
    //   <div className="message-input-field">
    //   <input 
    //     onChange={(e)=>updateCurrentMessage(e.target.value)} 
    //     type="text" 
    //     placeholder="Type your message" 
    //     className="message-box" 
    //   />
    //   &nbsp;
    //   <Button onClick={()=>submitMessage()}><i className="glyphicon glyphicon-send"></i></Button>
    //   </div>
    // </Col>
    <View style={styles.container}>
      <Text>Let's see if this works</Text>
      <FlatList
        data={messages}
        renderItem={this.renderItem}
      />
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
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
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