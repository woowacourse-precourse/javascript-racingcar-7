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

export async function validateMinCar(carNameValue) {
	if (carNameValue.length <= 0) {
		throw new Error("[ERROR] 자동차 이름이 입력되지 않았습니다.");
	}
}

export async function validateDuplicateName(carNameValue) {
	const carNames = carNameValue.split(",");
	const deduplicatedCarName = new Set(carNames);

	if (carNames.length !== deduplicatedCarName.size) {
		throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
	}
}

export async function validateMinCount(tryCountValue) {
	const tryCount = parseInt(tryCountValue, 10);
	if (tryCount < 1) {
		throw new Error("[ERROR] 입력할 수 있는 시도 횟수는 최소 1회입니다.");
	}
}

export async function validateMaxCount(tryCountValue) {
	const tryCount = parseInt(tryCountValue, 10);
	if (tryCount > 10) {
		throw new Error("[ERROR] 입력할 수 있는 시도 횟수는 최대 10회입니다.");
	}
}
