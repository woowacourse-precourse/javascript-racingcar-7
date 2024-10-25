import { getErrorMessage } from "../utils/ErrorMessageMaker.js";

export function checkValidNameLength(name, length) {
    if (name.length > length) {
        throw new Error(getErrorMessage(`이름은 최대 ${length}자까지 설정 가능합니다. (입력값: ${name})`));
    }
}

export function checkNotBlank(str) {
    if (!str) {
        throw new Error(getErrorMessage(`빈 값은 입력할 수 없습니다.`));
    }
}

export function checkOnlyEnglishCharacters(str) {
    if (!/^[a-zA-Z]+$/.test(str)) {
        throw new Error(getErrorMessage(`영어 이름만 입력 가능합니다. (입력값: ${str})`));
    }
}

export function checkNumberValue(num) {
    if (!/^[0-9]+$/.test(num)) {
        throw new Error(getErrorMessage(`숫자만 입력할 수 있습니다. (입력값: ${num})`));
    }
}

export function checkLessThanOrEqualMaxCount(count, maxCount) {
    if (count > maxCount) {
        throw new Error(getErrorMessage(`경기는 최대 ${maxCount}회 시도할 수 있습니다. (입력값: ${count})`));
    }
}