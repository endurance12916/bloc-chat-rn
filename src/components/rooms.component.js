import React from 'react';
import { Button, List, ListItem } from 'react-native-elements';
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

// function renderRow(rowData, sectionID) {
//   console.log("renderRow function called")
//   return (
//     <ListItem
//       button
//       onPress={()=>setActiveRoom(rowData)}
//       key={sectionID}
//       title={rowData.name}
//     />
//   )
// }

const Rooms = ({
  rooms,
  isFetchingRooms,
  activeRoom,
  subscribeToRooms, 
  showAddRoomWindow, 
  setActiveRoom,
}) => {
  console.log("Rooms", rooms)
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
    <List style={styles.container}>
      {
        rooms.map((room, i) => (
          <ListItem
            key={i}
            title={room.name}
            onPress={()=>setActiveRoom(room)}
          />
        ))
      }
      <ListItem containerStyle={{backgroundColor: '#aaa'}}
        key={"addRoom"}
        title={"Add a New Room"}
        onPress={showAddRoomWindow}
      />
    </List>
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