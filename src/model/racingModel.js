class RacingModel {
  constructor() {
    this.car = {};
    this.count;
    this.winners = [];
  }

  updateCar(car) {
    this.car = { ...this.car, ...car };
  }

  getCount(count) {
    this.count = count;
  }

  updateWinner(winners) {
    this.winners = [...winners];
  }
}
export default RacingModel;
