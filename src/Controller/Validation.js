function validateCarNames(carNames) {
  const carNamesSplit = carNames.split(',');
  if (carNamesSplit.some((name) => name.trim().length > 5)) {
    throw new Error('[ERROR]: 자동차 이름은 5자를 초과할 수 없습니다.');
  }
  return carNamesSplit;
}

function validateFinishLine(finishLine) {
  const parsedFinishLine = parseInt(finishLine, 10);
  if (isNaN(parsedFinishLine) || parsedFinishLine < 1) {
    throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
  }
  return parsedFinishLine;
}

export { validateCarNames, validateFinishLine };
