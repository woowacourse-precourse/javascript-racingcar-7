import { Console } from "@woowacourse/mission-utils";

export const getCarNames = async () => {
  const carName = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return carName.split(",").map((carName) => carName.trim());
};

export const getTryCount = async () => {
  const tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return Number(tryCount);
};

export function printRaceStatus(cars) {
  cars.forEach((car) => {
    Console.print(`${car.name} : ${"-".repeat(car.position)}`);
  });
  Console.print("");
}

export function printWinners(cars) {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);

  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
