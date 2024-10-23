export function validateCars(cars) {
    const regex = /^[a-zA-Z]+(,[a-zA-Z]+)*$/;
    const carsArray = cars.split(',')
    const validLength =  carsArray.every((name) => name.length <= 5)

    if (!cars || cars.trim() === '') {
        throw new Error('[ERROR]')
    }

    if(!regex.test(cars)) {
        throw new Error('[ERROR]')
    }

    if(!validLength) {
        throw new Error('[ERROR]')
    }

    return cars
}