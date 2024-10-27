
export class Car {
    cars = []
    tryNum = 0;
    setCar(input) {
        const carArr = this.sliceString(input)
        return this.setWinnerCnt(input, carArr)
    }

    sliceString (param){
        return param.split(",")
    }

    setWinnerCnt(arr, carArr){
        return carArr.map((elem) => {
                return {winCnt: 0, carName: elem}
            }
        )
    }
}