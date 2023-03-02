import { CONSTANTS } from '../actions';

const initialState = {
    language: null,
    repository: null,
    isLoading: false,
    error: false,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case CONSTANTS.FETCH_DATA_SUCCESS:
            return {
                ...state,
                repository: action.payload,
                isLoading: false,
            };
        case CONSTANTS.FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case CONSTANTS.CLEAR_ERROR_AND_DATA:
            return {
                ...state,
                isLoading: false,
                error: false,
            };
        case CONSTANTS.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
