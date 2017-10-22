import React from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
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

const Rooms = ({
  rooms,
  isFetchingRooms,
  activeRoom,
  subscribeToRooms, 
  showAddRoomWindow, 
  setActiveRoom,
  dispatch,
}) => {
  return (
    <List style={styles.container}>
      {
        rooms.map((room, i) => (
          <ListItem
            key={i}
            title={room.name}
            onPress={()=>{
              setActiveRoom(room);
              dispatch(NavigationActions.navigate({ routeName: 'Chat' }))
              }
            }
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

// Rooms.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

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