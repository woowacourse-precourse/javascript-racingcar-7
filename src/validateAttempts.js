function validateAttempts(attempts) {
  if (attempts.trim() === '') {
    throw Error('[ERROR] 시도 횟수를 입력해 주세요!');
  }

  if (Number.isNaN(Number(attempts))) {
    throw Error('[ERROR] 시도 횟수로 숫자가 아닌 값은 입력할 수 없습니다!');
  }

  if (Number(attempts) < 0) {
    throw Error('[ERROR] 시도 횟수로 음수는 입력할 수 없습니다!');
  }

  if (Number(attempts) === 0) {
    throw Error('[ERROR] 시도 횟수로 0은 입력할 수 없습니다!');
  }

  if (Number(attempts) !== parseInt(attempts, 10)) {
    throw Error('[ERROR] 시도 횟수로 소수는 입력할 수 없습니다!');
  }
}

export default validateAttempts;
