class RacingGame {
  constructor() {
    this.carList = [];
    this.count = 0;
  }

  setRacingCars(carNames) {
    this.carList = carNames.split(',').map((carName) => {
      if (carName.length > 5) {
        throw new Error('자동차 이름은 5자 이하만 가능합니다.');
      }
      return carName;
    });
  }

  setCount(count) {
    this.count = count;
  }
}

export default RacingGame;
