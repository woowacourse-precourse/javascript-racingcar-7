export function validateCars(cars) {
    if (cars == "") {
        throw new Error("[ERROR] 올바른 자동차 이름을 입력해주세요.");
    }

    cars.forEach(carName => {
        if (carName.length > 5) {
            throw new Error("[ERROR] 자동차 이름의 길이가 5자를 초과합니다.");
        }
    })

    return cars
}

export function validateTryNumber(tryNumber) {
    if (isNaN(tryNumber) || tryNumber < 0) {
        throw new Error("[ERROR] 올바른 시도 횟수를 입력해주세요.");
    }

    return tryNumber
}

