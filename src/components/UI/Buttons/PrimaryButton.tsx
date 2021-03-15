import React from "react";

const PrimaryButton: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...props }) => (
  <button className={`${className}`} {...props}>{children}</button>
);

export default PrimaryButton;