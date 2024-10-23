class Car {
    constructor(name) {
        this.name = name;
        this.distance = 0;
    }
    carMove() {
        const ramdomNumber = this.drawRandomNumber()
        if (ramdomNumber >= 4) {
            this.distance += 1;
        }
    }
    drawRandomNumber() {
        const randomNumber = Random.pickNumberInRange(0, 9)
        return randomNumber;
    }
}

export default Car;
