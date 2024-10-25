export function checkCarName(cars) {
    cars.forEach((car) => {
        if (car.length > 5) {
            throw new Error('[ERROR] 모든 자동차 이름은 다섯 글자 이하로 입력해야 합니다.');
        }
        if (car.length < 1) {
            throw new Error('[ERROR] 모든 자동차 이름은 한 글자 이상 입력해야 합니다.');
        }
    })
}