import { Console } from "@woowacourse/mission-utils";

export function inputCars() {
  return Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
}

export function inputTrialCount() {
  return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
}

export function printCarsMove(carsMap) {
  Console.print("");
  for (const [carName, carLength] of carsMap) {
    const lengthDash = "-".repeat(carLength);
    Console.print(`${carName} : ${lengthDash}`);
  }
}

export function printWinners(winnerCars) {
  Console.print(`\n최종 우승자 : ${winnerCars.join(", ")}`);
}
