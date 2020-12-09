import {CHANGE_NAVIGATION_CATEGORY} from '../types';

const initialState = {
  currentCategory: 'users',
  tableColumnHeaders: ['id', 'login']
}

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAVIGATION_CATEGORY:
      return {...state, currentCategory: action.payload.category, tableColumnHeaders: [...action.payload.headers]}
    default: return state;
  }
}