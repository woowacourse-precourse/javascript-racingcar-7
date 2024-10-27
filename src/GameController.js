class GameController {
  constructor(carModel, view) {
    this.carModel = carModel;
    this.view = view;
    this.numberOfAttempts = 0;
  }

  async startRace() {
    await this.setCarNames();
    await this.setNumberOfAttempts();
    this.view.printMessage('실행 결과');

    while (this.numberOfAttempts > 0) {
      this.carModel.moveCars();
      this.view.printRaceStatus(this.carModel.carMap);
      this.numberOfAttempts -= 1;
    }

    const winner = this.carModel.findWinner();
    this.view.printWinner(winner);
  }

  async setCarNames() {
    const names = await this.view.getCarNames();
    this.validateCarName(names);
    this.carModel.setCarNames(names);
  }

  validateCarName(names) {
    if (names === '') {
      throw new Error('[ERROR] 자동차 이름을 입력하세요.');
    }

    const carNames = names.split(',').map(name => name.trim());
    if (carNames.length === 1) {
      throw new Error(
        '[ERROR] 경주를 위해서는 최소 2대 이상의 자동차가 필요합니다.',
      );
    }
    if (JSON.stringify([...new Set(carNames)]) !== JSON.stringify(carNames)) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
    }
    carNames.forEach(name => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5글자 이하여야 합니다.');
      }
    });
  }

  async setNumberOfAttempts() {
    const number = await this.view.getNumber();
    this.validateNumber(number);
    this.numberOfAttempts = number;
  }

  validateNumber(attempts) {
    if (!attempts) {
      throw new Error('[ERROR] 시도 횟수를 입력하세요.');
    }

    const number = Number(attempts);
    if (Number.isNaN(number) || !Number.isInteger(number) || number < 1) {
      throw new Error('[ERROR] 횟수는 1 이상의 정수로 입력해야 합니다.');
    }
  }
}

export default GameController;
