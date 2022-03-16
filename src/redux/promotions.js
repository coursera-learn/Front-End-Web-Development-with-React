// import { PROMOTIONS } from '../shared/promotions';

// export const Promotions = (state = PROMOTIONS, action) => {
//     switch (action.type) {
//         default:
//           return state;
//       }
// };

import * as ActionTypes from './ActionTypes';

export const Promotions = (state  = { isLoading: true,
                                        errMess: null,
                                        promotions:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
        return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};