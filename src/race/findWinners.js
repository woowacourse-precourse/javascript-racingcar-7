export const findWinners = (cars) => {
  const maxPosition = Math.max(...Object.values(cars));
  return Object.entries(cars)
    .filter(([_, position]) => position === maxPosition)
    .map(([name]) => name);
};
