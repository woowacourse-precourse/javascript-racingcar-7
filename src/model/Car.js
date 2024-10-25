import random from '../util/random';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  /**@todo 추가요구사항 만약에 2칸씩 움직여주세요 라고 한다면? */
  move() {
    const randomNumber = random.generateNumber();
    if (randomNumber >= 4 && randomNumber <= 9) {
      this.position++;
    }
  }
}

export default Car;
