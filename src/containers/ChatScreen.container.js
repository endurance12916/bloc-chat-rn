import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { subscribeToMessages, addMessage, updateCurrentMessage, submitMessage } from '../actions/actionCreators';
import Messages from '../components/Messages.component';
import debounce from 'lodash/debounce';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Group Chat',
  };
  render() {
    const updateCurrentMessageDebounce = debounce(this.props.updateCurrentMessage, 200);
    return (
      <Messages {...this.props} updateCurrentMessage={updateCurrentMessageDebounce} />
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
    subscribeToMessages, 
    addMessage, 
    updateCurrentMessage, 
    submitMessage
  }, dispatch)
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ChatScreen);