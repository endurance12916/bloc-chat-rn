const initialAuthState = { isLoggedIn: false };

export default function(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

// const initialState = {
//   isSignInWindowVisible: false,
//   activeUser: {},
// }

// export default function(state = initialState, action) {
//   switch(action.type) {
//     case 'SHOW_SIGN_IN':
//       console.log("reducer - show sign in window");
//       return {...state, isSignInWindowVisible: true};
//     case 'HIDE_SIGN_IN':
//       console.log("reducer - hide sign in window");
//       return {...state, isSignInWindowVisible: false};
//     case 'SET_ACTIVE_USER':
//       console.log("reducer - setting active user");
//       return {...state, activeUser: {username: action.username}}
//     case 'LOG_OUT':
//       return {...state, activeUser: {}};
//     default: 
//       return state;
//   }
// }