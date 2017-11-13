const initialState = {
  username: '',
  activeUser: {},
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USERNAME_CHANGED':
      return { ...state, username: action.payload };
    case 'SET_ACTIVE_USER':
      console.log("reducer - setting active user");
      return {...state, activeUser: {username: action.username}}
    case 'Logout':
      return {...state, ...initialState};
    default: 
      return state;
  }
}