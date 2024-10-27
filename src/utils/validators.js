const validateCarNames = (carNames) => {
    if (!carNames.length || carNames.some(name => name.trim() === '')) {
        throw new Error("[ERROR] 자동차 이름을 적어주세요.");
    }
    if (carNames.some(name => name.length > 5)) {
        throw new Error("[ERROR] 자동차 이름을 5글자 이하로 작성해주세요.");
    }
};

const validateTryNumber = (tryNumber) => {
    if (tryNumber.trim() === '') {
        throw new Error("[ERROR] 시도 횟수를 입력해주세요.");
    }
    const number = parseInt(tryNumber, 10);
    if (isNaN(number) || number <= 0) {
        throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자로 입력해주세요.");
    }
};

export { validateCarNames, validateTryNumber };
