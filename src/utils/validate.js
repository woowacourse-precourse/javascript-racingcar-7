export function validateCars(userInput) {
    const cars = userInput.split(',');
    const isNameLenInvalid = cars.some(v => v.length > 5);
    
    if (isNameLenInvalid) {
        throw new Error('[ERROR] 자동차 이름이 5자를 넘습니다.');
    };
    
    return cars;
}