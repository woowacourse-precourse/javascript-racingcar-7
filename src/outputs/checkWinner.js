import { Console } from "@woowacourse/mission-utils";

export function checkWinner(cars) {
    const maxScore = getMaxDistance(cars);
    const finalWinner = determineWinners(cars, maxScore);
  
    Console.print(`최종 우승자 : ${finalWinner.join(", ")}`);
  }
  
  function getMaxDistance(cars) {
    return cars.reduce(compareDistance, "");
  }
  
  function compareDistance(maxScore, car) {
    if (maxScore.length < car.distance.length) {
      return car.distance;
    }
    return maxScore;
  }
  
  function determineWinners(cars, maxScore) {
    return cars.filter((car) => car.distance === maxScore).map((car) => car.name);
  }