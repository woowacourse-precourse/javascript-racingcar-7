import { Console } from '@woowacourse/mission-utils';

class Race {
  static race(trial, cars) {
    for (let i = 0; i < trial; i++) {
      cars.forEach((car) => {
        car.forwardOrNot();
        car.getProgress();
      });
      Console.print('');
    }
    return cars;
  }

  static whoIsWinner(cars) {
    let arr = [...cars];

    let countArr = arr.map((car) => {
      return car.getCount();
    });

    let max = 0;
    countArr.forEach((e) => {
      if (e >= max) max = e;
    });

    let winners = arr.filter((e) => {
      return e.getCount() === max;
    });

    let winnerNames = winners.map((e) => {
      return e.getName();
    });

    Console.print(`최종 우승자 : ${winnerNames.join(', ')}`);
  }
}

export default Race;
