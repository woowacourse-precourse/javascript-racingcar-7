import GAME from '../constants/Game.js';
import GAME_MESSAGE from '../constants/GameMessage.js';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  moveForward(number) {
    if (number >= GAME.moveThreshold) this.moveCount += 1;
  }

  generateRaceMarker() {
    return GAME_MESSAGE.raceMarker.repeat(this.moveCount);
  }
}

export default Car;
