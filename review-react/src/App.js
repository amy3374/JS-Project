import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
// 1.박스 2개(타이틀, 사진, 결과)
// 2. 가위바위보 버튼이 있음
// 3. 내가 선택한 것이 화면에 나타남
// 4. 컴퓨터는 랜덤으로  아이템이 선택됨
// 5. 3,4의 결과로 승패를 따짐
// 6. 승패 결과에 따라 테두리 색이 바뀜(이기면-초록, 지면-빨강, 비기면-겸정)
const choice = {
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3E9ATquMKmszzbtW64Yd5DM1pAxpQBnLxeA&usqp=CAU",
  },
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn0a-XFLmaXDfm1TnZupEWtCZf1fMumJqOA&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNXZb65fk__6f-tpWJz72HRpPU9JAyraxtg&usqp=CAU",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState();
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };
  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} />
        <Box title="computer" />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
