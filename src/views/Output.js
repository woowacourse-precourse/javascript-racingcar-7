import { Console } from "@woowacourse/mission-utils";

export class Output {
	static printRoundOutput(cars) {
		Console.print("\n실행 결과");
		cars.forEach((car) => {
			Console.print(`${car.carName} : ${car.getPosition()}`);
		});
	}

	static printFinalWinners(winners) {
		if (Array.isArray(winners)) Console.print(`\n최종 우승자 : ${winners.join(", ")}`);
		else Console.print(`\n최종 우승자 : ${winners}`);
	}
}
