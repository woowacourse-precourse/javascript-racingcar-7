export default function runRounds(cars, rounds, printCarPositions) {
  for (let i = 0; i < rounds; i++) {
    cars.forEach((car) => car.moveForward());
    printCarPositions(cars); // 자동차 위치 출력
  }
}
