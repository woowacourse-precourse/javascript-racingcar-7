import OutputView from './view/OutputView.js';

class Winner {
  constructor() {
    this.outputView = new OutputView();
  }

  checkRanking(resultObj) {
    const sortedDistance = resultObj
      .map((result) => result.distance.length)
      .sort((a, b) => b - a);

    const distance = resultObj.map((result) => result.distance.length);

    resultObj.map((result, index) => {
      const rank = sortedDistance.indexOf(distance[index]) + 1;
      return { ...result, ranking: rank };
    });
  }
}

export default Winner;
