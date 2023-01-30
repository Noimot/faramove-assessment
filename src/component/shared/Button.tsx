import React from "react";

interface IButton {
  onClick?: () => void;
  btnText: string;
  className: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = ({
  onClick,
  btnText,
  className,
  disabled,
  btnType,
}: IButton) => {
  return (
    <button
      type={btnType}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
