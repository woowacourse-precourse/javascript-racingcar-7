const splitCarNames = (carNames) => {
  const eachCarName = carNames.split(',');
  return eachCarName;
};

const trimEachCarNames = (eachCarName) => {
  const trimmedEachCarName = [];
  for (let i = 0; eachCarName.length > i; i += 1) {
    trimmedEachCarName[i] = eachCarName[i].trim();
  }
  return trimmedEachCarName;
};

const splitAndTrimCarName = (carNames) => {
  const splitAndTrimmedCarName = trimEachCarNames(splitCarNames(carNames));
  return splitAndTrimmedCarName;
};

export default splitAndTrimCarName;
