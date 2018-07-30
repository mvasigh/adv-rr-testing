import { AUTHENTICATE_USER } from '../actions/types';

export default function authReducer(state = false, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return action.payload;
    default:
      return state;
  }
}
