export const validateName = (names) => {
  if (names.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
  }

  if (names.some((name) => name.length < 1)) {
    throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
  }
};

export const validateTryCount = (count) => {
  const countNumber = Number(count);

  if (isNaN(countNumber)) {
    throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
  }

  if (countNumber < 1) {
    throw new Error('[ERROR] 시도 횟수는 1이상이어야 합니다.');
  }
};
