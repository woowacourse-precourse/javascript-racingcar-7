export function checkName(cars) {
    cars.forEach((car) => {
        if (car.length > 5 || car.length < 1) {
            throw new Error('[ERROR] 이름을 올바르게 입력해주세요.');
        }
    })
}