export function validatePlayerNames(names) {
  if (names.some((name) => name.length > 5)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.");
  }
  const checkDuplicateNames = new Set(names);
  if (checkDuplicateNames.size !== names.length) {
    throw new Error("[ERROR] 중복된 이름이 있습니다. 각 자동차의 이름은 고유해야 합니다.");
  }

  return true;
}

export function validateTrials(trials) {
  if (Number.isNaN(Number(trials)) || trials < 1 || trials.includes(".")) {
    throw new Error("[ERROR] 시도 횟수는 1 이상의 정수로 입력해주세요.");
  }
  return true;
}
