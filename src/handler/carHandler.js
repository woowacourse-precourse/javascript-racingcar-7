function carHandler(carNames) {
  const temptArray = new Set(carNames);
  if (carNames.length !== temptArray.size) {
    throw new Error('[ERROR] 중복된 이름이 존재합니다.');
  }

  carNames.forEach((name) => {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5글자 이하만 가능합니다.');
    }

    if (name.length == 0){
        throw new Error('[ERROR] 공백은 이름이 될 수 없습니다.');
    }

    if (name.includes(' ')) {
      throw new Error('[ERROR] 이름에는 공백이 포함될 수 없습니다.');
    }

    
  });
}

export default carHandler;
