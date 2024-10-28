# javascript-racingcar-precourse
&nbsp;

&nbsp;
# 📌 구현할 기능 목록
&nbsp;

&nbsp;
### [1] carName 입력 받기
await MissionUtils.Console.readLineAsync()

&nbsp;

&nbsp;
### [2] validate for carName
1. 빈값일 경우 ERROR
2. 에러값(null, undefined)일 경우 ERROR
3. 영어이름(a-z A-Z)과 콤마(,)만 입력 가능하며 이외 값은 ERROR
4. 콤마(,)가 먼저 입력될 경우 ERROR 
5. 마지막 자리에 콤마(,)가 입력될 경우 ERROR
6. 5글자 이상 넘어가는 이름이 포함되어 있다면 ERROR



&nbsp;

&nbsp;
### [3] tryNumber 입력받기
await MissionUtils.Console.readLineAsync()


&nbsp;

&nbsp;
### [4] validate for tryNumber
1. 빈값일 경우 ERROR
2. 에러값(NaN) or 숫자가 아닌 값일 경우 ERROR
3. 과도하게 큰숫자 방지 (숫자 20 초과 시 ERROR)





&nbsp;

&nbsp;
### [5] Racing Game
1. carNames 배열을 객체배열로 만들어주기
2. tryNumber에 따라 진행될 for문 만들어주기
3. 만들어진 객채배열을 map함수에 넣기
4. MissionUtils.Random.pickNumberInRange(0, 9) 사용하여 랜덤숫자 뽑기
5. if문으로 뽑은 랜덤숫자가 4보다 크면 해당 객체배열이 forward 할 수 있도록 forwardNum값 1 증가시키기
6. carNames 변수에 값 racingGame 결과 Update.
7. 매시도마다 결과값 dashe 형태로 Console.print 출력.



&nbsp;

&nbsp;
### [6] 우승자 가리기
1. 객체배열에서 가장 높은 forwardNum을 가진 값이 무엇인지 찾기 (Math.max)
2. 가장 높은 forwardNum값을 가진 객체배열만 필터링 (Array.prototype.filter( ))
3. 필터링된 객체배열에서 carName만 추출하여 배열 만들면서 이름만 추출하기.
4. 최종 우승자 Console.print 출력.




