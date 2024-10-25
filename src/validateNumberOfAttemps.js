const validateNumberOfAttemps = (numberOfAttemps) => {
  const VALID_NUM_OF_ATTEMPS = /^-?[0-9]*$/;

  if (!VALID_NUM_OF_ATTEMPS.test(numberOfAttemps)) {
    throw new Error('[ERROR] 시도 횟수는 숫자로만 이루어져 합니다.');
  }
  if (Number(numberOfAttemps) <= 0) {
    throw new Error('[ERROR] 시도 횟수는 양수만 가능합니다.');
  }
}

export default validateNumberOfAttemps;