import * as actions from "./app.actionTypes";

const initialState = {
  tools              : [],
  showingAddModal    : false,
  showingRemoveModal : false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_TOOLS:
      return {
        ...state,
        tools: action.payload
      };
    case actions.TOGGLE_ADD_MODAL:
      return {
        ...state,
        showingAddModal: action.payload
      };
    case actions.TOOGLE_REMOVE_MODAL:
      return {
        ...state,
        showingRemoveModal: action.payload
      };
    default:
      return state;
  }
};
