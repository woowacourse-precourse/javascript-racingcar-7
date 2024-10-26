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

      this.#showResult(round);
    });
  }

  #showResult(round) {
    const raceResult = this.#result;
    const FIRST_ROUND = 1;

    if (round === FIRST_ROUND) {
      Console.print('\n실행 결과');
    }

    raceResult.forEach(({ name, distance }) => {
      const DISTANCE_MARK = '-';
      const distanceGraph = DISTANCE_MARK.repeat(distance);

      Console.print(`${name} : ${distanceGraph}`);
    });

    Console.print('');
  }

  #findWinners() {
    const finalResult = this.#result;
    const distanceList = finalResult.map(({ distance }) => distance);
    const farthestDistance = Math.max(...distanceList);
    const winners = finalResult.filter(
      (car) => car.distance === farthestDistance,
    );

    return winners;
  }

  announceWinners() {
    const winners = this.#findWinners();
    const winnersName = winners.map((winner) => winner.name);
    const winnersNameToString = winnersName.join(', ');

    Console.print(`최종 우승자 : ${winnersNameToString}`);
  }
}

export default Racing;
