const initialState = {
    list: []
};
  
export default (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_DATA':
            return { ...state};
        case 'ADD_TODO':
            return { ...state, list: [...state.list, ...[action.payload ]] };
        default:
            return state;
    }
};
  