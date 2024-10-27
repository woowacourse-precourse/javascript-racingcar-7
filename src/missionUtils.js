import { Random, Console } from "@woowacourse/mission-utils";

export async function userInput(string) {
	let returnValue;
	try {
		returnValue = await Console.readLineAsync(string);
	} catch (error) {
		console.error(error);
		throw error;
	}
	return returnValue;
}

export function getRandomInRangeNumber(min, max) {
	return Random.pickNumberInRange(min, max);
}

export function printOutput(string) {
	return Console.print(string);
}
