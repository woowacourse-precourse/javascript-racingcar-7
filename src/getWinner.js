export const getWinner = (carArr) => {
    let result = '최종 우승자 : '
    let winnerArr = []

    winnerArr = getWinnerArr(carArr)
    result += winnerArr.join(', ')

    return result
}

export const getTopRate = (carArr) => {
    let topRate = 0;

    for (let i = 1; i <= carArr.length; i += 2) {
        if (i == carArr.length - 1) {
            //다음 비교할 차가 없는 경우
            break;
        }

        const CURRENT_CAR = carArr[i]
        const NEXT_CAR = carArr[i + 2]

        if (CURRENT_CAR > NEXT_CAR) {
            topRate = CURRENT_CAR
        } else if (CURRENT_CAR < NEXT_CAR) {
            topRate = NEXT_CAR
        } else {
            topRate = CURRENT_CAR
        }
    }
    return topRate
}

export const getWinnerArr = (carArr) => {
    const TOPRATE = getTopRate(carArr)
    let winnerArr = []

    carArr.forEach((element, index) => {
        if (element === TOPRATE) {
            winnerArr.push(carArr[index - 1])//차 이름
        }
    })
    return winnerArr
}