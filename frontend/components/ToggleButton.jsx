const ToggleButton = ({onClick, isIn}) => {
    const buttonStyle = {
      backgroundColor: isIn ? "red" : "green",
      height: "15vh",
      width: "55vh",
    };
  
    return (
      <>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={onClick}
          style={buttonStyle}
        >
          <h6>Current status: {isIn ? "I'm in" : "I'm out"}</h6>
          <h2>{isIn ? "I'm not!" : "I am!"}</h2>
        </button>
      </>
    );
  };
  
  export default ToggleButton;
  