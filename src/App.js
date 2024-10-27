import { carNameInput, turnCountInput } from './input.js';

class App {
  async run() {
    const carNames = await carNameInput().then((item) => item.split(','));
    if (!this.checkCarNames(carNames)) throw new Error('[ERROR] 잘못된 입력입니다.');
    const turnCount = await turnCountInput();
    if (!this.checkTurnCount(turnCount)) throw new Error('[ERROR] 잘못된 입력입니다.');
  }

  checkCarNames(arr) {
    if (arr.length < 2) return false;
    if (arr.length !== new Set(arr).size) return false;
    const regexp = /^[A-Za-z0-9]{1,5}$/;
    if (arr.some((item) => !regexp.test(item))) return false;
    return true;
  }

  checkTurnCount(num) {
    if (isNaN(num)) return false;
    if (num < 1) return false;
    if (Math.round(num) !== num) return false;
    return true;
  }
}

export default App;
