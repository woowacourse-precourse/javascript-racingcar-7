export class Validate {
	static validateNames(names) {
		if (!names || names.some((name) => name.length > 5)) {
			throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
		}

		if (names.some((name) => name.trim() === "")) {
			throw new Error("[ERROR] 자동차 이름은 공백 없이 쉼표로(,)로 구분되어야 합니다.");
		}

		if (names.length < 2 || names.length > 10) {
			throw new Error("[ERROR] 자동차의 수는 최소 2대에서 최대 10대까지 가능합니다.");
		}
	}

	static validateRounds(rounds) {
		if (!Number.isInteger(rounds) || rounds <= 0 || rounds > 100) {
			throw new Error("[ERROR] 시도 횟수는 1에서 100 사이의 정수여야 합니다.");
		}
	}
}
