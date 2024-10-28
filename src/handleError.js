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
    const UNIQUE_NAMES = new Set(
        carNames.map((carName) => carName.toLowerCase())
    );
    if (carNames.length !== UNIQUE_NAMES.size) {
        throw new Error(
            '[ERROR] 자동차 이름은 대소문자를 구분하지 않고 중복될 수 없습니다.'
        );
    }
}

export function isTrialCountZero(trialCount) {
    if (trialCount <= 0) {
        throw new Error(
            '[ERROR] 횟수로 0또는 음수를 입력하였거나 횟수를 입력하지 않았습니다.'
        );
    }
}

export function validateTrial(trialCount) {
    if (!Number.isInteger(trialCount)) {
        throw new Error('[ERROR] 횟수는 자연수로 입력해야합니다.');
    }
}

export function isOneCar(carNames) {
    if (carNames.length == 1) {
        throw new Error(
            '[ERROR] 자동차가 2대 이상이어야 경주를 진행할 수 있습니다.'
        );
    }
}
