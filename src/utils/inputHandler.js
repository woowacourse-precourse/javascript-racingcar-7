import RacingGame from "../RacingGame.js";
import {getFirstPromptError, getSecondPromptError} from "./errorMessageHandler.js";

export const inputHandler = async (input) => {
    const promptSequence = new RacingGame().promptSequence
    if (promptSequence === 1) {
        return getFirstPromptError(input) && input
    }
    if (promptSequence === 2) {
        return getSecondPromptError(input) && Number(input)
    }
}