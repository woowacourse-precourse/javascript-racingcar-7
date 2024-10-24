const parseCarNames = (carNames) => {
  return carNames.split(',').map((car) => car.trim());
}

export default parseCarNames;