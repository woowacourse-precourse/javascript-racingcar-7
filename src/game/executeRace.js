import { Random } from '@woowacourse/mission-utils'
import Car from './Car.js';
import { RANDOM_MIN_VALUE, RANDOM_MAX_VALUE } from '../constant/constants.js';
import printString from '../output/printString.js';

export default function executeRace(carNameList, moveCount){
  const cars = createCarsFromNames(carNameList);
  printString('\n실행 결과');

  for(let count = 0; count < moveCount; count++){
    moveCars(cars);
    printCarPosition(cars);
  }

  return getWinnerList(cars);
}


function createCarsFromNames(carNameList){
  return carNameList.map(carName => new Car(carName));
}


function moveCars(cars){
  cars.forEach(car => {
    car.checkAndMoveForward(Random.pickNumberInRange(RANDOM_MIN_VALUE, RANDOM_MAX_VALUE));
  });
}


function printCarPosition(cars){
  cars.forEach(car => {
    printString(`${car.name} : ${'-'.repeat(car.getPosition())}`);
  })
  printString('');
}


function getWinnerList(cars){
  const carPositions = cars.map(car => car.getPosition());
  const maxPosition = Math.max(...carPositions);
  const winnerList = cars.filter(car => car.getPosition() === maxPosition).map(car => car.name);
  return winnerList;
}