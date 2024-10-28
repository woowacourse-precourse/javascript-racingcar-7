import Validator from './Validator.js';

export default class Parser {
    
    static separateCarName(inputCarName) {
        const carNameList = inputCarName.split(',').map(name => name.trim());
        return carNameList
    }
}