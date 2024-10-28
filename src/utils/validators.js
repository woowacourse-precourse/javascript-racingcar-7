const validateCarNames = (carNames) => {
    if (!carNames.length || carNames.some(name => name.trim() === '')) {
        throw new Error("[ERROR] 자동차 이름을 적어주세요.");
    }

    if (carNames.some(name => name.length > 5)) {
        throw new Error("[ERROR] 자동차 이름을 5글자 이하로 작성해주세요.");
    }

    const invalidCharsRegex = /[^a-zA-Z0-9]/;
    if (carNames.some(name => invalidCharsRegex.test(name))) {
        throw new Error("[ERROR] 자동차 이름에는 알파벳과 숫자만 사용할 수 있습니다.");
    }

    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
        throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }

    if (carNames.some(name => /\s|[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(name))) {
        throw new Error("[ERROR] 자동차 이름에는 공백이나 한글을 포함할 수 없습니다.");
    }
};

const validateTryNumber = (tryNumber) => {
    if (tryNumber.trim() === '') {
        throw new Error("[ERROR] 시도 횟수를 입력해주세요.");
    }

    const number = parseInt(tryNumber, 10);
    if (isNaN(number)) {
        throw new Error("[ERROR] 시도 횟수는 숫자로 입력해주세요.");
    }

    if (number <= 0) {
        throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자로 입력해주세요.");
    }

    if (!Number.isInteger(number)) {
        throw new Error("[ERROR] 시도 횟수는 정수로 입력해주세요.");
    }

    if (number > 100) {
        throw new Error("[ERROR] 시도 횟수는 100 이하로 입력해주세요.");
    }
};

export {validateCarNames, validateTryNumber};
