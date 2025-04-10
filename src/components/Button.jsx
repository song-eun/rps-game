import paperImg from "../assets/paper.png";
import rockImg from "../assets/rock.png";
import scissorsImg from "../assets/scissors.png";
import css from "../css/Button.module.css";

const imageMap = {
  보: paperImg,
  가위: scissorsImg,
  바위: rockImg,
};

const Button = ({ choice, handleUserChoice }) => {
  const handleBtn = () => {
    handleUserChoice(choice);
  };

  const labelMap = {
    바위: "rock",
    보: "paper",
    가위: "scissors",
  };

  return (
    <button className={css[labelMap[choice]]} onClick={handleBtn}>
      <img src={imageMap[choice]} alt={choice} />
      {choice}
    </button>
  );
};

export default Button;
