const Validator = {
  // string[] => void
  carNameList(carNameList) {
    carNameList.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름 길이 입력 오류');
      }
    });

    const carNameSet = new Set(carNameList);
    if (carNameList.length != carNameSet.size) {
      throw new Error('[ERROR] 중복 이름 입력 오류');
    }
  },

  // string => void
  turn(turnString) {
    if (!turnString.match(/^[0-9]+$/)) {
      throw new Error('[ERROR] 숫자가 아닌 문자 입력 오류');
    }
  },
};

export default Validator;
