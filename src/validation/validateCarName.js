export const validateCarName = (input) => {
  const regex = /^[A-Za-z0-9]+$/;
  const numberName = Number(input);
  if (input.length > 5) {
    throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요.');
  }

  if (!regex.test(input)) {
    throw new Error(
      '[ERROR] 자동차 이름에는 공백을 제외한 영어, 숫자만 사용할 수 있어요.'
    );
  }

  if (numberName === 0) {
    throw new Error('[ERROR] 자동차 이름에는 공백을 입력할 수 없어요.');
  }
};
export const checkDuplicateCarName = (names) => {
  if (new Set(names).size !== names.length) {
    throw new Error('[ERROR] 자동차 이름은 중복되지 않게 입력해주세요.');
  }
};
export const checkValidateCarNumber = (names) => {
  if (names.length < 2) {
    throw new Error(
      '[ERROR] 경주는 두 개 이상의 자동차 이름을 입력해야 가능해요.'
    );
  }
};
