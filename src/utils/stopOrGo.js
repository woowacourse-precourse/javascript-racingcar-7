import RandomNum from './random.js';

function StopOrGo() {
    let randomNum = RandomNum();
    return randomNum < 4 ? 0 : randomNum;
}
export default StopOrGo;
