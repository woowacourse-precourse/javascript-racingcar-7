
export const hasLongString = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            return true; 
        }
    }
    return false;
};
