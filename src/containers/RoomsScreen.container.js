import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeDisplayedRooms, subscribeToRooms, unsubscribeToRooms, showAddRoomModal, hideAddRoomModal, updateNewRoomName, addRoom, setActiveRoom } from '../actions/actionCreators';
import Rooms from '../components/Rooms.component';

class RoomsScreen extends Component {
  componentWillMount() {
    this.props.subscribeToRooms();
  }

  componentWillUnmount() {
    console.log('unmount RoomsScreen and unsubscribe')
    this.props.removeDisplayedRooms();
    this.props.unsubscribeToRooms();
  }

  handleSubmitAddRoom = () => {
    if (this.props.newRoomName==='') {
      return alert('Room name cannot be empty');
    } else {
      let id = this.props.rooms.length||0;
      let newRoom = {id: 'room '+ id, name: this.props.newRoomName};
      this.props.hideAddRoomModal();;
      this.props.addRoom(newRoom);
      this.props.setActiveRoom(newRoom);
    }
  }

  render() {
    return (
      <Rooms {...this.props} handleSubmitAddRoom={this.handleSubmitAddRoom}/>
    )
  }
}

export default connect(
  (state) => ({
    // isFetchingRooms: state.roomsReducer.isFetchingRooms,
    rooms: state.roomsReducer.rooms,
    newRoomName: state.roomsReducer.newRoomName,
    // activeRoom: state.roomsReducer.activeRoom,
    isAddRoomModalVisible: state.roomsReducer.isAddRoomModalVisible
  }),
  (dispatch) => bindActionCreators({ 
    subscribeToRooms, 
    removeDisplayedRooms,
    unsubscribeToRooms,
    showAddRoomModal, 
    hideAddRoomModal,
    updateNewRoomName,
    addRoom,
    setActiveRoom,
    dispatch,
  }, dispatch)
)(RoomsScreen);