const Button = (props) => {
  return (
    <button
      type={!props.type ? 'button' : props.type}
      className={`btn ${!props.color ? 'btn-primary' : props.color} ms-2`}
    >
      {props.text}
    </button>
  );
};

export default Button;
