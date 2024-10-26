export function validateTryCount(tryCount) {
  if (tryCount % 1 !== 0) {
    throw new Error('[ERROR] 정수만 입력해 주세요.');
  }

  if (tryCount === 0) {
    throw new Error('[ERROR] 0보다 큰 수를 입력해 주세요.');
  }
}
