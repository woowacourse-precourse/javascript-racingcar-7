export const findWinnerIndex = carsMovement => {
  let max = 0;
  let winnerIndex = [];

  carsMovement.map((movement, index) => {
    if (movement > max) {
      winnerIndex = [index];
    } else if (movement === max) {
      winnerIndex.push(index);
    }
  });

  return winnerIndex;
};
