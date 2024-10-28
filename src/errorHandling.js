import { ONLY_NUMBER } from './constants';

export const hasLongString = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            return true; 
        }
    }
    return false;
};


export const isNumber = (string) => {
    return ONLY_NUMBER.test(string);
};
