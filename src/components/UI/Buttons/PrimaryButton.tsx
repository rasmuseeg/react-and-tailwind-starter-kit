import React from "react";

const PrimaryButton : React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
  > = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default PrimaryButton;