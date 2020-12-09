import {CHANGE_LOGIN_STATUS} from './types';
import {ADD_NEW_USER} from './types';
import {DELETE_USER} from './types';
import {CHANGE_USER_INFORMATION} from './types';
import {CHANGE_ERROR_LOGIN_STATUS} from './types';
import {CHANGE_NAVIGATION_CATEGORY} from './types';
import {DELETE_TEMPERATURE} from './types';
import {CHANGE_TEMPERATURE} from './types';

export function changeLoginStatus() {
  return {
    type: CHANGE_LOGIN_STATUS
  }
}

export function addNewUser(nickname, email , login, password, id) {
  return {
    type: ADD_NEW_USER,
    payload: {
      id: id,
      login: login,
      nickname : nickname,
      email: email,
      password: password,
    }
  }
}

export function deleteUser(index) {
  return {
    type: DELETE_USER,
    payload: {
      index: index
    }
  }
}

export function changeUserInformation(index, value) {
  return {
    type: CHANGE_USER_INFORMATION,
    payload: {
      index: index,
      value: value
    }
  }
}

export function changeErrorLoginStatus() {
  return {
    type: CHANGE_ERROR_LOGIN_STATUS
  }
}

export function changeNavigationCategory(category, headers) {
  return {
    type: CHANGE_NAVIGATION_CATEGORY,
    payload: {
      category: category,
      headers: headers
    }
  }
}

export function deleteTemperature(index) {
  return {
    type: DELETE_TEMPERATURE,
    payload: {
      index: index
    }
  }
}

export function changeTemperature(index, value) {
  return {
    type: CHANGE_TEMPERATURE,
    payload: {
      index: index,
      value: value
    }
  }
}

