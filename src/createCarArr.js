export const createCarArr = (NAMESTR) => {
    let nameStr = NAMESTR.toString()
    let separatorIndex = nameStr.search(/,/)
    let carArr = []


    for (let i = 0; nameStr !== ''; i += 2) {
        let carName = nameStr.slice(0, separatorIndex)

        if (carName.length > 5) {
            throw new Error("차 이름이 5자 초과입니다.")
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