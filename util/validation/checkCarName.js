export function checkCarName(cars) {
    const stack = [];

    cars.forEach((car) => {
        if (car.length > 5) {
            throw new Error('[ERROR] 모든 자동차 이름은 다섯 글자 이하로 입력해야 합니다.');
        }
        if (car.length < 1) {
            throw new Error('[ERROR] 모든 자동차 이름은 한 글자 이상 입력해야 합니다.');
        }
        if (stack.includes(car)) {
            throw new Error('[ERROR] 자동차 이름은 중복 입력할 수 없습니다.');
        }
        stack.push(car);
    })
}