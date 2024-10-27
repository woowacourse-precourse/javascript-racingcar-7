import CheckTryCount from "./CheckTryCount.js";
import CheckNameInput from "./CheckNameInput.js";

class ErrorChecker {
    
    static checkTryCount(tryCount) {
        const tryChecker = new CheckTryCount(tryCount);
        tryChecker.checkTryCountVoid();
        tryChecker.checkTryCountNotNumber();
        tryChecker.checkDecimal();
        tryChecker.checkNegative();
        tryChecker.checkOverHundred();
    };

    static checkName(carName) {
        const nameChecker = new CheckNameInput(carName);
        nameChecker.checkNameLength();
        nameChecker.checkNameVoid();
    };

};

export default ErrorChecker;