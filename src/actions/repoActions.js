import axios from 'axios';
import { CONSTANTS } from './index';
const fetchDataRequest = () => {
    return {
        type: CONSTANTS.FETCH_DATA_REQUEST,
    };
};

const fetchDataSuccess = (data) => {
    return {
        type: CONSTANTS.FETCH_DATA_SUCCESS,
        payload: data,
    };
};

const fetchDataFailure = () => {
    return {
        type: CONSTANTS.FETCH_DATA_FAILURE,
    };
};

export const clearErrorAndLoading = () => {
    return {
        type: CONSTANTS.CLEAR_ERROR_AND_DATA,
    };
};

export const fetchData = (title, language) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const titleForRequest = encodeURIComponent(title);
            const languageForRequest = encodeURIComponent(language);

            let requestURL = `https://api.github.com/search/repositories?q=${titleForRequest}+in:name`;
            requestURL += language
                ? `+language:${languageForRequest}&sort=stars&order=desc`
                : '&sort=stars&order=desc';

            const response = await axios.get(requestURL);
            const data = response.data.items[0];
            if (!data) {
                dispatch(fetchDataFailure());
            }
            console.log(data);
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataFailure());
        }
    };
};

// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc
