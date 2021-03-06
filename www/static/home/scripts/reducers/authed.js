import * as types from '../constants/ActionTypes';

const initialState = {
  accessToken: null,
  user: null,
};

export default function authed(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.accessToken,
      });

    case types.RECEIVE_AUTHED_USER:
      return Object.assign({}, state, {
        user: action.user,
      });

    default:
      return state;
  }
}
