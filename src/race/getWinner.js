export const getWinner = (cars, result) => {
  let winner = '';
  let maxAdvance = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i].length > maxAdvance) {
      maxAdvance = result[i].length;
      winner = cars[i];
    } else if (result[i].length === maxAdvance) {
      winner += ', ' + cars[i];
    }
  }

  return winner;
};
