export const findWinnerIndex = carsMovement => {
  let max = 0;
  let winnerIndex = [];

  carsMovement.map((movement, index) => {
    if (movement > max) {
      winnerIndex = [index];
      max = movement;
    } else if (movement === max) {
      winnerIndex.push(index);
    }
  });
  return winnerIndex;
};
