// racing.js
import { getCarsInfo, getCountInfo } from '../utils/inout.js';
import { startRacing } from '../utils/racing.js';

class App {
  async run() {
    const carArray = await getCarsInfo(); // 참가자 받기
    const count = await getCountInfo(); // 시도 횟수 받기

    startRacing(carArray, count);
  }
}

export default App;