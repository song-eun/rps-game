import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";
import css from "./css/App.module.css";

function App() {
  const choices = ["가위", "바위", "보"];
  // const choices = ["scissors", "rock", "paper"];
  const choicesMap = { 가위: 0, 바위: 1, 보: 2 };
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("선택하세요");

  const handleUserChoice = (choice) => {
    const randomIdx = Math.floor(Math.random() * choices.length);

    setUserChoice(choice);
    setComputerChoice(choices[randomIdx]);
    setResult(getResult(choice, choices[randomIdx]));
  };

  const getResult = (user, computer) => {
    const diff = choicesMap[user] - choicesMap[computer];
    if (diff === 0) {
      return "무승부";
    } else if (diff === -1 || diff === 2) {
      return "졌습니다.";
    } else {
      return "이겼습니다.";
    }
  };

  return (
    <div className={css.container}>
      <Card player="user" choice={userChoice} result={result} />
      <div className="controls">
        {choices.map((choice) => (
          <Button
            key={choice}
            handleUserChoice={handleUserChoice}
            choice={choice}
          />
        ))}
      </div>
      <Card player="computer" choice={computerChoice} result={result} />
    </div>
  );
}

export default App;
