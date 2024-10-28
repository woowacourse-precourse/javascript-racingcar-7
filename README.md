# javascript-racingcar-precourse

코드 순서
1. 자동차 이름을 입력 받습니다
2. 자동차 이름이 5자를 넘으면 에러를 발생시킨다.
3. 시도 횟수 입력을 받습니다.
4. 랜덤메서드를 이용하여 경주를 실행합니다.
5. 매 시도마다의 자동차 경주를 출력한다
6. 모든 시도가 끝난후 최종 우승자를 출력합니다.

코드 특징
1. 결과를 한 번에 출력하였습니다. 경주 시도와 최종 우승자는 Console.print를 통해 각 시도 결과와 우승자를 한 번에 출력하도록 만들었습니다

2. 메서드 분리로 코드 가독성을 개선하였습니다 입력 받기(getCarNames, getTrialCount), 경주 진행(runRace, runSingleTrial), 출력(printTrialResult, printWinners)을 메서드별로 분리하여 각 메서드가 하나의 역할만 수행하도록 하여 인덴트 깊이를 줄이고 코드 가독성을 높였습니다. 

테스트 코드 실행 결과 화면
![image](https://github.com/user-attachments/assets/a8739562-8033-459c-a434-d8ba8747f8d5)
