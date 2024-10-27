class Car {
    constructor(name) {
      this.name = name;
      this.position = 0; 
    }
  
    moveOrStop() {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
    }
  }

  export default Car;
  