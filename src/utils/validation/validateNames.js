function validateOneName(names) {
  if (names.match(/^[^,]{1,5}$/))
    throw new Error('[ERROR] 하나 이상의 이름을 입력해주세요.');
}

function validateLongName(names) {
  if (names.match(/^[^,]+(,[^,]+)*$/))
    throw new Error('[ERROR] 이름의 길이는 5를 초과할 수 없습니다.');
}

function validateCommaEnding(names) {
  if (names.endsWith(','))
    throw new Error('[ERROR] 이름 입력 마지막에는 쉼표가 올 수 없습니다.');
}

export default function validateNames(names) {
  if (!names)
    throw new Error('[ERROR] 이름이 입력되지 않았습니다. 이름을 입력해주세요.');
  if (!names.match(/^[^,]{1,5}(,[^,]{1,5})+$/)) {
    validateOneName(names);
    validateLongName(names);
    validateCommaEnding(names);
    throw new Error('[ERROR] 이름 입력을 다시 확인해주세요.');
  }
}
