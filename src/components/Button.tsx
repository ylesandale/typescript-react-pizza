import React from "react";
import classNames from "classnames";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  outline?: boolean;
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  outline,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
