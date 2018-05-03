import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    const user = await axios.get('/api/user');
    dispatch({ type: FETCH_USER, payload: user.data })
};

export const handleCreditToken = token => async (dispatch) => {
    const user = await axios.post('/api/credits/payment', token);
    dispatch({ type: FETCH_USER, payload: user.data })
};