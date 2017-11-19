const initialState = {
  isFetchingRooms: false,
  newRoomName: '',
  isAddingRoomToServer: false,
  rooms: [],
  isAddRoomModalVisible: false,
  activeRoom: {},
}

function createRoom(state = [], action) {
  return {
    id: action.room.id, 
    name: action.room.name
  };
}

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'START_FETCHING_ROOMS':
    //   console.log("reducer - isFetchingRooms: true");
    //   return {...state, isFetchingRooms: true};
    case 'FETCH_ROOMS_FULFILLED':
      console.log("reducer - isFetchingRooms: false");
      return {...state, 
        isFetchingRooms: false,
        rooms: [...state.rooms, createRoom(state, action)]
      };
    case 'START_ADDING_ROOM':
      console.log("reducer - isAddingRoomToServer: true");
      return {...state, isAddingRoomToServer: true};
    case 'ADD_ROOM_FULFILLED':
      console.log("reducer - isAddingRoomToServer: false");
      return {...state, isAddingRoomToServer: false};
    case 'SHOW_ADD_ROOM': 
      console.log("reducer - show add room window");
      return {...state, isAddRoomModalVisible: true};
    case 'HIDE_ADD_ROOM':
      console.log("reducer - hide add room window");
      return {...state, isAddRoomModalVisible: false};
    case 'UPDATE_NEW_ROOM_NAME':
      // console.log("reducer - is updating new room name");
      return {...state, newRoomName: action.text};
    case 'SET_ACTIVE_ROOM':
      console.log("reducer - set active room to ", action.room);
      return {...state, activeRoom: action.room};
    case 'REMOVE_DISPLAYED_ROOMS':
      console.log("reducer - remove displayed rooms before fetch");
      return {...state, rooms:[]}
    default:
      return state
  }
}