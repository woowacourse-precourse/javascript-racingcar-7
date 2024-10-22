import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    
  }
}

class Car {
  constructor(name){
    this.name = name;
    this.distance = "";
  }
  moveForward(){
    this.distance += "-";
  }
}

export default App;
