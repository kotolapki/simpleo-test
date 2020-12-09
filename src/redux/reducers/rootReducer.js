import {combineReducers} from 'redux';
import {userInformationReducer} from './userInformationReducer';
import {errorPopupReducer} from './errorPopupReducer';
import {navigationReducer} from './navigationReducer';
import {temperatureInformationReducer} from './temperatureInformationReducer';

export const rootReducer = combineReducers({
  usersInformation: userInformationReducer,
  loginErrorStatus: errorPopupReducer,
  tableCategoryData: navigationReducer,
  temperatureInformation: temperatureInformationReducer
});