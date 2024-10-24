import { Console } from '@woowacourse/mission-utils';

class Racing {
  #totalRounds;

  #cars;

  #result;

  constructor(totalRounds, cars) {
    this.#totalRounds = totalRounds;
    this.#cars = cars;
    this.#result = [];
  }

  #try() {
    const cars = [...this.#cars];
    const distances = cars.map((car) => car.driving());
    return distances;
  }

  play() {
    const totalRounds = this.#totalRounds;
    const rounds = Array.from(
      { length: totalRounds },
      (arrayLike, index) => index + 1,
    );

    rounds.forEach((round) => {
      const result = this.#try();
      this.#result = result;
    });
  }

  #showResult() {
    const raceResult = this.#result;
    raceResult.forEach(({ name, distance }) => {
      const DISTANCE_MARK = '-';
      const distanceGraph = DISTANCE_MARK.repeat(distance);

      Console.print(`${name} : ${distanceGraph}`);
    });
  }
}

export default Racing;
