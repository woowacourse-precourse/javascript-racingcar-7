export const initializeCars = (carNames) => {
  return carNames.map((name) => ({ name, position: 0 }));
};
