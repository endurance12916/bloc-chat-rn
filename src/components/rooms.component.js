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
// import { List, ListItem } from 'react-native-elements'

const Rooms = ({
  rooms,
  isFetchingRooms,
  activeRoom,
  subscribeToRooms, 
  showAddRoomWindow, 
  setActiveRoom
}) => {
  // renderItem = ({item}) => {
  //   return (
  //     <View style={styles.row}>
  //       {/* <Image style={styles.avatar} source={{uri: item.avatar}} /> */}
  //       <View style={styles.rowText}>
  //         <Text style={styles.roomName}>{item.name}</Text>
  //       </View>
  //     </View>
  //   );
  // }
  renderItem = ({item}) => {
    return (
      <ListItem
        button
        onPress={()=>setActiveRoom(item)}
        title={item.name}
      />
    )
  }

  // const allRooms = Object.values(rooms).map((room, i) => {
  //     return (
  //     <NavItem key={room.id} onClick={() => setActiveRoom(room)}>{room.name}</NavItem>
  //     )
  // })
  return (
    // <Col sm={3} xsHidden className="room-section">
    //   <Col sm={11} smOffset={1}>
    //     <h2>Rooms: </h2>
    //     <Nav bsStyle="pills" stacked>
    //       {allRooms}
    //       <NavItem key="add_room" onClick={showAddRoomWindow} className="add-room-pill"> + Add a New Room</NavItem>
    //     </Nav>
    //   </Col>
    // </Col> 
    <View style={styles.container}>
      {/* <FlatList */}
      <Text
          data={rooms}
          renderItem={this.renderItem}
      />
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
  roomName: {
    fontSize: 28,
  },
  // src/styles.js
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // width: Dimensions.get('window').width,
    padding: 10
  },
});
export default Rooms;