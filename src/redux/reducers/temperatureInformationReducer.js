import temperatureData from '../../utils/temperatureData';
import {DELETE_TEMPERATURE, CHANGE_TEMPERATURE} from '../types';

const initialState = {
  temperature: temperatureData
};

export const temperatureInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TEMPERATURE:
      const index = action.payload.index;
      return {...state, temperature: [...state.temperature.slice(0, index), ...state.temperature.slice(index + 1)]}
    case CHANGE_TEMPERATURE:
      state.temperature[action.payload.index]['degree'] = action.payload.value;
      return {...state, temperature: [...state.temperature]}
    default:
      return state;
  }
};