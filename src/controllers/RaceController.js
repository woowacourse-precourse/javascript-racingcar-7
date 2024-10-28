import { Console } from '@woowacourse/mission-utils';
import Car from '../models/Car';

export function startRace(carNames, tryCount) {
  const cars = carNames.map((name) => new Car(name));

  for (let i = 0; i < tryCount; i++) {
    cars.forEach((car) => car.move());
    displayRaceResults(cars);
  }
  displayFinalWinners(cars);
}

function displayRaceResults(cars) {
  cars.forEach((car) => {
    const distanceMarker = '-'.repeat(car.getDistance());
    Console.print(`${car.name} : ${distanceMarker}`);
  });
  Console.print('\n');
}

function displayFinalWinners(cars) {
  const maxDistance = Math.max(...cars.map((car) => car.getDistance()));
  const winners = cars.filter((car) => car.getDistance() === maxDistance).map((car) => car.name);
  Console.print(`최종 우승자 : ${winners.join(', ')}`);
}
