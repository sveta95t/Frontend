import { TOGGLE_MENU } from "../action-types";

const initialState = {
    isOpen: false,
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};