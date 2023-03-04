import { CONSTANTS } from './index';
export const changeLanguage = (language) => {
    return {
        type: CONSTANTS.CHANGE_LANGUAGE,
        payload: language,
    };
};
