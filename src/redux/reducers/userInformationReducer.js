import {CHANGE_LOGIN_STATUS, ADD_NEW_USER, DELETE_USER, CHANGE_USER_INFORMATION} from '../types';

const localUsers = localStorage.getItem('users');
const users = [];

if (localUsers) {
  const parsedUsers = JSON.parse(localUsers);

  for (const item of parsedUsers) {
    users.push(item);
  }
}

const initialState = {
  signInStatus: false,
  users: users
};

export const userInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      return {...state, signInStatus: !state.signInStatus}
    case ADD_NEW_USER:
      return {...state, signInStatus: !state.signInStatus, users: [...state.users, action.payload]}
    case DELETE_USER:
      const index = action.payload.index;
      return {...state, users: [...state.users.slice(0, index), ...state.users.slice(index + 1)]}
    case CHANGE_USER_INFORMATION:
      state.users[action.payload.index]['login'] = action.payload.value; 
      return {...state, users: [...state.users]}
    default: return state;
  }
};