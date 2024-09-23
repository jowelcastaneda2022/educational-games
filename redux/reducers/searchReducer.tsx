const initialState = "";

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SEARCH_PLAYER":
      return action.payload;


    case "CLEAR_SEARCH":
      return "";

    default:
      return state;
  }
};

export default searchReducer;
