export default class Car {

    constructor(name) {
        this.name = name;
        this.progress = 0;
    }

    getName() {
        return this.name;
    }

    getProgress() {
        return this.progress;
    }

    updateProgress() {
        this.progress ++;
    }
}