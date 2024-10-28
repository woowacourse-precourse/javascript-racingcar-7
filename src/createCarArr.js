export const createCarArr = (NAMESTR) => {
    let nameStr = NAMESTR.toString()
    const separatorIndex = nameStr.search(/,/)
    let carArr = [];

    for (let i = 0; nameStr !== ''; i += 2) {
        let car = nameStr.slice(0, separatorIndex)

        if (car.length > 5) {
            throw new Error("차 이름이 5자 초과입니다.")
        }

        carArr[i] = car

        nameStr = nameStr.slice(separatorIndex)
        if (nameStr[0] === ',') {
            nameStr = nameStr.slice(1)
        }

    }

    return carArr
}