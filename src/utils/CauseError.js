export default class CauseError {
    
    static causeError(errorMessage) {
        throw new Error(errorMessage);
    }
}