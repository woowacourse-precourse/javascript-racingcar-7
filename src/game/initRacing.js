export function initRacing(round, carNames) {
  return {
    round,
    carNames,
    carDistances: Array(carNames.length).fill(0),
  };
}
