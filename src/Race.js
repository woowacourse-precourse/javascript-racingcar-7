import { Console, Random } from "@woowacourse/mission-utils";

class Race {
  static startRace(attempts, cars) {
    for (let round = 0; round < attempts; round++) {
      cars.forEach(car => {
        if (Random.pickNumberInRange(0, 9) >= 4) car.position += 1;
        Race.displayProgress(car);
      });
      Console.print("");
    }
  }

  static displayProgress(car) {
    const progress = '-'.repeat(car.position);
    Console.print(`${car.name} : ${progress}`);
  }
}

export default Race;
