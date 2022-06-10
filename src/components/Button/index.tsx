import s from "./style.module.scss";
import {FC} from "react";

interface ButtonProps {
  onClick?: () => void;
  children: string;
  type?: "submit" | "reset" | undefined;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({onClick, children, type, disabled}) => {
  const handleClick = () => {
    onClick && onClick();
  }
  return (
    <button
      onClick={handleClick}
      className={s.button}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>

  )
}