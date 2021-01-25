const initialState = {
//   email: "",
//   password: "",
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case "SET_EMAIL_PASSWORD":
    //   state.email = action.payload.email;
    //   state.password = action.payload.password;
    //   return state;
    case 'LOGGED_IN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGGED_OUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
