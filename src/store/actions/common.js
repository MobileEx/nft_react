import * as actionTypes from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const handleAccordion = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.HANDLE_ACCORDION,
    payload,
  });
};
