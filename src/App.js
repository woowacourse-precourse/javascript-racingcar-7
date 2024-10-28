import Controller from './Controller/Controller.js';

// App에서 Controller의 run 메서드를 실행
class App {
  async run() {
    const controller = new Controller();
    await controller.run();
  }
}

export default App;
