declare module "@woowacourse/mission-utils" {
  export class Console {
    static readLineAsync(query: string): Promise<string>;
    static print(message: string): void;
  }

  export class Random {
    static pickNumberInRange(min: number, max: number): number;
  }
}
