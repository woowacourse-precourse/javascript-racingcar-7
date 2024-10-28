import  {Random}  from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.movement = "";
  }

  move() {
    const randNumber = Random.pickNumberInRange(0, 9);
    if (randNumber >= 4) {
      this.movement += "-";
    }
  }
}

export default Car;
