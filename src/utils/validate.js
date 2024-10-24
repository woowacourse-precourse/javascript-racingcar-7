export async function validateNameLength(carNameValue) {
	const carNames = carNameValue
		.split(",")
		.filter((carName) => carName.length > 5);

	if (carNames.length > 0) {
		throw new Error(
			"[ERROR] 입력할 수 있는 자동차 이름은 한 대당 최대 5자입니다."
		);
	}
}

export async function validateMaxCar(carNameValue) {
	const carNames = carNameValue.split(",");

	if (carNames.length > 5) {
		throw new Error("[ERROR] 입력할 수 있는 자동차는 최대 5대입니다.");
	}
}
