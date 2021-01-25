const initialState = {
  loading: false,
  data: [],
};

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LIST":
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default getProfileReducer;
