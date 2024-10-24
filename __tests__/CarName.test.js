import {
	validateMaxCar,
	validateMinCar,
	validateNameLength,
} from "../src/utils/validate";

describe("자동차 이름", () => {
	test("자동차 이름 정상 입력", async () => {
		// given
		const carNames = "ayden,kia";

		// when, then
		await expect(validateNameLength(carNames)).resolves.not.toThrow();
	});

	test("자동차 이름 5자 초과 입력", async () => {
		// given
		const carNames = "ayden,aydenote";

		// when, then;
		await expect(validateNameLength(carNames)).rejects.toThrow(
			"[ERROR] 입력할 수 있는 자동차 이름은 한 대당 최대 5자입니다."
		);
	});

	test("자동차 5대 초과 입력", async () => {
		// given
		const carNames = "ayden,kia,audi,BMW,Jeep,ford";

		// when, then;
		await expect(validateMaxCar(carNames)).rejects.toThrow(
			"[ERROR] 입력할 수 있는 자동차는 최대 5대입니다."
		);
	});

	test("자동차 이름 미입력", async () => {
		// given
		const carNames = "";

		// when, then;
		await expect(validateMinCar(carNames)).rejects.toThrow(
			"[ERROR] 자동차 이름이 입력되지 않았습니다."
		);
	});
});
