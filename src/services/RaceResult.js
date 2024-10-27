import OutputView from '../utils/OutputView.js';

class RaceResult {
  static printWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.getPosition()));
    const winners = cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
    OutputView.printWinners(winners);
  }
}

export default RaceResult;
