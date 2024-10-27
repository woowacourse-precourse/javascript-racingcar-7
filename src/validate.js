
export function isValidateCarNames(carNames) {

    const MAX_NAME_LENGTH = 5;

    try {
        for (let i = 0; i < carNames.length; i++) {
            if (carNames[i].length == 0 || carNames[i].length > MAX_NAME_LENGTH) {
                throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
            }
        }

        const uniqueNames = new Set(carNames);
        if (uniqueNames.size !== carNames.length) {
            throw new Error('[ERROR] 중복된 이름이 있습니다.');
        }

        return carNames;

    } catch (error) {
        throw error;
    }

}

export function isValidateRounds(numberOfRounds) {
    try {

        if (Number.isNaN(numberOfRounds) || numberOfRounds <= 0 || !Number.isInteger(numberOfRounds)) {
            throw new Error('[ERROR] 유효하지 않은 입력값입니다. 자연수를 입력해 주세요.');
        }

        return true;

    } catch {
        throw error;
    }
}

