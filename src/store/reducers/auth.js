import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  isAuthorized: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_ACCORDION:
      return {
        expandIndex: action.payload,
      };

    default:
      return state;
  }
};
