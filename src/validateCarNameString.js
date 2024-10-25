const validateCarNameString = (carNameString) => {
  const VALID_CAR_NAME_REGEX = /^[a-zA-Z]+(,[a-zA-Z]+)*$/;
  const LONG_CAR_NAME_REGEX = /[a-zA-Z]{6,}/;

  if (!carNameString) {
    throw new Error('[ERROR] 자동차 이름을 입력해 주세요.');
  }
  if (carNameString.endsWith(',')) {
    throw new Error('[ERROR] 자동차 이름은 쉼표로 끝날 수 없습니다.');
  }
  if (!VALID_CAR_NAME_REGEX.test(carNameString)) {
    throw new Error('[ERROR] 자동차 이름은 영문자로 구성, 구분은 쉼표(,)로 입력해야 합니다.');
  }
  if (LONG_CAR_NAME_REGEX.test(carNameString)) {
    throw new Error('[ERROR] 자동차 이릉은 5자 이하로 입력해야 합니다.')
  }
}

export default validateCarNameString;