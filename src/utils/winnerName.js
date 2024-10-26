const winnerName = (winnerArr) => {
  const winnerName = winnerArr.map((winner) => winner.name).join(", ");
  return winnerName;
};
export default winnerName;
