export default class Car{
    constructor(name){
        this.carName = name;
        this.state = 0;
    }
    getName(){
        return this.carName;
    }
    getState(){
        return this.state;
    }
    move(){
        this.state += 1;
    }
}