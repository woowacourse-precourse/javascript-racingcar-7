import { isEmpty, startsWithComma, endsWithComma, isDuplicatedComma, hasNameLongerThanFive, isValidAttemptCount } from './utils/validateInput';

const userInputValidator = (input) => {
    if (isEmpty(input)) {
        throwError('입력값은 비어있을 수 없습니다.');
    } else if (startsWithComma(input)) {
        throwError('입력값은 ,로 시작할 수 없습니다.');
    } else if (endsWithComma(input)) {
        throwError('입력값은 ,로 끝날 수 없습니다.');
    } else if (isDuplicatedComma(input)) {
        throwError('입력값에 중복된 ,가 있습니다.');
    }
}

const eachNameLengthValidator = (nameList) => {
    if (hasNameLongerThanFive(nameList)) {
        throwError('이름의 길이는 5글자 이내로 입력해주세요.');
    }
}

const attemptCountValidator = (input) => {
    if (isValidAttemptCount(input)) {
        throwError('입력은 양의 정수만 가능합니다.')
    }
}

function throwError(message) {
    throw new Error(`[ERROR]: ${message}`);
};

export { userInputValidator, eachNameLengthValidator, attemptCountValidator };