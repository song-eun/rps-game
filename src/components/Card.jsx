import paperImg from "../assets/paper.png";
import nullImg from "../assets/questionmark.png";
import rockImg from "../assets/rock.png";
import scissorsImg from "../assets/scissors.png";
import css from "../css/Card.module.css";

const imageMap = {
  보: paperImg,
  가위: scissorsImg,
  바위: rockImg,
};

const Card = ({ player, choice, result }) => {
  const imgSrc = imageMap[choice] || nullImg;

  const compuerResult = () => {
    if (result === "이겼습니다.") return "졌습니다.";
    else if (result === "졌습니다.") return "이겼습니다.";
    else return result;
  };

  return (
    <div className={`${css[player]} ${css.card}`}>
      <span>{player === "user" ? "사용자" : "상대선수"}</span>
      <img src={imgSrc} alt="choice" />
      {player === "computer" ? compuerResult() : result}
    </div>
  );
};

export default Card;
