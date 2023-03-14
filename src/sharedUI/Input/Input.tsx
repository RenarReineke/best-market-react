import classNames from "classnames";
import style from "./Input.module.scss";

export enum InputStyle {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  quaternary = "quaternary",
  search = "search",
}

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "onBlur"
> & {
  inputStyle?: InputStyle;
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  inputStyle = InputStyle.search,
  value,
  type = "text",
  onChange,
  onBlur = (e) => console.log(e),
  className,
  disabled = false,
  ...props
}) => {
  const classes = classNames(
    style.input,
    `${style[`input-${inputStyle}`]}`,
    disabled && `${style["input-disabled"]}`,
    className && `${style[className]}`
  );

  return (
    <input
      {...props}
      className={classes}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(e.target.value)}
    />
  );
};

export default Input;
