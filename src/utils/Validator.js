export class Validator {
  validateCarNames(names) {
    this.checkNamesNotEmpty(names);
    this.checkNoEmptyStrings(names);
    this.checkNameLength(names);
    this.checkAllowedCharacters(names);
    this.checkUniqueNames(names);
    this.checkMinimumParticipants(names);
  }

  validateRound(round) {
    this.checkRoundNotEmpty(round);
    this.checkRoundIsNumber(round);
    this.checkRoundIsPositive(round);
    this.checkRoundIsInteger(round);
  }

  checkNamesNotEmpty(names) {
    if (!names || names.length === 0) {
      throw new Error("자동차 이름을 입력해주세요.");
    }
  }

  checkNoEmptyStrings(names) {
    if (names.some((name) => name.trim() === "")) {
      throw new Error("자동차 이름에는 빈 문자열이 포함될 수 없습니다.");
    }
  }

  checkNameLength(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error("자동차 이름은 5자 이하로 입력해야 합니다.");
      }
    });
  }

  checkAllowedCharacters(names) {
    names.forEach((name) => {
      if (/[^a-zA-Z0-9]/.test(name)) {
        throw new Error("자동차 이름은 알파벳과 숫자만 포함할 수 있습니다.");
      }
    });
  }

  checkUniqueNames(names) {
    const nameSet = new Set();
    names.forEach((name) => {
      if (nameSet.has(name)) {
        throw new Error("자동차 이름은 중복될 수 없습니다.");
      }
      nameSet.add(name);
    });
  }

  checkMinimumParticipants(names) {
    if (names.length < 2) {
      throw new Error(
        "[ERROR] 경주에는 최소 2명 이상의 자동차가 참여해야 합니다."
      );
    }
  }

  checkRoundNotEmpty(round) {
    if (round === "") {
      throw new Error("시도 횟수를 입력해주세요.");
    }
  }

  checkRoundIsPositive(round) {
    const roundNumber = Number(round);
    if (roundNumber <= 0) {
      throw new Error("시도 횟수는 양수여야 합니다.");
    }
  }

  checkRoundIsInteger(round) {
    const roundNumber = Number(round);
    if (Number(roundNumber) % 1 !== 0) {
      throw new Error("시도 횟수는 정수로 입력해야 합니다.");
    }
  }

  checkRoundIsNumber(round) {
    if (isNaN(Number(round))) {
      throw new Error("[ERROR] 시도 횟수는 숫자로 입력해야 합니다.");
    }
  }
}
