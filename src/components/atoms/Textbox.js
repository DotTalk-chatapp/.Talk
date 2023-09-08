const Textbox = (props) => {
  return (
    <>
      <div className={!props.addCss ? 'mb-3' : props.addCss}>
        {props.label && (
          <label for={props.label} className="form-label">
            {props.label}
          </label>
        )}

        <input
          type={props.type}
          class="form-control"
          id={props.label}
          aria-describedby={props.areaDescribeBy}
        />
        <div id={props.message} className="form-text">
          {props.message}
        </div>
      </div>
    </>
  );
};

export default Textbox;
