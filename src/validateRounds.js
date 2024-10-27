function validateRounds(inputRounds) {
  if (!inputRounds) {
    throw new Error('[ERROR] 시도 횟수를 입력해야 합니다.');
  }

  if (isNaN(inputRounds)) {
    throw new Error('[ERROR] 시도 횟수는 숫자만 입력 가능합니다.');
  }
}
export default validateRounds;
