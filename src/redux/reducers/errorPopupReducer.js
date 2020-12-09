import {CHANGE_ERROR_LOGIN_STATUS} from '../types';

const initialState = {
  loginErrorStatus: false
}

export const errorPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ERROR_LOGIN_STATUS:
      return {...state, loginErrorStatus: !state.loginErrorStatus}
    default: return state;
  }
}