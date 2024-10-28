import parser from "../utils/parser.js";
import {
  carNameValidatePipe,
  iterationValidatePipe,
} from "../utils/validationPipe.js";
class RaceGameController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
    this.view.setController(this);
  }
  
  async run(){
    const carnames = await this.view.getCarNames();
    const iteration = await this.view.getIteration();
    this.service.ready(carnames, iteration, this.onRoundEnd.bind(this), this.onBeforeEnd.bind(this));
    this.service.start();
    const { winners } = this.service.getResult();
    this.view.showWinner(winners);
  }

  onGetRaceCarNames(carNamesString){
    if(!carNamesString) {
      throw new Error('[ERROR] 입력이 잘못되었습니다.')
    }
    carNameValidatePipe(carNamesString);
    return parser.parseCarName(carNamesString);
  }

  onGetIteration(iterationString){
  if(!iterationString)
    throw new Error('[ERROR] 입력이 잘못 되었어요!'); 
  iterationValidatePipe(iterationString);
  return parser.parseIteration(iterationString);
  }

  onRoundEnd(raceGameStatus){
    const { cars } = raceGameStatus;
    this.view.showStatus(cars);
  }

  onBeforeEnd(){
    this.view.out('\n실행 결과');
  }
}

export default RaceGameController;