class Car {
    constructor(name) {
      this.validateName(name);
      this.name = name;
      this.distance = 0;
    }
  
    validateName(name) {
      if (name.length > 5 || name.length < 1) {
        throw new Error("[ERROR] 이름은 5자 이하, 1자 이상이어야 합니다.");
      }
    }
  }
  
  export default Car;
  