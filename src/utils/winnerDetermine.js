function winnerDetermine(carArray) {
  const maxPosition = carArray.reduce((max, car) => {
    return car.getPosition() > max ? car.getPosition() : max;
  }, 0);

  const winners = carArray.filter(car => car.getPosition() === maxPosition).map(car => car.getName());
  return winners.join(", ");
}

export default winnerDetermine;