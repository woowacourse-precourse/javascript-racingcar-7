const validateRaceCount = (raceCount) => {
  const VALID_NUM_OF_ATTEMPS = /^-?[0-9]*$/;

  if (!raceCount) {
    throw new Error('[ERROR] 시도 횟수를 입력해주세요.');
  }
  if (!VALID_NUM_OF_ATTEMPS.test(raceCount)) {
    throw new Error('[ERROR] 시도 횟수는 숫자로만 이루어져 합니다.');
  }
  if (Number(raceCount) <= 0) {
    throw new Error('[ERROR] 시도 횟수는 양수만 가능합니다.');
  }
}

export default validateRaceCount;