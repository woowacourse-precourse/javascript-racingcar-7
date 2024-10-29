# javascript-racingcar-precourse

## 요구사항 분석하기

### 01. Read Input

1. **Read user**
   - user의 이름을 입력받는다.
2. **Read round**
   - 몇 round를 진행할 지 숫자로 입력 받는다.

### 02. Check Input

1. **Check user**
   - 이름의 길이가 1-5가 아닐 때 → **Error**
   - user의 이름이 중복되어 입력됐을 때 → **Error**
2. **Check round**
   - round를 숫자로 바꿀 수 없을 때 → **Error**
   - roundNum이 자연수가 아닐 때 → **Error**

### 03. Game Setting

1. **Set user list**
   - “,”로 구분하여 userList를 생성한다.
   - 앞뒤 공백을 제거한다.
   - 에러를 체크한다.
2. **Set round number**
   - 숫자로 변환하여 roundNum을 생성한다.
   - 에러를 체크한다.

### 04. Play Racing Game

1. **Set game data**
   - user의 이름과, 각 라운드 별 진행 상태를 저장할 수 있는 데이터를 세팅한다.
   - name과 distance를 키로 가지는 객체들의 리스트 형태이며, distance는 0으로 초기화한다.
   - **userData** → {name : “유저의 이름”, distance: 0} 형식의 객체
   - **roundData** → userData를 모아 놓은 리스트
2. **Play round game**
   - 라운드 게임을 진행합니다. roundData를 돌며 랜덤으로 distance값을 업데이트한다.
3. **Get winner**
   - 가장 많이 움직인 우승자를 찾고, 우승자 리스트를 반환한다.

### 05. Print Output

- 첫 줄에 공백 출력한다.
- “실행 결과” 텍스트 출력한다.

1. **Print round game data**
   - `{name} : ---` 형식으로 출력한다.
   - 각 라운드 끝에 공백 출력한다.
2. **Print winner**
   - 우승자 리스트를 “, ”로 join하여 출력한다.
   - `최종 우승자 : {name}, {name}` 형식으로 출력한다.

### 06. Test

1. **Error test**
   - 에러가 잘 발생하는지 테스트한다.
2. **Feature test**
   - 각 기능이 잘 작동되는지 테스트한다.
