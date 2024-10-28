const validateCarName = (name) => {
    if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    const regex = /^[A-Za-z]+$/; // 영어 알파벳만 허용
    if (!regex.test(name)) {
        throw new Error("[ERROR] 자동차 이름은 영어 알파벳으로만 구성되어야 합니다.");
    }
};
const validateMoveCount = (count) => {
    if (isNaN(count)) {
        throw new Error(`[ERROR] 이동 횟수는 숫자여야 합니다.`);
    }
    if (count < 1) {
        throw new Error(`[ERROR] 이동 횟수는 1 이상의 양수여야 합니다.`);
    }
};
const validateCarNamesUniqueness = (names) => {
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
        throw new Error(`[ERROR] 자동차 이름은 중복될 수 없습니다.`);
    }
};
const validateInput = (input, type) => {
    if (!input || input.trim() === '') {
        if (type === 'carNames') {
            throw new Error(`[ERROR] 자동차 이름을 올바르게 입력해 주세요.`);
        } else {
            throw new Error(`[ERROR] 이동 횟수를 입력해 주세요.`);
        }
    }
};

export { validateCarName, validateMoveCount, validateCarNamesUniqueness, validateInput };
