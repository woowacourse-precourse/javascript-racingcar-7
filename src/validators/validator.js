export function checkCommaSaperatedNames(input) {
  const pattern = /^[a-zA-Z0-9가-힣,\s]+$/;

  if (!pattern.test(input)) {
    throw new Error('입력 형식이 올바르지 않습니다. 쉼표(,)로만 구분해주세요.');
  }
}

function checkCarNameLength(name) {
  if (name.length > 5) {
    throw new Error('자동차 이름은 5자 이하만 가능합니다.');
  }
}

function checkAllowedCharacters(name) {
  const pattern = /^[a-zA-Z가-힣\s]+$/;

  if (!pattern.test(name)) {
    throw new Error('자동차 이름은 한글과 영어만 가능합니다.');
  }
}

function checkEmptyString(name) {
  if (name === '') {
    throw new Error('자동차 이름은 공백일 수 없습니다.');
  }
}

function checkCarNameDuplicates(names) {
  if (new Set(names).size !== names.length) {
    throw new Error('자동차 이름이 중복되었습니다.');
  }
}

function checkMinimumCars(names) {
  if (names.length < 2) {
    throw new Error('자동차는 최소 2대 이상이어야 합니다.');
  }
}

export function checkCarNames(carNames) {
  const validateCarNames = carNames.map((name) => {
    checkCarNameLength(name);
    checkEmptyString(name);
    checkAllowedCharacters(name);
    return name;
  });

  checkMinimumCars(validateCarNames);
  checkCarNameDuplicates(validateCarNames);
  return validateCarNames;
}
