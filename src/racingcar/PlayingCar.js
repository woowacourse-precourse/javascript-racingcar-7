import RandomNumberGenerator from '../utils/RandonNumberGenerator';
import { CAR_SETTINGS } from '../constants/Settings';

// 레이싱 게임에 참여하는 각각의 자동차 정의 (이름과 위치)

class PlayingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = RandomNumberGenerator.pickNumberInRange();
    if (randomNumber >= CAR_SETTINGS.MOVE_THRESHOLD) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

export default PlayingCar;
