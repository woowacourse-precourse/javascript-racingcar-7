export const verifyTryNumber = (tryCount) => {
  if (isNaN(tryCount) || !Number.isInteger(Number(tryCount)))
    throw new Error('[ERROR] 시도 횟수는 숫자만 입력 가능합니다.');

  if (tryCount <= 0) throw Error('[ERROR] 시도 횟수는 0보다 커야합니다.');

  return tryCount;
};
