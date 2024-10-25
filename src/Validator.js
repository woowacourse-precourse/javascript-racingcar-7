const Validator = {
  // string[] => void
  carNameList(carNameList) {
    carNameList.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름 입력 오류');
      }
    });
  },
};

export default Validator;
