export function validateNameLength(carNames) {
    if (!carNames.every((carName) => carName.length <= 5)) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
}

export function isCarNameEmpty(carNames) {
    if (carNames.some((carName) => carName === '')) {
        throw new Error('[ERROR] 자동차 이름은 비어있을 수 없습니다.');
    }
}

export function hasDuplicateNames(carNames) {
    const uniqueNames = new Set(
        carNames.map((carName) => carName.toLowerCase())
    );
    if (carNames.length !== uniqueNames.size) {
        throw new Error(
            '[ERROR] 자동차 이름은 대소문자를 구분하지 않고 중복될 수 없습니다.'
        );
    }
}

export function isTrialCountZero(trialCount) {
    if (trialCount <= 0) {
        throw new Error('[ERROR] 횟수는 자연수로 입력해야합니다.');
    }
}

export function validateTrial() {}
