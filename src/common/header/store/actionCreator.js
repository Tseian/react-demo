import * as actionTypes from './actionTypes';
export const getSearchInputOnfcusedAction = () => {
    return {
        type: actionTypes.SEARCH_INPUT_BLUR,
        focused: true
    };
}

export const getSearchInputOnBlurAction = () => {
    return {
        type: actionTypes.SEARCH_INPUT_FOCUSED,
        focused: false
    };
}