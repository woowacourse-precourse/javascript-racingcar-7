export default class Car{
    static #max = 0;

    #name;
    #value;

    constructor(name){
        this.#name = name;
        this.#value = 0;
    }
    static getMax(){
        return Car.#max
    }
    static setMax(newMax){
        Car.#max = newMax;
    }
    getName(){
        return this.#name;
    }
    setName(newName){
        this.#name = newName;
    }
    getValue(){
        return this.#value;
    }
    setValue(newValue){
        this.#value = newValue;
    }
}