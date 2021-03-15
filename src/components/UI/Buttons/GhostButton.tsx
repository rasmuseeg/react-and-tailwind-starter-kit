import React from "react";

const GhostButton : React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
  > = ({ children, className, ...props }) => (
  <button className={`border border-transparent ${className}`} {...props}>{children}</button>
);

export default GhostButton;