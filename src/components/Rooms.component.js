import React from 'react';
import { Button, List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal'

renderButton = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.send}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const Rooms = ({
  handleSubmitAddRoom,
  rooms,
  isAddRoomModalVisible,
  showAddRoomModal, 
  hideAddRoomModal,
  updateNewRoomName,
  setActiveRoom,
  dispatch,
}) => {
  return (
    <ScrollView>
      <List style={styles.container}>
        {
          rooms.map((room, i) => (
            <ListItem
              key={i}
              title={room.name}
              onPress={()=>{
                setActiveRoom(room);
                // dispatch(NavigationActions.navigate({ routeName: 'Chat' })) // moving this line to nav.reducer seems to have fixed the double navigation problem
                }
              }
            />
          ))
        }
        <ListItem containerStyle={{backgroundColor: '#eee'}}
          key={"addRoom"}
          title={"Add a New Room"}
          onPress={showAddRoomModal}
        />
        <Modal isVisible={isAddRoomModalVisible}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Add a name"
              onChangeText={(text)=>updateNewRoomName(text)}
            />
            <View style={styles.buttons}>
              <TouchableOpacity onPress={handleSubmitAddRoom}>
                <Text style={styles.send}>Send</Text>
              </TouchableOpacity>
              {/* {this.renderButton('Cancel', hideAddRoomModal)} */}
              <TouchableOpacity onPress={hideAddRoomModal}>
                <Text style={styles.send}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </List>
    </ScrollView>
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
  // rowText: {
  //   flex: 1,
  // },
  // roomName: {
  //   fontSize: 28,
  // },
  // src/styles.js
  // listItem: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
    // width: Dimensions.get('window').width,
  //   padding: 10
  // },
  modalContent: {
    // flexDirection: 'row',
    backgroundColor: '#eee',
    
  },
  buttons: {
    flexDirection: 'row'
  },
  input: {
    paddingHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});
export default Rooms;