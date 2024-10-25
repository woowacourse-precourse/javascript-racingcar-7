import OutputView from '../views/OutputView.js';
import ChallengerList from './ChallengerList.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class GameManager {
  constructor(input) {
    this.challengerList = [];
    this.initChallengerList(input);
  }

  initChallengerList(input) {
    const challengerList = new ChallengerList(input);

    this.challengerList = challengerList.getChallengerList();

    if (!this.challengerList) {
      throw new Error('이름을 입력해주세요');
    }
  }

  repeatGameAttempts(attempts) {
    for (let i = 0; i < attempts; i++) {
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
      this.showChallengerStatus(challenger),
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
    if (!this.challengerList) {
      throw new Error('이름을 입력해주세요');
    }
    const distanceList = this.challengerList.map(
      (challenger) => challenger.distance,
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
