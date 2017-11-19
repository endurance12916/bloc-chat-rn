import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage, updateCurrentMessage, submitMessage } from '../actions/actionCreators';
import ChatMessages from '../components/ChatMessages.component';
import debounce from 'lodash/debounce';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat Screen',
  };

  render() {
    // const updateCurrentMessageDebounce = debounce(this.props.updateCurrentMessage, 200);
    return (
      // <Messages {...this.props} updateCurrentMessage={updateCurrentMessageDebounce} />
      <ChatMessages {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetchingMessages: state.messagesReducer.isFetchingMessages,
    isAddingMessageToServer: state.messagesReducer.isAddingMessageToServer,
    messages: state.messagesReducer.messages, 
    currentMessage: state.messagesReducer.currentMessage,
    activeRoom: state.roomsReducer.activeRoom,
    activeUser: state.userReducer.activeUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // subscribeToMessages, 
    addMessage, 
    updateCurrentMessage, 
    submitMessage
  }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ChatScreen);