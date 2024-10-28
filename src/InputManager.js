class InputManager {
  static async readCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return this.parseCarNames(input);
  }

  static async readTries() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return this.parseTries(input);
  }

  static parseCarNames(input) {
    const names = input.split(",").map((name) => name.trim());
    names.forEach((name) => Validator.validateName(name));
    Validator.validateCarCount(names);
    return names;
  }

  static parseTries(input) {
    Validator.validateTries(input);
    return Number(input);
  }
}
