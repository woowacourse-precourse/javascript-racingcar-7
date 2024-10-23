export const seperateCar = (cars) => {
  const carArray = cars.split(',').map((car) => {
    if (car.length > 5) {
      throw new Error('자동차 이름은 다섯글자 이하로 작성해주세요.');
    }
    return car;
  });

  return carArray;
};
