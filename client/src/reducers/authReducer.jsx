import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  console.log(action, 'actions😎😎');

  switch (action.type) {
    case FETCH_USER:
      // if user is logged, action.payload return the User model from api/current_user
      // else return empty string which is falsy 
      return action.payload || false;
    default:
      return state;
  }
}
