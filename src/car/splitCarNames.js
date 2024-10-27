export const splitCarNames = (cars) => {
  const carArray = cars.split(',').map((car) => {
    if (car.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 다섯글자 이하로 작성해주세요.');
    }
    return car;
  });

  if (cars.length <= 1)
    throw new Error('[ERROR] 경주를 위해 자동차는 두대 이상 입력해주세요.');

  return carArray;
};
