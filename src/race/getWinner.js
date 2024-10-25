export const getWinner = (cars, result) => {
  let winner = '';
  let maxAdvance = 0;

  for (let i = 0; i < result.length; i++) {
    const advanceSpace = result[i].length;

    if (advanceSpace > maxAdvance) {
      maxAdvance = advanceSpace;
      winner = cars[i];
    } else if (advanceSpace === maxAdvance) {
      winner += ', ' + cars[i];
    }
  }

  return winner;
};
