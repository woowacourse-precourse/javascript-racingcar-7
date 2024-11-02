import { Random, Console } from "@woowacourse/mission-utils";

class Race {
  #cars = [];
  #winners = [];
  #raceCount;


  addRacingCar(car) {
    this.#cars.push(car);
  }

  setRaceCount(raceCount) {
    this.#raceCount = raceCount;
  }

  getRaceCount() {
    return this.#raceCount;
  }

  racing() {
    this.#cars.forEach(car => {
      const random = Random.pickNumberInRange(0, 9);
      // 4 이상일 경우 전진
      car.forward(random);
    })
  }

  showRacingResult() {
    // name : --- 형식으로 출력
    this.#cars.forEach( car => {
      Console.print(car.getName() + ' : ' + '-'.repeat(car.getForwardCount()));
    })
    Console.print('');
  }

  determineWinner() {
    const max = Math.max(...this.#cars.map(car => car.getForwardCount()));

    this.#cars.forEach(car => {
      if (car.getForwardCount() === max){
        this.#winners.push(car.getName());
      }
    })
  }

  showWinner() {
    Console.print('최종 우승자 : ' + this.#winners.join(','));
  }

}

export default Race;