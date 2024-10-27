class Script {
    #raceResult;
    constructor(raceResult) {
        this.#raceResult = raceResult;
    }

    generateRaceSummary() {
        const raceSummaryList = [];
        for (let i = 0; i < this.#raceResult.length; i++) {
            const roundResult = this.#raceResult[i];
            const roundSummary = this.generateRoundSummary(roundResult);
            raceSummaryList.push(roundSummary.join("\n"));
        }
        return raceSummaryList.join("\n\n");
    }

    generateRoundSummary(roundResults) {
        roundResults = Object.entries(roundResults);

        const roundResultsToStringList = [];
        for (let i = 0; i < roundResults.length; i++) {
            const roundResult = roundResults[i];
            const roundResultToString = `${roundResult[0]} : ${"-".repeat(
                roundResult[1]
            )}`;
            roundResultsToStringList.push(roundResultToString);
        }
        return roundResultsToStringList;
    }

    generateRaceWinner() {
        const finalRoundResult = this.#raceResult[this.#raceResult.length - 1];
        
        const winnerList = Object.entries(finalRoundResult).reduce(
            (acc, cur) => {
                if (acc[1] > cur[1]) return acc;
                if (acc[1] === cur[1]) return acc[0].push(cur[0]) && acc;
                else return [[cur[0]], cur[1]];
            },
            [[], 0]
        );
        return winnerList[0].join(", ");
    }
}

export default Script;
