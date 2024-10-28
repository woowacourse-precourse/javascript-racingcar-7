// ! 예외 처리

const throughErrorMessage = (message) => {
    throw new Error(`[ERROR] ${message}`);
};

// * == 자동차 입력 이름 처리 == //

const isCarNamesCharMoreThanFive = (carArray) => {
    let result = carArray.some((car) => car.name.length > 5);
    return result;
};

const isCarsInputSymbolOtherThanComma = (carsInput) => {
    const pattern = /[^,ㄱ-ㅎㅏ-ㅣ가-힣\w\s]/g; // ,제외한 특수기호 모두 검색
    const result = pattern.test(carsInput);

    return result;
};

const isInputFalsy = (carsInput) => {
    if (!carsInput) {
        return true;
    }

    if (typeof carsInput === 'string' && carsInput.trim() === '') {
        return true;
    }

    return false;
};

export const checkCarInputError = (carsInput, carArray) => {
    if (isInputFalsy(carsInput)) {
        throughErrorMessage('경주할 자동차 이름을 입력하세요');
    }

    if (isCarsInputSymbolOtherThanComma(carsInput)) {
        throughErrorMessage('이름은 쉼표(,)로 구분 가능합니다.');
    }

    if (isCarNamesCharMoreThanFive(carArray)) {
        throughErrorMessage('자동차 이름은 5글자 이하로 입력해주세요.');
    }
};
// * ========================== //

// * == 시도할 횟수(차수) 입력 처리 == //
const isDegreeZero = (degreeInput) => {
    if (degreeInput == 0) {
        return true;
    }
    return false;
};

export const checkDegreeInputError = (degreeInput) => {
    if (isInputFalsy(degreeInput)) {
        throughErrorMessage('시도할 횟수를 입력해주세요.');
    }

    if (isDegreeZero(degreeInput)) {
        throughErrorMessage('시도할 횟수가 0보다 커야 경기가 시작됩니다.');
    }
};
// * ========================== //
