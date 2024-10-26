// race
import { MissionUtils } from '@woowacourse/mission-utils';
import { validateCarNames, validateTrialCount } from './validators.js';

export class Race {
  constructor(carNames, trialCount) {
    this.carNames = carNames;
    this.trialCount = trialCount;
    this.moves = {};
    this.initMoves();
    this.results = [];
  }

  initMoves() {
    this.carNames.forEach((car) => {
      this.moves[car] = '';
    });
  }

  startRace() {
    this.validateInput();
    this.processRound();
    return this.results;
  }

  validateInput() {
    validateCarNames(this.carNames);
    validateTrialCount(this.trialCount);
  }

  processRound() {
    for (let round = 0; round < this.trialCount; round++) {
      this.moveCars();
      this.recordRoundResults(round);
    }
  }

  moveCars() {
    this.carNames.forEach((car) => {
      const distance = MissionUtils.Random.pickNumberInRange(0, 9);
      if (distance >= 4) this.moves[car] += '-';
    });
  }

  recordRoundResults(round) {
    const result = this.carNames
      .map((car) => `${car} : ${this.moves[car]}`)
      .join('\n');
    this.results.push(result);
  }

  determineWinners() {
    let maxDistance = 0;
    const winners = [];

    for (const car in this.moves) {
      const distance = this.moves[car].length;
      if (distance > maxDistance) maxDistance = distance;
    }

    for (const car in this.moves)
      if (this.moves[car].length === maxDistance) winners.push(car);

    return winners;
  }
}
