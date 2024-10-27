import {
  getKeyArrayHasTargetValueInMap,
  getMapFilledZero,
  getMaxValueInMap,
  getRepeatedString,
  pickNumberInRange,
  print,
} from './lib/utils.js';

class Race {
  static #MIN_RANDOM = 0;

  static #MAX_RANDOM = 9;

  static #MOVE_FORWARD_THRESHOLD = 4;

  static #TRACE_CHARACTER = '-';

  static #FORWARD_STEP = 1;

  #carArray;

  #tryCount;

  #carTraceMap;

  constructor(carArray, tryCount) {
    this.#carArray = carArray;
    this.#tryCount = tryCount;

    this.#carTraceMap = getMapFilledZero(this.#carArray);
  }

  run() {
    for (let round = 0; round < this.#tryCount; round += 1) {
      this.#runOneRound();
    }
    return this.#winnerCarArray;
  }

  #runOneRound() {
    this.#carArray.forEach(car => {
      const newPosition = Race.#moveCarForward(this.#carTraceMap.get(car));
      this.#carTraceMap.set(car, newPosition);
      Race.#printCarPosition(car, newPosition);
    });
  }

  static #moveCarForward(currentPosition) {
    const randomNum = pickNumberInRange(Race.#MIN_RANDOM, Race.#MAX_RANDOM);
    const isMoveForward = Race.#getIsMoveForward(randomNum);
    if (isMoveForward) return currentPosition + Race.#FORWARD_STEP;
    return currentPosition;
  }

  static #getIsMoveForward(num) {
    return num >= Race.#MOVE_FORWARD_THRESHOLD;
  }

  static #printCarPosition(car, position) {
    const repeatedTraceChracter = getRepeatedString(
      Race.#TRACE_CHARACTER,
      position,
    );

    print(`${car} : ${repeatedTraceChracter}`);
  }

  get #winnerCarArray() {
    const maxTrace = getMaxValueInMap(this.#carTraceMap);
    const winnerCarArray = getKeyArrayHasTargetValueInMap(
      this.#carTraceMap,
      maxTrace,
    );
    return winnerCarArray;
  }
}

export default Race;
