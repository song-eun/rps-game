import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import css from "./css/App.module.css";

function App() {
  const choices = ["가위", "바위", "보"];
  const choicesMap = { 가위: 0, 바위: 1, 보: 2 };

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleUserChoice = (choice) => {
    if (isPlaying) return;
    setIsPlaying(true);
    setUserChoice(choice);

    setTimeout(() => {
      const randomIdx = Math.floor(Math.random() * choices.length);
      setComputerChoice(choices[randomIdx]);
      setResult(getResult(choice, choices[randomIdx]));
      setIsPlaying(false);
    }, 300);
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

  const compuerResult = () => {
    if (result === "이겼습니다.") return "졌습니다.";
    else if (result === "졌습니다.") return "이겼습니다.";
    else return result;
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <>
      <div className={css.container}>
        <h1>가위바위보 게임</h1>
        <main>
          <Card player="user" choice={userChoice} result={result} />
          <div className={css.controls}>
            {choices.map((choice) => (
              <Button
                key={choice}
                handleUserChoice={handleUserChoice}
                choice={choice}
                disabled={isPlaying}
              />
            ))}
            <button className={css.resetBtn} onClick={resetGame}>
              다시하기
            </button>
          </div>
          <Card
            player="computer"
            choice={computerChoice}
            result={compuerResult()}
          />
        </main>
        <p>
          버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요. <br />
          컴퓨터는 랜덤으로 선택합니다.
        </p>
      </div>
    </>
  );
}

export default App;
