import Console from "./Console.js";

export default class Game{
    #cars = []
    #turn = 0
    #console = new Console();

    async start(){
        const carsName = await this.#console.getCarsName();
        const attemptCount = await this.#console.getAttemptCount();
    }

    #executeTurn(){

    }

    #selectWinners(){

    }
}