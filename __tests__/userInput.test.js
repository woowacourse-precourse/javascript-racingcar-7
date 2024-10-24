import { mockQuestions } from "./mock.js";
import { userInput } from "../src/utils/MissionUtils.js";

describe("사용자 입력", () => {
	test("자동차 이름 입력", async () => {
		// given
		const mockInputs = ["ayden,kia"];
		const inputPrompt =
			"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";

		mockQuestions(mockInputs);

		// when
		const result = await userInput(inputPrompt);

		// then
		expect(result).toBe("ayden,kia");
	});

	test("시도 횟수 입력", async () => {
		// given
		const mockInputs = ["5"];
		const inputPrompt = "시도할 횟수는 몇 회인가요?\n";

		mockQuestions(mockInputs);

		// when
		const result = await userInput(inputPrompt);

		// then
		expect(result).toBe("5");
	});
});
