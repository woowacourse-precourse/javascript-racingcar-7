class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }
    getPosition(){
        return this.position;
    }
    move(randomNumber) {
        if(randomNumber >= 4) {
            this.position++;
        }
    }
}

export default Car;
