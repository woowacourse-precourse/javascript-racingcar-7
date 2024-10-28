export default class Car {

    constructor(name) {
        this.name = name;
        this.progress = 0;
    }

    getProgress() {
        return this.progress;
    }

    updateProgress(progress) {
        this.progress += progress;
    }
}