import { MissionUtils } from '@woowacourse/mission-utils';

export default class RaceGame {
  constructor(participants, gameAttempts) {
    this.participants = participants;
    this.gameAttempts = gameAttempts;
  }

  runGame() {
    for (let round = 0; round < this.gameAttempts; round++) {
      this.participants.forEach((participant) => {
        participant.updateDistance();
      });
    }
  }

  getWinners() {
    const maxDistance = Math.max(
      ...this.participants.map((participant) => participant.getDistance()),
    );
    return this.participants.filter(
      (participant) => participant.getDistance() === maxDistance,
    );
  }
}
