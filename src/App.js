import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    
  }

  async input(msg){
    const input = await Console.readLineAsync(`${msg}\n`);
    return input
  }
}

export default App;
