import style from "./Button.module.scss";
import classNames from "classnames";

export enum ButtonStyle {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  quaternary = "quaternary",
}

type ButtonProps = React.PropsWithChildren<{
  buttonStyle?: ButtonStyle;
  width?: string;
  height?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  buttonStyle = ButtonStyle.primary,
  className = "",
  loading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  const classes = classNames(
    `${style.button}`,
    `${style[`button-${buttonStyle}`]}`,
    (loading || disabled) && `${style["button-disabled"]}`,
    className
  );
  return (
    <button
      {...props}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
