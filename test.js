class App {
  #count = 0;

  async run() {}

  static test() {
    var x = 10; // Airbnb에서는 var 사용 금지 (no-var)
    let y; // 선언 후 미사용 변수 (no-unused-vars)

    if (x == '10') {
      // 엄격한 비교가 아니므로 오류 발생 (eqeqeq)
      console.log('x는 10입니다'); // console 사용 금지 (no-console)
    }
  }
}
