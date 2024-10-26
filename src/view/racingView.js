// RacingView.js
class RacingView {
  static printRaceStatus(cars) {
    cars.forEach((car) => {
      console.log(`${car.getName()} : ${car.getPositionString()}`);
    });
    console.log('');
  }

  static printWinners(winners) {
    console.log(`최종 우승자 : ${winners.join(', ')}`);
  }

  static printError(message) {
    console.error(`[ERROR] ${message}`);
  }
}

export default RacingView;
