class Validator {
    static validateCarNames(names) {
        if (!names || names.length === 0) {
            throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
        }
        names.forEach(this.validateCarName);
    }

    static validateCarName(name) {
        if (!name || name.trim().length === 0) {
            throw new Error('[ERROR] 자동차 이름은 빈 값일 수 없습니다.');
        }
        if (name.length > 5) {
            throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
        }
    }

    static validateAttempts(attempts) {
        const number = Number(attempts);

        if (Number.isNaN(number)) {
            throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
        }
        if (number < 1) {
            throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
        }
    }
}

export default Validator;