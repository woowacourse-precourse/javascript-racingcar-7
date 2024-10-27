import { Console } from "@woowacourse/mission-utils";

export class Output {
	static printRoundOutput(cars) {
		Console.print("\n실행 결과");
		cars.forEach((car) => {
			Console.print(`${car.carName} : ${car.getPosition()}`);
		});
	}
}
