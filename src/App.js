class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const INPUT = await Console.readLineAsync("");
  }
}

export default App;
