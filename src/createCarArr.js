export const createCarArr = (NAME_STR) => {
    let nameStr = NAME_STR.toString()
    let separatorIndex = nameStr.search(/,/)
    let carArr = []


    for (let i = 0; nameStr !== ''; i += 2) {
        let carName = nameStr.slice(0, separatorIndex).trim()

        if (carName.length > 5) {
            throw new Error("[ERROR] 차 이름이 5자 초과입니다.")
        }

        carArr[i] = carName
        carArr[i + 1] = 0 //i번째 차의 이동 초기화

        nameStr = nameStr.slice(separatorIndex)
        if (nameStr[0] === ',') {
            nameStr = nameStr.slice(1)
        }

    }

    return carArr
}