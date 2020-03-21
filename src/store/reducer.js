const initialState = {
  focused: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'search_focus':
      return { focused: true };
    case 'search_blur':
      return { focused: false };
    default:
      return state
  }
};
