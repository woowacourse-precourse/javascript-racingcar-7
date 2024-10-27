export class InputValid {
    static isEmptyInput(rawNames, raceCount) {
        if (rawNames.length ===0 || String(raceCount).trim() === "") {
        throw new Error("[ERROR] 입력값이 입력되지 않았습니다");
        }
  }
  static isRaceCountNum(raceCount) {
    if (isNaN(raceCount)) {
      throw new Error("[ERROR] 경기횟수로는 숫자만 입력가능합니다.");
    }
  }
  static isRaceCountPositive(raceCount) {
    if (raceCount < 0) {
      throw new Error("[ERROR] 경주 횟수는 음수가 될 수 없습니다.");
    }
  }
  static validPlayerName(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하여야만 합니다");
      }
    });
  }
}