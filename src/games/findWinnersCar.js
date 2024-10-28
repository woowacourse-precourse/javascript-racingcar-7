const findWinnersCar = (carObject,carLengths) => {
    const maxLength = Math.max(...carLengths);
    const winners = [];

    Object.keys(carObject).forEach((key, index) => {
        if (carLengths[index] === maxLength) {
            winners.push(key); 
        }
    });

    return winners;
};

export default findWinnersCar;