// 자동차 수 만큼 점수 배열 만들기
export const makeCarScore = (car_names_arr) => {
  return Array(car_names_arr.length).fill(0);
};
