const Card = (props) => {
  return (
    <div className="card" style={{ width: props.width, height: props.height }}>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
