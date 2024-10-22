const filterWinner = positions => {
  let winnerIdx = [];

  const maxDistance = Math.max(...positions);

  positions.map((cnt, idx) => {
    if (cnt === maxDistance) {
      winnerIdx.push(idx);
    }
  });

  return winnerIdx;
};

export default filterWinner;
