import axios from 'axios';
import { FETCH_USER, SUBMIT_SURVEY, FETCH_SURVEY } from './types';

export const fetchUser = () => async (dispatch) => {
    const user = await axios.get('/api/user');
    dispatch({ type: FETCH_USER, payload: user.data })
};

export const handleCreditToken = token => async (dispatch) => {
    const user = await axios.post('/api/credits/payment', token);
    dispatch({ type: FETCH_USER, payload: user.data })
};

export const submitSurvey = (values, history) => async (dispatch) => {
    const res = await axios.post('/api/surveys/new', values);

    history.push("/surveys/all");
    dispatch({ type: FETCH_USER, payload: res.data })
};

export const fetchSurvey = () => async (dispatch) => {
    const res = await axios.get('/api/surveys');

    dispatch({type: FETCH_SURVEY, payload: res.data});
};