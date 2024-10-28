export function validateNameLength() {}

export function isCarNameEmpty() {}

export function hasDuplicateNames() {}

export function isTrialCountZero(trialCount) {
    if (trialCount <= 0) {
        throw new Error('[ERROR] 횟수는 자연수로 입력해야합니다.');
    }
}

export function validateTrial(trialCount) {}
