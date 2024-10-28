class App {
  async run() {
    try {
      let inputCarNames = String(
        await MissionUtils.Console.readLineAsync(
          "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n => "
        )
      ).replace(/\s+/g, "");
      
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
