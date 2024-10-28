function attemptHandler(attemptNum) {
  if (isNaN(attemptNum)) {
    throw new Error('[ERROR] 시도 횟수는 숫자만 입력 가능합니다.');
  }

  if (attemptNum <= 0) {
    throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.')
  }
}

export default attemptHandler;
