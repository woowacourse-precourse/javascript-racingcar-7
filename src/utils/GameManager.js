import OutputView from '../views/OutputView.js';
import Challenger from './Challenger.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import HandleError from './Error.js';

class GameManager {
  constructor(challengerNameList, attempts) {
    this.challengerList = this.convertToChallengerObjList(challengerNameList);
    this.attempts = attempts;
  }

  convertToChallengerObjList(challengerNameList) {
    const challengerList = challengerNameList.map((name) => {
      return new Challenger(name);
    });
    return challengerList;
  }

  playGameAsAttemps() {
    for (let i = 0; i < this.attempts; i++) {
      this.playGame();
      this.showAllOfChallengersStatus();
    }
  }

  playGame() {
    this.challengerList.map((challenger) => {
      // 컨벤션 확인
      if (this.isMoveForwardStatus()) challenger.goForward();
    });
  }

  showAllOfChallengersStatus() {
    this.challengerList.forEach((challenger) =>
      this.showChallengerStatus(challenger)
    );
  }

  showChallengerStatus(challenger) {
    const status = this.challengerStatus(challenger);
    OutputView.print(status);
  }

  challengerStatus(challenger) {
    let distance = challenger.distance;
    let DISTANCE_UI = '';

    while (distance--) {
      DISTANCE_UI += '-';
    }

    return `${challenger.name} : ${DISTANCE_UI}`;
  }

  getWinnerNameString() {
    // if (!this.challengerList) {
    //   Error.makeError(Error.NAME_INPUT_ERROR.IsBlank);
    // }
    const distanceList = this.challengerList.map(
      (challenger) => challenger.distance
    );
    const MAX = Math.max(...distanceList);

    return this.challengerList
      .filter((challenger) => challenger.distance == MAX)
      .map((challenger) => challenger.name)
      .join(',');
  }

  isMoveForwardStatus() {
    return this.pickRandomNumber() >= 4;
  }

  pickRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}

export default GameManager;
