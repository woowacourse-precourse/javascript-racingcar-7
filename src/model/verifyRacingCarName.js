export const verifyRacingCarName = async (cars) => {
  let carsArray = [];

  cars.forEach((car) => {
    const lengthOfCarName = [...car].length;
    if (lengthOfCarName > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }

    carsArray.push({ name: car, go: 0 });
  });

  return carsArray;
};
