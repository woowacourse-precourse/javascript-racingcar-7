import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../model/Car';

class RaceGameService {
  #status;
  #participants;
  #maxRound;
  #currentRound;

  constructor() {
    this.#status = 'created';
    this.#currentRound = 0;
  }

  start(){
    while (this.#currentRound < this.#maxRound){
      this.#currentRound++;
      this.playRound();
    }
    this.#status = 'end';
  }

  ready(carNames, maxRound) {
    this.#status = 'ready';
    const cars = carNames.map(name=> new Car(name));
    this.#participants = cars;
    this.#maxRound = maxRound;
  }

  playRound() {
    this.#status = 'playing';
    for (const car of this.#participants){
      if(this.#canMove()){
        car.move();
      }
    }
  }

  get status() {
    return {
      status: this.#status,
      cars: this.#participants.map(participants => participants.status)
    }
  }

  getResult(){
    const { cars } = this.status;
    const winnersPosition = Math.max(...cars.map(car=> car.move));
    const winners = cars.filter(car=> car.move === winnersPosition).map(car => car.name);
    return {
      winners, 
      status: this.#status,
    }
  }

  #canMove(){
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }

}


export default RaceGameService;
