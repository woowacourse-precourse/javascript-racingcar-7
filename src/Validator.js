const regex = /^[A-Za-z]+(,[A-Za-z]+)*$/;

class Validator {
  validataNameInput(names) {
    if (!regex.test(names)) {
      throw new Error("[ERROR] : 이름은 알파벳이어야 합니다.");
    }

    const nameArr = names.split(",");

    nameArr.forEach((name) => {
      if (name.length > 5) throw new Error("[ERROR] : 이름은 5글자 이하만 가능합니다.");
    });

    const uniqueNames = new Set(nameArr);
    if (uniqueNames.size !== nameArr.length) {
      throw new Error("[ERROR]: 중복된 이름이 존재합니다.");
    }
  }

  validataCountInput(count) {
    count = parseInt(count);
    if (isNaN(count) || count <= 0) {
      throw new Error("[ERROR] : 시도 횟수는 양의 정수여야 합니다.");
    }
  }
}

export default Validator;
