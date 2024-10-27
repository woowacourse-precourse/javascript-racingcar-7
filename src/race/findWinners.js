export const findWinners = (cars, result) => {
  let winner = '';
  let maxAdvance = 0;

  for (let i = 0; i < result.length; i++) {
    const advanceCount = result[i].length;

    if (advanceCount > maxAdvance) {
      maxAdvance = advanceCount;
      winner = cars[i];
    } else if (advanceCount === maxAdvance) {
      winner += ', ' + cars[i];
    }
  }

  return winner;
};
