import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return action.payload;
        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] }
        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, leaders: [] }
        default:
          return state;
      }
};