import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync('이름을 쉼표(,)로 구분하여 입력해 주세요: ');

      const names = this.NameStorage(input);
      this.validateNames(names);

    } catch (error) {
      MissionUtils.Console.print(`${error.message}`);
      throw error;
    }
  }

  NameStorage(input) {
    return input.split(",").map(name => name.trim());
  }

  validateNames(names) {
    const uniqueNames = new Set();

    names.forEach(name => {
      if (name.length > 5) {
        throw new Error(`[ERROR] 이름은 5자 이내여야 합니다: ${name}`);
      }
      if (name.includes(" ")) {
        throw new Error(`[ERROR] 이름에는 공백이 포함될 수 없습니다: ${name}`);
      }
      if (uniqueNames.has(name)) {
        throw new Error(`[ERROR] 중복된 이름이 있습니다: ${name}`);
      }
      uniqueNames.add(name);
    });
  }
}

export default App;
