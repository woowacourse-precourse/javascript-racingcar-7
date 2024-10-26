class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const INPUT = await Console.readLineAsync("");

    Console.print("시도할 횟수는 몇 회인가요?");
    const TIMES_INPUT = await Console.readLineAsync("");
    
    let cars = this.validateCarInput(INPUT);

  }
  validateCarInput(input) {
    const cars = input.split(",");
    if (input.indexOf(",") == -1 || input == "") {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }
    cars.forEach(this.validateCarNameLength);
  }
}

export default App;
