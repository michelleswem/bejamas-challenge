import "./Button.scss";
export const Button = (props) => {
  const classes = "btn " + props.className;

  return (
    <button onClick={props.onClick} className={classes}>
      Add to cart
    </button>
  );
};
