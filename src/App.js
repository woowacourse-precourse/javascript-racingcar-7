import Init from "./Init.js";

class App {
  async play() {
    const InitSetting = new Init();
    await InitSetting.start();
  }
}

export default App;
