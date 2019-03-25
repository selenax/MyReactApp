import axios from 'axios';
import { FETCH_USER } from './types.jsx';

const fetchUser = () => {
  axios.get('/api/current_user');
};
