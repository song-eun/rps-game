import css from "../css/Button.module.css";

const Button = ({ choice, handleUserChoice }) => {
  const handleBtn = () => {
    handleUserChoice(choice);
  };

  return (
    <div className={css.btnContainer}>
      <button onClick={handleBtn}>{choice}</button>
    </div>
  );
};

export default Button;
