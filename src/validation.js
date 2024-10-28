export const validateName = (namesInput) => {
  if (!namesInput) {
    throw new Error('[ERROR] 자동차 이름은 빈값이 올 수 없습니다.');
  }

  const regex = /^[a-zA-Z0-9,]*$/;

  if (!regex.test(namesInput)) {
    throw new Error('[ERROR] 자동차 이름의 특수문자는 쉼표(,)만 허용됩니다.');
  }

  const names = namesInput.split(',').map((name) => name.trim());

  if (names.some((name) => name.length > 5)) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
  }

  if (names.some((name) => name.length < 1)) {
    throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
  }
};

export const validateTryCount = (count) => {
  if (count === '') {
    throw new Error('[ERROR] 시도 횟수는 빈값이 올 수 없습니다.');
  }

  const countNumber = Number(count);

  if (isNaN(countNumber)) {
    throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
  }

  if (countNumber < 1) {
    throw new Error('[ERROR] 시도 횟수는 1이상이어야 합니다.');
  }
};
