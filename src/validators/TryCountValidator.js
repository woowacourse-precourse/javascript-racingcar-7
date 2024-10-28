export default function validateTryCount(input) {
  const tryCount = parseInt(input, 10);
  if (isNaN(tryCount) || tryCount <= 0) {
    throw new Error('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
  }
  return tryCount;
}
