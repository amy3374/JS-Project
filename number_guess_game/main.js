//랜덤 번호 지정
//우저가 번호를 입력, 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호라면, Down!!
// 랜덤번호 > 유저번호라면, Up!!
// Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다.(더 이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려줌, 기회는 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면 알려줌, 기회는 깎지 않는다.

let randomNum = 0;
let playButton = document.getElementById("play-button");
let input = document.getElementById("user-input");
let result = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chances = 5;
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
input.addEventListener("focus", function () {
  input.value = "";
});

function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", randomNum);
}

function play() {
  let userValue = input.value;

  if (userValue < 1 || userValue > 100) {
    result.textContent = "1과 100사이의 값을 입력해주세요";
    return;
  }
  if (history.includes(userValue)) {
    result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 Chance : ${chances}번`;

  if (userValue < randomNum) {
    result.textContent = "UP!!";
  } else if (userValue > randomNum) {
    result.textContent = "DOWN!!";
  } else {
    result.textContent = "정답입니다~~!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  pickRandomNum();
  input.value = "";
  chances = 5;
  chanceArea.textContent = `남은 Chance : ${chances}번`;
  result.textContent = "결과값이 여기 나옵니다";
  gameOver = false;
  playButton.disabled = false;
  history = [];
}

pickRandomNum();
