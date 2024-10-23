export function makeError(cars) {
    cars.forEach((car) => {
        if (car.length > 5) {
            throw new Error('[ERROR] 이름은 5자 이하여야 합니다.');
        }
    })
}