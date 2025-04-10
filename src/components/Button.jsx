import paperImg from "../assets/paper.png";
import rockImg from "../assets/rock.png";
import scissorsImg from "../assets/scissors.png";
import css from "../css/Button.module.css";

const choiceMap = {
  바위: { label: "rock", image: rockImg },
  보: { label: "paper", image: paperImg },
  가위: { label: "scissors", image: scissorsImg },
};

const Button = ({ choice, handleUserChoice }) => {
  const handleBtn = () => {
    handleUserChoice(choice);
  };

  return (
    <button className={css[choiceMap[choice].label]} onClick={handleBtn}>
      <img src={choiceMap[choice].image} alt={choice} />
      {choice}
    </button>
  );
};

export default Button;
