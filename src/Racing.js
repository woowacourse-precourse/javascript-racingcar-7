import Display from './Display.js';

class Racing {
  #totalRounds;

  #cars;

  #result;

  constructor(totalRounds, cars) {
    this.#totalRounds = totalRounds;
    this.#cars = cars;
    this.#result = [];
  }

  #tryRound() {
    const cars = [...this.#cars];
    const roundResult = cars.map((car) => car.driving());
    this.#result.push(roundResult);
  }

  play() {
    const totalRounds = this.#totalRounds;
    const rounds = Array.from(
      { length: totalRounds },
      (arrayLike, index) => index + 1,
    );

    rounds.forEach(() => {
      this.#tryRound();
    });
  }

  showResult() {
    const raceResult = this.#result.map((result) => [...result]);
    raceResult.forEach((roundResult, index) => {
      const round = index + 1;
      Display.showRoundResultHeader(round);
      Display.showRoundResult(roundResult);
    });
  }

  #findWinners() {
    const totalResult = this.#result.map((result) => [...result]);
    const finalResult = totalResult.pop();
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

    Display.showWinners(winnersName);
  }
}

export default Racing;
