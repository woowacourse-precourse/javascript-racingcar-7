class RacingGameResult {
  static determineWinners(cars) {
    const maxAdvance = Math.max(...cars.map((car) => car.advance));
    return cars
      .filter((car) => car.advance === maxAdvance)
      .map((car) => car.name);
  }
}

export default RacingGameResult;
