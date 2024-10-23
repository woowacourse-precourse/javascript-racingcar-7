
class Validate{
  inputExist(input){
    if(!input){
      throw new Error("[ERROR] 값을 입력해 주세요.");
    }
  }

  nameLength(input){
    const cars = input.split(',');
    for (let car of cars){
      if(car.length>=6 || car.length < 1){
        throw new Error("[ERROR] 자동차 이름은 1~5자 이내로 작성하세요.");
      }
    }
  }
  countType(input){
    if(isNaN(Number(input))){
      throw new Error("[ERROR] 반복횟수는 숫자를 입력하세요.");
    }
  }
  countSize(input){
    if(Number(input)<1){
      throw new Error("[ERROR] 반복횟수는 0보다 크게 입력해주세요.");
    }
  }

  carValidate(input){
    this.inputExist(input);
    this.nameLength(input);
  }

  countValidate(input){
    this.inputExist(input);
    this.countType(input);
    this.countSize(input);
  }

}

export default Validate