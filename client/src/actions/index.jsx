import axios from 'axios';
import { FETCH_USER } from './types.jsx';

// redux without reduxThunk
// const fetchUser = () => {
//   const request = axios.get('/api/current_user');
//   return {
//     type: FETCH_USER,
//     payload: request
//   };
// };

// refactor with reduxThunk
// export const fetchUser = () => {
//   function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };

//refactor with es7
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log(res, '🤡🤡🤡🤡');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleStripeToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
