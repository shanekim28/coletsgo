import ToggleButtonCSS from './ToggleButton.module.css';

const ToggleButton = ({ onClick, isIn }) => {
  const buttonStyle = {
    backgroundColor: isIn ? "#DF6B53" : "#FFFFFF",
  };

  return (
    <>
    <button
        type="button"
        className={ToggleButtonCSS.btn}
        onClick={onClick}
        style={buttonStyle}
      >
        {isIn ? "I'M NOT!" : "I AM!"}
      </button>
    </>
  );
};

export default ToggleButton;
