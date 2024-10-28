const winnerDecision = (cars) => {
  const maxForward = Math.max(...cars.map((car) => car.forward));
  const winners = cars.filter((car) => car.forward === maxForward);
  return winners;
};
export default winnerDecision;
