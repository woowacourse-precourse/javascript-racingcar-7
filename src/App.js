class App {
  inputCars() {
    return MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  async run() {
    try {
      const carsName = await this.inputCars();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
