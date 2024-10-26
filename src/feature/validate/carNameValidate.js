function checkCarName(carList) {
  carList.forEach((car) => {
    if(car.length >= 6) {
      const OVER_FIVE_CHARACTOR = '자동차 이름이 5글자를 초과 합니다.';
      const ERROR = new Error(OVER_FIVE_CHARACTOR);
      throw ERROR;
    };

    if(car.length === 0) {
      const EMPTY_INPUT = '자동차 이름이 설정되지 않았습니다.';
      const ERROR = new Error(EMPTY_INPUT);
      throw ERROR;
    };

    const DUPLICATE_CHECK = carList.filter((filteredCar) => filteredCar === car);

    if(DUPLICATE_CHECK.length > 1) {
      const HAS_DUPLICATE_NAME = '중복된 자동차 이름이 존재 합니다.';
      const ERROR = new Error(HAS_DUPLICATE_NAME);
      throw ERROR;
    };
  });
};

export default checkCarName;