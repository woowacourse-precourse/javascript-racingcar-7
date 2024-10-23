export function validateCars(userInput) {
    const carNameInput = trimAndCheckBlank(userInput);
    const cars = carNameInput.split(',');

    const isNameLenInvalid = cars.some(v => v.length > 5);
    const hasDuplicates = checkDuplicates(cars);
    const includeInvalidStr = cars.some(v => v === '');

    // 예외 처리
    if(includeInvalidStr) {
        throw new Error('[ERROR] 잘못된 구분자를 입력하였습니다.')
    } else if (isNameLenInvalid) {
        throw new Error('[ERROR] 자동차 이름이 5자를 넘습니다.');
    } else if(hasDuplicates) {
        throw new Error('[ERROR] 자동차 이름이 중복됩니다.');
    }

    return cars;
}

export function validateCount(userInput) {
    const countStr = trimAndCheckBlank(userInput);
    const count = parseInt(countStr);
    const isNotNumber = Number.isNaN(count);

    if (isNotNumber) {
        throw new Error('[ERROR] 시도 횟수에 숫자가 아닌 값을 입력하였습니다.');
    } else if (!count || count > 100 || count < 1) {
        throw new Error('[ERROR] 시도 횟수에 제한된 범위(1 이상 100 이하)를 벗어나는 값을 입력하였습니다.');
    }

    return count;
}

function checkDuplicates(cars) {
    const carSet = new Set(cars);

    return cars.length !== carSet.size;
}

function trimAndCheckBlank(string) {
    const trimmedString = string.trim();

    if(!trimmedString) throw new Error('[Error] 입력 값이 없습니다.');

    return trimmedString; 
}

