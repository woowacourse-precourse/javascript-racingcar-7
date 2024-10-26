function isRepeat(arr) {
  const isError = arr.some((element) => {
    return arr.indexOf(element) !== arr.lastIndexOf(element)
  });
  if (isError) throw Error('[ERROR] 자동차 이름을 중복으로 사용할 수 없습니다.');
}

function isBlank(arr) {
  const isError = arr.some((element) => {
    return element.length == 0
  });
  if (isError) throw Error('[ERROR] 자동차 이름은 공백으로 할 수 없습니다.');
}

function isOver5(arr) {
  const isError = arr.some((element) => {
    return element.length > 5
  });
  if (isError) throw Error('[ERROR] 자동차 이름은 5글자 이내로 입력해주세요.');
}

export function isValidName(nameList) {
  isRepeat(nameList);
  isBlank(nameList);
  isOver5(nameList);
}

export function isValidNumber(num) {
  if (parseInt(num) < 1)
    throw Error(`[ERROR] 1 미만의 수는 입력할 수 없습니다. 양수를 입력해주세요.`);
  if (Number.isNaN(parseInt(num)))
    throw Error(`[ERROR] 숫자를 입력해주세요.`);
  if (num.includes('.'))
    throw Error(`[ERROR] 소수는 입력할 수 없습니다. 정수를 입력해주세요.`);
}
