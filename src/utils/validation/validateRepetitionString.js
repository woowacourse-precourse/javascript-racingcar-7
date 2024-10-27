function validateNotNumber(repetitionString) {
  if (repetitionString.match(/[^0-9]+/))
    throw new Error('[ERROR] 시도 횟수는 숫자만 입력해주세요.');
}

function validateZeroNumber(repetitionString) {
  if (repetitionString.match(/^[0]$/))
    throw new Error('[ERROR] 시도 횟수는 1 이상의 정수로 입력해주세요.');
}

function validateZeroStarting(repetitionString) {
  if (repetitionString.startsWith('0'))
    throw new Error(
      '[ERROR] 시도 횟수의 첫째 자리수는 1 이상으로 입력해주세요.',
    );
}

export default function validateRepetitionString(repetitionString) {
  if (!repetitionString)
    throw new Error(
      '[ERROR] 시도 횟수가 입력되지 않았습니다. 시도 횟수를 입력해주세요.',
    );
  if (!repetitionString.match(/^[1-9](\d+)*$/)) {
    validateNotNumber(repetitionString);
    validateZeroNumber(repetitionString);
    validateZeroStarting(repetitionString);
    throw new Error('[ERROR] 시도 횟수를 입력해주세요.');
  }
}
