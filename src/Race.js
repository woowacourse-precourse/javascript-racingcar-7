import {
  getKeyArrayHasTargetValueInMap,
  getMapFilledZero,
  getMaxValueInMap,
  getRepeatedString,
  pickNumberInRange,
  print,
} from "./lib/utils.js";

class Race {
  static #MIN_RANDOM = 0;
  static #MAX_RANDOM = 9;
  static #MOVE_FORWARD_THRESHOLD = 4;
  static #TRACE_CHARACTER = "-";

  #carArray;
  #tryCount;
  #carTraceMap;

  constructor(carArray, tryCount) {
    this.#carArray = carArray;
    this.#tryCount = tryCount;

    this.#carTraceMap = getMapFilledZero(this.#carArray);
  }

  run() {
    for (let round = 0; round < this.#tryCount; round++) {
      this.#runOneRound();
    }
    return this.winnerArray;
  }

  #runOneRound() {
    for (const car of this.#carArray) {
      const newPosition = this.#moveCarForward(this.#carTraceMap.get(car));
      this.#carTraceMap.set(car, newPosition);
      this.#printCarPosition(car, newPosition);
    }
  }

  #moveCarForward(currentPosition) {
    const randomNum = pickNumberInRange(Race.#MIN_RANDOM, Race.#MAX_RANDOM);
    const isMoveForward = this.#getIsMoveForward(randomNum);
    if (isMoveForward) return currentPosition + 1;
    return currentPosition;
  }

  #getIsMoveForward(num) {
    return num >= Race.#MOVE_FORWARD_THRESHOLD;
  }

  #printCarPosition(car, position) {
    const repeatedTraceChracter = getRepeatedString(
      Race.#TRACE_CHARACTER,
      position
    );

    print(`${car} : ${repeatedTraceChracter}`);
  }

  get winnerArray() {
    const maxTrace = getMaxValueInMap(this.#carTraceMap);
    const winnerCarArray = getKeyArrayHasTargetValueInMap(
      this.#carTraceMap,
      maxTrace
    );
    return winnerCarArray;
  }
}

export default Race;
