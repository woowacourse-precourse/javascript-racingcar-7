declare module "@woowacourse/mission-utils" {
  export const Console: {
    readLineAsync: (question: string) => Promise<string>;
    print: (message: string) => void;
  };

  export const MissionUtils: {
    Random: {
      pickNumberInRange: (min: number, max: number) => number;
    };
  };
}
