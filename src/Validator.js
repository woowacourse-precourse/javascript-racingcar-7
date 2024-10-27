class Validator {
    isValidCarName(carNames) {
        for (let car of carNames) {
            if (car.length > 5) {
                throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력 가능합니다.");
            }
        }
    }

    isValidTryCount(tryCount) {
        if (isNaN(tryCount) || Number(tryCount) <= 0) {
            throw new Error("[ERROR] 시도할 횟수는 숫자로 입력해야합니다.");
        }
    }
}

export default Validator;
