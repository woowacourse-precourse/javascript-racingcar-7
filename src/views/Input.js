import { Console } from "@woowacourse/mission-utils";

export class Input {
	static async getCarNames() {
		Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
		const input = await Console.readLineAsync("");
		if (!input) return [];
		return input.split(",");
	}

	static async getMoveCount() {
		Console.print("시도할 횟수는 몇 회인가요?");
		const input = await Console.readLineAsync();
		return parseInt(input, 10);
	}
}
