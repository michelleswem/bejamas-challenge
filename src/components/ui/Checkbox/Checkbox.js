import './Checkbox.scss';

export const Checkbox = (props) => {
  return (
    <div className="checkbox-container">
      <input
        onChange={props.onChange}
        type="checkbox"
        className="checkbox-container__checkbox"
        {...props.input}
      />
      <label htmlFor={props.id} className="checkbox-container__label">
        {props.label}
      </label>
    </div>
  );
};
