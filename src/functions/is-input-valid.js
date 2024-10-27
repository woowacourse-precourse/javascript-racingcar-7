function isValidCarName(input){
    const carNames = input.split(',').map(name => name.trim());
    return carNames.every(name => name.length > 0 && name.length <= 5);
}

function isValidTryNumber(input){
    const positiveIntegerPattern = /^[1-9]\d*$/;
    return positiveIntegerPattern.test(input);
}
export { isValidCarName, isValidTryNumber };