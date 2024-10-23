const filterWinner = (positions) => {
  const winnerIdx = [];

  const maxDistance = Math.max(...positions);

  positions.forEach((cnt, idx) => {
    if (cnt === maxDistance) {
      winnerIdx.push(idx);
    }
  });

  return winnerIdx;
};

export default filterWinner;
